// Declare dependencies
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

// Create exercise model
const User = sequelize.define('exercise', {
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  pass: Sequelize.STRING
},
{
  // Disable Sequelize's modification of table names.
  freezeTableName: true
});

// Synchronizes database
User.sync();

module.exports = User;
