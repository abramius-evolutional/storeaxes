var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var minifyInline = require('gulp-minify-inline');
var jsmin = require('gulp-jsmin');
var rev = require('gulp-rev-mtime');
var minify = require('gulp-babel-minify');
var cssmin = require('gulp-cssmin');
var minifyGulp = require('gulp-minify');
var babelify = require("babelify");

gulp.task('browserify', function() {
	gulp.src('src/js/main.jsx')
	.pipe(browserify({transform:'reactify'}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(livereload());
});
gulp.task('browserifyProd', function() {
    return browserify('src/js/Main.jsx', {
        debug: false
    }).transform(babelify.configure({
        presets: ["es2015", "react"]
    }))
        .bundle()
        .on('error', notify.onError(function(err) {
            return {
                title: "Gulp",
                message: err.message,
                sound: "Beep",
                subTitle: err.name
            };
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(minifyGulp())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('css', function() {
	gulp.src('src/css/**/*.css')
	.pipe(concat('main.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('rev2', function () {
    return gulp.src('dist/index.html')
        .pipe(rev({
            'cwd': 'dist/',
            'suffix': 'rev',
            'fileTypes': ['css', 'js']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy', 'css', 'watch']);
gulp.task('prod',['browserifyProd', 'copy', 'css', 'watch']);

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['default', 'rev2']);
});
gulp.watch('src/js/**/*.*', gulp.task('rev2')).on('unlink', function(filepath) {
    remember.forget('rev2', path.resolve(filepath));
    delete cached.caches.rev2[path.resolve(filepath)];
});
gulp.watch('src/css/**/*.*', gulp.task('rev2')).on('unlink', function(filepath) {
    remember.forget('rev2', path.resolve(filepath));
    delete cached.caches.rev2[path.resolve(filepath)];
});

