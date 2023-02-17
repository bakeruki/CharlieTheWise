const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents:[
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "MessageContent"
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
// client.on("ready", () => {
//     
// })

// client.on("messageCreate", (message) => {
//     if(message.content == "sean"){
//         message.reply("he pretty weird")
//     }
//     if(message.content == "jannah"){
//         message.reply("shes the one that named me!")
//     }
//     if(message.content == "luqman"){
//         message.reply("insert funny joke about luqman here")
//     }
// })

// const welcomeChannelId = "1076243806271311933"

// client.on("guildMemberAdd", async (member) => {
//     member.guild.channels.cache.get(welcomeChannelId).send( `<@${member.id}> joined the server.`)
// })

client.login(process.env.TOKEN)