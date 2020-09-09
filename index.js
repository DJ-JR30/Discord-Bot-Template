const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { token, prefix } = require('./config.json');
const fs = require("fs");
const colors = require("colors");

const cheerio = require('cheerio');

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, `.green + `${client.user.username} `.blue + `is now online!`.green);
    console.log(`Prefix is: ` + `${prefix}`.green);
    console.log("      ");

    client.user.setPresence({
        status: "online",
        game: {
            name: "NSFW Software",
            type: "STREAMING"
        }
    }); 
});

client.on("message", async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.login(token);