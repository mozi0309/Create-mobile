import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import './index.css'
class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello, Mozi</h1>
      </div>

    )
  }
}

export default hot(App)
