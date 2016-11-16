var cleverbot = require('cleverbot.io'),
    bot = new cleverbot(process.env.CLEVERBOT_API_USER, process.env.CLEVERBOT_API_KEY),
    sendMessage = (username, message) => {
      return new Promise((resolve, reject) => {
        bot.setNick(username);
        bot.create((err, response) => {
          if (err) { return reject(err); }
          bot.ask(message, (err, response) => {
            if (err) { return reject(err); }
            return resolve(response)
          });
        });
      });
    };


module.exports = { responde: sendMessage }