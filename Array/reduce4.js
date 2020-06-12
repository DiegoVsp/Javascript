const numeros = [2, 5, 7, 9, 15, 65, ]

// const resultado = numeros.reduce(function(acc,elem) {
//   console.log(acc, elem)
//   return acc + elem
// },0)
// console.log(resultado)

// function somar(a,b){
//   return a+b
// }

// console.log(numeros.reduce(somar))

function media(acc, numero) {
  const novoTotal = acc.total + numero
  const qtde = acc.quantidade +1
  return {
    total: novoTotal,
    quantidade: qtde,
    media: novoTotal/qtde
  }
}
const valorInicial = {total:0, quantidade: 0, media: 0}

const valorFinal = numeros.reduce(media, valorInicial)
console.log(valorFinal.media)
