const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//test
app.get('/', function(req, res){
  res.send('Sweat-it up and running.');
});

app.get('/menu', function(req, res){
  res.send(`Main menu`);
});

app.listen(PORT, function(){
  console.log(`Server running on PORT:${PORT}`);
});
