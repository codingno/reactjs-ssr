
import express from 'express'
const router = express.Router()
const rootRouter = express.Router()

import createStore from '../../client/store'

const store = createStore()

rootRouter.use((req, res, next) => {
    req.store = store
    next()
})

function routerStore(store, dispatchStore) {
    router.get('/', async (req, res, next) => {
        await dispatchStore(store)
        next()
    })
    return router
}

import path from 'path'
// const testFolder = path.resolve(__dirname, '../../src/server/router');
// const testFolder = path.resolve(__dirname, '../../src/client/store/actions/get');
const testFolder = path.resolve(__dirname, '../../src/client/store/actions/pages');
const fs = require('fs');

fs.readdirSync(testFolder).forEach((file) => {
    // if(file !== 'catalogue.js')
        // return
    const name = file.split('.js')[0]
    const urlPath = `/${name}`
    // const route = require(`./${file}`).default
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const capitalFirst = capitalizeFirstLetter(name)
    // const action = require(`../../client/store/actions/page/${file}`)[`get${capitalFirst}`]
    const action = require(`../../client/store/actions/pages/${file}`).default
    rootRouter.use(urlPath, routerStore(store, action))
});

// import catalogue from './catalogue'
// rootRouter.use('/catalogue', routerStore(store, catalogue))

export default rootRouter