'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const clever = require('./cleverScript');

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
  var result = 'Fuuka is running'
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('Fuuka is running, server is listening on port ', app.get('port'));
});

client.on('ready', () => {
  console.log('Todo listo!');
});

var responseObject = {
  "Yare, yare." : "Desu.",
  "Yare, yare": "Desu.",
  "Yare yare": "Desu.",
  "yare, yare.": "Desu.",
  "yare yare": "Desu.",
  "JoJo": "Sono chi no sadame!",
  "Hoo!": "Ha!",
  "Say my name.": "You're Heisenberg...",
  "Nah": "Nah, son.",
  "What is love?": "Baby, don't hurt me.",
  "fierro": "¡No fierro!",
  "Fuuka you": "No.",
  "Sal": ":PJsalt:",
  "Salt": ":PJsalt:",
  "Hoo ha!": "http://i1.kym-cdn.com/photos/images/newsfeed/000/914/507/f3f.png",
  "How do you turn this on?": "http://vignette3.wikia.nocookie.net/ageofempires/images/7/78/Image.jpg",
  "No emoji!": "https://cdn.discordapp.com/attachments/140563979498946561/224044914894176257/No_emoji.jpg",
  "rofl": "http://i2.kym-cdn.com/photos/images/original/000/296/199/9ff.gif",
  "No memes": "https://cdn.discordapp.com/attachments/244180375172153346/244861500630630400/CX2QM4yW8AAJfO9.png",
  "meme": "http://i.imgur.com/fN8Exqf.png",
  "mimi": "http://i.imgur.com/xB723ux.png",
  "Harambe": "https://i.ytimg.com/vi/oqupUsjbpdM/maxresdefault.jpg",
  "Punished Harambe": "https://pics.onsizzle.com/punished-harambe-a-fallen-legend-3084407.png",
  "alv": "¿Alvarito?",
  ":(": ":)",
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  ":pikachu": "X",
  ":PJsalt:": "X",
  ":heart": "X",
  "Poni": "❤",
  "Pony": "❤",
  "pony": "❤"
};
client.on('message', (message) => {
  if(responseObject[message.content]) {
    message.channel.sendMessage(responseObject[message.content]);
  }
});

client.on('message', message => {
  if (message.content === ':kappa:') {
    message.reply('¡no kappa!');
  }
  if (message.content === ':v') {
    message.reply('me has decepcionado...');
  }
  if (message.content === ":'v") {
    message.reply('me has decepcionado...');
  }
  if (message.content === "v:") {
    message.reply('yamete!');
  }
  if (message.content === '¿Qué avatar tengo?') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  if (message.content === "Fuuka, di mi nombre.") {
    // send the user's avatar URL
    message.channel.sendMessage(`Eres ${message.author.username}.`);
  }
    let prefix = "!";
  // Exit and stop if it's not there
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ayuda")) {
    message.channel.sendMessage('Estos son los comandos actuales:\n"!ayuda": Muestra esta ayuda.\n"!8ball" + pregunta: Trataré de responder a tus preguntas. Ten en cuenta que la respuesta sólo pueder ser sí o no. Por favor, formula tus preguntas adecuadamente.\n"!moneda": Lanzaré una moneda al aire por ti y te diré el resultado.\n"!dado6": Tiraré un dado de seis caras.\n""!quien"" + pregunta: Desde quíén es casual a quién banear. Te diré a quién buscas.\n""!joke": Contaré un chiste. Trataré de que sea uno bueno.\n"¿Qué avatar tengo?": Mostraré tu avatar a todos.');
  }
  if (message.content.startsWith(prefix + "otp")) {
    message.channel.sendMessage("Poni... *blush* Te amo... :two_hearts:");
  }
});


client.on('message', message => {
    let prefix = "!";
  // Exit and stop if it's not there
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "8ball")) {
	var r_text = new Array ();
	r_text[0] = "¡Ni lo dudes!";
	r_text[1] = "¡Claro que sí!";
	r_text[2] = "Creo que sí.";
	r_text[3] = "Eso espero.";
	r_text[4] = "Podría ser.";
	r_text[5] = "Quizás...";
	r_text[6] = "Eh... lo siento, no lo sé.";
	r_text[7] = "Será mejor no decírtelo ahora.";
	r_text[8] = "Hoy no.";
	r_text[9] = "Espero que no...";
	r_text[10] = "Es poco probable.";
	r_text[11] = "No cuentes con ello.";
	r_text[12] = "Lo dudo...";
	r_text[13] = "Definitivamente no.";
	r_text[14] = "*blush* Sí...";
	r_text[15] = "¡N-No, ¿cómo crees?!";
	r_text[16] = "*gasp* ¡No me preguntes eso...!";
	r_text[17] = "¡Ni en un millón de años!";
	r_text[18] = "Ah... no.";
	r_text[19] = "Parece que no.";
	r_text[20] = "Si tienes fe, sí.";
	r_text[21] = "¡Sí!";
	r_text[22] = "Todo indica que sí.";
	r_text[23] = "El futuro lo decidimos nosotros.";
	var i = Math.floor(24*Math.random())
	var i = r_text[i];
    message.channel.sendMessage(i);
  }
});

