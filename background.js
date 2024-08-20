// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('PXI Fusion Extension Installed');
  
    // Webhook URL and payload
    const webhookUrl = 'https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI';
    const payload = {
      content: 'New user has added the PXI Fusion extension!',
      embeds: [
        {
          title: 'Extension Installation',
          description: `A new user has installed the PXI Fusion extension.`,
          fields: [
            {
              name: 'Timestamp',
              value: new Date().toISOString(),
              inline: true
            }
          ]
        }
      ]
    };
  
    // Send the webhook
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log('Webhook sent:', data))
    .catch(error => console.error('Error sending webhook:', error));
  });
  