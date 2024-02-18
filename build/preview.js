"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * Developed by Anthony Cox in 2024
 */

/**
 * Storybook preview configuration file
 * @type { import('@storybook/react').Preview }
 */
var preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};
var _default = exports["default"] = preview;