module.exports = {
    name: "nsfw",
    category: "role",
    description: "Gives you access to Ali's Special Channel (NOT safe for work, there is very cursed stuff in here, be warned!)",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const { ActionRowBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
        
        const accessRole = '1077080395146874912'

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('yes')
            .setLabel('Yes')
            .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
            .setCustomId('no')
            .setLabel('No')
            .setStyle(ButtonStyle.Primary),
        )

        const confirm_embed = new EmbedBuilder()
        .setColor(0xA61E07)
        .setDescription('Are you absolutely sure? There is very cursed (18+) content in here! Enter at your own risk.')

        const m = await message.reply({embeds: [confirm_embed] , components: [row], ephemeral: true })

        const collector = m.createMessageComponentCollector({time: 30000})

        collector.on('collect', async i => {
            if(i.user.id != message.author.id){
                return(i.reply({content: `Please call the command yourself!`, ephemeral: true}))
            }
            
            if(i.customId === 'yes'){
                const role = message.guild.roles.cache.get(accessRole)
                if(i.member.roles.cache.has(accessRole)){
                    i.reply({content: `You already have access!`, ephemeral: true })
                    collector.stop('done')
                }else{
                    i.member.roles.add(accessRole)
                    i.reply({content: `You now have access to <#1077080200988336128>. God help you... (if you clicked this by mistake, please run the command again and select No)`, ephemeral: true })
                    collector.stop('done')
                }
            }else if(i.customId === 'no'){
                const role = message.guild.roles.cache.get(accessRole)
                if(i.member.roles.cache.has(accessRole)){
                    i.member.roles.remove(accessRole)
                    i.reply({content: `You've been saved... You no longer have access to the channel`, ephemeral: true })
                    collector.stop('done')
                }else{
                    i.reply({content: `You already don't have access!`, ephemeral: true })
                    collector.stop('done')
                }
            }
        })

        collector.on('end', (content, reason) => {
            m.delete()
            if(reason && reason === 'done') return
            message.reply({content: 'Timed out. Run the command again to be given roles.', ephemeral: true})
        })
    }
}