const gulp = require('gulp');
const sass = require('gulp-sass');

// Sass task
gulp.task( 'sass' , function() {
	gulp.src('style/sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('.'))
});

// Watch task
gulp.task( 'watch', ['sass'], function() {
	gulp.watch( 'style/sass/**/*.+(scss|sass)', ['sass']);
});
