/* eslint-disable import/no-extraneous-dependencies */
const config = require('./config');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    path: config.js.dest,
    filename: 'script.min.js'
  },
  devtool: config.isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  externals: {
    // jquery: 'jQuery',
    // lodash : {
    //   commonjs: 'lodash',
    //   amd: 'lodash',
    //   root: '_' // indicates global variable
    // }
  },
  optimization: {
    // runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   },
    //   chunks: 'async',
    //   minChunks: 1,
    //   minSize: 30000,
    //   name: true
    // }
  }
};
