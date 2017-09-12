import React, { Component } from 'react';
import HomeText from './text/Home'
import './Home.css';
import './media.css'
import isMobile from './utils/isMobile'

export default class Home extends Component {
  componentDidMount() {
    fetch('/api/text', {
      'mode': 'no-cors',
      'headers': {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="home animate-in">
        {isMobile() ? <img alt="logo-gif" className="logo-video" src={require('./assets/logo.gif')} /> : <video loop muted autoPlay className="logo-video" src={require("./assets/logo_movie.mp4")}></video>}
        <div className="home-container">
          <div className="home-header" />
          <div className="home-text">{HomeText.text}</div>
        </div>
      </div>
    );
  }
}
