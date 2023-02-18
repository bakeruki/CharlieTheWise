module.exports = {
    name: "avatar",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        if(args.length === 0){
            message.reply(message.author.avatarURL(true))
        }else{
            const mention = getUserFromMention(args[0], client)
            if(!mention) return message.reply('please mention the user to get their avatar')
            message.reply(mention.displayAvatarURL(true))
        }
    }
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