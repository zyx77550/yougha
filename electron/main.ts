
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Configuration Supabase
const supabase = createClient(
  'https://vbtvubbdccreingqgfqk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZidHZ1YmJkY2NyZWluZ3FnZnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MjgyNTEsImV4cCI6MjA1NDIwNDI1MX0.iHGcCQshSdqty54fU0EcJecUYNoL4n-70vX77cg3HkY'
);

let mainWindow: BrowserWindow | null = null;
let retries = 0;
const MAX_RETRIES = 3;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: process.env.NODE_ENV === 'production'
    },
    show: false
  });

  const loadApp = () => {
    if (process.env.NODE_ENV === 'development') {
      mainWindow?.loadURL('http://localhost:8080').catch((err) => {
        console.error('Erreur de chargement en développement:', err);
        if (retries < MAX_RETRIES) {
          retries++;
          setTimeout(loadApp, 1000);
        }
      });
      mainWindow?.webContents.openDevTools();
    } else {
      mainWindow?.loadFile(path.join(__dirname, '../dist/index.html')).catch((err) => {
        console.error('Erreur de chargement en production:', err);
        if (retries < MAX_RETRIES) {
          retries++;
          setTimeout(loadApp, 1000);
        }
      });
    }
  };

  loadApp();

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error(`Échec du chargement (${errorCode}): ${errorDescription}`);
    if (retries < MAX_RETRIES) {
      retries++;
      setTimeout(loadApp, 1000);
    }
  });

  // IPC Event Handlers pour Supabase
  ipcMain.handle('supabase-query', async (event, { action, data }) => {
    try {
      switch (action) {
        case 'select':
          return await supabase.from(data.table).select();
        case 'insert':
          return await supabase.from(data.table).insert(data.payload);
        case 'update':
          return await supabase.from(data.table).update(data.payload).match(data.match);
        case 'delete':
          return await supabase.from(data.table).delete().match(data.match);
        case 'check-connection':
          return await supabase.from('health_check').select('*').limit(1);
        default:
          throw new Error('Action non supportée');
      }
    } catch (error) {
      console.error('Erreur Supabase:', error);
      throw error;
    }
  });
}

app.whenReady().then(createWindow).catch((err) => {
  console.error('Erreur lors du démarrage:', err);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

process.on('uncaughtException', (error) => {
  console.error('Erreur non capturée:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('Promesse rejetée non gérée:', error);
});
