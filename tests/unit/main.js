import mainConfig from '../../src/main';

describe('Storybook main.js module', () => {
  const expectedStories = [
		'../stories/**/*.stories.js'
	];
  const expectedAddons = [
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ];

  describe('Main file configuration', () => {

    it('verifies that the stories parameter is set to the main configuration', () => {
      expect(mainConfig.stories).toBeDefined();
    });

    it('verifies that one path is set to the stories array', () => {
      expect(mainConfig.stories).toHaveLength(expectedStories.length);
    });

    it('verifies that the default story path is set to the stories array', () => {
      expect(mainConfig.stories[0]).toBe(expectedStories[0]);
    });

    it('verifies that the addons parameter is set to the main configuration', () => {
      expect(mainConfig.addons).toBeDefined();
    });

    it('verifies that two addons are set to the addons array', () => {
      expect(mainConfig.addons).toHaveLength(expectedAddons.length);
    });

    it('verifies that the accessibility addon is set to the addons array', () => {
      expect(mainConfig.addons[0]).toBe(expectedAddons[0]);
    });

    it('verifies that the documentation addon is set to the addons array', () => {
      expect(mainConfig.addons[1]).toBe(expectedAddons[1]);
    });
  });
});
