const Discord = require('discord.js');
const schedule = require('node-schedule');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const everySecond = "* * * * * *";

client.on('message', msg => {
  if (msg.content === 'ping') {
      schedule.scheduleJob(everySecond, function(){msg.reply('Pong!');})
  }
});

client.login(process.env.token);