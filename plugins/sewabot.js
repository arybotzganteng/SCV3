let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 2 Bulan
├ 1 Bulan
├ Trial 3 Hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Maxis ( *Topup* ): 60147751029
Hotlink: 60177945983
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Permanen', description: "RM15.00\nSewa bot tanpa batasan waktu.", rowId:".owner"},
        {title: '2 Bulan', description: "RM10.00\nSewa bot selama 2 Bulan.", rowId:".owner"},
        {title: '1 Bulan', description: "RM5.00\nSewa bot selama 1 Bulan.", rowId:".owner"},
        {title: 'Trial', description: "GRATIS\nBot gratis 3 Hari.", rowId:".owner"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
