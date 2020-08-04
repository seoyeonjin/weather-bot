const Discord = require('discord.js');
const { scheduleJob } = require('node-schedule');
const client = new Discord.Client();
const dotenv = requir('dotenv');
dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const everySecond = "* * * * * *";

client.on('message', msg => {
  if (msg.content === 'ping') {
     scheduleJob.scheduleJob(everySecond, function(){msg.reply('Pong!');})
     msg.reply('Pong!');
  }
});

client.login(process.env.token);