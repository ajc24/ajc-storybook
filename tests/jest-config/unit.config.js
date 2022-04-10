const { configureUnitTests } = require('ajc-jest-react-testing-library');

const jestConfig = configureUnitTests();
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/index.js');
jestConfig.moduleNameMapper = {};
jestConfig.setupFilesAfterEnv.push('<rootDir>/tests/jest-config/document.config.js');

module.exports = jestConfig;
