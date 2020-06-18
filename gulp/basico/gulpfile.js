const gulp = require('gulp')
const {series, parallel} = require('gulp') // em paralelo ou em serie
// const series = gulp.series


// cada função dessa representa uma task
const antes1 = cb => {
  console.log('Tarefa antes 1')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefa antes 2')
  return cb()
}


function copiar(cb){
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  gulp.src('pastaA/**/*.txt') //qualquer arquivo que esteja na pasta A e que tenha a extensão .txt, será copiada para a pastaB
    .pipe(gulp.dest('pastaB'))
  return cb()
}

const fim = cb => {
  console.log('Tarefa fim')
  return cb()
}

module.exports.default = series(parallel(antes1,antes2),copiar,fim)