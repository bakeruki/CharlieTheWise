module.exports = {
    name: "ready",
    run: async (bot) => {
        const {ActivityType} = require('discord.js')
        console.log(`logged in as ${bot.client.user.tag}`)
        bot.client.user.setPresence({ status: 'dnd', activities: [{ name: 'for messages that start with c', type: ActivityType.Watching }]});
    }
}