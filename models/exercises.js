// Declare dependencies
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

// Create exercise model
const Exercises = sequelize.define('exercises', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  type: Sequelize.STRING
},
{
  // Disable Sequelize's modification of table names.
  freezeTableName: true,
  timestamps: false
});

// Synchronizes database
Exercises.sync();

module.exports = Exercises;
