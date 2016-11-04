var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
	gulp.src('src/js/main.jsx')
	.pipe(browserify({transform:'reactify'}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(livereload());
});
gulp.task('css', function() {
	gulp.src('src/css/**/*.css')
	.pipe(concat('main.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy', 'css', 'watch']);

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['default']);
});

