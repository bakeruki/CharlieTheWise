module.exports = {
    name: "stressrelief",
    category: "memes",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const gifs = ['https://tenor.com/view/samoyed-dog-profile-picture-ear-flap-cute-dog-gif-19962655', 
        'https://tenor.com/view/off-work-run-penguin-gif-22409750', 
        'https://tenor.com/view/cli%C3%A7-cli%C3%A7monkey-monkey-sleepy-sleepy-monkey-gif-24594700', 
        'https://tenor.com/view/cat-wet-shower-bath-water-pouring-gif-17140437', 
        'https://tenor.com/view/dancing-duck-gif-24672717']

        const rand = Math.round(Math.random() * gifs.length)
        message.reply(`Here's a cute gif to cheer you up :) \n` + gifs[rand])
    }
}