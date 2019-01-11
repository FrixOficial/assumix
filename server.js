const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client()
const http = require('http');
const express = require('express');
const fs = require('fs');
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
  let reglas = member.guild.channels.find("name", "『🚫』reglas")
  member.guild.channels.find("name", "『👋』bienvenido").sendMessage(member.toString() + `  Bienvenido a  :milky_way:**Galactic Community**:milky_way: por favor acepta las ${reglas} para tener acceso al resto de canales`);
  
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
        message.channel.send(` Yo eligo: ${choose1}!`)
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
             if(!args) return message.channel.send("Escribe que quieres sugerir")
            let channel = bot.channels.get("476943907184181278")
            const embed = new Discord.RichEmbed ()
             .setAuthor (message.author.username)
             .addField ("suggestion:", args)
           
       .setColor(randomColor);
             channel.send(embed)
             message.delete()
             message.channel.send(`:mailbox_with_mail: ${message.author.username} you suggestion has been reported! :mailbox_with_mail:`)
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
  const randomColor = "#20e510".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const embed = new Discord.RichEmbed()
.setTitle("Lista de comandos")
.addField('*ping', 'Muestra el ping del bot')
.addField('*invite', 'utiliza este comando para invitar al bot')
.addField('*warn + mención + razón', 'Advierte a un usuario')
.addField('*say', 'El bot dice lo que quieras')
.addField('*esay', 'Parecido al *say, pero en un embed :o')
.addField('*suggest', 'hace una sugerencia para el bot')
.addField('*choose', 'el bot eligue entre dos opciones')
.addField('*destroy', 'el bot destruye el canal de texto en el que es escrito este comando (Requiere Administrador)')
.addField('*clear + cantidad', 'borra el numero de mensajes especificado (Requiere Administrar Mensajes)')
.addField('*kick + mención + razón' , 'usa este comando para expulsar a un usuario')
.addField('*ban + mention + reason', 'usa este comando para Banear a un usuario')
.setColor(randomColor);
message.author.send(embed);
}
  if (message.content.startsWith(prefix + "help")){
           message.channel.send('Los comandos han sido enviados a tu DM! :mailbox_with_mail:')
                 }

     if (message.content.startsWith(prefix + "warn")) {
    let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
    let userm = message.mentions.users.first()
      let user = message.guild.member(userm)
       var reason = message.content.split(' ').slice(2).join(' ');
       if (!message.member.hasPermission('KICK_MEMBERS'))
       return message.channel.send(`Este comando requiere el permiso "Expulsar Miembros".`);
       if (!user)
       return message.channel.send('Mencione a alguien para advertir.');
       if (!reason)
       return message.channel.send('Escriba la razón de la advertencia.')
       if (message.content.includes(message.author.id)) return message.channel.send('No puedes advertirte a ti mismo.')

        if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };
    warns[user.id].warns++;
    fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });
