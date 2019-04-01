/* eslint-disable import/no-extraneous-dependencies */
const del = require('del');
const config = require('./config');
const cache = require('gulp-cache');

const clean = () => {
  cache.clearAll()
  return del(config.output);
};

exports.clean = clean;
