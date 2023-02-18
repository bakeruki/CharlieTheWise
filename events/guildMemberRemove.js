module.exports = {
    name: "guildMemberRemove",
    run: async (bot, member) => {
        const welcomeChannelId = "1076243806271311933"
        member.guild.channels.cache.get(welcomeChannelId).send( `${member.displayName} just left the server :(`)
    }
}