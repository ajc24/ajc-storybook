# ajc-storybook

An easy to import and use [`storybook`](https://github.com/storybookjs/storybook/tree/main/app/react) configuration module designed for use with ReactJs applications.

# Installation

Add the following entry to the `dependencies` or `devDependencies` section of your projects `package.json` file:

```
"ajc-storybook": "github:ajc24/ajc-storybook"
```

---

# Add Storybook Configuration Files

Create a `<rootDir>/.storybook` folder in your project workspace.

## Add the `main.js` file

Create a `main.js` file in the `.storybook` folder in your project workspace so that a file exists with the path `<rootDir>/.storybook/main.js`.

Add the following content to the file:

```javascript
import { mainConfig } from 'ajc-storybook';

module.exports = mainConfig;
```

## Add the `theme.js` file 

Create a `theme.js` file in the `.storybook` folder in your project workspace so that a file exists with the path `<rootDir>/.storybook/theme.js`.

Add the following content to the file:

```javascript
import { create } from '@storybook/theming';
import { generateTheme } from 'ajc-storybook';

/* Parameters: customTheme, customBrandTitle, customBrandUrl, customBrandImage */
const theme = generateTheme('light', 'My Storybook Project', 'http://my-storybook-url.com', '');

export default create(theme);
```

## Add the `manager.js` file

Create a `manager.js` file in the `.storybook` folder in your project workspace so that a file exists with the path `<rootDir>/.storybook/manager.js`.

Add the following content to the file:

```javascript
import { addons } from '@storybook/addons';
import storybookTheme from './theme';

addons.setConfig({
  theme: storybookTheme,
});
```

## Add the `preview.js` file

Create a `preview.js` file in the `.storybook` folder in your project workspace so that a file exists with the path `<rootDir>/.storybook/preview.js`.

Add the following content to the file:

```javascript
import { addParameters } from '@storybook/react';
import { previewConfig } from 'ajc-storybook';

addParameters(previewConfig);
```

---

# Adding Stories to your Project

Create a `<rootDir>/stories` folder in your project workspace.

Add stories to this directory and ensure that each individual component story you develop uses the `*.stories.js` file extension.

---
