const gulp = require('gulp');
const sass = require('gulp-sass');

// Sass task
gulp.task( 'sass' , function() {
	gulp.src('style/sass/**/*.scss') // Change this line for different file structures
	.pipe(sass())
	.pipe(gulp.dest('.')) // Processed result will be output here
});

// Watch task
gulp.task( 'watch', ['sass'], function() {
	gulp.watch( 'style/sass/**/*.+(scss|sass)', ['sass']);
});
