let handler = async (m, { conn, usedPrefix, isOwner }) => {
await m.react('🩸')
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;おWILLZEK;;\nFN:おWILLZEK\nORG:おWILLZEK\nTITLE:\nitem1.TEL;waid=50557865603:50557865603\nitem1.X-ABLabel:おWILLZEK\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おWILLZEK\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おWILLZEK', contacts: [{ vcard }] }}, {quoted: m})
}
handler.customPrefix = /^(@5218261275256|@5218132588591|@5218139760662|@5215659171599)$/i
handler.command = new RegExp
export default handler