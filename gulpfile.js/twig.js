/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const prettyHtml = require('gulp-pretty-html');
const htmlmin = require('gulp-htmlmin');
const twig = require('gulp-twig');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();
const config = require('./config');

const { reload } = browserSync;

const isDev = process.env.NODE_ENV === 'development';

const compileTwig = cb => {
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

  src(config.src.twig)
    .pipe(plumber(config.notify))
    .pipe(twig())
    .pipe(gulpif(isDev, prettyHtml(prettyHtmlConfig), htmlmin(minifyHtmlConfig)))
    .pipe(dest(config.dest.twig))
    .pipe(reload({ stream: true }));

  cb();
};

exports.twig = compileTwig;
