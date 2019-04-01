const { src, dest } = require('gulp');
const config = require('./config');
const plumber = require('gulp-plumber');
const prettyHtml = require('gulp-pretty-html');

const twig = cb => {
  const twig = require('gulp-twig');
  
  src(config.src.twig)
    .pipe(plumber(config.notify))
    .pipe(twig())
    .pipe(
      prettyHtml({
        indent_size: 2,
        indent_char: ' ',
        unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br'],
        content_unformatted: []
      })
    )
    .pipe(dest(config.dest.twig));

  cb();
};

exports.twig = twig;
