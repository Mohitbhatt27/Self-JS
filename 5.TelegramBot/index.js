const axios = require('axios');
const { Telegraf } = require('telegraf');

//http://t.me/LetsCodeInJS_bot

const bot = new Telegraf('5814981587:AAENDUyWUEf50-pu8of93wEPpDyNQoWbE3s');

//bot.start is a method that takes a callback function as an argument.

bot.start((ctx) =>
  ctx.reply('Welcome to coding in JS! This bot is created by Mohit')
);

//ctx is the context object that contains all the information about the message that was sent to the bot.

bot.command('oldschool', (ctx) => ctx.reply('Hello'));

bot.on('sticker', (ctx) => ctx.reply('Take my ❤️'));
bot.on('Emoji', (ctx) => ctx.reply('🤪'));

bot.command('LinkedList', async (ctx) => {
  let response = await axios.get(
    'https://raw.githubusercontent.com/Mohitbhatt27/DSA-Relevel-Practise/master/Linked%20Lists/1.%20LL.js'
  );
  console.log('done');
  return ctx.reply(response.data);
});

bot.command('help', (ctx) => ctx.reply('We dont need your help! xD'));

bot.launch();
