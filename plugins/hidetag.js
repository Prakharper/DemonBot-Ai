/*import MessageType from '@whiskeysockets/baileys'
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, participants }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
const msg = conn.cMod(m.chat,
generateWAMessageFromContent(m.chat, {
[c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
text: c || ''
}
}, {
userJid: conn.user.id
}),
text || q.text, conn.user.jid, { mentions: users }
)
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['n <mensaje>']
handler.tags = ['grupo']
handler.command = ['hidetag', 'n', 'notify'] 
handler.group = true
handler.admin = true

export default handler*/

import * as fs from 'fs'
const handler = async (m, { conn, text, participants, args }) => {
const users = participants.map((u) => conn.decodeJid(u.id))
const quoted = m.quoted || m;
const mime = (quoted.msg || quoted)?.mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const defaultText = "Holaa"
const htextos = quoted.text || m.text || text || defaultText
if (args.length > 0) text = args.join(" ")
if (!isMedia) {
return await conn.sendMessage(m.chat, { text: htextos, mentions: users }, { quoted: m })
}
const media = await quoted.download?.();
const mediaOptions = {
imageMessage: { image: media, caption: htextos },
videoMessage: { video: media, mimetype: 'video/mp4', caption: htextos },
audioMessage: { audio: media, mimetype: 'audio/mpeg', fileName: 'hidetag.mp3' },
stickerMessage: { sticker: media }
}

const messageType = quoted.mtype
if (mediaOptions[messageType]) {
await conn.sendMessage(m.chat, { ...mediaOptions[messageType], mentions: users }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { text: htextos, mentions: users }, { quoted: m })
}}

handler.command = /^(hidetag|n|notify)$/i
//handler.group = true
//handler.admin = true
export default handler
