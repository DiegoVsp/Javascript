// composição de funções
function composicao (...funcoes){
  // currying (lazy evalu)
  return function(valor){
    return funcoes.reduce((acc, fn) =>{
      return fn(acc)
    }, valor)
  }
}
// o acc seria o acumulador que é o valor inicial

function gritar(texto){
  return texto.toUpperCase();
}
function enfatizar(texto){
  return `${texto}!!!`
}
function tornarLento(texto){
  return texto.split('').join(' ')
}

const exagerado = composicao(gritar, enfatizar, tornarLento)
console.log(exagerado('cuidado com o buraco'))
console.log(exagerado('LELE'))

const quaseExagerado = composicao(gritar, enfatizar)
console.log(quaseExagerado('cuidado com o buraco'))

console.log(composicao(gritar, enfatizar)('eita'))