import axios from 'axios'

const domain = process.env.DOMAIN || 'http://localhost'
function objectToUrlParams(params) {
	var urlParams = '?'
  var urlKeys = Object.keys(params)
  urlKeys.map((item, index) => {
  	if(index !== 0)
    	urlParams += '&'
  	urlParams += `${item}=${params[item]}`
  })
  return urlParams
}

export default function(path, type, params) {
    const paramsString = params ? objectToUrlParams(params) : ''
    const url = `${domain}${path}${paramsString}`
    // const url = getData(path, defaultParams)
    // console.log({type});
    const reducerType = type[Object.keys(type)[0]]
    // console.log({reducerType});
    return async dispatch => {
      try {
        const data = await axios.get(url)
        dispatch({ type : reducerType, data : data.data})
      }
      catch (error) {
        dispatch({ type : 'error_' + reducerType, error })
      }
    }
}
