var Slackbot = require('slackbots');

// create a bot 
var bot = new SlackBot({
    token: 'xoxb-146588198321-TyutTN5YIUxctTRDKiJDS2Qr', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'mytest'
});

bot.on('message', function(data) {
	if (data.text === "save") {
		console.log("it worked!!!!");
	}
});

module.exports = bot;