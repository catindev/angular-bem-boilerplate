var gulp = require('gulp'),
    tasks = { },
    modules = [ 'graph', 'js', 'less', 'vendors', 'main', 'watch' ];

modules.forEach(function (task) {
    tasks[task] = require('./gulp_tasks/' + task + '.js')(gulp);
});

gulp.task('default', ['watch']);
