import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from './AboutUs'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import PillowTalk from './PillowTalk'

const Routes = (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      <Route path={`${process.env.PUBLIC_URL}/pillow-talk`} component={PillowTalk} />
      <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    </div>
  </BrowserRouter>
)

export default Routes
