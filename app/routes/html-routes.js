module.exports = function(app){
  app.get('/', function(req, res){
    res.send('Sweat-it up and running.');
  });

  app.get('/login', function(req, res){
    res.send(`Please log in.`);
  });

  app.get('/menu', function(req, res){
    res.send(`Main menu`);
  });

  app.get('/history', function(req, res){
    res.send(`View previous workouts`);
  });

  app.get('/session', function(req, res){
    res.send(`Start workout`);
  });

  app.get('/settings', function(req, res){
    res.send(`app and profile settings`);
  });

}
