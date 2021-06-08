/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.jsx":
/*!****************************!*\
  !*** ./src/client/App.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ \"./src/client/App.css\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar Home = _loadable_component__WEBPACK_IMPORTED_MODULE_3___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"components-pages-Home\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | components-pages-Home */ \"components-pages-Home\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/pages/Home */ \"./src/client/components/pages/Home.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./components/pages/Home */ \"./src/client/components/pages/Home.jsx\");\n    }\n\n    return eval('require.resolve')(\"./components/pages/Home\");\n  }\n});\nvar List = _loadable_component__WEBPACK_IMPORTED_MODULE_3___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"components-pages-List\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | components-pages-List */ \"components-pages-List\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/pages/List */ \"./src/client/components/pages/List.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./components/pages/List */ \"./src/client/components/pages/List.jsx\");\n    }\n\n    return eval('require.resolve')(\"./components/pages/List\");\n  }\n});\nvar Catalogue = _loadable_component__WEBPACK_IMPORTED_MODULE_3___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"components-items-Catalogue\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | components-items-Catalogue */ \"components-items-Catalogue\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/items/Catalogue */ \"./src/client/components/items/Catalogue.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./components/items/Catalogue */ \"./src/client/components/items/Catalogue.jsx\");\n    }\n\n    return eval('require.resolve')(\"./components/items/Catalogue\");\n  }\n}); // const Home = isLoadable ? loadable(() => import('./components/pages/Home')) : require('./components/pages/Home') \n// const List = isLoadable ? loadable(() => import('./components/pages/List')) : require('./components/pages/List') \n// import Home from './components/pages/Home'\n// import List from './components/pages/List'\n// const Home = require('./components/pages/Home');\n// const List = require('./components/pages/Home');\n// const Home = import('./components/pages/Home');\n// const List = import('./components/pages/Home');\n// let Home = () => <></>\n// let List = () => <></>\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n    to: \"/home\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n    to: \"/list\"\n  }, \"List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n    to: \"/catalogue\"\n  }, \"Catalogue\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/list\"\n  }, \"List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/catalogue\"\n  }, \"Catalogue\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/\",\n    exact: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", {\n    className: \"bismillah\"\n  }, \"Apa ya\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/home\",\n    component: Home\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/list\",\n    component: List\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/catalogue\",\n    component: Catalogue\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"ini footer\")));\n}\n\nvar _default = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(App);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, \"Home\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n  reactHotLoader.register(List, \"List\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n  reactHotLoader.register(Catalogue, \"Catalogue\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n  reactHotLoader.register(App, \"App\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/App.jsx?");

/***/ }),