const embed = new Discord.RichEmbed()
        .setTitle(':warning: ¡Has sido advertido!')
        .setDescription('Has recibido una advertencia proveniente de **'+message.guild.name+'**.')
        .addField('Razón', `${reason}`)
        .addField('Admin/mod responsable', `${message.author.username}#${message.author.discriminator}`)
        .setColor(0xecd412)
        .setFooter(warns[user.id].warns+'/5')
        .setTimestamp()
        user.send({embed})

        message.channel.send(':white_check_mark:  |  He advertido al usuario __**'+userm.username+'#'+userm.discriminator+'**__\nRazón: **'+reason+'**\nNúmero de Advertencias: '+warns[user.id].warns+'\nModerador responsable: '+message.author.tag)

       if(warns[user.id].warns >= 5){
       user.kick()
        userm.send(':warning:  |  Has sido expulsado de **'+message.guild.name+'.**\n```diff\n-Datos de la expulsión:\nRazón: Has alcanzado las 15 advertencias.```')
         warns[user.id] = {
         warns: 0
         }
       fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });
       }
}
    if(message.content.startsWith(prefix + 'kick')){
          
    let user = message.mentions.users.first();
    let args2 = args.join(' ')
        let razon = args2.split(' ').slice(1).join(' ');

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No tienes el rango requerido.")
        if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien para expulsarlo.').catch(console.error);
        if (!razon) return message.channel.send('Escriba una razon para expulsarlo.\nUso: `kick @username [razon]`');
        if (message.content.includes(message.author.id)) return message.channel.send('No puedes expulsarte a ti mismo.')
        if (!message.guild.member(user).kickable) return message.reply('No puedo expulsar al usuario mencionado. Es posible que no tenga el rango requerido o el usuario es superior a mí.');

        message.delete();
        message.guild.member(user).kick(razon);
        const embed = new Discord.RichEmbed()
        .setTitle(":warning: Usuario Expulsado.")
        .setDescription(`El usuario **${user.username}** fue expulsado del servidor.\n**ID:** ${user.id}`)
        .addField("Razón:", `${razon}`)
        .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
        .setTimestamp()
        .setColor(0xECD132)
        message.channel.send({embed});
        user.send(':warning:  |  Has sido expulsado de **'+message.guild.name+'.**\n```diff\n-Datos de la expulsión:\nRazón: '+razon+'\nADMIN/MOD: '+message.author.username+'#'+message.author.discriminator+'\n```')
    
}
    if(message.content.startsWith(prefix + 'ban')){
         let user = message.mentions.users.first();
    let args2 = args.join(' ')
        let razon = args2.split(' ').slice(1).join(' ');

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('No tienes el rango requerido.');
        if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien para banearlo.').catch(console.error);
        if (!razon) return message.channel.send('Escriba una razón para banearlo.\nUso: `ch!ban @username [razon]`');
        if (message.content.includes(message.author.id)) return message.channel.send('No puedes banearte a ti mismo.')
        if (!message.guild.member(user).bannable) return message.reply('Lo siento, pero no puedo banear al usuario mencionado. Es posible que no tenga el rango requerido o el usuario es superior a mí.');
        
        message.delete();
        message.guild.member(user).ban(razon);
        const embed = new Discord.RichEmbed()
        .setTitle(":no_entry_sign: Usuario Baneado.")
        .setDescription(`El usuario **${user.username}** fue baneado del servidor.\n**ID:** ${user.id}`)
        .addField("Razón:", `${razon}`)
        .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
        .setTimestamp()
        .setColor(0xFA3131)
        message.channel.send({embed});
        user.send(':no_entry_sign:  |  Has sido baneado de **'+message.guild.name+'.**\n```diff\n-Datos del baneo:\nRazón: '+razon+'\nADMIN/MOD: '+message.author.username+'#'+message.author.discriminator+'\n```')

}
   
	  if(message.content.startsWith(prefix + 'avatar')){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle("Avatar:")
    .setImage(user.displayAvatarURL)
    .setColor("#20e510")
    message.channel.send(embed)

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
	  
	  if (message.content.startsWith(prefix + "question")) {   
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No tienes permiso para ejecutar este comando.')
    if(!args.join(' ')) return message.channel.send('Agrege una pregunta para la encuesta.')
  message.delete()
  const embed = new Discord.RichEmbed()
        .setAuthor('Encuesta')
        .setDescription('**'+args.join(' ')+'**')
        .addField('Opción 1', '\u2705 Sí', true)
        .addField('Opción 2', '\u274c No', true)
        .setColor("RANDOM")
        .setTimestamp()

  message.channel.send({embed})
  .then(m => {
          setTimeout(() => {
            m.react("\u2705")
          }, 200);
          setTimeout(() => {
            m.react("\u274c")
          }, 400);
        })
  }
	  if (message.content.startsWith(prefix + "unwarn")) {   
    let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
  let userm = message.mentions.users.first()
  let user = message.guild.member(userm)

  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`Este comando requiere el permiso "Expulsar Miembros".`);
    if (!user) return message.channel.send('Debes mencionar a un usuario que tenga advertencias.')
  if (warns[user.id].warns == 0) return message.channel.send('El usuario no tiene advertencias.')
    warns[user.id].warns--;
  fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
    message.channel.send(':white_check_mark:  |  Le he quitado 1 advertencia al usuario __**'+userm.username+'#'+userm.discriminator+'**__\nNúmero de Advertencias: '+warns[user.id].warns)

  });
}
	  if(message.content.startsWith(prefix + "denunciar")){
  const randomColor = "#20e510".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
             console.log('The user: ' + message.author.username + ' has used *denunciar in ' + message.guild.name + ' in channel #' + message.channel.name)
              const content = message.content.split(' ').slice(1);
              const args = content.join(' ');
             if(!args) return message.channel.send("que quieres reportar?")
            let channel = bot.channels.get("525325694079598593")
            const embed = new Discord.RichEmbed ()
             .setAuthor (message.author.username)
             .addField ("Reporte:", args)
	     .setFooter(`AssuMix | ${message.createdAt}`, "https://cdn.discordapp.com/avatars/358699155662700554/4da061003fd895e123dee103cbcaec0e.png?size=2048")
           
       .setColor(randomColor);
             channel.send(embed)
             message.delete()
            }
	  if(message.content.startsWith(prefix + 'mute')){
              let miembro = message.mentions.members.first();
    let role = message.guild.roles.find("name", "Muted");
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
    let args2 = args.join(' ')
    let razon = args2.split(' ').slice(1).join(' ');

    if(!perms) return message.channel.send("No tienes el rango requerido para usar este comando.");
    if(message.mentions.users.size < 1) return message.reply("Debes mencionar a alguien para silenciarlo.").catch(console.error);
    if (message.content.includes(message.author.id)) return message.channel.send('No puedes silenciarte a ti mismo.')
    if(!role) {
    message.guild.createRole({
  name: 'Muted',
  color: '#747474',
  position: 1
     
}).then(role => {
    var canales = message.guild.channels;
    var role = message.guild.roles.find("name", "Muted")
    var rol = message.guild.roles.get(role.id);

    canales.forEach(k => k.overwritePermissions(rol.id, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        SPEAK: false
    }))
  message.channel.send('Rol **"Muted"** no encontrado. El rol fue creado automáticamente.');
  
  if (!razon) {
  miembro.addRole(role).catch(console.error);
  const embed = new Discord.RichEmbed()
    .setTitle(":mute: Usuario silenciado")
    .setDescription(`El usuario **${miembro.user.username}** fue silenciado.`)
    .addField("Razón:", `Sin razón.`)
    .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
    .setTimestamp()
    .setColor(0xFFB400)
    message.channel.send({embed});
    } else {
  miembro.addRole(role).catch(console.error);
  const embed = new Discord.RichEmbed()
    .setTitle(":mute: Usuario silenciado")
    .setDescription(`El usuario **${miembro.user.username}** fue silenciado.`)
    .addField("Razón:", `${razon}`)
    .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
    .setTimestamp()
    .setColor(0xFFB400)
    message.channel.send({embed});
}
    });
      return;
    }
    if(!razon) {
    message.delete()
    miembro.addRole(role).catch(console.error);
    const embed = new Discord.RichEmbed()
    .setTitle(":mute: Usuario silenciado")
    .setDescription(`El usuario **${miembro.user.username}** fue silenciado.`)
    .addField("Razón:", `Sin Razón.`)
    .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
    .setTimestamp()
    .setColor(0xFFB400)
    message.channel.send({embed});
    } else {

    message.delete()
    miembro.addRole(role).catch(console.error);
    const embed = new Discord.RichEmbed()
    .setTitle(":mute: Usuario silenciado")
    .setDescription(`El usuario **${miembro.user.username}** fue silenciado.`)
    .addField("Razón:", `${razon}`)
    .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
    .setTimestamp()
    .setColor(0xFFB400)
    message.channel.send({embed});

}
}
    	  if(message.content.startsWith(prefix + 'unmute')){
    let miembro = message.mentions.members.first();
        let role = message.guild.roles.find("name", "Muted");
        let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
        let args2 = args.join(' ')
       let razon = args2.split(' ').slice(1).join(' ');
        
        if(!perms) return message.channel.send("No tienes el rango requerido para usar este comando.");
        if(message.mentions.users.size < 1) return message.reply("Debes mencionar a alguien para quitarle el silencio.").catch(console.error);
        if(!role) return message.channel.send('Rol no encontrado.');
        if(!miembro.roles.find("name", "Silenciado")) return message.reply("El usuario especificado no está silenciado.")
        if (!razon) {
        miembro.removeRole(role).catch(console.error);
        const embed = new Discord.RichEmbed()
        .setTitle(":loud_sound: Usuario no silenciado")
        .setDescription(`El silencio de **${miembro.user.username}** fue retirado.`)
        .addField('Razón:', 'Ninguna.')
        .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
        .setTimestamp()
        .setColor(0x42cc25)
        message.channel.send({embed});
          return;
        }
        
        message.delete();
        miembro.removeRole(role).catch(console.error);
        const embed = new Discord.RichEmbed()
        .setTitle(":loud_sound: Usuario no silenciado")
        .setDescription(`El silencio de **${miembro.user.username}** fue retirado.`)
        .addField('Razón:', `${razon}`)
        .addField("Admin/mod responsable:", `${message.author.username}#${message.author.discriminator}`)
        .setTimestamp()
        .setColor(0x42cc25)
        message.channel.send({embed});
}
      	  if(message.content.startsWith(prefix + 'dance')){
let gifs = ['https://cdn.discordapp.com/attachments/498186062284193792/500125074830131220/tenor_1.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500125421791084545/3dcfeb0e3b5b8775fe5f41fb1649e950.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500124849377771540/tenor.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500124178872008704/Bmo-dance.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500123935497650177/130dd832e7293b93903a52fd858f832a.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500123039740985345/Festive_Maracas_dance.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500119125343993857/borrar.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500119369347760128/frix.gif', 'https://cdn.discordapp.com/attachments/498186062284193792/500119394484092941/oficial.gif']

  const embed = new Discord.RichEmbed()
  .setDescription(`**${message.author.username}** se ha puesto a bailar`)
  .setImage(gifs[Math.floor(Math.random() * gifs.length)])
  .setColor(0xd40707)
  await message.channel.send(embed)

}
      	  if(message.content.startsWith(prefix + 'kill')){
  let elementos = ["https://i.imgur.com/6iddVOo.gif", "https://i.imgur.com/y13Kkxf.gif", "https://i.imgur.com/AnDKb7E.gif", "https://i.imgur.com/4krZzOH.gif", "https://i.imgur.com/LQknzjF.gif", "https://i.imgur.com/QCA7ula.gif", "https://i.imgur.com/nNuad7E.gif",
                     "https://media.giphy.com/media/yRMK47EIu9D3i/giphy.gif", "https://media.giphy.com/media/23UYNxEnHywhy/giphy.gif", "https://media.giphy.com/media/QAEtKq0Vuu4la/giphy.gif", "https://media.giphy.com/media/W7o5wwiAGY0lG/giphy.gif", "https://media.giphy.com/media/20KSmo8aJ7HYu5L0rf/giphy.gif", "http://i.imgur.com/MXRoi1L.gif", "https://cdn.discordapp.com/attachments/399448944889036801/437101193823518731/matsuda1.gif"]
    let user = message.mentions.users.first()

    if(message.content.includes(bot.user.id)) return message.channel.send('N-no quiero morir... -mira a <@'+message.author.id+'> con miedo-')
    if (!user) return message.channel.send("M-menciona a alguien... -con miedo-")
    let exception = ['398658092021055511']
    if(exception.includes(message.author.id)) {
      const embed = new Discord.RichEmbed()
      .setDescription(`**${message.author.username}** se mató él mismo D':`)
      .setImage(`${elementos[Math.floor(elementos.length * Math.random())]}`)
      .setColor(0xd32121)
      message.channel.send({embed});
    return;
    }
    if(message.content.includes(message.author.id)) return message.reply('si quieres matarte, utiliza `ch!suicide`.')

          const embed = new Discord.RichEmbed()
          .setDescription(`**${message.author.username}** mató a **${user.username}** D':`)
          .setImage(`${elementos[Math.floor(elementos.length * Math.random())]}`)
          .setColor(0xd32121)
          await message.channel.send({embed});
}
  });
bot.login(process.env.TOKEN);
