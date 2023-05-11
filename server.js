const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'na1.node.sneakygames.net',
  username: process.env.user,
  password: process.env.pass, 
  port: '30028', 
  auth: 'microsoft'
})
bot.on('kicked', console.log)
bot.on('error', console.log)