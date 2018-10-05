const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client()
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("Ping Received");
  response.sendStatus(200);
});
app.listen(3000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
bot.on("ready", async () => {
console.log(`${bot.user.username} is updated in ${bot.guilds.size} servers and ${bot.users.size} users`);
//bot.user.setStatus('dnd');
  setInterval(() => {
   bot.user.setActivity(`Estoy en ${bot.guilds.size} servidores | *ayuda`, { type: 'PLAYING' });
   setTimeout(() => {
     bot.user.setActivity(`I'm in ${bot.guilds.size} servers | *help`, { type: 'PLAYING' });
   }, 30000);
 }, 60000);
});
bot.on("guildMemberAdd", function(member) {
  let reglas = member.guild.channels.find("name", "🚫reglas")
  member.guild.channels.find("name", "👋bienvenido").sendMessage(member.toString() + `  Bienvenido a  :milky_way:**Galactic Community**:milky_way: por favor acepta las ${reglas} para tener acceso al resto de canales`);
  
  member.addRole(member.guild.roles.find("name", "New Member"));
});

  bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.splice(1);
                     
  if (message.content === "Hola") {
		        message.react("👋")
     console.log(`${message.author.username} ha dicho hola`)
   }    
//if(message.content.startsWith(prefix + 'destroy')){
        //message.channel.delete("1");
  //}
if(message.content.startsWith(prefix + 'clear')){
    const deleteCount = (args[0]);
const deleteNum = +deleteCount + +1
    if (!deleteCount) return message.reply("Porfavor,especifica el numero de mensajes que quieres eliminar");
    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.bulkDelete(deleteNum).catch(error => message.reply(`Sorry couldn't delete messages because of: ${error}`));
message.channel.send("just deleted `"+ deleteNum +"` for you!")
.then(function (message) {
   message.delete()
});
}
    if (message.content.startsWith(prefix + "setdnd")){
const jjj = args.join(" ");
const nameisdnd = bot.channels.get('496422171644788776')
nameisdnd.setName(jjj)
message.channel.send(nameisdnd.name)
      console.log(`${message.author.username} has set dnd to ${jjj}`)
}
      if(message.content.startsWith(prefix + 'say')){
    const sayMessage = args.join(" ");
    message.channel.send(sayMessage);
      message.delete().catch(O_o=>{});
        console.log(`I have said ${sayMessage}`)
}
    
if(message.content.startsWith(prefix + 'ping')){
 let ping = Math.floor(message.client.ping);

 message.channel.send(":ping_pong: Pong!")
 .then(m => {
      const embed = new Discord.RichEmbed()
.setImage('https://cdn.discordapp.com/attachments/439712863733415946/439769744468606978/loading.gif')
      .setDescription(`Ping Messages \`${m.createdTimestamp - message.createdTimestamp} ms\`\nPing DiscordAPI: \`${ping} ms\``)
  .setFooter(`AssuMix | ${message.createdAt}`, "https://cdn.discordapp.com/avatars/358699155662700554/4da061003fd895e123dee103cbcaec0e.png?size=2048")
      .setColor("#47bec6");

      m.edit({embed});

console.log(`${ping}ms`)
});
}
    if(message.content.startsWith(prefix + 'choose')){
      const choose1 = (args[1]);
      const choose2 = (args[0]);
if(!choose1) return message.channel.send("TIENES QUE DECIDIR");
if(!choose2) return message.channel.send("TIENES QUE DECIDIR");
   var result = Math.floor((Math.random() * 2) + 1);
      if (result == 1) {
        message.channel.send(` I would choose: ${choose1}!`)
console.log(`I chose ${choose1} over ${choose2}`)
      } else if (result == 2) {
        message.channel.send(`Yo eligo: ${choose2}!`)
        console.log(`I chose ${choose2} over ${choose1}`)
}
    }
      if(message.content.startsWith(prefix + 'invite')){
    const embed = new Discord.RichEmbed()
    .setTitle("click here to invite me")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=461263507200016397&permissions=8&scope=bot")
    message.channel.send(embed)
console.log('The user: ' + message.author.username + ' has invite me in ' + message.guild.name + ' in channel #' + message.channel.name)
    }
    //https://discordapp.com/oauth2/authorize?client_id=461263507200016397&permissions=8&scope=bot
      if(message.content.startsWith(prefix + "suggest")){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
             console.log('The user: ' + message.author.username + ' has used *suggestion in ' + message.guild.name + ' in channel #' + message.channel.name)
              const content = message.content.split(' ').slice(1);
              const args = content.join(' ');
             if(!args) return message.channel.send("what do you want to suggest!?!")
            let channel = bot.channels.get("476943907184181278")
            const embed = new Discord.RichEmbed ()
             .setAuthor (message.author.username)
             .addField ("suggestion:", args)
           
       .setColor(randomColor);
             channel.send(embed)
             message.delete()
             message.channel.send(`:mailbox_with_mail: ${message.author.username} you suggestion has been reported! :mailbox_with_mail:`)
            }
     if (message.content.startsWith(prefix + "flip")) {
      const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
         const embed = new Discord.RichEmbed()
              .setImage("https://cdn.glitch.com/18273d7a-dad8-4858-b2a4-9430a409e305%2FHEADS.PNG?1525351625788")
              .setTitle("HEADS!")
         .setColor(randomColor)
              .setFooter(`cookie table | ${message.createdAt}`, "https://cdn.discordapp.com/avatars/418232048210149388/69e9c25ba52ba9cbbd810599f4bc6518.png");
           message.channel.send(embed)
        console.log(`heads`)
    	} else if (result == 2) {
         const embed = new Discord.RichEmbed()
              .setImage("https://cdn.glitch.com/18273d7a-dad8-4858-b2a4-9430a409e305%2FTAIL.PNG?1525351626470")
              .setTitle("TAILS!!")
         .setColor(randomColor)
               .setFooter(`AssuMix | ${message.createdAt}`, "https://cdn.discordapp.com/avatars/358699155662700554/4da061003fd895e123dee103cbcaec0e.png?size=2048");
           message.channel.send(embed)
         console.log(`tails`)
    	}
}
if (message.content === '<@358699155662700554>') {
const namednd = bot.channels.get('496421380821352457')
const nameisdnd = bot.channels.get('496422171644788776')
message.channel.send(`${nameisdnd.name}`)
namednd.send(`you have been pinged in ${message.guild.name} by ${message.author.username}`)
  console.log(`you have been pinged in ${message.guild.name} by ${message.author.username}`)
}
if(message.content.startsWith(prefix + 'help')){
  console.log(`help has been used in ${message.guild.name} by ${message.author.username}`)
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("List of commands")
.setURL("https://asumix.glitch.me/")
.addField('*ping', 'show you the ping of the bot')
.addField('*invite', 'with this command you can invite meto your server!')
.addField('*flip', 'throw a coin!')
.addField('*warn + mention + reason', 'warn a user')
.addField('*say', 'the bot say whatever you want')
.addField('*suggest', 'makes a suggestion for the bot!')
.addField('*choose', 'the bot choose between two options')
.addField('*kick + mention + reason' , 'use this command to kick the mention user')
.addField('*ban + mention + reason', 'use this command to ban the mention user')
.setColor(randomColor);
message.author.send(embed);
}
  if (message.content.startsWith(prefix + "help")){
           message.channel.send('the commands have been sent to you DM :mailbox_with_mail:')
                 }
