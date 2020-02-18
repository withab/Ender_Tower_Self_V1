const Discord = require("discord.js")
const client = new Discord.Client()
 
let admin = "418347988092583947"
let prefix = "!"

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//TOWER
//ON/OFF
let isTower = false
client.on("message", message => {
    if(message.author.id == admin && message.content.startsWith(prefix + "tower ")) {
        let args = message.content.split(" ")[1].trim().toUpperCase()
        if(!args) {
            message.react("🔧")
            message.delete()
        } else {
        if(args == "ON") {
            message.react("✅")
            isTower = true
            message.delete(5000)
        } else if(args == "OFF") {
            message.react("❌")
            isTower = false
            message.delete(5000)
        } else {
            message.react("🔧")
            message.delete(5000)
        }
    }
    }
})
let random = (Math.random() * 2000 + 1000)
//TOWER
client.on("message", message => {
    if(message.author.id == "280726849842053120" && message.content.includes("⚡ *Energie restante : ") && isTower && message.mentions.users.first() == client.users.find(u => u.id == admin)) {
        
        setTimeout(() => {
            message.react("🔁")
        }, random)
    }
})



client.login("NDE4MzQ3OTg4MDkyNTgzOTQ3.XkxJOA.OHk0g3bZRd-oEcx6qh8c_Zvk_dg")