function gerarNumeros(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise((resolve, reject) => {
    // const fator = max-min + 1
    // const aleatorio = parseInt(Math.random() * fator +min)

    const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
    if (numerosProibidos.includes(aleatorio)) {
      reject(`Número repetido`)
    } else {
      resolve(aleatorio)
    }
  })
}

async function gerarMega(qtdeNum, tentativas = 1) {
  try{
    const numeros = []
    for (let _ of Array(qtdeNum).fill()) {
      // await gerarNumeros(1,60,numeros)
      numeros.push(await gerarNumeros(1, 60, numeros))
    }
    return numeros
  }catch(e){
    if(tentativas > 3) {
      throw "Não deu Certo!"
    }else {
      return gerarMega(qtdeNum, tentativas + 1)
    }
  }
  
}
gerarMega(8)
  .then(console.log)
  .catch(console.log)


// gerarNumeros(1, 5, [1, 2, 4])
//   .then(console.log)
//   .catch(console.log)