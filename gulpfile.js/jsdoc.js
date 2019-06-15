/* eslint-disable import/no-extraneous-dependencies */
const { src } = require('gulp');
const plumber = require('gulp-plumber');
const jsdoc = require('gulp-jsdoc3');
const config = require('./config');

const jsDoc = cb => {
  src(config.src.js)
    .pipe(plumber(config.notify))
    // .pipe(config.production ? minifyCSS() : util.noop())
    .pipe(jsdoc());

  cb();
};

exports.jsDoc = jsDoc;
