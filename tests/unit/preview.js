import previewConfig from '../../src/preview';

describe('Storybook preview.js module', () => {
  const expectedPreviewConfig = {
    options: {
      isFullScreen: false,
      showNav: true,
      showPanel: false,
      showSearchBox: false,
      panelPosition: 'bottom',
      sortStoriesByKind: false,
      hierarchySeparator: '/',
      hierarchyRootSeparator: null,
      selectedAddonPanel: undefined,
    }
  };

  describe('Preview file configuration', () => {

    it('verifies that the preview configuration is set correctly', () => {
      expect(previewConfig).toStrictEqual(expectedPreviewConfig);
    });
  });
});
