const path = require('path');

module.exports = function(app){
  // app.get('/', function(req, res){
  //   res.send('Sweat-it up and running.');
  // });

  app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get('/' || '/main', function(req, res){
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get('/options', function(req, res){
    res.sendFile(path.join(__dirname, "../public/options.html"));
  });

  app.get('/lower', function(req, res){
    res.sendFile("../public/lower.html");
  });

  app.get('/cardio', function(req, res){
    res.sendFile("../public/cardio.html");
  });

  app.get('/upper', function(req, res){
    res.sendFile("../public/upper.html");
  });

}
