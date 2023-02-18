module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const welcomeChannelId = "1076243806271311933"
        member.guild.channels.cache.get(welcomeChannelId).send( `<@${member.id}> joined the server. Welcome!`)
    }
}