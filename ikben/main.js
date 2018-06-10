const electron = require('electron')
const ikben = require('./ikben')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let mainWindow

app.on('ready', _ => {
    //console.log('ready now')
    mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    })

    mainWindow.loadURL(`file://${__dirname}/ikben.html`)

    ikben()

    mainWindow.on('closed', _ => {
        console.log('Closed now')
        mainWindow = null
    })

    ipc.on('ikben-auf', _ => {
        console.log('in ikben-auf')
        ikben(ik =>  {
            mainWindow.webContents.send('ikben', ik)
        })
    })
})