/***/ "./src/client/store/actions/get/catalogue.js":
/*!***************************************************!*\
  !*** ./src/client/store/actions/get/catalogue.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"type\": () => (/* binding */ type),\n/* harmony export */   \"getCatalogue\": () => (/* binding */ getCatalogue)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/client/store/actions/getData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar path = \"/get/catalogue\";\nvar type = {\n  catalogue: 'getCatalogue'\n};\nfunction getCatalogue(params) {\n  var defaultParams = {\n    area_sameday: \"REGULER\",\n    category: 8,\n    limit18: true,\n    pack: 1\n  };\n  if (params) defaultParams = _objectSpread({\n    params: params\n  }, defaultParams);\n  return (0,_getData__WEBPACK_IMPORTED_MODULE_0__.default)(path, type, defaultParams);\n} // const initialData = {\n//     cashback: 0,\n//     disc_star_member: 3,\n//     discount_badges: 24,\n//     expedition_name: \"REGULER\",\n//     flash_sale: null,\n//     hasDeliveryPromo: true,\n//     hasProductPromo: 1,\n//     image: \"/dummy-catalogue.jpeg\",\n//     image_hd: \"https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_4x.jpg\",\n//     image_mobile: \"https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_2x.jpg\",\n//     isAvailable: true,\n//     is_special_treatment: true,\n//     item_price: 305000,\n//     main_categories: true,\n//     min_order_price: 0,\n//     multi_price: 0,\n//     normal_price: 80000,\n//     pack_group: 1,\n//     pack_price: 61000,\n//     position: 1,\n//     product_category_id: 8,\n//     product_category_name: \"Harga Kawan\",\n//     product_id: 336,\n//     product_name: \"Salmon Fillet Norwegia 200g a\",\n//     product_packs: [{pack_id: 307, pack_size: 0.2}],\n//     product_referral: false,\n//     product_sku: \"1-11-1-00336\",\n//     product_tag: \"Salmon Fillet Norwegia 200g a\",\n//     product_uom: \"kg\",\n//     product_url: \"salmon-fillet-norwegia-200g-a\",\n//     promo_position: null,\n//     quantity_discount_label: null,\n//     retail_price: 61000,\n//     sub_category_id: null,\n// }\n// const initialOi = {\n//     cashback: 0,\n//     disc_star_member: 0,\n//     discount_badges: 0,\n//     expedition_name: \"REGULER\",\n//     flash_sale: null,\n//     hasDeliveryPromo: true,\n//     hasProductPromo: 0,\n//     image: \"/dummy-catalogue.jpeg\",\n//     image_hd: \"https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_4x.jpg\",\n//     image_mobile: \"https://dtq2i388ejbah.cloudfront.net/images/imagedensity/salmon_mobile_home_2x.jpg\",\n//     isAvailable: true,\n//     is_special_treatment: false,\n//     item_price: 0,\n//     main_categories: true,\n//     min_order_price: 0,\n//     multi_price: 0,\n//     normal_price: 0,\n//     pack_group: 1,\n//     pack_price: 0,\n//     position: 1,\n//     product_category_id: 0,\n//     product_category_name: \"\",\n//     product_id: 0,\n//     product_name: \"\",\n//     product_packs: [{pack_id: 0, pack_size: 0}],\n//     product_referral: false,\n//     product_sku: \"\",\n//     product_tag: \"\",\n//     product_uom: \"\",\n//     product_url: \"\",\n//     promo_position: null,\n//     quantity_discount_label: null,\n//     retail_price: 0,\n//     sub_category_id: null,\n// }\n// let dummyData = []\n// for (let index = 0; index < 12; index++) {\n//     dummyData.push(initialOi)    \n// }\n// const initialState = {\n//   error : null,\n//   load : false,\n//   data : JSON.stringify(dummyData),\n// }\n// export function catalogue(state = initialState, action) {\n//   switch (action.type) {\n//     case type:\n//       return {\n//           ...state,\n//           load : true,\n//           data : JSON.stringify(action.data)\n//       }\n//     case 'error' + type :\n//       return {\n//           data : initialState,\n//           load : true,\n//           error : action.error\n//       }\n//     default:\n//       return state\n//   }\n// }\n// import getReducer from './getReducer'\n// export function catalogue(state, action) {\n//   return getReducer(type, initialState)\n// }\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(path, \"path\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/catalogue.js\");\n  reactHotLoader.register(type, \"type\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/catalogue.js\");\n  reactHotLoader.register(getCatalogue, \"getCatalogue\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/catalogue.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/get/catalogue.js?");

/***/ }),

/***/ "./src/client/store/actions/get/category.js":
/*!**************************************************!*\
  !*** ./src/client/store/actions/get/category.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"type\": () => (/* binding */ type),\n/* harmony export */   \"getCategory\": () => (/* binding */ getCategory)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/client/store/actions/getData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar path = \"/get/categoryandsubcat\";\nvar type = {\n  category: 'getCategory'\n};\nfunction getCategory(params) {\n  var defaultParams = {\n    area: \"REGULER\"\n  };\n  if (params) defaultParams = _objectSpread({\n    params: params\n  }, defaultParams);\n  return (0,_getData__WEBPACK_IMPORTED_MODULE_0__.default)(path, type, defaultParams);\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(path, \"path\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/category.js\");\n  reactHotLoader.register(type, \"type\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/category.js\");\n  reactHotLoader.register(getCategory, \"getCategory\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/category.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/get/category.js?");

/***/ }),

