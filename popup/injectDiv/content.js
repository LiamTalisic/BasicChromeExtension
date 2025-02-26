(function () {
    const popupId = "extension-popup";

    // Check if the popup already exists
    let existingPopup = document.getElementById(popupId);
    if (existingPopup) {
        existingPopup.remove(); // Remove popup if it exists (toggle behavior)
        return;
    }

    // Create popup container
    let popup = document.createElement("div");
    popup.id = popupId;
    popup.style.position = "fixed";
    popup.style.width = "350px";
    popup.style.height = "200px";
    popup.style.top = "50px";
    popup.style.right = "20px";
    popup.style.background = "white";
    popup.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
    popup.style.padding = "20px";
    popup.style.borderRadius = "8px";
    popup.style.zIndex = "10000";
    popup.style.fontFamily = "Arial, sans-serif";

    popup.innerHTML = `
        <h2 style="margin: 0 0 10px;">Popup</h2>
        <p>This is an injected floating popup!</p>
        <button id="close-popup" style="background: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Close</button>
    `;

    document.body.appendChild(popup);

    // Close button functionality
    document.getElementById("close-popup").addEventListener("click", () => {
        popup.remove();
    });
})();
