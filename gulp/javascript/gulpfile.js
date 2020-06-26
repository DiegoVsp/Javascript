const {series} = require('gulp')
const gulp = require('gulp')
const concat=require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
  gulp.src('src/**/*.js')
    .pipe(babel({
      // objeto de configuração para config o babel
      comments:false, //nãoq quero que os arquivos de comentários sejam tranferidos para o arquivo final
      presets:["env"],// pegará o arquivo mais novo possivel
    })) 
    .pipe(uglify()) // pegará tdo o código pra ser minificado
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'))// pegará todos os arquivos selecionados que já foram compilados usando o babel da versão mais atual pra uma versão mais compativel e que já foi feito o processo de "enfeiamento" e então esse resultado será concatenado
    .pipe(gulp.dest('build'))

  return cb()
}

function fim(cb) {
  console.log("FIM!!!")
  return cb()
}

exports.default = series(transformacaoJS,fim)
// module.exports.default = series(padrao)