module.exports = {
    name: "userinfo",
    category: "info",
    description: "Gives you the info of yourself (no mention) or someone else (with mention)",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        if(args.length === 0){
            const embed = buildEmbed(message.author)
            message.reply({embeds: [embed]})
        }else{
            const mention = getUserFromMention(args[0], client)
            if(!mention) return message.reply('Please mention the user to get their info!')
            const embed = buildEmbed(mention)
            message.reply({embeds: [embed]})
        }
    }
}

function buildEmbed(user){
    const { EmbedBuilder } = require('discord.js')
    const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`User Info for ${user.username}`)
        .setThumbnail(user.avatarURL())
        .addFields(
            {name: `Username`, value: `${user.tag}`},
            {name: 'Created', value: `${user.createdAt.toDateString()}`, inline: true},
            {name: `ID`, value: `${user.id}`, inline: true}
            )
    return embed
}

function getUserFromMention(mention, client) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}