client.on('message', message => {
    let prefix = "!";
  // Exit and stop if it's not there
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "quien")) {
	var r_text = new Array ();
	r_text[0] = "Vito.";
	r_text[1] = "Unipax.";
	r_text[2] = "Psicomental.";
	r_text[3] = "Christian.";
	r_text[4] = "Diego.";
	r_text[5] = "Iuk.";
	r_text[6] = "Aldair.";
	r_text[7] = "Zero.";
	r_text[8] = "Darmer.";
	r_text[9] = "Volkner.";
	r_text[10] = "Poni. :two_hearts:";
	var i = Math.floor(11*Math.random())
	var i = r_text[i];
    message.channel.sendMessage(i);
  }
});

client.on('message', message => {
    let prefix = "!";
  // Exit and stop if it's not there
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "moneda")) {
	var r_text = new Array ();
	r_text[0] = "Cayó cara.";
	r_text[1] = "Es sello.";
	var i = Math.floor(2*Math.random())
	var i = r_text[i];
    message.channel.sendMessage(i);
  }
});

client.on('message', message => {
    let prefix = "!";
  // Exit and stop if it's not there
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "dado6")) {
	var r_text = new Array ();
	r_text[0] = "1, como el as.";
	r_text[1] = "2, tsumi y batsu.";
	r_text[2] = "3, el primer número primo impar.";
	r_text[3] = "4, el número de la muerte...";
	r_text[4] = "5, como las puntas de una estrella.";
	r_text[5] = "6, como junio.";
	var i = Math.floor(6*Math.random())
	var i = r_text[i];
    message.channel.sendMessage(i);
  }
});

client.on('message', message => {  
  if (message.content === "Life is...") {
	var r_text = new Array ();
	r_text[0] = "Strange...";
	r_text[1] = "Weird...";
	r_text[2] = "Simply unfair. Don't you think?";
	var i = Math.floor(3*Math.random())
	var i = r_text[i];
    message.channel.sendMessage(i);
  }
});

client.on('message', message => {
  let prefix = "!",
      msg = message.content;
  // Exit and stop if it's not there
  if(!msg.startsWith(prefix)) return;
  
  if (msg.startsWith(prefix + "smart")) {
    clever.responde('Fuuka', msg).then(res => {
      message.channel.sendMessage(res);
    }).catch((err) => {
      console.log(err);
      message.channel.sendMessage(`Lo siento ${user}, soy demasiado inteligente para ti.`);
    });
  }
});

