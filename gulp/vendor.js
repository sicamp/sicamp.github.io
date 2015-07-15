'use strict';

const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('font-awesome', () => {
    const blockPath = 'vendor.blocks/font-awesome';

    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest(blockPath));

    gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(replace('../fonts/', ''))
        .pipe(gulp.dest(blockPath));
});

gulp.task('vendor', [ 'font-awesome' ]);
