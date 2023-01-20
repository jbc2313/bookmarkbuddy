console.log("I'm going to take a look at your bookmarks");

let buttonLink = document.getElementById("linkButton");

function openWorkspace() {
    let url = chrome.runtime.getURL("workspace/workspace.html");
    chrome.tabs.create({ url });
    console.log("clicked button for new tab");
}

buttonLink.addEventListener("click", function () {

    openWorkspace();

})

