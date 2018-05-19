const {app,BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');


function demoIt (){
    win = new BrowserWindow({width:400, height:200});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true 
    }));
}
app.on('ready',demoIt);



