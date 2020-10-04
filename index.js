const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'NzM0OTc2Njk1OTY2MjM2NzQz.XxZjvQ.Pa9aOQLY2kL5BlzVeIR2ILdlEHs';

const PREFIX = '%';

Bot.on('ready', () => {
    console.log('This bot is online!');
})

Bot.on('message', msg => {
    if (msg.content.toLowerCase() === "hello") {
        msg.reply('Hello Friend! How are you doing? :)');
    } else if (msg.content.toLowerCase() === "thanks") {
        msg.reply('No worries.I am always here to cherish you up!');
    } else if (msg.content.toLowerCase() === "can you help me") {
        msg.reply('Sorry I am patching up myself.But still try my best to help you!');
    } else if (msg.content.toLowerCase() === "bye") {
        msg.reply('Bye. Hope to see you soon. Will be waiting for you as always.... Keep smiling no matter what happens in life. :)');
    }
})

Bot.login(token);