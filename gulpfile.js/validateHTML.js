/* eslint-disable import/no-extraneous-dependencies */
const { src } = require('gulp');
const plumber = require('gulp-plumber');
const htmlValidator = require('gulp-w3c-html-validator');
const config = require('./config');

const validate = cb => {
  src('target/**/*.html')
    .pipe(plumber(config.notify))
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());

  cb();
};

exports.validate = validate;
