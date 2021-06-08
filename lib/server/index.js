"use strict";

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _views = _interopRequireDefault(require("../views"));

var _App = _interopRequireDefault(require("../client/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

require('dotenv').config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3002;
app.use(_express["default"].json());
app.use(_express["default"]["static"]('public'));
app.get('/', function (req, res) {
  var app = _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_App["default"], null));

  var htmlString = (0, _views["default"])(app);
  res.send(htmlString);
});
app.listen(PORT, function (e) {
  return console.log("Server is listening on PORT:" + PORT);
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "/home/hasby/projects/reactjs-ssr/src/server/index.js");
  reactHotLoader.register(PORT, "PORT", "/home/hasby/projects/reactjs-ssr/src/server/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();