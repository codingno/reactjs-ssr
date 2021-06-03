import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
loadableReady(() => {
    ReactDOM.hydrate(
        <Router>
            <App />
        </Router>
        , document.getElementById('root'))
})