client.on('message', message => {
    let prefix = "!";
  // Exit and stop if it's not there
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "joke")) {
	var r_text = new Array ();
	r_text[0] = 'Un orco entra a un bar con un perico en su hombro. El cantinero pregunta "Hey, ¿de dónde sacaste eso?" Y el perico le contesta "En Durotar. Ahí hay muchos".';
	r_text[1] = "¿Cómo se oculta un Tauren en un árbol de cerezo? Se pinta las pezuñas de rojo.";
	r_text[2] = 'Un tipo se me acercó y dijo "¡Soy un arco! ¡Soy una ballesta! ¡Soy un arco!", y yo le contesté "¡Relájate! Estás muy tenso".';
	r_text[3] = 'Tengo una gran idea para una película. Trata de dos gnomos que encuentran un brazalete de poder. Tienen que llevarlo a las Estepas Ardientes y arrojarlo a la Caldera. Forman la Hermandad del Brazalete. Durante el camino los sigue un múrloc llamado Gottom, quien está obsesionado con el brazalete. También nueve Hombres del Saco que se lo quieren robar. Podría ser una trilogía llamada "El Soberano del Brazalete". La primera parte podría llamarse "La Hermandad del Brazalete", seguida de "Un par de torres", con el culminante final "¡Ey! ¡Volvió el rey!".';
	r_text[4] = "¿Por qué todos suponen que sé coser y cocinar?";
	r_text[5] = "¿Alguna vez te sientes como si no estuvieras al mando de tu propio destino? Como... ¿si te controlara una mano invisible?";
	r_text[6] = "A veces tengo problemas para controLAR ¡EL VOLUMEN DE MI VOZ!";
	r_text[7] = "No me molestan los gnomos, pero me preocupa tropezarme con uno.";
	r_text[8] = "Exactamente, ¿cómo se estrella alguien contra un planeta? Eso me gustaría saber.";
	r_text[9] = '"Detente y pregunta dónde estamos", le dije. Pero no, "Es inter-dimensional", me dijo. "¿Qué puede salir mal?"';
	r_text[10] = "Me sé una receta estupenda. Necesitas dos gnomos y dos huevos. Parte los gnomos y separa los huevos... o... ¿cómo era? Detalles...";
	r_text[11] = "Lo tenemos todo planeado. Paso uno: aterrizamos el Exodar. Paso tres: derrotamos a la Legión y volvemos a casa... Sólo falta un detalle.";
	r_text[12] = 'No nos dimos cuenta, pero en el idioma de los Naaru, "Exodar" significa "popó de elekk defectuosa".';
	r_text[13] = "*snif* Mmmm, eso huele a... *snif* ¿tocino? *snif* Oigan, huele a... *snif* ¿Huelen el tocino? ¡¿Alguien?! *snif* ¡Oh, sí es tocino! ¡Tocino! ¡¿Quién tiene el tocino?! ¡¿DÓNDE ESTÁ EL TOCINO?!";
	r_text[14] = "Mis más sinceras disculpas por cualquier inconveniente que mi locura asesina pudo haber causado.";
	r_text[15] = "Descubrí que ser golpeada por un arma contundente puede ser bastante doloroso.";
	r_text[16] = "Las ardillas pueden ser letales cuando son acorraladas... ¿sabes?";
	r_text[17] = "Espero algún día encontrarle los nuggets a un pollo.";
	r_text[18] = "Tuve una idea para un aparato que cocina pedazos pequeños de pan, pero la descarté porque no creo que haya mercado para eso.";
	r_text[19] = "Me siento muy femenina, ¡y le romperé la cara a quien no esté de acuerdo!";
	r_text[20] = "Si te pones entre mi comida y yo, perderás una mano.";
	r_text[21] = "No me gusta la Cima del Trueno. No venden hamburguesas en ninguna parte.";
	r_text[22] = 'Fui a Entrañas a hacerme un facial. ¡Ja! ¿Has visto a esa gente? Le dije "Ni siquiera tienes quijada, ¿y vas a hacerme un facial?". Se enojó... o eso creo. ¿Has escuchado hablar a alguien sin quijada? "Rau, au, ueue". ¡Ja, ja! ¡Parecía un múrloc!.';
	r_text[23] = "¿Cómo te voy a hechar de menos si no te largas?";
	r_text[24] = "Los espejos no hablan. Para tu suerte, ¡tampoco se ríen!";
	r_text[25] = "Si no tienes éxito a la primera, vuelve a hacerlo estallar.";
	r_text[26] = "¡Oh, se me ocurrió algo! ¿Y si organizáramos el crimen? Sí...";
	r_text[27] = "Ante la duda... C4.";
	r_text[28] = "Veamos... eh... adelante, abajo, adelante, ¡golpe! No... ¿abajo, arriba, patada?";
	r_text[29] = "Soy vegetariana. Sólo como plantas. Y animales que comen plantas.";
	r_text[30] = "¡La fruta es prueba de que los dioses existen y nos aman! Es broma, la vida es un chiste.";
	r_text[31] = "Tu vida. :)";
	r_text[32] = "¿Y tu Skell?";
	r_text[33] = "Tastu: Cuando Tatsu se marchaba, Mamapon siempre usaba comida para traerlo de vuelta.\nLin: Sí, los nopon y los gatos parecen tener el mismo nivel de inteligencia...";
	r_text[34] = "¿Sabes...? Normalmente no le muestro esto a nadie, pero he estado trabajando en un fanfic de Skells... Dame un segundo...";
	r_text[35] = "Tatsu sabe cómo te sientes. No tiene que avergonzarte ser un bulto ineficiente e inútil.";
	r_text[36] = "Eres una patata dura. Me gustan las patatas duras. No me obligues a hacer puré de patata...";
	r_text[37] = "¡Tatsu no dejará que nadie se meta con Mamapon! ¡Quien lo intente se enfrentará a la furia de... los confiables amigos de Tatsu!";
	r_text[38] = "¿Mmm? ¿Que si no salgo? Bueno, cuando hay una computadora, normalmente me quedo en casa.";
	r_text[39] = "Seven: Gimme a P!\nClover: Gimme an I!\nSnake: Gimme a P and an E!\nJunpei: What's that spell? Pipe!\n..\n..\nWhat the hell are we doing...";
	var i = Math.floor(40*Math.random())
	var i = r_text[i];
    message.channel.sendMessage(i);
  }
});

//client.on('message', message => {  
//  if (message.content.startsWith("https://discord.gg/")) {
//    message.reply("¡no nohrios!");
//  }
//});

client.on('message', message => {
  if (message.content === (':ok_hand:')) {
    message.reply("me has decepcionado.\n¡Necesito un monje! @Iuk#3771");
  }
});

client.on("guildMemberAdd", (guild, member) => {
    console.log(`New User "${member.user.username}" has joined "${guild.name}"` );
    guild.defaultChannel.sendMessage(`${member.user.username} se unió al grupo.`);
});

var loginKey = process.env.KEY;

client.login(loginKey);
