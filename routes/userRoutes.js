// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/getAllSlacks", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.newUser.findAll().then(function(dbSlack) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbSlack);
    });
  });

  // POST route for saving a new todo
  app.post("/postSlack", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.newUser.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });


};