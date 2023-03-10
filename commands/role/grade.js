module.exports = {
    name: "grade",
    category: "role",
    description: "Lets you choose the grade that you are in",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const GRADE9 = '1076938262188400741'
        const GRADE10 = '1076938302650863816'
        const GRADE11 = '1075952912682983535'
        const GRADE12 = '1075952953892032604'
        
        const { ActionRowBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
        
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('9')
            .setLabel('Grade 9')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('10')
            .setLabel('Grade 10')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('11')
            .setLabel('Grade 11')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('12')
            .setLabel('Grade 12')
            .setStyle(ButtonStyle.Secondary)
        )
        const row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('done')
            .setLabel('Done')
            .setStyle(ButtonStyle.Success)
        )

        const roles_embed = new EmbedBuilder()
        .setColor(0x2ebf06)
        .setDescription('Select your grade level!')

        const m = await message.reply({embeds: [roles_embed] , components: [row, row2], ephemeral: true })

        const collector = m.createMessageComponentCollector({time: 30000})

        collector.on('collect', async i => {
            if(i.user.id != message.author.id){
                return(i.reply({content: `Please call the command yourself to get roles!`, ephemeral: true}))
            }

            if(i.customId === 'done'){
                i.reply({content: 'Enjoy your new role!', ephemeral: true})
                collector.stop('done')
                return
            }
            
            if(i.customId === '9'){
                const role = message.guild.roles.cache.get(GRADE9)
                if(i.member.roles.cache.has(GRADE9)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(GRADE9)
                    i.member.roles.remove(GRADE10)
                    i.member.roles.remove(GRADE11)
                    i.member.roles.remove(GRADE12)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === '10'){
                const role = message.guild.roles.cache.get(GRADE10)
                if(i.member.roles.cache.has(GRADE10)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(GRADE10)
                    i.member.roles.remove(GRADE9)
                    i.member.roles.remove(GRADE11)
                    i.member.roles.remove(GRADE12)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === '11'){
                const role = message.guild.roles.cache.get(GRADE11)
                if(i.member.roles.cache.has(GRADE11)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(GRADE11)
                    i.member.roles.remove(GRADE9)
                    i.member.roles.remove(GRADE10)
                    i.member.roles.remove(GRADE12)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === '12'){
                const role = message.guild.roles.cache.get(GRADE12)
                if(i.member.roles.cache.has(GRADE12)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(GRADE12)
                    i.member.roles.remove(GRADE9)
                    i.member.roles.remove(GRADE10)
                    i.member.roles.remove(GRADE11)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
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