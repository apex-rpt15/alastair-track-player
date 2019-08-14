const express = require('express')
const bodyParser = require('body-parser')
const db = require('../db/index.js')

const port = 3001
const app = express()
app.use(bodyParser.json())

app.get('/tracks/:artist/:track', (req, res) => {
  db.retrieve(req.params.artist, req.params.track).then((result) => {
    if (!result) {
      throw new Error(`Track "${req.params.track}" by artist "${req.params.artist}" not found in database.`)
    }
    res.status(200)
    res.json(result)
  }).catch((err) => {
    res.status(400)
    res.send(err.message)
  })
})

app.listen(port, () => console.log(`Tracks service listening on port ${port}...`))