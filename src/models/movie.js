const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = Schema({
  title: String,
  release_date: { type: Date, default: Date.now },
  duration: Number,
  overview: String,
  cover_url: String,
  trailer_url: String,
  directed_by: String,
  phase: Number,
  saga: String,
  chronology: Number,
  post_credit_scenes: Number,
});

module.exports = mongoose.model('movies', MovieSchema);