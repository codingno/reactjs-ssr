import getData from '../getData'

const path = `/get/productSearch`
export const type = {
  productSearch : 'getProductSearch'
}

export function getProductSearch(params) {

    let defaultParams = {
      area : "REGULER"
    }

    if(params)
      defaultParams = {
        params,
        ...defaultParams
      }

    return getData(path, type, defaultParams)
}

// const initialState = {
//   error : null,
//   data : ''
// }

// export function productSearch(state = initialState, action) {
//   switch (action.type) {
//     case type:
//       return {
//           ...state,
//           data : JSON.stringify(action.data)
//       }
//     case 'error' + type :
//       return {
//           data : [],
//           error : action.error
//       }
//     default:
//       return state
//   }
// }