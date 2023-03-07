const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('robin')
		.setDescription('Give you some answers!'),
	async execute(interaction) {
		await interaction.reply('Answer!');
	},
};