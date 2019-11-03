// Load up the discord.js library and config file variables
const discord = require('discord.js');
const { prefix, token } = require('./config.json');
const gsClient = require('./googleSheets/googleSheetsClient.js')
const bot = new discord.Client();
const sheetsClient = new gsClient.GoogleSheetsClient();

bot.on('ready', () => {
	console.log(`DKP bot has started in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
	bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on('guildCreate', guild => {
	// This event triggers when the bot joins a guild.
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on('guildDelete', guild => {
	// this event triggers when the bot is removed from a guild.
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
	bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on('message', async message => {
	if (message.author.bot || message.content.indexOf(prefix) !== 0) { return; }

	// Parsing the message "!purchase bigsyke Viskag" , we'll get the following:
	// command = purchase, args = ["Bigsyke", "Viskag"]
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === 'standings') {

	}
});

bot.login(token);