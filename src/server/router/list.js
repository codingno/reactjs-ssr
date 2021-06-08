import { getProductSearch } from '../../client/store/actions/get/productSearch'

export default async function list(store) {
    try {

        await store.dispatch(getProductSearch({ area : "REGULER"}))
        console.log("masuk list router");
    }
    catch(error) {
        console.log("error get catalogue : ", error);
    }
}
