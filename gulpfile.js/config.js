const root = require("path").resolve(__dirname, "..");

module.exports = {
  entry: `${root}/src/`,
  output: `${root}/dist/`,
  src: {
    html: `${root}/src/pages/*.html`,
    pug: `${root}/src/pug/*.pug`,
    twig: `${root}/src/twig/*.twig`,
    css: `${root}/src/assets/css/*.css`,
    scss: `${root}/src/assets/scss/style.scss`,
    js: `${root}/src/assets/js/*.js`,
    img: `${root}/src/assets/img/*.{png,jpg,jpeg,ico,svg}`,
    fonts: `${root}/src/assets/fonts/**/*`
  },
  dest: {
    html: `${root}/dist/`,
    twig: `${root}/dist/twig/`,
    pug: `${root}/dist/pug/`,
    css: `${root}/dist/css/`,
    js: `${root}/dist/js/`,
    img: `${root}/dist/img/`,
    fonts: `${root}/dist/fonts/`
  },
  watch: {
    pug: `${root}/src/**/*pug`,
    sass: `${root}/src/**/*.{scss,sass}`,
    js: `${root}/src/**/*.js`,
    svg: `${root}/src/**/*.svg`,
    images: `${root}/src/**/*.{png,jpg,jpeg,gif,ico,svg}`
  }
};
