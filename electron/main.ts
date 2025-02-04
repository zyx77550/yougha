import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Configuration Supabase
const supabase = createClient(
  'https://your-project-url.supabase.co',
  'your-anon-key'
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

  // Gestion des événements IPC pour Supabase
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