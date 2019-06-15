/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
// const webp = require('gulp-webp');
const flatten = require('gulp-flatten');
const gulpif = require('gulp-if');
const config = require('./config');

const isDev = process.env.NODE_ENV === 'development';

const img = cb => {
  src(config.img.src)
    .pipe(plumber(config.notify))
    .pipe(
      gulpif(
        !isDev,
        imagemin({
          verbose: true
        })
      )
    )
    .pipe(flatten())
    .pipe(dest(config.img.dest));
  // .pipe(webp())
  // .pipe(dest(config.img.dest));

  cb();
};

exports.img = img;
