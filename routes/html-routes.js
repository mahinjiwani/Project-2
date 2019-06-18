const path = require('path');

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get('/create', function(req, res){
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get('/main', function(req, res){
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get('/options', function(req, res){
    res.sendFile(path.join(__dirname, "../public/options.html"));
  });

  app.get('/lower', function(req, res){
    res.sendFile(path.join(__dirname, "../public/lower.html"));
  });

  app.get('/cardio', function(req, res){
    res.sendFile(path.join(__dirname, "../public/cardio.html"));
  });

  app.get('/upper', function(req, res){
    res.sendFile(path.join(__dirname, "../public/upper.html"));
  });

}
