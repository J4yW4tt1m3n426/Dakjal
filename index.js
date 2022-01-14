const {
    Client, 
    MessageEmbed
} = require('discord.js');
const bot = new Client;

const token = 'ODY3ODQyMzEzNDA1NzI2ODEw.YPm_Iw.rfQLQ0utf33kPY105pk_B7zMLCA';
var PREFIX = '!';
var version = '1.0.1';
bot.on('ready', () => {
    console.log('Bot sudah online');
});

bot.on('message', message  => {
    let args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0]) {
        case 'ping':
            message.reply('pong!');
            break;
        
                

            case 'info':
                if(!args[1]) {
                    const infoEmbed = new MessageEmbed()
                    .setTitle('BOT Information')
                    .setDescription('Masukan salah satu perintah setelah mengetikan kata info')
                    .addField('author', 'BOT Author Information')
                    .addField('version', 'BOT Version')
                    .addField('bot', 'All Information about BOT')
                    .setFooter('Dakjal ' + version)
                    message.channel.send(infoEmbed);
                    break;
                } else {
                    if (args[1] === 'author') {
                        message.channel.send('Jay Wattimena');
                    break;
                    } else if (args[1] === 'version') {
                        message.channel.send('Version : ' + version);
                        break;

                    }  else if (args[1] === 'bot') {
                        const botInfo = new MessageEmbed()
                        .setTitle('BOT Info')
                        .setDescription('Dakjal adalah BOT yang dibuat untuk melayani member didalam server discord Jay Wattimena')
                        .addField('Author', 'Jay Wattimena', true)
                        .addField('Version', version, true)
                        .setColor('FFF5FD')
                        .setFooter('Dakjal ' + version)
                        message.channel.send(botInfo);
                        break;
                    } else{
                        message.channel.send('Perintah yang anda masukan tidak ditemukan');
                        break;
                    }
                }
                
                case 'help':
                    const helpEmbed = new MessageEmbed()
                    .setTitle('BOT Commands')
                    .addField('PREFIX', PREFIX)
                    .addField('help', 'BOT Commands')
                    .addField('ping', 'Ping BOT')
                    .addField('info', 'BOT Information')
                    .setColor('00EAD3')
                    .setFooter('Dakjal' + version);
                message.channel.send(helpEmbed)
                break;
    }
})

bot.login(token);