const path = require('path');
const { merge } = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const common = require('./webpack.common');
const environment = require('./environment');

const distPath = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      poll: true,
    },
    port: environment.PORT,
  },

  plugins: [
    new WriteFilePlugin(),
  ],
});
