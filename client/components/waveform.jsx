import React, { Component } from 'react'
import styles from './style.css.js'

export default class Waveform extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percent: 0
    }
  }

  componentDidUpdate() {
    if (this.props.audioSource) {
      this.props.audioSource.ontimeupdate = this.updateTime.bind(this)
    }
  }

  updateTime() {
    const percent = this.props.audioSource.currentTime / this.props.audioSource.duration
    this.setState({percent})
  }

  render() {
    const width = Math.floor(this.state.percent * 720) + 'px'
    const fullStyle = {...styles.waveformFull, width}
    return (
      <div className="waveformWrapper">
        <div className="waveform" style={styles.waveform}></div>
        <div className="waveformFull" style={fullStyle}></div>
      </div>
    )
  }
}