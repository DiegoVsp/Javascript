function funcionarOuNao(valor, chanceErro){
  return new Promise((resolve, reject) => { 
    try{
      consola.log('temp')
      if(Math.random()<chanceErro){
        reject('Ocorreu um erro!')
      }else {
        resolve(valor)
      }
    }catch(e){
      reject(e)
    }   
  })
}
funcionarOuNao('Testando...', 0.1)
  .then(v => console.log(`Valor: ${v}`))
  .then(v => consol.log(v),
        err => console.log(`Erro especifico: ${err}`))
  .catch(erro => console.log(`Erro Geral: ${erro}`)) // catch normente no final