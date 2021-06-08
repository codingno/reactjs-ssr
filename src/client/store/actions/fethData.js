import axios from 'axios'

const domain = process.env.DOMAIN || 'http://localhost'
console.log({domain});

export default async function fetching(type, path, params) {
    const paramsString = params ? objectToUrlParams(params) : ''
    const url = `${domain}${path}${paramsString}`
    console.log({url});
    try {
        var data = await axios.get(url).data
        console.log("ini action : ", type )
        return {
            type : type,
            payload : JSON.stringify(data)
        }
    } catch (error) {
        return {
            type : 'error',
            error : error,
            payload : []
        }
    }
}

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

export async function fetchCatalogue(params) {

    const path = `/get/catalogue`
    const type = 'getCatalogue'

    return (dispatch) => dispatch(fetching(type, path))
    return fetching(type, path, params)
}

export async function fetchTestimoni() {

    const path = `/testimoni/get`
    const type = 'getTestimoni'

    return (dispatch) => dispatch(fetching(type, path))
    return fetching(type, path)
}

export async function fetchPOD() {

    const path = `/get`
    const type = 'getPOD'

    return (dispatch) => dispatch(fetching(type, path))
}
