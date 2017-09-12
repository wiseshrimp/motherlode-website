import * as React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export default class Navbar extends React.Component {
  componentWillMount() {
    let images = [
      'hand.png',
      'logo.png',
      'pillowtalk.png',
      'headshot.png',
      'isa.png',
      'leah.png',
      'motherlodelogo.png'
    ]
    for (var i = 0; i < images.length; i++) {
      let img = new Image()
      img.src = require(`./assets/images/${images[i]}`)
    }
  }
  render() {
    return (
      <div className="navbar">
        <Link to='/'><div className="item">motherlode</div></Link>
        <Link to='/about'><div className="item">about us</div></Link>
        <Link to='/contact'><div className="item">contact us</div></Link>
        <Link to='/pillow-talk'><div className="item">pillow talk</div></Link>
      </div>
    )
  }
}
