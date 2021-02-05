const electron = require ('electron');
const url = require ('url');
const path = require ('path');


const {app, BrowserWindow}= electron;

let mainWndow;


// Liste for app to be ready
app.on('ready', function(){
    // Create new window
    mainWndow = new BrowserWindow({});
    // Load html into window

});