/***/ "./src/client/store/actions/get/productSearch.js":
/*!*******************************************************!*\
  !*** ./src/client/store/actions/get/productSearch.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"type\": () => (/* binding */ type),\n/* harmony export */   \"getProductSearch\": () => (/* binding */ getProductSearch)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/client/store/actions/getData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar path = \"/get/productSearch\";\nvar type = {\n  productSearch: 'getProductSearch'\n};\nfunction getProductSearch(params) {\n  var defaultParams = {\n    area: \"REGULER\"\n  };\n  if (params) defaultParams = _objectSpread({\n    params: params\n  }, defaultParams);\n  return (0,_getData__WEBPACK_IMPORTED_MODULE_0__.default)(path, type, defaultParams);\n} // const initialState = {\n//   error : null,\n//   data : ''\n// }\n// export function productSearch(state = initialState, action) {\n//   switch (action.type) {\n//     case type:\n//       return {\n//           ...state,\n//           data : JSON.stringify(action.data)\n//       }\n//     case 'error' + type :\n//       return {\n//           data : [],\n//           error : action.error\n//       }\n//     default:\n//       return state\n//   }\n// }\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(path, \"path\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/productSearch.js\");\n  reactHotLoader.register(type, \"type\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/productSearch.js\");\n  reactHotLoader.register(getProductSearch, \"getProductSearch\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/productSearch.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/get/productSearch.js?");

/***/ }),

/***/ "./src/client/store/actions/get/sliderProducts.js":
/*!********************************************************!*\
  !*** ./src/client/store/actions/get/sliderProducts.js ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"type\": () => (/* binding */ type),\n/* harmony export */   \"getSliderProducts\": () => (/* binding */ getSliderProducts)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/client/store/actions/getData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar path = \"/get/sliderProducts\";\nvar type = {\n  sliderProducts: 'getSliderProducts'\n};\nfunction getSliderProducts(params) {\n  var defaultParams = {};\n  if (params) defaultParams = _objectSpread({\n    params: params\n  }, defaultParams);\n  return (0,_getData__WEBPACK_IMPORTED_MODULE_0__.default)(path, type, defaultParams);\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(path, \"path\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/sliderProducts.js\");\n  reactHotLoader.register(type, \"type\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/sliderProducts.js\");\n  reactHotLoader.register(getSliderProducts, \"getSliderProducts\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/get/sliderProducts.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/get/sliderProducts.js?");

/***/ }),

/***/ "./src/client/store/actions/getData.js":
/*!*********************************************!*\
  !*** ./src/client/store/actions/getData.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar domain = \"https://staging1925627989.brambang.com\" || 0;\n\nfunction objectToUrlParams(params) {\n  var urlParams = '?';\n  var urlKeys = Object.keys(params);\n  urlKeys.map(function (item, index) {\n    if (index !== 0) urlParams += '&';\n    urlParams += \"\".concat(item, \"=\").concat(params[item]);\n  });\n  return urlParams;\n}\n\nvar _default = function _default(path, type, params) {\n  var paramsString = params ? objectToUrlParams(params) : '';\n  var url = \"\".concat(domain).concat(path).concat(paramsString); // const url = getData(path, defaultParams)\n  // console.log({type});\n\n  var reducerType = type[Object.keys(type)[0]]; // console.log({reducerType});\n\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url);\n\n            case 3:\n              data = _context.sent;\n              dispatch({\n                type: reducerType,\n                data: data.data\n              });\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              dispatch({\n                type: 'error_' + reducerType,\n                error: _context.t0\n              });\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(domain, \"domain\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/getData.js\");\n  reactHotLoader.register(objectToUrlParams, \"objectToUrlParams\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/getData.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/getData.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/getData.js?");

/***/ }),

/***/ "./src/client/store/actions/pages/catalogue.js":
/*!*****************************************************!*\
  !*** ./src/client/store/actions/pages/catalogue.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_catalogue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get/catalogue */ \"./src/client/store/actions/get/catalogue.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar _default = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(store) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return store.dispatch((0,_get_catalogue__WEBPACK_IMPORTED_MODULE_0__.getCatalogue)());\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function _default(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/pages/catalogue.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/pages/catalogue.js?");

/***/ }),

