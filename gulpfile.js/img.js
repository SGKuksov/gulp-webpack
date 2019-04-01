/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');
const imagemin = require('gulp-imagemin');

const img = cb => {
  src(config.src.img)
    .pipe(plumber(config.notify))
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(dest(config.dest.img));

  cb();
};

exports.img = img;
