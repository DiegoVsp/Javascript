function gerarNumeros(min,max, tempo) {
  if(min > max) [max,min] = [min, max]

  return new Promise(resolve => {
    setTimeout(function(){
      const fator = max-min + 1
      const aleatorio = parseInt(Math.random() * fator +min)
  
      // const aleatorio = parseInt(Math.random() * (max-min + 1) +min)
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeros(1,60,4000),
    gerarNumeros(1,60,1000),
    gerarNumeros(1,60,500),
    gerarNumeros(1,60,3000),
    gerarNumeros(1,60,1500),
    gerarNumeros(1,60,100)
  ])
}
console.time('promise')
// gerarVariosNumeros().then(numeros=>console.log(numeros))
gerarVariosNumeros()
  .then(console.log)
  .then(()=>{
      console.timeEnd('promise')
})