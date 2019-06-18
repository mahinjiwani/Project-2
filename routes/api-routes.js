// Declare dependencies
const Exercises = require('../models/exercises.js');
const Users = require('../models/users.js');

module.exports = function(app){
  app.get("/api/exercises", function(req, res) {

    Exercises.findAll({}).then(function(data) {
      // results are available to us inside the .then
      res.json(data);
    });

  });

  app.get("/auth", function(req, res) {

    Users.findAll({}).then(function(data) {
      // results are available to us inside the .then
      res.json(data);
    });

  });

}
