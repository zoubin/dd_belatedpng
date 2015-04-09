var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('move', function () {
    return gulp.src(['lib/DD_belatedPNG_0.0.8a.js', 'lib/fire.js']).pipe(gulp.dest('dist'));
});

gulp.task('build', ['move'], function () {
    return gulp.src(['dist/DD_belatedPNG_0.0.8a.js', 'dist/fire.js'])
                .pipe(plugins.uglify())
                .pipe(plugins.concat('DD_belatedPNG_0.0.8a.min.js'))
                .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
