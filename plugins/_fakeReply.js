import fetch from 'node-fetch'

export async function before(m, { conn }) {
let name = '𝕯𝐄𝐌Ọ𝐍 𝐁Ọ𝐓'
let imagenes = ["https://i.ibb.co/JmcS3kv/Sylph.jpg",
"https://i.ibb.co/Cs6Tt9V/Sylph.jpg",
"https://i.ibb.co/JmcS3kv/Sylph.jpg",
"https://i.ibb.co/Cs6Tt9V/Sylph.jpg",
"https://i.ibb.co/JmcS3kv/Sylph.jpg",
"https://i.ibb.co/Cs6Tt9V/Sylph.jpg",
"https://i.ibb.co/JmcS3kv/Sylph.jpg"]

let icono = imagenes[Math.floor(Math.random() * imagenes.length)]


global.rcanal = {
 contextInfo: {
             isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363317263885467@newsletter",
      serverMessageId: 100,
      newsletterName: name,
   }, 
   externalAdReply: {
    showAdAttribution: true, 
    title: botname, 
    body: textbot, 
    mediaUrl: null, 
    description: null, 
    previewType: "PHOTO", 
    thumbnailUrl: icono, 
    sourceUrl: canal, 
    mediaType: 1, 
    renderLargerThumbnail: false }, 
    }, 
    }


 global.fake = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363317263885467@newsletter",
      serverMessageId: 100,
      newsletterName: name,
    },
    },
  }
}