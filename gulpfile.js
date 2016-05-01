const gulp = require('gulp');

require('./gulp/vendor');
require('./gulp/stylefmt');

gulp.task('default', [ 'vendor' ]);
