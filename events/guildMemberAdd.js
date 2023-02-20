module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const welcomeChannelId = "1076243806271311933"
        member.guild.channels.cache.get(welcomeChannelId).send( `<@${member.id}> joined the server. Welcome! Please use the command 'c grade' in <#1076332274901069885> to give yourself roles!`)
    }
}