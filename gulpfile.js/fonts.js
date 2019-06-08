/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

const fonts = cb => {
  src(config.fonts.src)
    .pipe(plumber(config.notify))
    .pipe(dest(config.fonts.dest));

  cb();
};

exports.fonts = fonts;
