import * as React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact animate-in">
        <div className="hand-header">
          <div id="hand" />
          <div className="header">contact us</div>
        </div>
        <div className="text">
          310.775.7230<br />
          <a href="mailto:motherlodelab@gmail.com">motherlodelab@gmail.com</a><br />
          instagram @motherlodelab<br />
          currently located at 231 Bowery, New York, NY 10002
        </div>
      </div>
    )
  }
}
