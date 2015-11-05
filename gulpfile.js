// Plugins
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');


// SASS Tasks
gulp.task('sass', function () {
  	gulp.src('src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass-watch', function () {
  	gulp.watch('src/sass/**/*.scss', ['sass']);
});