// Declare dependencies and variables
const express = require('express');
// const basicAuth = require('express-basic-auth')
const app = express();

const PORT = process.env.PORT || 3000;

// Declare middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(basicAuth({
//   users: {
//     "admin": "password",
//     "demo": "password"
//   }
// }));

// Routing
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Start the server
app.listen(PORT, function(){
  console.log(`Server running on PORT:${PORT}`);
});
