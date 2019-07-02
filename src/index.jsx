import 'core-js/es6/set'
import 'core-js/es6/map'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import 'normalize.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import App from './app/index.js'

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('app'))