if(message.content.startsWith(prefix + 'ayuda')){
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("Lista de comandos")
.setURL("https://asumix.glitch.me/")
.addField('*ping', 'te muestra el ping del bot')
.addField('*invite', 'con este comando me puedes invitar a tu server!')
.addField('*flip', 'lanza una moneda!')
.addField('*warn + mencion + razon', 'advierte a un usuario')
.addField('*say', 'el bot dice lo que quieras')
.addField('*suggest', 'hace una sugerencia para el bot!')
.addField('*choose', 'el bot elige entre 2 opciones')
.addField('*kick + mención + razón' , 'usa este comando para kickear al usuario mencionado')
.addField('*ban + mención + razón' , 'usa este comando para banear al usuario mencionado')
.setColor(randomColor);
message.author.send(embed);
}
  if (message.content.startsWith(prefix + "ayuda")){
           message.channel.send('la lista de comandos ha sido enviada a tu DM :mailbox_with_mail:')
                 }
     if(message.content.startsWith(prefix + 'warn')){
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("WHAT! Can't find that user!");
           if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
     if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be warned!");
             let reason = args.join(" ").slice(22);
       if (!reason) return message.channel.send(`What do you want to warn, ${kUser} for?`);
       kUser.send(`Listen, ${kUser} you have been warned in, ${message.guild} and by, ${message.author.username} for, ${reason}`)
       message.channel.send(`${kUser} has been warned for ${reason} by ${message.author.username}`)
     }
    if(message.content.startsWith(prefix + 'kick')){
          
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("WHAT! Can't find that user!");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
     if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
       let reason = args.join(" ").slice(22);
       kUser.send(`${kUser} you have been kicked in, ${message.guild} and by, ${message.author.username} for, ${reason}`)
    message.guild.member(kUser).kick(kUser)
.catch(error => message.reply(`Sorry couldn't kick ${kUser.user.username} because of: ${error}`));
    message.channel.send(`just kicked ${kUser.user.username} for ${reason}`);
      console.log(`just kicked ${kUser.user.username} for ${reason}`)
    }
    if(message.content.startsWith(prefix + 'ban')){
          
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("WHAT! Can't find that user!");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!");
     if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned!");
       let reason = args.join(" ").slice(22);
       kUser.send(`${kUser} you have been banned in, ${message.guild} and by, ${message.author.username} for, ${reason}`)
    message.guild.member(kUser).ban(kUser)
.catch(error => message.reply(`Lo siento, no puedo banear ${kUser.user.username} porque: ${error}`));
    message.channel.send(`just banned ${kUser.user.username} for ${reason}`);
      console.log(`just banned ${kUser.user.username} for ${reason}`)
    }
   
	  if(message.content.startsWith(prefix + 'avatar')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("Avatar:")
    .setImage(user.displayAvatarURL)
    .setColor("#20e510")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'rip')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("RIP")
    .setImage("https://cdn.pixabay.com/photo/2013/07/13/12/32/tombstone-159792_960_720.png")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'facepalm')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("Facepalm")
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495781447609614400/faceplam.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'reference')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("Entendi esa referencia")
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495782969697370123/entendiesareferencia.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'laugh')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("que chistoso tu chiste")
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495783944780775424/risa.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'dance')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("🎶🎶🎶")
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495783965991501825/platano.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'lag')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("HAHAHAHAAHA")
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495785563933376515/lag.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'kill')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} mato a ${user.username}`)
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495786885235605524/kill.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'sad')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} esta triste`)
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495786628338417694/sad.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'punch')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} golpeo a ${user.username}`)
    .setImage("https://cdn.discordapp.com/attachments/476898910342873099/495789026545238016/punch.gif")
    message.channel.send(embed)
  }
	  if(message.content.startsWith(prefix + 'esay')){          
    const content = message.content.split(' ').slice(1);
    const SayMessage = content.join(' ');
             if(!SayMessage) return message.channel.send("que quieres que dija")
            const embed = new Discord.RichEmbed ()
             .setDescription (SayMessage)
             .setColor("#20e510")
             message.channel.send(embed)
             message.delete().catch(O_o=>{});
            }
	  if(message.content.startsWith(prefix + "bugrepport")){
  const randomColor = "#20e510".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
             console.log('The user: ' + message.author.username + ' has used *bugrepport in ' + message.guild.name + ' in channel #' + message.channel.name)
              const content = message.content.split(' ').slice(1);
              const args = content.join(' ');
             if(!args) return message.channel.send("que quieres reportar?")
            let channel = bot.channels.get("497194372966645773")
            const embed = new Discord.RichEmbed ()
             .setAuthor (message.author.username)
             .addField ("Bug:", args)
	     .setFooter(`AssuMix | ${message.createdAt}`, "https://cdn.discordapp.com/avatars/358699155662700554/4da061003fd895e123dee103cbcaec0e.png?size=2048")
           
       .setColor(randomColor);
             channel.send(embed)
             message.delete()
             message.channel.send(`:mailbox_with_mail: ${message.author.username} tu bug a sido reportado! :mailbox_with_mail:`)
            }
	  if(message.content.startsWith(prefix + 'destroy')){
          if(message.member.hasPermission("ADMINISTRATOR")) return message.channel.delete("1");
  }
  });
bot.login(process.env.TOKEN);
