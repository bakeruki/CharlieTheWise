module.exports = {
    name: "color",
    category: "role",
    description: "Lets you choose the color of your name",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const GREEN = '1076581301961900109'
        const RED = '1076581337173086228'
        const BLUE = '1076581366545776690'
        const PURPLE = '1076581399865335808'
        const PINK = '1076583430722179163'
        const YELLOW = '1076593377161781348'
        const ORANGE = '1076593424507093013'

        const colors = [GREEN, RED, BLUE, PURPLE, PINK, ORANGE, YELLOW]
        
        const { ActionRowBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
        
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('green')
            .setLabel('Green')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('red')
            .setLabel('Red')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('blue')
            .setLabel('Blue')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('purple')
            .setLabel('Purple')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('pink')
            .setLabel('Pink')
            .setStyle(ButtonStyle.Secondary),
        )
        const row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('orange')
            .setLabel('Orange')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('yellow')
            .setLabel('Yellow')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('done')
            .setLabel('Done')
            .setStyle(ButtonStyle.Success)
        )

        const color_embed = new EmbedBuilder()
        .setColor(0x2ebf06)
        .setDescription('Select your desired color!')

        const m = await message.reply({embeds: [color_embed] , components: [row, row2], ephemeral: true })

        const collector = m.createMessageComponentCollector({time: 30000})

        collector.on('collect', async i => {
            if(i.user.id != message.author.id){
                return(i.reply({content: `Please call the command yourself to get roles!`, ephemeral: true}))
            }
            if(i.customId === 'done'){
                i.reply({content: 'Enjoy your new color!', ephemeral: true})
                collector.stop('done')
                return
            }
            removeAllRoles(i.member, colors)
            if(i.customId === 'red'){
                const role = message.guild.roles.cache.get(RED)
                if(i.member.roles.cache.has(RED)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(RED)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === 'green'){
                const role = message.guild.roles.cache.get(GREEN)
                if(i.member.roles.cache.has(GREEN)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(GREEN)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === 'blue'){
                const role = message.guild.roles.cache.get(BLUE)
                if(i.member.roles.cache.has(BLUE)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(BLUE)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === 'purple'){
                const role = message.guild.roles.cache.get(PURPLE)
                if(i.member.roles.cache.has(PURPLE)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(PURPLE)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === 'pink'){
                const role = message.guild.roles.cache.get(PINK)
                if(i.member.roles.cache.has(PINK)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(PINK)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === 'yellow'){
                const role = message.guild.roles.cache.get(YELLOW)
                if(i.member.roles.cache.has(YELLOW)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(YELLOW)
                    i.reply({content: `The role ${role} was successfully added!`, ephemeral: true })
                }
            }else if(i.customId === 'orange'){
                const role = message.guild.roles.cache.get(ORANGE)
                if(i.member.roles.cache.has(ORANGE)){
                    i.reply({content: `You already have the role ${role}!`, ephemeral: true })
                }else{
                    i.member.roles.add(ORANGE)
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

function removeAllRoles(member, colors){
    for(let i = 0; i < colors.length; i++){
        if(member.roles.cache.has(colors[i])){
            member.roles.remove(colors[i])
        }
    }
}