const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/tracks', {useNewUrlParser: true})

const TrackSchema = new mongoose.Schema({
  name: String,
  artist: String,
  cdn_url: String,
  tags: [String],
  plays: { type: Number, default: 0},
  likes: { type: Number, default: 0},
  reposts: { type: Number, default: 0},
  date_posted: { type: Date, default: Date.now }
})

const Track = new mongoose.model('Track', TrackSchema)

const save = (track) => new Track(track).save()

module.exports = {
  save
}