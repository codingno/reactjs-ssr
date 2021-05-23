require('dotenv').config()
import express from 'express'
const app = express()
const PORT = process.env.PORT || 3002

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import index from '../views'
import App from '../client/App'

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />)
    const htmlString = index(app)
    res.send(htmlString)
})

app.listen(PORT, e => console.log("Server is listening on PORT:" + PORT))