let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
𝙃𝙖𝙣𝙮𝙖 𝙢𝙚𝙣𝙚𝙧𝙞𝙢𝙖 𝙢𝙖𝙩𝙖 𝙪𝙖𝙣𝙜 𝙢𝙖𝙡𝙖𝙮𝙨𝙞𝙖
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Hotlink*_✅ : 
║│- 60177945983
║│
║│➸ _*Maxis*_✅: 
║│- 60147751029
║│
║│➸ _*OWNER*_
║│- https://wa.me/601155090795?text= Mau SewaBot/BeliBot Bang
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot👤', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
