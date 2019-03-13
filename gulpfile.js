const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
	return gulp.src('./src/styles/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./build/styles'));
	});

gulp.task('minify-css', () => {
	return gulp.src('build/styles/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('build/styles'));
	});
	
gulp.task('compress', function (cb) {
	pump([
				gulp.src('src/scripts/*.js'),
				uglify(),
				gulp.dest('build/scripts')
		],
		cb
	);
});

gulp.task('run', gulp.series('sass' , 'compress', 'minify-css'));


gulp.task('watch', gulp.series(function(){
	gulp.watch('./src/styles/*.scss', gulp.series('sass'));
	gulp.watch('./src/scripts/*.js', gulp.series('compress'));
}));

gulp.task('default', gulp.series('run', 'watch'));
