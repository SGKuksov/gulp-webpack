const del = require('del');
const config = require('./config');

const clean = () => {
  return del(config.output);
}

exports.clean = clean;
