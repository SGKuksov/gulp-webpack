const { src, dest } = require('gulp');
const config = require('./config');
const plumber = require('gulp-plumber');

const img = cb => {
  src(config.src.img)
    .pipe(plumber(config.notify))
    .pipe(dest(config.dest.img));

  cb();
};

exports.img = img;
