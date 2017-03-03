var express = require("express");

// var routerSlack = express.Router();

// // Requiring our Slacks model
// var db = require("../models");
// console.log(db);


// routerSlack.get("/", function(req, res) {
//  db.slack.findAll({}).then(function(dbSlack) {

//    //we use res.render instead of res.send because we are using handlebars and the
//    //index.hadlerbars file is dyamically popullated

//    res.render("index", {slack: dbSlack});
//  }).catch(function(error){
//    console.log(error);
//  });
// });


// //Export routes for server.js to use.

// module.exports = routerSlack;


// Dependencies
// =============================================================


// Routes
// =============================================================
module.exports = function(app) {



    // Requiring our Slacks model
    var db = require("../models");

    app.get("/", function(req, res) {
        db.Slack.findAll({

        }).then(function(dbSlack) {

            //we use res.render instead of res.send because we are using handlebars and the
            //index.hadlerbars file is dyamically popullated

            res.render("index", { slack: dbSlack });
        }).catch(function(error) {
            console.log(error);
        });
    });

};
