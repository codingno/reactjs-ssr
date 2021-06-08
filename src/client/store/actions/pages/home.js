import { getCatalogue } from '../get/catalogue'
import { getCategory } from '../get/category'
import { getProductSearch } from '../get/productSearch'
import { getSliderProducts } from '../get/sliderProducts'

export default async (store) => {
    await store.dispatch(getCatalogue())
    await store.dispatch(getCategory())
    await store.dispatch(getProductSearch())
    await store.dispatch(getSliderProducts())
}