
function removerPropriedade(objeto, nomeDaPropriedade) {
  const copia = Object.assign({}, objeto)
  delete copia[nomeDaPropriedade]
  return copia
}
console.log(removerPropriedade({ nome: "Diego", sobrenome: "Vespa" }, "sobrenome"))


function filtrarNumeros(array) {
  // let a = []
  let num = n => typeof n === 'number'
  let res = array.filter(num)
  return res
}
let v = [1, 2, "Diego", 6]
console.log(filtrarNumeros(v))

function objetoParaArray(objeto) {
  let arr = []
  for (let chave in objeto) {
    arr.push([chave, objeto[chave]])
  }
  return arr
}

let o = {
  nome: "Diego",
  idade: 29,
  sexo: "M"
}
console.log(objetoParaArray(o))

let arr2 = [10, 70, 22, 43]

function Pares(arr2) {
  let r = []
  for (let i in arr2) {
    if ((arr2[i] % 2 === 0) && (i % 2 === 0)) {
      r.push(arr2[i])
    }
  }
  return r
}

console.log(Pares(arr2))

// function receberSomenteOsParesDeIndicesPares(numeros) {
//   return numeros.filter((numero, indice) => {
//     const numeroPar = numero % 2 === 0
//     const indicePar = indice % 2 === 0
//     return numeroPar && indicePar
//   })
// }
