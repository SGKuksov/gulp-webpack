/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-cleancss');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const objectFitImages = require('postcss-object-fit-images');
const browserSync = require('browser-sync').create();
const size = require('gulp-size');
const gulpif = require('gulp-if');
const config = require('./config');
const { reload } = browserSync;

const isDev = process.env.NODE_ENV === 'development';

const scss = cb => {
  const plugins = [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    mqpacker({
      sort: true
    }),
    objectFitImages()
  ];

  src(config.src.scss)
    .pipe(plumber(config.notify))
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(wait(200))
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(postcss(plugins))
    .pipe(gulpif(isDev, sourcemaps.write('/')))
    .pipe(gulpif(!isDev, cleanCSS()))
    .pipe(gulpif(!isDev, rename('style.min.css')))
    .pipe(gulpif(!isDev, size()))
    .pipe(dest(config.dest.css))
    .pipe(reload({ stream: true }));

  cb();
};

exports.scss = scss;
