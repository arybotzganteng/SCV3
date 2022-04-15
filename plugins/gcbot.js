let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
✧─────[ *Group Official* ]─────✧
*Group Bot Official V2* :
https://chat.whatsapp.com/BCgUSCxQltq8SwcpJe1tDf
✧──────────···──────────✧

✧─────[ *Group Official* ]─────✧
 *Group Bot Whatsappp* ¹ :
https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD
✧──────────···──────────✧
✧─────[ *Group Official* ]─────✧
 *Group Bot Whatsappp* ² : https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB

✧──────────···──────────✧

`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
