/* eslint-disable import/no-extraneous-dependencies */
const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('./config');
const { scss } = require('./scss');
const { pug } = require('./pug');
const { twig } = require('./twig');
const { javascript } = require('./javascript');
const { img } = require('./img');
const { fonts } = require('./fonts');
// const { svgSprite } = require('./svgSprite');

const serve = cb => {
  browserSync.init({
    server: 'dist/',
    startPath: 'index.html',
    // open: false,
    port: 8080
  });

  watch([
    config.watch.pug, 
    config.watch.blocks.pug,
    config.watch.template, 
  ]).on('change', series(pug, browserSync.reload));

  watch([config.watch.twig, config.watch.blocks.twig]).on(
    'change',
    series(twig, browserSync.reload)
  );

  watch([config.watch.scss, config.watch.blocks.scss]).on(
    'change',
    series(scss, browserSync.reload)
  );;

  watch([config.watch.js, config.watch.blocks.js]).on(
    'change',
    series(javascript, browserSync.reload)
  );

  watch(config.watch.img).on('change', series(img, browserSync.reload));
  watch(config.watch.img).on('add', series(img, browserSync.reload));

  watch(config.watch.fonts).on('change', series(fonts, browserSync.reload));
  watch(config.watch.fonts).on('add', series(fonts, browserSync.reload));

  watch([
    `${config.dest.html}*.html`,
    `${config.dest.js}*.js`,
    `${config.dest.img}*.{jpg,jpeg,png,svg,webp,gif}`
  ]).on('change', browserSync.reload);

  cb();
};

exports.serve = serve;
