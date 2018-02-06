const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./router.js');

mongoose.connect('mongodb://weebo:weebo@ds225608.mlab.com:25608/animesearch');
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use(routes);

app.listen(3000);
