const { src, dest } = require('gulp');
const config = require('./config');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-cleancss');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const objectFitImages = require('postcss-object-fit-images');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const scss = cb => {
  // const cssnano = require('cssnano');
  const plugins = [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    mqpacker({
      sort: true
    }),
    objectFitImages()
    // cssnano()
  ];

  src(config.src.scss)
    .pipe(plumber(config.notify))
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(sourcemaps.write('/'))
    .pipe(dest(config.dest.css))
    .pipe(reload({stream: true}))
    .pipe(rename('style.min.css'))
    .pipe(cleanCSS())
    .pipe(dest(config.dest.css));

  cb();
};

exports.scss = scss;
