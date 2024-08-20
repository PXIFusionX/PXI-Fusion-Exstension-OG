document.getElementById('open-prodigy-btn').addEventListener('click', function() {
    window.open('https://math.prodigygame.com/?launcher=true&code=*', '_blank');
});

document.getElementById('copy-code-btn').addEventListener('click', function() {
    const code = `(function() {
    const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";
    fetch(scriptUrl)
        .then(response => response.text())
        .then(code => {
            eval(code);
        })
        .catch(error => console.error("Failed to load the script:", error));
})();`;
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
    });
});

document.getElementById('copy-bookmark-code-btn').addEventListener('click', function() {
    const code = `javascript:(function() {
    const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";
    fetch(scriptUrl)
        .then(response => response.text())
        .then(code => {
            eval(code);
        })
        .catch(error => console.error("Failed to load the script:", error));
})();`;
    navigator.clipboard.writeText(code).then(() => {
        alert('Bookmark code copied to clipboard!');
    });
});

document.getElementById('discord-icon').addEventListener('click', function() {
    window.open('https://discord.gg/VAkGbXKwhY', '_blank');
});

document.getElementById('youtube-icon').addEventListener('click', function() {
    window.open('https://www.youtube.com/@PXIFusionX', '_blank');
});

document.getElementById('close-btn').addEventListener('click', function() {
    window.close();
});

// Dragging functionality
const popup = document.getElementById('popup-container');
let isDragging = false;
let offsetX, offsetY;

popup.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        popup.style.left = `${e.clientX - offsetX}px`;
        popup.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});
