module.exports = {
    name: "therapy",
    category: "meme",
    description: "Having a bad day? Talk to me, I'm here to listen :)",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("How was your day on a scale of one to ten?")
        const filter = m => m.author.id == message.author.id
        const collector = message.channel.createMessageCollector({filter, max: 1, time: 15000})
        let rate

        collector.on('collect', m => {
            if(m.author.id === message.author.id){
                rate = m.content
                collector.stop('message collected')
            }
        })

        collector.on('end', collected => {
            console.log(`collected ${collected.size} items`)
            if(collected.size == 0 || !rate) return message.reply("You didn't tell me how your day was :(")
            console.log(rate)

            if(rate){
                if(rate == 0){
                    return message.reply(`Wow.. you had a terrible day. I'm sorry to hear that :( \nConsider using the stress relief command to take some of that weight off your shoulders!`)
                }else if(rate > 0 && rate < 4){
                    return message.reply(`Your day wasn't the best, but there was at least some good in it, right? \nWhatever happened, I'm sure it'll be better tomorrow :)`)
                }else if(rate >= 4 && rate < 6){
                    return message.reply(`Pretty average day, huh? At least nothing bad happened. \nMaybe play some games with someone!`)
                }else if(rate >= 6 && rate < 10){
                    return message.reply(`You had a good day! That's awesome to hear, keep it up :D`)
                }else if(rate == 10){
                    return message.reply(`WOAH! Something amazing must have happened today!`)
                }else{
                    return message.reply(`Invalid response. Please respond with only a number.`)
                }
            }
        })
    }
}