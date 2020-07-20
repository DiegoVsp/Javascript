
const PrimeiroElemento = array => array[0]

const primeiraLetra = string => string[0]

const Minuscula = letraLower => letraLower.toLowerCase()


let p = new Promise(function(resolve) {
  resolve(['Diego', 'Tiago', 'Francisca'])
})
p
  .then(PrimeiroElemento)
  .then(primeiraLetra)
  .then(Minuscula)
  // .then(valor => console.log(valor))
  .then(console.log)