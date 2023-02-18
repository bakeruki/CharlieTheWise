module.exports = {
    name: "cock",
    category: "memes",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const length = Math.round(Math.random() * 10)
        const comments = [
            'Pathetic!',
            'Average I guess..',
            'Amazing!',
            'Nice cock!',
        ]

        var chosenComment

        if(length >= 0 && length <= 3){
            chosenComment = comments[0]
        }else if(length > 3 && length <= 5){
            chosenComment = comments[1]
        }else if(length > 6 && length <= 9){
            chosenComment = comments[2]
        }else if(length === 10){
            chosenComment = comments[3]
        }

        let cock = "8"

        for(var i = 0; i < length; i++){
            cock += "="
        }

        cock += "D"

        if(!args[0]){
            message.reply(`${cock} \nDang, <@${message.author.id}>, your cock is ${length} inches! ${chosenComment}`)
        }else{
            const mention = getUserFromMention(args[0], client)
            if(!mention) return message.reply("Bro, if you're trying to find out someone's cock size, you gotta ping them or else I don't know who you're talking about...")
            message.reply(`${cock} \nDang, <@${mention.id}>, <@${message.author.id}> just found out that your cock is ${length} inches! ${chosenComment}`)
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