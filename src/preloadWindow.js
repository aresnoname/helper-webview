//
//

// remove margin and body padding after page loads
window.onload = ()=> {
    document.body.style.cssText += "margin:0; padding:0;";
}

// toggles the titlebar on and off
function toggleTitlebar(key) {
    if (key[0] == "q" && key[1] == true) {
        if (document.getElementById("electron-titlebar") == null) {
            
             // get the first element loaded by the window page
            let firstElement = document.body.children[0];
            // creates a new div (html element)
            let beforeTheFirst = document.createElement("div");

            // insert a id in titlebar div
            beforeTheFirst.id = "electron-titlebar";

            // adds a style to the titlebar div, it can be styled however you like
            // but it is mandatory to have "-webkit-app-region: drag;" to be able to move the window
            beforeTheFirst.style.cssText += "background-color:RGBA(0,0,0,0.5); width: 100%; height: 20px; position: fixed; top:0; -webkit-app-region: drag; -webkit-user-select: none;";

            // inserts the new styled div before the first element of the loaded body
            document.body.insertBefore(beforeTheFirst, firstElement);
            
        } else {
            // remove this titlebar
            document.getElementById("electron-titlebar").remove();
        }
    }
}

// monitors the keys that are pressed
document.addEventListener("keydown", (keyPressed) => {
    let key = [];
    key.push(keyPressed.key, keyPressed.ctrlKey);
    toggleTitlebar(key);
});