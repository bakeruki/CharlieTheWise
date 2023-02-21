module.exports = {
    name: "liedetect",
    category: "meme",
    description: "Ping someone with this command to find out how honest they are!",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const mention = getUserFromMention(args[0], client)
        if(!mention) return message.reply("You must ping someone to use this command!")
        if(!args[0]) return message.reply("You must ping someone to use this command!")

        const honesty = Math.round(Math.random() * 100)
        const comments = [
            "Wow! You're such a liar! Don't trust anything they say.",
            "Really... well, at least you're slightly honest",
            "I'll take it... but you should be more honest in the future.",
            "Not bad not bad... could be improved but.. not bad..",
            "Being 100% honest when dealing with emotional beings such as humans is a bad thing. Go you!",
            "Goody two shoes detected!"
        ]

        let chosenComment

        if(honesty >= 0 && honesty < 10){
            chosenComment = comments[0]
        }else if(honesty >= 10 && honesty < 40){
            chosenComment = comments[1]
        }else if(honesty >= 40 && honesty < 60){
            chosenComment = comments[2]
        }else if(honesty >= 60 && honesty < 80){
            chosenComment = comments[3]
        }else if(honesty >= 80 && honesty < 95){
            chosenComment = comments[4]
        }else if(honesty >= 95){
            chosenComment = comments[5]
        }
        
        message.reply(`${args[0]}, <@${message.author.id}> just found out that you're ${honesty}% honest. ${chosenComment}`)
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