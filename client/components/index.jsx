import React from 'react'
import ReactDOM from 'react-dom'
import TrackPlayer from './track-player.jsx'
import axios from 'axios'

axios.get('http://ec2-3-14-130-218.us-east-2.compute.amazonaws.com/tracks/AmigoKing/Little Bugs').then((result) => {
  ReactDOM.render(<TrackPlayer track={result.data}/>, document.querySelector('#topTrackPlayer'))
}).catch((err) => {
  console.error(err)
})
