const { src, dest } = require('gulp');
const config = require('./config');
const plumber = require('gulp-plumber');
const prettyHtml = require('gulp-pretty-html');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const pug = cb => {
  const pug = require('gulp-pug');
  
  src(config.src.pug)
    .pipe(plumber(config.notify))
    .pipe(pug())
    .pipe(
      prettyHtml({
        indent_size: 2,
        indent_char: ' ',
        unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br'],
        content_unformatted: []
      })
    )
    .pipe(dest(config.dest.pug))
    .pipe(reload({stream: true}));

  cb();
};

exports.pug = pug;
exports.reload = reload;
