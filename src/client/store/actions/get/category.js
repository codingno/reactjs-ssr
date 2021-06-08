import getData from '../getData'

const path = `/get/categoryandsubcat`
export const type = {
  category : 'getCategory'
}

export function getCategory(params) {

    let defaultParams =  { 
          area: "REGULER",
      }

    if(params)
      defaultParams = {
        params,
        ...defaultParams
      }

    return getData(path, type, defaultParams)
}