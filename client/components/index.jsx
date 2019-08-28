import React from 'react'
import ReactDOM from 'react-dom'
import TrackPlayer from './track-player.jsx'
import axios from 'axios'

axios.get('http://localhost:3001/tracks/AmigoKing/Little Bugs').then((result) => {
  ReactDOM.render(<TrackPlayer track={result.data}/>, document.querySelector('#trackPlayer'))
}).catch((err) => {
  console.error(err)
})
