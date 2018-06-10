const electron = require('electron')
const ipc = electron.ipcRenderer 

document.getElementById('auf').addEventListener('click', _ => {
    console.log('auf clicked...')
    ipc.send('ikben-auf')
})

ipc.on('ikben', (evt, ik) => {
    document.getElementById('ik').innerHTML = ik
})