/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

const img = cb => {
  src(config.src.img)
    .pipe(plumber(config.notify))
    .pipe(dest(config.dest.img));

  cb();
};

exports.img = img;
