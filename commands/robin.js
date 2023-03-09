const { SlashCommandBuilder } = require('discord.js');
const { openai_token } = require('../config.json');
const { Configuration, OpenAIApi } = require("openai");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('robin')
		.setDescription('Give you some answers!')
		.addStringOption(option =>
			option
				.setName('question')
				.setDescription('The question')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply();
		answer = 'hmmm';
		const configuration = new Configuration({
			apiKey: openai_token,
		});
		const openai = new OpenAIApi(configuration);

		const prompt = interaction.options.getString('question');

		const GPT35TurboMessage = [
			{ role: "system", content: `You are nico robin from one piece.` },
			{ role: "user", content: prompt },
		  ];




		let GPT35Turbo = async (message) => {
			const response = await openai.createChatCompletion({
			  model: "gpt-3.5-turbo",
			  messages: message,
			});
		  
			interaction.editReply(response.data.choices[0].message.content);
		  };


		await GPT35Turbo(GPT35TurboMessage);


	},
};