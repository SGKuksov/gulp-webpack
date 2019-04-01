const { series, parallel } = require('gulp');
const { clean } = require('./clean');
const { scss } = require('./scss');
const { pug } = require('./pug');
const { twig } = require('./twig');
const { javascript } = require('./javascript');
const { img } = require('./img');
const { fonts } = require('./fonts');
const { serve } = require('./serve');
const { svgSprite } = require('./svgSprite');
const config = require('./config');

// function jsTranspile(cb) {
//   // body omitted
//   cb();
// }

// function jsBundle(cb) {
//   // body omitted
//   cb();
// }

// function jsMinify(cb) {
//   // body omitted
//   cb();
// }

// function publish(cb) {
//   // body omitted
//   cb();
// }

if (process.env.NODE_ENV === 'production') {
  // exports.build = series(transpile, minify);
  exports.default = series(
    clean,
    parallel(
      img,
      fonts,
      // copyVendorsJs,
      // copyVendorsCss,
      svgSprite,
      pug,
      javascript,
      scss
    )
  );
} else {
  // exports.build = series(transpile, livereload);
  exports.default = series(
    clean,
    parallel(
      img,
      fonts,
      // copyVendorsJs,
      // copyVendorsCss,
      svgSprite,
      pug,
      javascript,
      scss
    ),
    serve
  );
}
