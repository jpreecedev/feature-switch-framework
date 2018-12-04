import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Home from './shared/Home'

import './client/styles.scss'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Home />, document.getElementById('root'))
