const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const environment = require('./environment');
const newrelic = require('./newrelic');

console.table(environment)

module.exports = {
  mode: environment.NODE_ENV,
  entry: ['react-hot-loader/patch', './src/app/index'],
  devtool: environment.DEVTOOL,

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              svgo: {
                plugins: [{ cleanupIDs: false }],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin(environment),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/assets/index.html'),
      // custom options
      newrelic,
      title: 'Sempre em Casa',
      type: 'website',
      siteName: 'Sempre em Casa',
      locale: 'pt-BR',
      robots: environment.ROBOTS_VALUE
    }),
    new webpack.NamedModulesPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '../src/assets/icons/shopping-cart.svg'),
      prefix: 'images/',
      inject: true,
    }),
    new CopyPlugin({
      patterns: [{
        from: 'src/assets/icons',
        to: 'icons',
        flatten: true
      }, {
        from: 'src/assets/images',
        to: 'images',
        flatten: true
      }]
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
