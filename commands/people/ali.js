module.exports = {
    name: "ali",
    category: "people",
    description: "Gives a description of Ali",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply(`Ali is potentially more interesting than Sean.`)
    }
}