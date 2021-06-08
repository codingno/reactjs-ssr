import getData from '../getData'

const path = `/get/sliderProducts`
export const type = {
  sliderProducts : 'getSliderProducts'
}

export function getSliderProducts(params) {

    let defaultParams =  { 
      }

    if(params)
      defaultParams = {
        params,
        ...defaultParams
      }

    return getData(path, type, defaultParams)
}