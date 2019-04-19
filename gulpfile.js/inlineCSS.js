/* eslint-disable */
/* eslint-disable import/no-extraneous-dependencies */
const inlineCss = require('gulp-inline-css');
// const config = require('./config');

const inlineCSS = cb => {
  src('../build/*.html')
    .pipe(
      inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
      })
    )
    .pipe(gulp.dest('build/'));

  cd();
};

exports.inlineCSS = inlineCSS;
