const { series, parallel, src, dest, watch } = require("gulp");
const config = require("./config");
const path = require("path");
const plumber = require("gulp-plumber");

function clean(cb) {
  const del = require("del");

  del(config.output);

  cb();
}

function pug(cb) {
  const pug = require("gulp-pug");

  src(config.src.pug)
    .pipe(plumber())
    .pipe(pug())
    .pipe(dest(config.dest.pug));

  cb();
}

function twig(cb) {
  const twig = require("gulp-twig");

  src(config.src.twig)
    .pipe(plumber())
    .pipe(twig())
    .pipe(dest(config.dest.twig));

  cb();
}

function scss(cb) {
  const sass = require("gulp-scss");
  const sourcemaps = require("gulp-sourcemaps");
  const cleanCSS = require("gulp-clean-css");
  var rename = require("gulp-rename");

  src(config.src.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(dest(config.dest.css))
    .pipe(rename("style.mim.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest(config.dest.css));

  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function copyImg(cb) {
  src(config.src.img).pipe(dest(config.dest.img));

  cb();
}

function copyFonts(cb) {
  src(config.src.fonts).pipe(dest(config.dest.fonts));

  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

if (process.env.NODE_ENV === "production") {
  // exports.build = series(transpile, minify);
} else {
  // exports.build = series(transpile, livereload);
  exports.default = series(
    clean,
    parallel(pug, twig, copyFonts, copyImg),
    parallel(scss, series(jsTranspile, jsBundle)),
    parallel(jsMinify),
    publish
  );
}
