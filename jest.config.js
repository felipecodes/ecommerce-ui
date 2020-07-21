const path = require('path');

const ignores = ['/node_modules/', '__mocks__', 'src/app/@types'];

module.exports = {
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  collectCoverageFrom: ['**/*.+(js|jsx|ts|tsx)'],
  testMatch: [
    '**/*.spec.+(js|jsx|ts|tsx)',
    '**/*.spec.+(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: ignores,
  coveragePathIgnorePatterns: ignores,
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
  setupFilesAfterEnv: [path.join(__dirname, 'test/setup.ts')],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/test/mocks/Svg.tsx',
  },
};
