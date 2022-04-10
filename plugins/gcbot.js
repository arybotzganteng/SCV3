let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
┌─〔 GRUB BOT 〕
│ 
├➥ *Link grub bot by R-Txzy*
│•https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y
│•https://chat.whatsapp.com/FrNk70HmmFQ1ey5yeYuC80
├➥ *Yang ada Bot Boleh*
│   *masukin ke grub✅*
├➥ *Admin Selalu Benar✅*
├➥ *Jangan spam karna*
│   *owner grub hp nya kentang✅*
├➥ *Sebelum Bergabung Baca*
│   *Rules Terlebih dahulu❗*
│
├➥*©GRUP-BOTZ 2021*
└─「 *BOT* 」

`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), ext, 'Mwhehe', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['Gruboffical']
handler.tags = ['main']
handler.command = /^(gruboffical)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
