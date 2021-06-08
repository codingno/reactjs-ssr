
import { getCatalogue } from '../../client/store/actions/get/catalogue'

export default async function catalogue(store) {
    await store.dispatch(getCatalogue(
            { 
                area_sameday : "REGULER",
                category : 8,
                limit18 : true,
                pack : 1
            }
        ))
}