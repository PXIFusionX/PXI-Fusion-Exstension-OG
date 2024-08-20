document.getElementById('openProdigy').onclick = function() {
    window.open('https://math.prodigygame.com/?launcher=true&code=*', '_blank');
};

document.getElementById('copyConsoleCode').onclick = function() {
    const code = document.getElementById('consoleCode').value;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
};

document.getElementById('copyBookmarkCode').onclick = function() {
    const code = document.getElementById('bookmarkCode').value;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
};

document.getElementById('discordButton').onclick = function() {
    window.open('https://discord.gg/VAkGbXKwhY', '_blank');
};

document.getElementById('youtubeButton').onclick = function() {
    window.open('https://www.youtube.com/@PXIFusionX', '_blank');
};

document.getElementById('toggleMode').onclick = function() {
    const popup = document.getElementById('popup');
    if (popup.classList.contains('light-mode')) {
        popup.classList.remove('light-mode');
        popup.classList.add('dark-mode');
    } else {
        popup.classList.remove('dark-mode');
        popup.classList.add('light-mode');
    }
};

// Draggable Popup
dragElement(document.getElementById('popup'));

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
