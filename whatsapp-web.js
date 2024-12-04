```javascript
const { Client, MessageMedia } = require('whatsapp-web.js');
const client = new Client();
client.on('message', async message => {
// Verifica si el mensaje comienza con '.s'
if (message.body.startsWith('.s')) {
// Asegúrate de que el mensaje tenga una imagen
if (message.hasMedia) {
const media = await message.downloadMedia(); // Descarga la imagen
// Envía la imagen como sticker
await client.sendMessage(message.from, media, { sendMediaAsSticker: true });
} else {
message.reply('¡Por favor, envía una imagen junto con el comando .s!'); // Respuesta si no hay imagen
}
}
});
client.initialize();
```