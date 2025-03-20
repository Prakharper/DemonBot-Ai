let handler = async (m, { conn, usedPrefix, isOwner }) => {
let txt_owner = "> _*`𝐁ỗnjỗựr, mi nombre es 𝕯𝐄𝐌Ọ𝐍 𝐁Ọ𝐓 un aliado en el 𝗶𝗻𝗳𝗶𝗲𝗿𝗻ø 𝗱𝗲 𝗹𝗮𝘀 𝗹𝘂𝗻𝗮𝘀 𝗱𝗲 𝘀𝗮𝗻𝗴𝗿𝗲. ¿Necesitas usarme? Contacta a mi creador: `*_\n\n *Prak Harper* : Wa.me/573143681055"
await conn.sendFile(m.chat, "https://i.ibb.co/mJcV846/file.jpg", 'thumbnail.jpg', txt_owner, m, null, rcanal)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler