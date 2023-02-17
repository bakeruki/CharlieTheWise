const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents:[
        "Guilds",
        "GuildMessages",
        "MessageContent"
    ]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "sean"){
        message.reply("he pretty weird")
    }
    if(message.content == "jannah"){
        message.reply("shes the one that named me!")
    }
    if(message.content == "luqman"){
        message.reply("insert funny joke about luqman here")
    }
})

client.login(process.env.TOKEN)