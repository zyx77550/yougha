
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
const supabase = createClient(
  'https://vbtvubbdccreingqgfqk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZidHZ1YmJkY2NyZWluZ3FnZnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MjgyNTEsImV4cCI6MjA1NDIwNDI1MX0.iHGcCQshSdqty54fU0EcJecUYNoL4n-70vX77cg3HkY'
);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8080');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // IPC Event Handlers for Supabase
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

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
