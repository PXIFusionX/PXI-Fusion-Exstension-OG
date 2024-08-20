chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
      if (details.url.startsWith("https://math.prodigygame.com/?launcher=true&code=")) {
        chrome.scripting.executeScript({
          target: {tabId: details.tabId},
          func: () => {
            const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";
            fetch(scriptUrl)
              .then(response => response.text())
              .then(code => eval(code))
              .catch(error => console.error("Failed to load the script:", error));
          }
        });
      }
      return {};
    },
    {urls: ["https://math.prodigygame.com/*"]},
    ["blocking"]
  );
  
  chrome.runtime.onInstalled.addListener(() => {
    fetch("https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI", {
      method: "POST",
      body: JSON.stringify({
        content: "A new user has installed PXI Fusion!",
        embeds: [{ 
          title: "Installation",
          description: `Timestamp: ${new Date().toISOString()}`
        }]
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  });
  