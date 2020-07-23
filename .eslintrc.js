module.exports = {
  ignorePatterns: [
    'src/assets',
    'coverage',
    'dist',
    'config',
    '*.js',
    'src/app/@types'
  ],
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: [
          './src'
        ],
        extensions: ['.ts', '.tsx']
      }
    }
  },
  plugins: [
    'html',
    'prettier',
    'module-resolver',
    '@typescript-eslint'
  ],
  env: {
    'browser': true,
    'jest': true
  },
  rules: {
    'import/extensions': [
      "error",
      "never",
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0
  }
}
