import counter from './counter'
import todo from './todo'
import getReducer from './getReducer'


export default {
    counter,
    todo,
    catalogue : getReducer('getCatalogue'),
    category : getReducer('getCategory'),
    productSearch : getReducer('getProductSearch'),
    sliderProducts : getReducer('getSliderProducts'),
}