/***/ "./src/client/store/actions/pages/home.js":
/*!************************************************!*\
  !*** ./src/client/store/actions/pages/home.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_catalogue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get/catalogue */ \"./src/client/store/actions/get/catalogue.js\");\n/* harmony import */ var _get_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get/category */ \"./src/client/store/actions/get/category.js\");\n/* harmony import */ var _get_productSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get/productSearch */ \"./src/client/store/actions/get/productSearch.js\");\n/* harmony import */ var _get_sliderProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get/sliderProducts */ \"./src/client/store/actions/get/sliderProducts.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(store) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return store.dispatch((0,_get_catalogue__WEBPACK_IMPORTED_MODULE_0__.getCatalogue)());\n\n          case 2:\n            _context.next = 4;\n            return store.dispatch((0,_get_category__WEBPACK_IMPORTED_MODULE_1__.getCategory)());\n\n          case 4:\n            _context.next = 6;\n            return store.dispatch((0,_get_productSearch__WEBPACK_IMPORTED_MODULE_2__.getProductSearch)());\n\n          case 6:\n            _context.next = 8;\n            return store.dispatch((0,_get_sliderProducts__WEBPACK_IMPORTED_MODULE_3__.getSliderProducts)());\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function _default(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/hasby/projects/reactjs-ssr/src/client/store/actions/pages/home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/pages/home.js?");

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./src/client/store/reducers/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nconsole.log(_reducers__WEBPACK_IMPORTED_MODULE_2__.default);\n\nvar _default = function _default(preloadState) {\n  if (preloadState) //  return createStore(combineReducers(reducers.default), preloadState)\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default), preloadState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()))); // return createStore(combineReducers(reducers.default))\n\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default), (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/hasby/projects/reactjs-ssr/src/client/store/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/index.js?");

/***/ }),

/***/ "./src/client/store/reducers/counter.js":
/*!**********************************************!*\
  !*** ./src/client/store/reducers/counter.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ counter)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nfunction counter() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n\n    case 'DECREMENT':\n      return state - 1;\n\n    default:\n      return state;\n  }\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(counter, \"counter\", \"/home/hasby/projects/reactjs-ssr/src/client/store/reducers/counter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/reducers/counter.js?");

/***/ }),

/***/ "./src/client/store/reducers/getReducer.js":
/*!*************************************************!*\
  !*** ./src/client/store/reducers/getReducer.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getReducer)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n// import path from 'path'\n// const testFolder = path.resolve(__dirname, '../../src/client/store/actions/get');\n// const fs = require('fs');\n// fs.readdirSync(testFolder).forEach((file) => {\n//     const reducerAction = require(`../actions/get/${file}`)\n//     const reducer = Object.keys(reducerAction.type)[0]\n//     const type = reducerAction.type[reducer]\n//     console.log({type});\n//     console.log({reducer});\n//     reducersTes[reducer] = getReducer(type, initialState)\n// });\n// const reducersTes = {}\n// reducersTes[reducer] = getReducer(type, initialState)\n// console.log({reducersTes});\nvar defaultState = {\n  error: null,\n  load: false,\n  data: ''\n};\nfunction getReducer(type, initialState) {\n  return function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState || defaultState;\n    var action = arguments.length > 1 ? arguments[1] : undefined;\n\n    switch (action.type) {\n      case type:\n        return {\n          error: null,\n          // data : action.data \n          load: true,\n          data: JSON.stringify(action.data)\n        };\n\n      case 'error_' + type:\n        return {\n          error: action.error,\n          load: true,\n          data: ''\n        };\n\n      default:\n        return state;\n    }\n  };\n} // import type from '../type'\n// const reducers = {}\n// Object.keys(type).map(key => {\n//   reducers[key] = getReducer(type[key], initialState)\n// })\n// export default reducersTes\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(defaultState, \"defaultState\", \"/home/hasby/projects/reactjs-ssr/src/client/store/reducers/getReducer.js\");\n  reactHotLoader.register(getReducer, \"getReducer\", \"/home/hasby/projects/reactjs-ssr/src/client/store/reducers/getReducer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/reducers/getReducer.js?");

/***/ }),

