/* eslint-disable import/no-extraneous-dependencies */
const src = require('path').resolve(__dirname, '../src');
const dest = require('path').resolve(__dirname, '../dist');
const notify = require('gulp-notify');

module.exports = {
  entry: src,
  output: dest,
  html: {
    src: `${src}/pages/*.html`,
    dest: `${dest}/`
  },
  pug: {
    src: `${src}/pages/*.pug`,
    dest: `${dest}/`,
    watch: [`src/pages/**/*.pug`, `src/template/**/*.pug,`, `src/blocks/**/*.pug`]
  },
  twig: {
    src: `${src}/pages/*.twig`,
    dest: `${dest}/`,
    watch: [`src/pages/**/*.twig`, `src/template/**/*.twig,`, `src/blocks/**/*.twig`]
  },
  css: {
    src: `${src}/assets/css/*.css`,
    dest: `${dest}/css/`
  },
  scss: {
    src: `${src}/assets/scss/style.scss`,
    watch: [`src/assets/scss/**/*.{scss,sass}`, `src/blocks/**/*.{scss,sass}`]
  },
  js: {
    src: `${src}/assets/js/app.js`,
    dest: `${dest}/js/`,
    watch: [`src/assets/js/**/*.js`, `src/blocks/**/*.js`]
  },
  img: {
    src: `${src}/assets/img/**/*.{jpg,jpeg,png,svg,webp}`,
    dest: `${dest}/img/`,
    watch: `src/assets/img/**/*.{jpg,jpeg,png,svg,webp,gif}`
  },
  svg: {
    src: `${src}/assets/svg/**/*.svg`,
    dest: `${dest}/img/`,
    watch: `src/assets/svg/**/*.svg`
  },
  fonts: {
    src: `${src}/assets/fonts/**/*.{ttf,eot,svg,woff,woff2}`,
    dest: `${dest}/fonts/`,
    watch: `src/assets/fonts/**/*.{ttf,eot,svg,woff,woff2}`
  },
  video: {
    src: `${src}/assets/videos/*.{mp4,mov,mpeg}`,
    dest: `${dest}/videos/`
  },
  notify: {
    errorHandler(err) {
      notify.onError({
        title: 'Error',
        message: err.message
      })(err);
      this.emit('end');
    }
  },
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production'
};
