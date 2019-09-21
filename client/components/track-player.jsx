import React, { Component } from 'react'
import styles from './style.css.js'
import moment from 'moment'
import Waveform from './waveform.jsx'

export default class TrackPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioSource: null,
      playing: false
    }

    this.togglePlay = this.togglePlay.bind(this)
  }

  togglePlay() {
    this.state.playing ? this.state.audioSource.pause() : this.state.audioSource.play()

    this.setState({ 'playing': !this.state.playing })
  }

  onPause() {
    this.setState({'playing': false})
  }

  onPlay() {
    this.setState({'playing': true})
  }

  componentDidMount() {
      const audioSource = document.querySelector('#song') || new Audio()
      audioSource.src = this.props.track.cdn_url
      audioSource.onPause = this.onPause.bind(this)
      audioSource.onPlay = this.onPlay.bind(this)
      this.setState({audioSource})
  }

  render() {
    return (
      <div className="trackPlayer" style={styles.trackPlayer}>
        <div className="backgroundGradient" style={styles.bgGradient}></div>
        <div className="trackArea" style={styles.trackArea}>
          <div className="titleArea" style={styles.titleArea}>
            <div className="trackArt" style={styles.trackArt}></div>
            <div className="playButtonDiv" style={styles.playButtonDiv}>
              <button className="playLink" style={this.state.playing ? styles.pauseLink : styles.playLink} onClick={this.togglePlay}></button>
            </div>
            <div className="artistTrackContainer" style={styles.artistTrackContainer}>
              <div className="artistLabelContainer" style={styles.artistLabelContainer}>
                <a style={styles.artistLabel} href={`/${this.props.track.artist}`}>{this.props.track.artist}</a>
              </div>
              <span style={styles.trackLabel}>
                {this.props.track.name}
              </span>
            </div>
          </div>
        </div>
        <div className="trackInfo" style={styles.trackInfo}>
          <div className="timeContainer" style={styles.timeContainer}>
            <time className="relativeTime" style={styles.relativeTime} dateTime={this.props.track.date_posted}>
              {moment(new Date(this.props.track.date_posted)).fromNow()}
            </time>
          </div>
          <div>
            {this.props.track.tags.map((tag, index) => 
              <a key={index} href={`/tags/${tag}`} className="trackTag" style={styles.trackTag}>{'#'+tag}</a>)}
          </div>
        </div>
        <Waveform audioSource={this.state.audioSource} />
      </div>
    )
  }
}
