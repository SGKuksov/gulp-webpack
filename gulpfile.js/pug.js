/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const prettyHtml = require('gulp-pretty-html');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const gulpif = require('gulp-if');
// const inject = require('gulp-inject');
const config = require('./config');

const { reload } = browserSync;

const isDev = process.env.NODE_ENV === 'development';

const compilePug = cb => {
  const prettyHtmlConfig = {
    indent_size: 2,
    indent_char: ' ',
    unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br'],
    content_unformatted: []
  };
  const minifyHtmlConfig = {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true
  };

  src(config.src.pug)
    .pipe(plumber(config.notify))
    .pipe(pug())
    .pipe(gulpif(isDev, prettyHtml(prettyHtmlConfig), htmlmin(minifyHtmlConfig)))
    // .pipe(inject(src('../dist/js/*.js', {read: false}), {relative: true}))
    .pipe(dest(config.dest.pug))
    .pipe(reload({ stream: true }));

  cb();
};

exports.pug = compilePug;
