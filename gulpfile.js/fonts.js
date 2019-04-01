const { src, dest } = require('gulp');
const config = require('./config');
const plumber = require('gulp-plumber');

const fonts = cb => {
  src(config.src.fonts)
    .pipe(plumber(config.notify))
    .pipe(dest(config.dest.fonts));

  cb();
};

exports.fonts = fonts;
