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
const postcssNormalize = require('postcss-normalize');
const browserSync = require('browser-sync').create();
const size = require('gulp-size');
const gulpif = require('gulp-if');
const config = require('./config');

const { reload } = browserSync;

const scss = cb => {
  const plugins = [
    postcssNormalize(),
    autoprefixer(),
    mqpacker({
      sort: true
    }),
    objectFitImages()
  ];

  src(config.scss.src)
    .pipe(plumber(config.notify))
    .pipe(gulpif(config.isDev, sourcemaps.init()))
    .pipe(wait(200))
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(postcss(plugins))
    .pipe(gulpif(config.isDev, sourcemaps.write('/')))
    .pipe(gulpif(config.isDev, dest(config.css.dest)))
    .pipe(reload({ stream: true }))
    .pipe(gulpif(!config.isDev, cleanCSS()))
    .pipe(gulpif(!config.isDev, rename('style.min.css')))
    .pipe(gulpif(!config.isDev, size()))
    .pipe(gulpif(!config.isDev, dest(config.css.dest)));

  cb();
};

exports.scss = scss;
