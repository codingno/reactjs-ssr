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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/client/App.css\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar Home = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-Home\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | pages-Home */ \"pages-Home\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home */ \"./src/client/pages/Home.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/Home */ \"./src/client/pages/Home.jsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/Home\");\n  }\n});\nvar List = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-List\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | pages-List */ \"pages-List\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/List */ \"./src/client/pages/List.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/List */ \"./src/client/pages/List.jsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/List\");\n  }\n});\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n    to: \"/home\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n    to: \"/list\"\n  }, \"List\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/list\"\n  }, \"List\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    exact: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"bismillah\"\n  }, \"Apa ya\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/home\",\n    component: Home\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/list\",\n    component: List\n  })));\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, \"Home\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n  reactHotLoader.register(List, \"List\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n  reactHotLoader.register(App, \"App\", \"/home/hasby/projects/reactjs-ssr/src/client/App.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/App.jsx?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views */ \"./src/views/index.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_views__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = process.env.PORT || 3002;\n\n\n\n\n\n\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\nvar staticFile = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname + '../../../public');\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(staticFile));\napp.get('*', function (req, res) {\n  // This is the stats file generated by webpack loadable plugin\n  var statsFile = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname + '../../../public/loadable-stats.json'); // We create an extractor from the statsFile\n\n  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_2__.ChunkExtractor({\n    statsFile: statsFile\n  }); // Wrap your application using \"collectChunks\"\n\n  var jsx = extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_App__WEBPACK_IMPORTED_MODULE_7__.default, null))); // Render your application\n\n  var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(jsx); // You can now collect your script tags\n\n  var scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();\n  // You can also collect your \"preload/prefetch\" links\n\n  var linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();\n  // And you can even collect your style tags (if you use \"mini-css-extract-plugin\")\n\n  var styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();\n\n  var htmlString = _views__WEBPACK_IMPORTED_MODULE_6___default()(html, linkTags, styleTags, scriptTags);\n  res.send(htmlString);\n});\napp.listen(PORT, function (e) {\n  return console.log(\"Server is listening on PORT:\" + PORT);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/home/hasby/projects/reactjs-ssr/src/server/index.js\");\n  reactHotLoader.register(PORT, \"PORT\", \"/home/hasby/projects/reactjs-ssr/src/server/index.js\");\n  reactHotLoader.register(staticFile, \"staticFile\", \"/home/hasby/projects/reactjs-ssr/src/server/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://reactjs-ssr/./src/server/index.js?");

/***/ }),

/***/ "./src/views/index.js":
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
/***/ ((module) => {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nmodule.exports = function (app, linkTags, styleTags, scriptTags) {\n  return \"<!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        \".concat(linkTags, \"\\n        \").concat(styleTags, \"\\n    </head>\\n    <body>\\n       <div id=\\\"root\\\">\").concat(app, \"</div> \\n        \").concat(scriptTags, \"\\n    </body>\\n    </html>\");\n};\n\n//# sourceURL=webpack://reactjs-ssr/./src/views/index.js?");

/***/ }),

/***/ "./src/client/App.css":
/*!****************************!*\
  !*** ./src/client/App.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"bismillah\": \"bismillah_4QFZL\"\n});\n\n\n//# sourceURL=webpack://reactjs-ssr/./src/client/App.css?");

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

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;