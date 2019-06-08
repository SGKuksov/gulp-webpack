/* eslint-disable import/no-extraneous-dependencies */
const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('./config');
const { scss } = require('./scss');
// const { pug } = require('./pug');
const { twig } = require('./twig');
const { javascript } = require('./javascript');
const { img } = require('./img');
const { fonts } = require('./fonts');
// const { video } = require('./video');
// const { svgSprite } = require('./svgSprite');

const serve = cb => {
  browserSync.init({
    server: 'dist/',
    startPath: 'index.html',
    open: false,
    port: 8080
  });

  // watch(config.pug.watch).on('change', series(pug, browserSync.reload));

  watch(config.twig.watch).on('change', series(twig, browserSync.reload));

  watch(config.scss.watch).on('change', series(scss, browserSync.reload));

  watch(config.js.watch).on('change', series(javascript, browserSync.reload));

  watch(config.img.watch).on('change', series(img, browserSync.reload));
  watch(config.img.watch).on('add', series(img, browserSync.reload));

  // watch(config.video.watch).on('change', series(video, browserSync.reload));
  // watch(config.video.watch).on('add', series(video, browserSync.reload));

  watch(config.fonts.watch).on('change', series(fonts, browserSync.reload));
  watch(config.fonts.watch).on('add', series(fonts, browserSync.reload));

  cb();
};

exports.serve = serve;
