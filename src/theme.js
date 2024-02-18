/**
 * Developed by Anthony Cox in 2024
 */
const generateTheme = (customBase, customBrandTitle, customBrandUrl, customBrandImage) => {
  return {
    base: customBase || 'light',
    brandTitle: customBrandTitle || 'My Storybook Project',
    brandUrl: customBrandUrl || '',
    brandImage: customBrandImage || '',
  };
}
export default generateTheme;
