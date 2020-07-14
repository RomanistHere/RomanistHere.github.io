import React from 'react'
import ReactDOM from 'react-dom'

// import './fonts/handFont.ttf'
// import './fonts/handFont2.ttf'
// import './fonts/handFont3.otf'

import './static/variables.css'
import './index.css'

import App from './pages/App'
// import * as serviceWorker from './serviceWorker'

React.lazy(() => import('./media/fonts/handFont.ttf'))
React.lazy(() => import('./media/fonts/handFont2.ttf'))
React.lazy(() => import('./media/fonts/handFont3.otf'))


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
