let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *2 minggu* :      *RM5.00*
╠➥ *1 Bulan* :      *RM10.00*
╠➥ *Permanen* : *RM30*
╠➥ *Owner* :   *RM20*/bln
╠➥ *Nomer Topup Maxis/Hotlink* : 
║    60147751029
╠═〘 PEMBAYARAN 〙 ═
╠➥ *Topup Maxis √*
║➥ *Topup Hotlink √*
╠
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 AryBotz 〙 ═`.trim(), watermark, 'Maxis', '#viaHotlink', 'Topup ', '#viaKredit', m)
}

handler.command = /^sewabot$/i

module.exports = handler
