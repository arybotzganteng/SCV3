let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*

*Nama* : NoelDaniel
*Umur* : 14
*Agama* : Kristen
*Kelas* : Private
*Status* : Private

*SOSIAL MEDIA*

*instagran* : Private
*Facebook* : Private
*Chanel Youtube* : none
*Gmail* : noeldaniel400@gmail.com
*Github* : https://github.com/arybotzganteng

_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), ext, 'Recoded By Raditya', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoary', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoary|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
