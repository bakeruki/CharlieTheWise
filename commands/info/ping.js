module.exports = {
    name: "ping",
    category: "info",
    description: "Ping Pong (use to make sure the bot is working. if it doesnt respond with pong, its broken)",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply('pong')
    }
}