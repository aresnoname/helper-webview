//
//
const { globalShortcut, app } = require("electron");
const { mobileWindow, windowSizes } = require("./windows");

// function to record shortcuts called by main 
const registerShortcuts = (winDesktop) =>{
    // variable that receives information from the mobile window when it is created
    let winMobile;

    // opens and closes the focus window developer tools
    function toggleDevTools() {
        if (winDesktop != null && winDesktop.isFocused() == true) {
            winDesktop.webContents.toggleDevTools();
        } else if (winMobile != null && winMobile.isFocused() == true) {
            winMobile.webContents.toggleDevTools();
        }
    }

    // opens and closes the mobile window
    function toggleMobileWindow() {
        if (winMobile != null && winMobile.isDestroyed() == false) {
            winMobile.destroy();
        } else {
            winMobile = mobileWindow();

            winMobile.webContents.enableDeviceEmulation({
                screenPosition: "mobile",
                screenSize: {
                    width: windowSizes.mobileWidth,
                    height: windowSizes.mobileHeight
                },
                viewPosition: {
                    x: 0,
                    y: 0
                },
                viewSize: {
                    width: windowSizes.mobileWidth,
                    height: windowSizes.mobileHeight
                },
                deviceScaleFactor: 0,
                scale: 1
            });

            let width = parseInt(windowSizes.mobileWidth);
            let height = parseInt(windowSizes.mobileHeight);

            winMobile.setSize(width, height);
            
            return winMobile;
        }
    }

    // makes the window in focus in full screen mode
    function fullScreen() {

        if (winDesktop != null && winDesktop.isFocused() == true) {
            if (winDesktop.isFullScreen() == true) {
                winDesktop.setFullScreen(false);
            } else {
                winDesktop.setFullScreen(true);
            }
        }else if (winMobile != null && winMobile.isFocused() == true) {
            if (winMobile.isFullScreen() == true) {
                winMobile.setFullScreen(false);
            } else {
                winMobile.setFullScreen(true);
            }
        }
    }

    // close the application
    function appQuit() {
        app.quit();
    }

    // register the shortcuts
    globalShortcut.register("Ctrl+1", toggleDevTools);
    globalShortcut.register("Ctrl+2", toggleMobileWindow);
    globalShortcut.register("Ctrl+3", fullScreen);
    globalShortcut.register("Ctrl+4", appQuit);
}

module.exports = {
    registerShortcuts: registerShortcuts
}