const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '',
  username: process.env.user,
  password: process.env.pass
  
})