//
//

console.log("Please wait while the title bar is created!");

function createTitlebar() {
    // get the first element loaded by the window page
    let firstElement = document.body.children[0];
    // creates a new div (html element)
    let beforeTheFirst = document.createElement("div");

    // adds a style to the titlebar div, it can be styled however you like
    // but it is mandatory to have "-webkit-app-region: drag;" to be able to move the window
    beforeTheFirst.style.cssText += "background-color:RGBA(0,0,0,0.5); width: 100%; height: 2vh; position: fixed; top:0; -webkit-app-region: drag; -webkit-user-select: none;";

    // inserts the new styled div before the first element of the loaded body
    document.body.insertBefore(beforeTheFirst, firstElement);
}

// it is mandatory to put a timer before executing the function "createTitlebar()"
// because the function needs to be executed after loading the body of the page
setTimeout(createTitlebar, 2000);