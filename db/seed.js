const db = require('./index.js')
global.Promise = require('bluebird')
const { sampleNames } = require('./config.js')

const seedRandom = function (numRecords) {
  const before = new Date()

  const randomString = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
  const randomNum = (max, min=0) => Math.floor(Math.random() * (max - min)) + min
  const randomTags = () => new Array(Math.floor(randomNum(5))).fill('').map(() => randomString())

  // Example product must be included, so seed n-1 random tracks plus
  // one track with the eaxample product data.
  const tracks = new Array(numRecords).fill(null).map((val, index) => {
    return db.save({
      name:sampleNames[index] !== 'AmigoKing' ? index + '' : 'Little Bugs',
      artist: sampleNames[index],
      cdn_url: `https://apex15-fec-cdn.s3.us-east-2.amazonaws.com/Little+Bugs.mp3`,
      art_url: `https://apex15-fec-cdn.s3.us-east-2.amazonaws.com/Amigo+King.jpg`,
      tags: randomTags(),
      plays: randomNum(100000),
      likes: randomNum(1000),
      reposts: randomNum(100)
    })
  })

  db.remove({}).then((result) => {
    Promise.all(tracks).then((results) => {
      const after = new Date();
      console.log(`Seeded ${results.length} records in ${(after - before)/1000} seconds.`)
    }).catch((err) => {
      console.error('Error seeding records: ', err)
    }).finally(() => {
      process.exit()
    })
  })
}

seedRandom(100)