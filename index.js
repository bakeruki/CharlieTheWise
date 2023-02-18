const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents:[
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "MessageContent",
        "GuildMessageReactions"
    ]
})

let bot = {
    client,
    prefix: "c",
    owners: ["391976550620200960"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadCommands(bot, false)
client.loadEvents(bot, false)

module.exports = bot

// client.on("guildMemberAdd", async (member) => {
//     member.guild.channels.cache.get(welcomeChannelId).send( `<@${member.id}> joined the server.`)
// })

client.login(process.env.TOKEN)