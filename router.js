const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedparser = bodyParser.urlencoded({extended:false});
const AnimeModel = require('./mongoSchema.js');

router.get('/', function(req, res){
  res.render('index');
});
router.get('/index', function(req,res){
  res.render('index');
});
router.get('/search', function(req, res){
  res.render('search');
});
router.post('/search', urlencodedparser, function(req, res){
  const characterName = req.body.name;
  AnimeModel.findOne({name: characterName}, function(err, data){
    if (err) throw err;
    res.send(data);
  });
});
router.post('/upload', urlencodedparser, function(req, res){
  const upload = new AnimeModel({
    name: req.body.name,
    imageurl: req.body.imageurl,
  });
  upload.save();
  res.send();
});
router.get('/upload', function(req, res){
  res.render('upload');
});

module.exports = router;
