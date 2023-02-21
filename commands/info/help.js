module.exports = {
    name: "help",
    category: "info",
    description: "Shows all commands",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const { EmbedBuilder } = require('discord.js')

        let helpmsg = ""
        let currentcategory = ""

        const embed = new EmbedBuilder()
            .setTitle("All Commands")
            .setColor(0x0099FF)
            .setThumbnail('https://cdn.discordapp.com/avatars/1076234325940523099/87762e183647054454931ac39f7eb5fb.webp')
            .addFields({name: `Charlie's Note`, value: `Thank you for actually using me! (seriously an ungodly amount of time was spent programming me). Use all of the following commands by placing a 'c' before them (spaces don't matter :D).`})

        // helpmsg += `Thank you for actually using me (seriously luqman spent way too much time programming this piece of shit). Use all of the following commands by putting a 'c' before them. \n`

        for(const command of client.commands){
            const currentcmd = command[1]

            if(currentcmd.category == 'dev') continue

            if(currentcategory == ``){
                currentcategory = currentcmd.category
            }

            if(currentcategory != currentcmd.category){
                embed.addFields({name: `${currentcategory} commands`, value: helpmsg})
                currentcategory = currentcmd.category
                helpmsg = ``
            }

            helpmsg += `**${currentcmd.name}** - `
            
            if(!currentcmd.description){
                helpmsg+=`No description available for this command (tell luqman he sucks ass at programming)\n`
            }else{
                helpmsg += `${currentcmd.description}\n`
            }
        }

        // for(const command of client.commands){
        //     const currentcmd = command[1]

        //     if(currentcmd.category == 'dev') continue

        //     if(currentcategory != currentcmd.category){
        //         currentcategory = currentcmd.category
        //         helpmsg += `***__${currentcmd.category} commands__***\n`
        //     }

        //     helpmsg += `**${currentcmd.name}** - `
            
        //     if(!currentcmd.description){
        //         helpmsg+=`No description available for this command (tell luqman he sucks ass at programming)\n`
        //     }else{
        //         helpmsg += `${currentcmd.description}\n`
        //     }
        // }

        message.reply({embeds: [embed]})
    }
}