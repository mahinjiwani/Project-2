// Declare dependencies
const Sequelize = require("sequelize");

// Set up our connection information
const connection = new Sequelize("sweat_itDB", "root", "docker", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

connection.sync().then(function(){
  console.log('DB connected.');
})

// Export connection
module.exports = connection;
