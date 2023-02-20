module.exports = {
    name: "pew",
    category: "role",
    description: "Gives you access to Adrian's project channel. No cursed content, but contains images of firearms.",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const { ActionRowBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
        
        const accessRole = '1077086149341888593'

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
        .setDescription('Are you absolutely sure? There is no cursed content, but there are images of firearms.')

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
                    i.reply({content: `You now have access to <#1076684162943160392> Pew pew!`, ephemeral: true })
                    collector.stop('done')
                }
            }else if(i.customId === 'no'){
                const role = message.guild.roles.cache.get(accessRole)
                if(i.member.roles.cache.has(accessRole)){
                    i.member.roles.remove(accessRole)
                    i.reply({content: `A respectable decision. You no longer have access to the channel.`, ephemeral: true })
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