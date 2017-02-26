var Slackbot = require('slackbots');

// create a bot 
var bot = new SlackBot({
    token: 'xoxb-146489606837-Ts6TrLca5PhEF6vPXZyxKiJ4', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'my_slack'
});

bot.on('start', function() {
	
});

module.exports = bot;