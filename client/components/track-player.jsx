import React, { Component } from 'react'
import styles from './style.css.js'
import moment from 'moment'

export default class TrackPlayer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="trackPlayer" style={styles.trackPlayer}>
        <div className="backgroundGradient" style={styles.bgGradient}></div>
          <div className="trackArea" style={styles.trackArea}>
            <span className="trackArt" style={styles.trackArt}></span>
            <div className="titleArea" style={styles.titleArea}>
              <div className="playButtonDiv" style={styles.playButtonDiv}>
                <button className="playLink" style={styles.playLink}></button>
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
          <div className="waveformArea">

          </div>
      </div>
    )
  }
}
