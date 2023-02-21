const Discord = require('discord.js')

module.exports = {
    name: "purge",
    category: "admin",
    description: "Deletes a specified amount of messages in the current channel.",
    permissions: [Discord.PermissionsBitField.Flags.Administrator],
    devOnly: false,
    run: async ({client, message, args}) => {
        if(!args[0]) return message.reply("Please specify how many messages you would like to delete.")

        await message.channel.bulkDelete(args[0])
        message.channel.send(`Successfully deleted ${args[0]} messages in ${message.channel}.`)
    }
}