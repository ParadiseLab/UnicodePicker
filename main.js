const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow () {
  // Cree la fenetre du navigateur.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
      
    }
  })

  // et charger le fichier index.html de l'application.
  win.loadFile('index.html')

  // Ouvre les DevTools.
  //win.webContents.openDevTools()
  win.setMenuBarVisibility(false)
  win.on('will-resize', (e) => {
    //prevent resizing even if resizable property is true.
        e.preventDefault();
    });
  win.setIcon("./build/icon.png")
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (win === null) {
    createWindow()
  }
})

