module.exports = {
    name: "help",
    category: "info",
    description: "Shows all commands",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let helpmsg = ""
        let currentcategory = ""

        helpmsg += `Thank you for actually using me (seriously luqman spent way too much time programming this piece of shit). Use all of the following commands by putting a 'c' before them. \n`

        for(const command of client.commands){
            const currentcmd = command[1]
            if(currentcmd.category == 'dev') continue
            if(currentcategory != currentcmd.category){
                currentcategory = currentcmd.category
                helpmsg += `***__${currentcmd.category} commands__***\n`
            }
            helpmsg += `**${currentcmd.name}** - `
            if(!currentcmd.description){
                helpmsg+=`No description available for this command (tell luqman he sucks ass at programming)\n`
            }else{
                helpmsg += `${currentcmd.description}\n`
            }
        }

        message.reply(helpmsg)
    }
}