import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import * as reducers from  './reducers'
console.log(reducers.default);
export default (preloadState) =>  {
    if(preloadState)
    //  return createStore(combineReducers(reducers.default), preloadState)
     return createStore(combineReducers(reducers.default), preloadState, applyMiddleware(thunk))
    // return createStore(combineReducers(reducers.default))
    return createStore(combineReducers(reducers.default), applyMiddleware(thunk))
};