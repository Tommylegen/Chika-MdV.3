/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/62895635773387
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Masukin Apikey', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['62895635773387']
global.premium = ['62895635773387']
global.ownernomer = '62895635773387'
global.ownername = 'Raja-Xzy'
global.botname = '© Raja-XBod'
global.footer = '© Raja-Xzy'
global.ig = 'https://instagram.com/riychdwayne'
global.email = 'tommylegends2@gmail.com'
global.region = 'Indonesia'
global.sc = 'https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw'
global.myweb = 'https://api-riychdwayne.herokuap.com'
global.packname = 'Raja-Xzy'
global.author = '© R-Txzy'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
