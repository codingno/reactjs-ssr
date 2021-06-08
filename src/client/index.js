import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './store'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(preloadedState)

delete window.__PRELOADED_STATE__

import App from './App'
loadableReady(() => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
        , document.getElementById('root'))
})
