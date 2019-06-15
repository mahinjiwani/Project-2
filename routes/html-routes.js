const path = require('path');

module.exports = function(app){
  app.get('/', function(req, res){
    res.send('Sweat-it up and running.');
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

  // app.get('/progress', function(req, res){
  //   res.send(`View previous workouts`);
  // });
  //
  // app.get('/goals', function(req, res){
  //   res.send(`View your goals`);
  // });
  //
  // app.get('/browse', function(req, res){
  //   res.send(`Browse`);
  // });
  //
  // app.get('/session', function(req, res){
  //   res.send(`Start workout`);
  // });
  //
  // app.get('/settings', function(req, res){
  //   res.send(`app and profile settings`);
  // });

}
