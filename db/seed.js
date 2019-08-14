const db = require('./index.js')
const Promise = require('bluebird')
const { sampleNames } = require('./config.js')

const seedRandom = function (numRecords) {
  const before = new Date()

  const randomString = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
  const randomNum = (max, min=0) => Math.floor(Math.random() * (max - min)) + min
  const randomTags = () => new Array(Math.floor(randomNum(5))).fill('').map(() => randomString())

  // Example product must be included, so seed n-1 random tracks plus
  // one track with the eaxample product data.
  const tracks = new Array(numRecords - 1).fill(null).map((val, index) => {
    return db.save({
      name: index + '',
      artist: sampleNames[index],
      cdn_url: `http://www.whatever.com/${randomString()}.mp3`,
      tags: randomTags(),
      plays: randomNum(100000),
      likes: randomNum(1000),
      reposts: randomNum(100)
    })
  })

  // Example product for the entire team
  tracks.push(db.save({
      name: 'Little Bugs',
      artist: 'AmigoKing',
      cdn_url: `http://www.whatever.com/${randomString()}.mp3`,
      art_url: `http://www.whatever.com/${randomString()}.jpg`
      tags: randomTags(),
      plays: randomNum(100000),
      likes: randomNum(1000),
      reposts: randomNum(100)
  }))

  Promise.all(tracks).then((results) => {
    const after = new Date();
    console.log(`Seeded ${results.length} records in ${(after - before)/1000} seconds.`)
  }).catch((err) => {
    console.error('Error seeding records: ', err)
  }).finally(() => {
    process.exit()
  })
}

seedRandom(100)