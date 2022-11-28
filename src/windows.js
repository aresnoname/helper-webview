//
//
const { Browserwindow, BrowserWindow } = require("electron");
const path = require("path");
const config = require("./config");

// takes the sizes defined in the config.js file and exports as a module
const windowSizes = {
    "desktopWidth": config.desktopWidth,
    "desktopHeight": config.desktopHeight,
    "mobileWidth": config.mobileWidth,
    "mobileHeight": config.mobileHeight
}

// create the window and exports it to be customized if necessary
const desktopWindow = ()=> {
    const win = new BrowserWindow({
        width: config.desktopWidth,
        height: config.desktopHeight,
        webPreferences: {
            sandbox: true,
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, "preloadWindow.js")
        },
        alwaysOnTop:true,
        frame: false,
        transparent: false,
        titleBarStyle: "customButtonsOnHover",
        focusable: true, // always leave true
        resizable: true,
        title: "Desktop-Window"

    });

    win.loadURL(config.url);

    win.webContents.enableDeviceEmulation({
        screenPosition: "desktop",
        screenSize: {
            width: config.desktopWidth,
            height: config.desktopHeight
        },
        viewPosition: {
            x: 0,
            y: 0
        },
        viewSize: {
            width: config.desktopWidth,
            height: config.desktopHeight
        },
        deviceScaleFactor: 0,
        scale: 1
    });

    return win;

}

// create the window and exports it to be customized if necessary
const mobileWindow = ()=> {
    const win = new BrowserWindow({
        width: config.desktopWidth,
        height: config.desktopHeight,
        webPreferences: {
            sandbox: true,
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, "preloadWindow.js")
        },
        alwaysOnTop:true,
        frame: false,
        transparent: false,
        titleBarStyle: "customButtonsOnHover",
        focusable: true, // always leave true
        resizable: true,
        title: "Mobile-Window"

    });

    win.loadURL(config.url);

    win.webContents.enableDeviceEmulation({
        screenPosition: "mobile",
        screenSize: {
            width: config.mobileWidth,
            height: config.mobileHeight
        },
        viewPosition: {
            x: 0,
            y: 0
        },
        viewSize: {
            width: config.mobileWidth,
            height: config.mobileHeight
        },
        deviceScaleFactor: 0,
        scale: 1
    });

    return win;
    
}

module.exports = {
    desktopWindow: desktopWindow,
    mobileWindow: mobileWindow,
    windowSizes, windowSizes
}