const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML(cb) {
  return gulp.src('src/**/*.html') /*pega todos os aqruivos da pasta src que tenham final .html*/
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(gulp.dest('build'))
}
function appCSS() {

  return gulp.src('src/assets/sass/index.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss({"uglyComments": true})) /*Para não colocar os comentários no arquivo final*/
  .pipe(concat("app.min.css"))
  .pipe(gulp.dest("build/assets/css"))
}
function appJS() {
  return gulp.src('src/assets/js/**/*.js')
  .pipe(babel({presets: ['ENV'] }))
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('build/assets/js'))
}
function appIMG() {
  return gulp.src('src/assets/imgs/**/*.*')
  .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG
}