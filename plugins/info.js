let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/PanjiGTPS/Panji-Bot
╠➥ Instagram: _panji_gtps
╠➥ YouTube: Panji GTPS
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan Yg Lainnya :)
║
╠═〘 DONASI 〙 ═
╠➥ *DONATE WL DI*
║     *WORLD: A8HC**
╠➥ *Tsel: 0878-6916-4526*
╠➥ *GOPAY: -*
║
║
╠═〘 𝗣𝗔𝗡𝗝𝗜 𝗕𝗢𝗧 𝗕𝗘𝗧𝗔 𝗩0.1 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

