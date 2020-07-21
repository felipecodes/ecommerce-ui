const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[name].[chunkhash].js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].[chunkhash].chunk.js',
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, '../dist'),
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: '/',
  },
});
