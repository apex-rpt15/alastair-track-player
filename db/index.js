const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://apex15-mongo:27017/soundcloud', { useNewUrlParser: true }).catch((err) => {
  console.error('Could not connect to db: ', err)
})

const TrackSchema = new mongoose.Schema({
  name: String,
  artist: String,
  cdn_url: String,
  art_url: String,
  tags: [String],
  plays: { type: Number, default: 0},
  likes: { type: Number, default: 0},
  reposts: { type: Number, default: 0},
  date_posted: { type: Date, default: Date.now }
})

const Track = new mongoose.model('Track', TrackSchema)

const save = (track) => new Track(track).save()
const retrieve = (artist, name) => Track.findOne({ artist, name }, { '_id': 0, '__v': 0})
const remove = (track) => Track.deleteMany(track)

module.exports = {
  save,
  retrieve,
  remove
}