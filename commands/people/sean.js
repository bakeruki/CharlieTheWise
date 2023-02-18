module.exports = {
    name: "sean",
    category: "people",
    description: "Gives a description of Sean",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply('Sean is a very interesting individual.')
    }
}