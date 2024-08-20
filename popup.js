document.getElementById('openProdigy').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
  });
  
  document.getElementById('copyCode').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('code-box').innerText)
      .then(() => alert('Code copied to clipboard!'))
      .catch(err => console.error('Failed to copy code:', err));
  });
  
  document.getElementById('copyBookmark').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('bookmark-code').innerText)
      .then(() => alert('Bookmark code copied to clipboard!'))
      .catch(err => console.error('Failed to copy bookmark code:', err));
  });
  
  document.getElementById('discordButton').addEventListener('click', () => {
    window.open('https://discord.gg/VAkGbXKwhY', '_blank');
  });
  
  document.getElementById('youtubeButton').addEventListener('click', () => {
    window.open('https://www.youtube.com/@PXIFusionX', '_blank');
  });
  
  document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.getElementById('toggleTheme').textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
  });
  