/***/ "./src/client/store/reducers/index.js":
/*!********************************************!*\
  !*** ./src/client/store/reducers/index.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ \"./src/client/store/reducers/counter.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/client/store/reducers/todo.js\");\n/* harmony import */ var _getReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getReducer */ \"./src/client/store/reducers/getReducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar _default = {\n  counter: _counter__WEBPACK_IMPORTED_MODULE_0__.default,\n  todo: _todo__WEBPACK_IMPORTED_MODULE_1__.default,\n  catalogue: (0,_getReducer__WEBPACK_IMPORTED_MODULE_2__.default)('getCatalogue'),\n  category: (0,_getReducer__WEBPACK_IMPORTED_MODULE_2__.default)('getCategory'),\n  productSearch: (0,_getReducer__WEBPACK_IMPORTED_MODULE_2__.default)('getProductSearch'),\n  sliderProducts: (0,_getReducer__WEBPACK_IMPORTED_MODULE_2__.default)('getSliderProducts')\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/hasby/projects/reactjs-ssr/src/client/store/reducers/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/reducers/index.js?");

/***/ }),

/***/ "./src/client/store/reducers/todo.js":
/*!*******************************************!*\
  !*** ./src/client/store/reducers/todo.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todo)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nfunction todo() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'ADD_TODO':\n      return state.concat([action.text]);\n\n    default:\n      return state;\n  }\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(todo, \"todo\", \"/home/hasby/projects/reactjs-ssr/src/client/store/reducers/todo.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/reducers/todo.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/server/router/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views */ \"./src/views/index.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_views__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n// require('dotenv').config()\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar PORT = \"3001\" || 0;\n\n\n\n\n\n\n\n\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\nvar staticFile = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(__dirname + '../../../public');\nvar clientFile = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(__dirname + '../../client');\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().static(staticFile));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().static(clientFile));\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__.default);\napp.get('*', function (req, res) {\n  var store = req.store; // if(req.path == 'catalogue')\n  //         dispatch(getCatalogue(\n  //             { \n  //                 area_sameday : \"REGULER\",\n  //                 category : 8,\n  //                 limit18 : true,\n  //                 pack : 1\n  //             }\n  //         ))\n\n  console.log(req.path); // if(req.path === '/catalogue')\n  //     await cataloguePage()\n\n  var preloadedState = store.getState(); // This is the stats file generated by webpack loadable plugin\n\n  var statsFile = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(__dirname + '../../client' + '/loadable-stats.json'); // We create an extractor from the statsFile\n\n  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_4__.ChunkExtractor({\n    statsFile: statsFile\n  }); // Wrap your application using \"collectChunks\"\n\n  var jsx = extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.StaticRouter, {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_client_App__WEBPACK_IMPORTED_MODULE_10__.default, null)))); // Render your application\n\n  var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_6__.renderToString)(jsx); // You can now collect your script tags\n\n  var scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();\n  // You can also collect your \"preload/prefetch\" links\n\n  var linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();\n  // And you can even collect your style tags (if you use \"mini-css-extract-plugin\")\n\n  var styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();\n\n  var htmlString = _views__WEBPACK_IMPORTED_MODULE_9___default()(html, linkTags, styleTags, scriptTags, preloadedState);\n  res.send(htmlString);\n});\napp.listen(PORT, function (e) {\n  return console.log(\"Server is listening on PORT:\" + PORT);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/home/hasby/projects/reactjs-ssr/src/server/index.js\");\n  reactHotLoader.register(PORT, \"PORT\", \"/home/hasby/projects/reactjs-ssr/src/server/index.js\");\n  reactHotLoader.register(staticFile, \"staticFile\", \"/home/hasby/projects/reactjs-ssr/src/server/index.js\");\n  reactHotLoader.register(clientFile, \"clientFile\", \"/home/hasby/projects/reactjs-ssr/src/server/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/server/index.js?");

/***/ }),

