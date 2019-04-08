/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./config');

const javascript = cb => {
  src(config.src.js)
    .pipe(plumber(config.notify))
    .pipe(
      webpack({
        /* mode */
        // mode: 'production',
        mode: 'development',
        /* config */
        output: {
          path: config.dest.js,
          filename: 'script.min.js'
        },
        devtool: 'source-map',
        devServer: {
          overlay: true
        },
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
          runtimeChunk: 'single',
          splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
              }
            },
            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
          }
        }
      })
    )
    .pipe(dest(config.dest.js));

  cb();
};

exports.javascript = javascript;
