/* -- Gulp Requires ---------------------------------  */
var gulp        = require('gulp'),
    del         = require('del'),
    browserSync = require('browser-sync'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream');

/* -- BrowserSync Tasks -----------------------------  */
gulp.task('browserSync', function(){
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

/* -- Clean task ------------------------------------  */
gulp.task('clean', function(){
  del('./dist');
});

/* -- Views task ------------------------------------  */
gulp.task('views', function(){
  return gulp
    .src('src/index.html')
    .pipe(gulp.dest('dist'));
})

/* -- Scripts Tasks ---------------------------------  */
gulp.task('scripts', function(){
  return browserify('src/scripts/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/scripts'));
});

/* -- General Tasks ---------------------------------  */
gulp.task('default', ['clean', 'views', 'scripts', 'browserSync']);
