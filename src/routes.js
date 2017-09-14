import * as React from 'react'
import { Router, Route } from 'react-router-dom'

import About from './AboutUs'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import PillowTalk from './PillowTalk'

const Routes = (
  <Router>
    <div>
      <Navbar />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/pillow-talk" component={PillowTalk} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

export default Routes
