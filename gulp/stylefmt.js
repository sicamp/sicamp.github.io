'use strict';

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sorting = require('postcss-sorting');
const stylefmt = require('stylefmt');

function getSortOrder(conf) {
    return conf.rules['declaration-block-properties-order']
        .map((group) => group.properties )
        .concat([[ '@atrule' ]]);
}

gulp.task('stylefmt', () => {
    // Stylelint config for extracting order from it
    const stylelintrc = path.resolve(__dirname, '..', '.stylelintrc');
    var stylelintConf = fs.readFileSync(stylelintrc);

    try {
        stylelintConf = JSON.parse(stylelintConf);
    } catch (e) {
        /* eslint no-console: 1 */
        console.log('Error in stylelintrc');
        console.log(e);
        return;
    }

    return gulp.src('./common.blocks/**/*.css')
        .pipe(postcss([
            sorting({
                'empty-lines-between-children-rules': 1,
                'empty-lines-between-media-rules': 1,
                'sort-order': getSortOrder(stylelintConf)
            }),
            stylefmt
        ]))
        .pipe(gulp.dest('./common.blocks'));
});
