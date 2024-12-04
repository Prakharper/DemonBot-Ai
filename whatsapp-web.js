```javascript
const { Client } = require('whatsapp-web.js');
const client = new Client();
client.on('message', message => {
if (message.body.startsWith('.s')) {
// Aquí iría la lógica para crear y enviar un sticker
message.reply('¡Sticker creado! 🎉');
}
});
client.initialize();
```
