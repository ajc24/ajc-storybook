"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * Developed by Anthony Cox in 2024
 */
var generateTheme = function generateTheme(customBase, customBrandTitle, customBrandUrl, customBrandImage) {
  return {
    base: customBase || 'light',
    brandTitle: customBrandTitle || 'My Storybook Project',
    brandUrl: customBrandUrl || '',
    brandImage: customBrandImage || ''
  };
};
var _default = exports["default"] = generateTheme;