"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _main["default"];
  }
});
Object.defineProperty(exports, "preview", {
  enumerable: true,
  get: function get() {
    return _preview["default"];
  }
});
var _main = _interopRequireDefault(require("./main"));
var _preview = _interopRequireDefault(require("./preview"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }