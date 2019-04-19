/* eslint-disable import/no-extraneous-dependencies */
const root = require('path').resolve(__dirname, '..');
const notify = require('gulp-notify');

module.exports = {
  entry: `${root}/src/`,
  output: `${root}/dist/`,
  src: {
    html: `${root}/src/pages/*.html`,
    pug: `${root}/src/pages/*.pug`,
    twig: `${root}/src/pages/*.twig`,
    css: `${root}/src/assets/css/*.css`,
    scss: `${root}/src/assets/scss/style.scss`,
    js: `${root}/src/assets/js/app.js`,
    img: `${root}/src/assets/img/**/*.{jpg,jpeg,png,svg,webp,gif}`,
    svg: `${root}/src/assets/svg/**/*.svg`,
    fonts: `${root}/src/assets/fonts/**/*.{ttf,eot,svg,woff,woff2}`,
    favicon: `${root}/src/assets/favicons/*.png`,
    video: `${root}/src/assets/videos/*.{mp4,mov,mpeg}`
  },
  dest: {
    html: `${root}/dist/`,
    pug: `${root}/dist/`,
    twig: `${root}/dist/`,
    css: `${root}/dist/css/`,
    js: `${root}/dist/js/`,
    img: `${root}/dist/img/`,
    svg: `${root}/dist/img/`,
    fonts: `${root}/dist/fonts/`,
    favicon: `${root}/src/template/favicons/`,
    video: `${root}/dist/videos/`
  },
  watch: {
    pug: `src/pages/**/*.pug`,
    twig: `src/twig/**/*.twig`,
    template: `src/template/**/*.{pug,twig}`,
    scss: `src/assets/scss/**/*.{scss,sass}`,
    js: `src/assets/js/*.js`,
    blocks: {
      scss: `src/blocks/**/*.{scss,sass}`,
      js: `src/blocks/**/*.js`,
      pug: `src/blocks/**/*.pug`,
      twig: `src/blocks/**/*.twig`
    },
    svg: `src/assets/svg/**/*.svg`,
    img: `src/assets/img/**/*.{jpg,jpeg,png,svg,webp,gif}`,
    fonts: `src/assets/fonts/**/*.{ttf,eot,svg,woff,woff2}`
  },
  notify: {
    errorHandler(err) {
      notify.onError({
        title: 'Error',
        message: err.message
      })(err);
      this.emit('end');
    }
  }
};
