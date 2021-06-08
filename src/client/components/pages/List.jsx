import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
// import getProductSearch from '../../store/actions/getProductSearch'
import { getProductSearch } from '../../store/actions/get/productSearch'

export default function List() {
    const dispatch = useDispatch()
    const product_search = useSelector(state => state.productSearch)
    let list = []
    for (let index = 0; index < 100; index++) {
        list[index] = index;
    }

    useEffect(() => {
        if(product_search.data.length == 0)
            dispatch(getProductSearch({ area : "REGULER" }))
            // axios.get(getProductSearch({ area : "REGULER" }))
            // .then(({data}) => dispatch({ type : 'getProductSearch', data : data.data }))
    },[product_search])

    return (
        <div>
            <ul>
                {/* {list.map(item => <li key={item}>{item}</li>)} */}
                {/* {product_search.data.length > 0 && product_search.data.map(item => <li key={item.product_id}>{item.product_name}</li>)} */}
                {product_search.data.length > 0 && JSON.parse(product_search.data).map(item => <li key={item.product_id}>{item.product_name}</li>)}
            </ul>
        </div>
    )
}
