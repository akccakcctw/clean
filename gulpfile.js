const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('default', ['css', 'js']);

gulp.task('watch', ['default'], () => {
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/views/**/*.pug', ['views']);
});

gulp.task('min', ['js-min']);

gulp.task('css', () => {
  gulp.src('src/sass/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'compressed',
      precision: 10,
      includePath: ['.'],
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('static/css'))
});

gulp.task('js', () => {
  gulp.src('src/js/**/*.js')
    .pipe($.plumber())
    .pipe(gulp.dest('static/js'))
});

gulp.task('js-min', () => {
  gulp.src('src/js/**/*.js')
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('static/js'))
});
