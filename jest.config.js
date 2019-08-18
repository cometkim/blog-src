module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  verbose: true,
  testPathIgnorePatterns: [
    'node_modules',
    '.cache',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby)/)',
  ],
  modulePaths: [
    '<rootDir>/src/',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://blog.cometkim.kr',
  setupFiles: [
    '<rootDir>/test/loadershim.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.js',
  ],
};
