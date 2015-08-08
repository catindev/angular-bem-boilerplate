module.exports = function (gulp) {
    gulp.task('watch', [ 'main' ], function () {
        gulp.watch([ 'components/**/*.html', 'components/**/*.js', 'webapp.js' ], ['js']);
        gulp.watch([ 'components/**/*.less' ], ['less']);
        gulp.watch([ 'components/index-template/template.html' ], ['main']);
    });
};
