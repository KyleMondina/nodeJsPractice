var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));


app.get('/', function(req, res){
  res.render('index');
});

app.get('/index', function(req,res){
  res.render('index');
});

app.get('/search', function(req, res){
  res.render('search');
});

app.post('/search', urlencodedparser, function(req, res){
  console.log(req.body);
  res.json(req.body);
});

app.get('/upload', function(req, res){
  res.render('upload');
});

app.listen(3000);
