import { getCatalogue } from '../get/catalogue'

export default async (store) => {
    await store.dispatch(getCatalogue())
}