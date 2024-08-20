// popup.js

document.getElementById('copyCode').addEventListener('click', () => {
    const code = document.getElementById('code-box').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert('Console code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
});

document.getElementById('copyBookmarkCode').addEventListener('click', () => {
    const bookmarkCode = document.getElementById('bookmark-code').innerText;
    navigator.clipboard.writeText(bookmarkCode).then(() => {
        alert('Bookmark code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy bookmark code: ', err);
    });
});

document.getElementById('openProdigy').addEventListener('click', () => {
    window.open('https://math.prodigygame.com/?launcher=true&code=*', '_blank');
});
