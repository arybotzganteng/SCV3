let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

•Allah swt
•My ortu
•Nurutomo
•Adiwajshing
•Ariffb
•Rteam1
•AlyaaXzy
•AryBotz (Bot)
•Ary (Owner)
•BOTCAHX (Tio)
•Raditya
•Xteam
•Penyedia Layanan API
•Orang-orang yang Berdonasi
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh

