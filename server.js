// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

// require("./routes/slackRoutes.js")(app);
// require("./routes/userRoutes.js")(app);
// require("./routes/slackbot.js")(app);


var Slackbot = require('slackbots');

// create a bot 
var bot = new Slackbot({
    // token: process.env.slacktoken,
    token: 'xoxb-146588198321-AjAKw6BhR2Yhjvl6UEFzjn5A',
    name: 'mytest'
});

bot.on('message', function(data) {
    if (data.type === "message") {


        //if the message is a file, do something
        if (data.file) {
            console.log("This is file shared");
            console.log(data);
            //processing the filen to send to mySQL
        }

        if (data.text && !data.file) {

        	var test = data.text.indexOf("#save");

        	if (test > -1) {
        		console.log("we are the best");
        	}

            console.log("This is text");
            console.log(data.text);
            // console.log(data.message.user);
            // console.log(data.message.text);
        }


    };
    return
});



// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
