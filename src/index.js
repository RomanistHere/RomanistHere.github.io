import React from 'react'
import ReactDOM from 'react-dom'

// import './fonts/handFont.ttf'
// import './fonts/handFont2.ttf'
// import './fonts/handFont3.otf'

import './variables.css'
import './index.css'

import App from './containers/App'
// import * as serviceWorker from './serviceWorker'

React.lazy(() => import('./fonts/handFont.ttf'))
React.lazy(() => import('./fonts/handFont2.ttf'))
React.lazy(() => import('./fonts/handFont3.otf'))


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
