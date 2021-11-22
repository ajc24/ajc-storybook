import generateTheme from '../../src/theme';

describe('Storybook theme.js module', () => {
  describe('generateTheme() default behaviour', () => {
    let themeJson;

    beforeAll(() => {
      themeJson = generateTheme();
    });

    it('verifies that the default value for base is set correctly', () => {
      expect(themeJson.base).toBe('light');
    });

    it('verifies that the default value for brandTitle is set correctly', () => {
      expect(themeJson.brandTitle).toBe('My Storybook Project');
    });

    it('verifies that the default value for brandUrl is set correctly', () => {
      expect(themeJson.brandUrl).toBe('');
    });

    it('verifies that the default value for brandImage is set correctly', () => {
      expect(themeJson.brandImage).toBe('');
    });
  });

  describe('generateTheme() custom behaviour', () => {
    let themeJson;

    beforeAll(() => {
      themeJson = generateTheme('customBase', 'Custom Title', 'brandUrl', 'brandImage');
    });

    it('verifies that the custom value for base is set correctly', () => {
      expect(themeJson.base).toBe('customBase');
    });

    it('verifies that the custom value for brandTitle is set correctly', () => {
      expect(themeJson.brandTitle).toBe('Custom Title');
    });

    it('verifies that the custom value for brandUrl is set correctly', () => {
      expect(themeJson.brandUrl).toBe('brandUrl');
    });

    it('verifies that the custom value for brandImage is set correctly', () => {
      expect(themeJson.brandImage).toBe('brandImage');
    });
  });
});
