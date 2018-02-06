const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  name: String,
  imageurl: String
});
const AnimeModel = mongoose.model('animeCharacters', animeSchema);
module.exports = AnimeModel;
