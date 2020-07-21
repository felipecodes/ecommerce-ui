module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/react',
    [
      '@babel/preset-typescript',
      {
        baseUrl: './src',
        isTSX: true,
        allExtensions: true,
        jsx: 'preserve'
      }
    ]
  ],

  plugins: [
    '@babel/plugin-proposal-export-default-from',
    'react-hot-loader/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx']
      }
    ]
  ]
};
