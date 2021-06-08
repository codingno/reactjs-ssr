import getData from '../getData'

const path = `/get/catalogue`
export const type = {
  catalogue : 'getCatalogue'
}

export function getCatalogue(params) {

    let defaultParams =  { 
          area_sameday : "REGULER",
          category : 8,
          limit18 : true,
          pack : 1
      }

    if(params)
      defaultParams = {
        params,
        ...defaultParams
      }

    return getData(path, type, defaultParams)
}

// const initialData = {
//     cashback: 0,
//     disc_star_member: 3,
//     discount_badges: 24,
//     expedition_name: "REGULER",
//     flash_sale: null,
//     hasDeliveryPromo: true,
//     hasProductPromo: 1,
//     image: "/dummy-catalogue.jpeg",
//     image_hd: "https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_4x.jpg",
//     image_mobile: "https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_2x.jpg",
//     isAvailable: true,
//     is_special_treatment: true,
//     item_price: 305000,
//     main_categories: true,
//     min_order_price: 0,
//     multi_price: 0,
//     normal_price: 80000,
//     pack_group: 1,
//     pack_price: 61000,
//     position: 1,
//     product_category_id: 8,
//     product_category_name: "Harga Kawan",
//     product_id: 336,
//     product_name: "Salmon Fillet Norwegia 200g a",
//     product_packs: [{pack_id: 307, pack_size: 0.2}],
//     product_referral: false,
//     product_sku: "1-11-1-00336",
//     product_tag: "Salmon Fillet Norwegia 200g a",
//     product_uom: "kg",
//     product_url: "salmon-fillet-norwegia-200g-a",
//     promo_position: null,
//     quantity_discount_label: null,
//     retail_price: 61000,
//     sub_category_id: null,
// }

// const initialOi = {
//     cashback: 0,
//     disc_star_member: 0,
//     discount_badges: 0,
//     expedition_name: "REGULER",
//     flash_sale: null,
//     hasDeliveryPromo: true,
//     hasProductPromo: 0,
//     image: "/dummy-catalogue.jpeg",
//     image_hd: "https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_4x.jpg",
//     image_mobile: "https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_2x.jpg",
//     isAvailable: true,
//     is_special_treatment: false,
//     item_price: 0,
//     main_categories: true,
//     min_order_price: 0,
//     multi_price: 0,
//     normal_price: 0,
//     pack_group: 1,
//     pack_price: 0,
//     position: 1,
//     product_category_id: 0,
//     product_category_name: "",
//     product_id: 0,
//     product_name: "",
//     product_packs: [{pack_id: 0, pack_size: 0}],
//     product_referral: false,
//     product_sku: "",
//     product_tag: "",
//     product_uom: "",
//     product_url: "",
//     promo_position: null,
//     quantity_discount_label: null,
//     retail_price: 0,
//     sub_category_id: null,
// }

// let dummyData = []
// for (let index = 0; index < 12; index++) {
//     dummyData.push(initialOi)    
// }

// const initialState = {
//   error : null,
//   load : false,
//   data : JSON.stringify(dummyData),
// }

// export function catalogue(state = initialState, action) {
//   switch (action.type) {
//     case type:
//       return {
//           ...state,
//           load : true,
//           data : JSON.stringify(action.data)
//       }
//     case 'error' + type :
//       return {
//           data : initialState,
//           load : true,
//           error : action.error
//       }
//     default:
//       return state
//   }
// }

// import getReducer from './getReducer'

// export function catalogue(state, action) {
//   return getReducer(type, initialState)
// }
