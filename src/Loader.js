import * as React from 'react'
import './Loader.css'

export default class Loader extends React.Component {
  render() {
    return (
      <div className='Cube panelLoad'>
        <div className='cube-face cube-face-front'>motherlode</div>
        <div className='cube-face cube-face-back'>motherlode</div>
        <div className='cube-face cube-face-left'>motherlode</div>
        <div className='cube-face cube-face-right'>motherlode</div>
        <div className='cube-face cube-face-bottom'>motherlode</div>
        <div className='cube-face cube-face-top'>motherlode</div>
      </div>
    )
  }
}