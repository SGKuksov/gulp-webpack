/* eslint-disable import/no-extraneous-dependencies */
const { series, parallel } = require('gulp');
const { clean } = require('./clean');
const { scss } = require('./scss');
const { pug } = require('./pug');
// const { twig } = require('./twig');
const { javascript } = require('./javascript');
// const { jsdoc } = require('./jsdoc');
const { img } = require('./img');
const { fonts } = require('./fonts');
const { video } = require('./video');
// const { favicons } = require('./favicons');
const { serve } = require('./serve');
const { svgSprite } = require('./svgSprite');
// const config = require('./config');

if (process.env.NODE_ENV === 'production') {
  exports.default = series(
    clean,
    parallel(
      img,
      fonts,
      svgSprite,
      pug,
      javascript,
      video,
      // favicons,
      scss,
      // jsdoc
    )
  );
} else {
  exports.default = series(
    clean,
    parallel(
      img,
      fonts,
      svgSprite,
      pug,
      javascript,
      video,
      // favicons,
      scss
    ),
    serve
  );
}
