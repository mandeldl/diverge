// Plugins
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


// SASS Tasks
gulp.task('sass', function () {
  	gulp.src('src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({browsers:['last 2 versions']}))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass-watch', function () {
  	gulp.watch('src/sass/**/*.scss', ['sass']);
});