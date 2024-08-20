// popup.js

document.addEventListener('DOMContentLoaded', () => {
    const openProdigyButton = document.getElementById('openProdigy');
    const copyCodeButton = document.getElementById('copyCode');
    const copyBookmarkButton = document.getElementById('copyBookmark');
    const discordButton = document.getElementById('discordButton');
    const youtubeButton = document.getElementById('youtubeButton');
  
    // Open Prodigy URL
    openProdigyButton.addEventListener('click', () => {
      window.open('https://math.prodigygame.com/?launcher=true&code=*');
    });
  
    // Copy code to clipboard
    copyCodeButton.addEventListener('click', () => {
      navigator.clipboard.writeText(document.getElementById('code-box').textContent);
      alert('Code copied to clipboard!');
    });
  
    // Copy bookmark code
    copyBookmarkButton.addEventListener('click', () => {
      navigator.clipboard.writeText(document.getElementById('bookmark-code').textContent);
      alert('Bookmark code copied to clipboard!');
    });
  
    // Open Discord
    discordButton.addEventListener('click', () => {
      window.open('https://discord.gg/VAkGbXKwhY');
    });
  
    // Open YouTube
    youtubeButton.addEventListener('click', () => {
      window.open('https://www.youtube.com/@PXIFusionX');
    });
  
    // Make the popup movable
    const popupContainer = document.getElementById('popup-container');
    let isDragging = false;
    let offsetX, offsetY;
  
    popupContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - popupContainer.getBoundingClientRect().left;
      offsetY = e.clientY - popupContainer.getBoundingClientRect().top;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        popupContainer.style.left = `${e.clientX - offsetX}px`;
        popupContainer.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
  