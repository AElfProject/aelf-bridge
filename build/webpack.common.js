/**
 * @file common config
 * @author atom-yang
 */

/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const {ROOT} = require('./utils');
const {version, name} = require(path.resolve(ROOT, './package.json'));

const banner = `${name}.js v${version} \n(c) 2019-${new Date().getFullYear()} AElf \nReleased under MIT License`;

const baseConfig = {
  entry: path.resolve(ROOT, 'src/index.js'),
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve(ROOT, 'src'),
      path.resolve(ROOT, 'node_modules')
    ],
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};

module.exports = baseConfig;
