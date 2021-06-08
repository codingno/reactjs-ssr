import axios from 'axios'
import getData from './getData'

export default function (params) {

    const path = `/get/productSearch`
    const type = 'getProductSearch'
    const url = getData(path, params)

    return dispatch => 
        axios.get(url)
        .then(({data}) => dispatch({ type, data : data.data}))
        .catch(err => dispatch({ type : 'error', err }))
}