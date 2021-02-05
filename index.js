const electron = require ('electron');
const url = require ('url');
const path = require ('path');


try {
    require('electron-reloader')(module)
  } catch (_) {}


const {app, BrowserWindow}= electron;

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
    autoHideMenuBar: true,
      width: 1000,
      height: 560,
      webPreferences: {
        nodeIntegration: true,
      },
    })
  
    // and load the index.html of the app.
    win.loadFile('mainWindow.html')
  }
  
  app.whenReady().then(createWindow)