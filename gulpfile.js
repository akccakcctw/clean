const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

const paths = {
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'static/js'
  },
  styles: {
    src: 'src/sass/**/*.scss',
    dest: 'static/css'
  },
};

gulp.task('default', ['css', 'js']);

gulp.task('watch', ['default'], () => {
  gulp.watch(paths.styles.src, ['css']);
  gulp.watch(paths.scripts.src, ['js']);
});

gulp.task('min', ['js-min']);

gulp.task('css', () => {
  gulp.src(paths.styles.src)
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'compressed',
      precision: 10,
      includePath: ['.'],
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest(paths.styles.dest))
});

gulp.task('js', () => {
  gulp.src(paths.scripts.src)
    .pipe($.plumber())
    .pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('js-min', () => {
  gulp.src(paths.scripts.src)
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest))
});
