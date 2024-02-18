"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "generateTheme", {
  enumerable: true,
  get: function get() {
    return _theme["default"];
  }
});
Object.defineProperty(exports, "mainConfig", {
  enumerable: true,
  get: function get() {
    return _main["default"];
  }
});
Object.defineProperty(exports, "previewConfig", {
  enumerable: true,
  get: function get() {
    return _preview["default"];
  }
});
var _theme = _interopRequireDefault(require("./theme"));
var _main = _interopRequireDefault(require("./main"));
var _preview = _interopRequireDefault(require("./preview"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }