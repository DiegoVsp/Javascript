
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
    arr.push(chave, objeto[chave])
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

function receberSomenteOsParesDeIndicesPares(numeros) {
  return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
  })
}

let n = receberSomenteOsParesDeIndicesPares([4, 6, 2, 3, 5, 6, 7])
console.log(n)

function filtrarNumeros(numeros) {
  let res = []
  for (let n of numeros) {
    if (typeof n === "number") {
      res.push(n)
    }
  }
  return res
}

let arra3 = ['Diego', 1, 'LALA', 3, 4, 6];

console.log(filtrarNumeros(arra3))


function checarAnoBissexto(ano) {
  return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto(2020))

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22]
function media(aray) {
  let resultado = aray.reduce((n1, n2) => n1 += n2)
  return resultado / aray.length

}
console.log(media(array5))

function menorNumero(array) {
  let menorN = array[0]

  for (let num in array) {
    if (array[num] < menorN) {
      menorN = array[num]
    }
  }
  return menorN
}
console.log(menorNumero([1, 3, 5, 8, 0, 9, 11]))

// segunda maneira
function menorNumero(numeros) {
  return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
  }
// terceira maneira  
function menorNumero(numeros) {
  return Math.min(...numeros);
  }
  