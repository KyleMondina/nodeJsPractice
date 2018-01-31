var express = require('express');

var app = express();
app.listen(3000);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/profile', function(req, res){
  res.render('profile');
});

app.get('/search', function(req, res){
  res.render('search');
});

app.get('/upload', function(req, res){
  res.render('upload');
});
