"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const generateTheme = function (customBase, customBrandTitle, customBrandUrl, customBrandImage) {
  return {
    base: customBase || 'light',
    brandTitle: customBrandTitle || 'My Storybook Project',
    brandUrl: customBrandUrl || '',
    brandImage: customBrandImage || ''
  };
};

var _default = generateTheme;
exports.default = _default;