/***/ "./src/server/router/index.js":
/*!************************************!*\
  !*** ./src/server/router/index.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/store */ \"./src/client/store/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nvar rootRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\nvar store = (0,_client_store__WEBPACK_IMPORTED_MODULE_1__.default)();\nrootRouter.use(function (req, res, next) {\n  req.store = store;\n  next();\n});\n\nfunction routerStore(store, dispatchStore) {\n  router.get('/', /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return dispatchStore(store);\n\n            case 2:\n              next();\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  return router;\n}\n\n // const testFolder = path.resolve(__dirname, '../../src/server/router');\n// const testFolder = path.resolve(__dirname, '../../src/client/store/actions/get');\n\nvar testFolder = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '../../src/client/store/actions/pages');\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nfs.readdirSync(testFolder).forEach(function (file) {\n  // if(file !== 'catalogue.js')\n  // return\n  var name = file.split('.js')[0];\n  var urlPath = \"/\".concat(name); // const route = require(`./${file}`).default\n\n  function capitalizeFirstLetter(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n  }\n\n  var capitalFirst = capitalizeFirstLetter(name); // const action = require(`../../client/store/actions/page/${file}`)[`get${capitalFirst}`]\n\n  var action = __webpack_require__(\"./src/client/store/actions/pages sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(file))[\"default\"];\n\n  rootRouter.use(urlPath, routerStore(store, action));\n}); // import catalogue from './catalogue'\n// rootRouter.use('/catalogue', routerStore(store, catalogue))\n\nvar _default = rootRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/home/hasby/projects/reactjs-ssr/src/server/router/index.js\");\n  reactHotLoader.register(rootRouter, \"rootRouter\", \"/home/hasby/projects/reactjs-ssr/src/server/router/index.js\");\n  reactHotLoader.register(store, \"store\", \"/home/hasby/projects/reactjs-ssr/src/server/router/index.js\");\n  reactHotLoader.register(routerStore, \"routerStore\", \"/home/hasby/projects/reactjs-ssr/src/server/router/index.js\");\n  reactHotLoader.register(testFolder, \"testFolder\", \"/home/hasby/projects/reactjs-ssr/src/server/router/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/hasby/projects/reactjs-ssr/src/server/router/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/server/router/index.js?");

/***/ }),

/***/ "./src/views/index.js":
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
/***/ ((module) => {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nmodule.exports = function (app, linkTags, styleTags, scriptTags, preloadedState) {\n  return \"<!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, minimum-scale=1\\\" />\\n        \".concat(linkTags, \"\\n        \").concat(styleTags, \"\\n    </head>\\n    <body>\\n       <div id=\\\"root\\\">\").concat(app, \"</div> \\n        \").concat(scriptTags, \"\\n        <script>\\n          // WARNING: See the following for security issues around embedding JSON in HTML:\\n          // https://redux.js.org/recipes/server-rendering/#security-considerations\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"\\n        </script>\\n    </body>\\n    </html>\");\n};\n\n//# sourceURL=webpack://reactjs-ssr/./src/views/index.js?");

/***/ }),

/***/ "./src/client/App.css":
/*!****************************!*\
  !*** ./src/client/App.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"bismillah\": \"bismillah_4QFZL\"\n});\n\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/App.css?");

/***/ }),

/***/ "./src/client/store/actions/pages sync recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./src/client/store/actions/pages/ sync ^\.\/.*$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./catalogue\": \"./src/client/store/actions/pages/catalogue.js\",\n\t\"./catalogue.js\": \"./src/client/store/actions/pages/catalogue.js\",\n\t\"./home\": \"./src/client/store/actions/pages/home.js\",\n\t\"./home.js\": \"./src/client/store/actions/pages/home.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/client/store/actions/pages sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/store/actions/pages/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/polyfill");;

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/component");;

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/server");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-loader/root");;

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-number-format");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "react-virtualized-auto-sizer":
/*!***********************************************!*\
  !*** external "react-virtualized-auto-sizer" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-virtualized-auto-sizer");;

/***/ }),

/***/ "react-window":
/*!*******************************!*\
  !*** external "react-window" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-window");;

/***/ }),

/***/ "react-window-scroller":
/*!****************************************!*\
  !*** external "react-window-scroller" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-window-scroller");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;