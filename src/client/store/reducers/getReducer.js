// import path from 'path'
// const testFolder = path.resolve(__dirname, '../../src/client/store/actions/get');
// const fs = require('fs');

// fs.readdirSync(testFolder).forEach((file) => {
//     const reducerAction = require(`../actions/get/${file}`)
//     const reducer = Object.keys(reducerAction.type)[0]
//     const type = reducerAction.type[reducer]
//     console.log({type});
//     console.log({reducer});
//     reducersTes[reducer] = getReducer(type, initialState)
// });

// const reducersTes = {}
// reducersTes[reducer] = getReducer(type, initialState)
// console.log({reducersTes});

const defaultState = {
  error : null,
  load : false,
  data : '',
}

export default function getReducer(type, initialState) {
    return (state = initialState || defaultState, action) => {
            switch (action.type) {
                case type :
                    return {
                        error : null,
                        // data : action.data 
                        load : true,
                        data : JSON.stringify(action.data),
                    }
                case 'error_' + type:
                    return {
                        error : action.error,
                        load : true,
                        data : ''
                    }
                default:
                    return state
            }
        }
}

// import type from '../type'

// const reducers = {}
// Object.keys(type).map(key => {
//   reducers[key] = getReducer(type[key], initialState)
// })

// export default reducersTes