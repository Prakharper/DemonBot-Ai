const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `⇢=͟͟͞͞𝗔𝚟𝚒𝚜𝚘 :  : ${pesan}`;
  let teks = `▭ ㅤ  ꯭꯭𝗥𝗘𝗩𝗜𝗩𝗔𝗡     ̸ ❲ 寶貝 ❳ ₊ 𝗣𝗘Ø𝗡𝗘𝗦
 "\n  ⧼P̼⧽= ${participants.length} ⧼P̼⧽=\n\n ${oi}\n\n╭────────🩸───────𖥔 \n`;
  for (const mem of participants) {
    teks += `│ ❏ᝰ. @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰─┐ • • •   -ˏˋ   ̸ ❲ 寶貝 ❳ ₊ˊˎ-  • • •
        ꒷︶︶꒷︶︶꒷꒦︶○꒷₊˚
         `;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;