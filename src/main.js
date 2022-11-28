//
//
const { app } = require("electron");
const { desktopWindow, mobileWindow, windowSizes } = require("./windows.js");
const { registerShortcuts } = require("./shortcuts.js");

function App() {
    // calls the main window
    const winDesktop = desktopWindow();
    // calls the function to register the sortcuts in the app
    registerShortcuts(winDesktop);
    // customizing the size of the main window after opening
    let desktopWidth = parseInt(windowSizes.desktopWidth);
    let desktopHeight = parseInt(windowSizes.desktopHeight);
    winDesktop.setSize(desktopWidth, desktopHeight);
}

// starts the application
app.whenReady().then(()=> {
    // starts the main window and register the shortcuts
    App();

    app.on("activate", ()=> {
        if (BrowserWindow.getAllWindows().length === 0) {
            desktopWindow()
        }
    });

}).catch((error) => {
    console.log(error);
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })