/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const cache = require('gulp-cache');
const flatten = require('gulp-flatten');
const gulpif = require('gulp-if');
const config = require('./config');

const isDev = process.env.NODE_ENV === 'development';

const img = cb => {
  src(config.src.img)
    .pipe(plumber(config.notify))
    .pipe(
      gulpif(
        !isDev,
        cache(
          imagemin({
            verbose: true
          }),
          {
            name: 'imagemin'
          }
        )
      )
    )
    .pipe(flatten())
    .pipe(dest(config.dest.img))
    .pipe(
      cache(webp(), {
        name: 'webp'
      })
    )
    .pipe(dest(config.dest.img));

  cb();
};

exports.img = img;
