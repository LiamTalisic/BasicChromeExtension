
document.getElementById("popup").addEventListener("click", () => {
    chrome.windows.getCurrent((win) => {
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            width: 400,
            height: 550,
            top: win.top + (win.height - 550) / 2,
            left: win.left + (win.width - 400) / 2
        });
    });
});
