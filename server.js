const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

require('./app/routes/html-routes.js')(app);

app.listen(PORT, function(){
  console.log(`Server running on PORT:${PORT}`);
});
