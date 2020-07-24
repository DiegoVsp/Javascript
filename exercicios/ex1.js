function Simples(capInicial,tJuros,tempAplicacao) {
  return new Promise(resolve => {
    tJuros =tJuros/100
    let jurosSimples = capInicial*tJuros*tempAplicacao
    let montante = jurosSimples+capInicial
    console.log(`Juros R$${jurosSimples.toFixed(2)} Montante R$${montante.toFixed(2)}`)
    resolve()
  })
}
function Composto(capInicial,tJuros,tempAplicacao) {
  return new Promise(resolve => {
    tJuros =tJuros/100
    let montante = capInicial*(1+tJuros)**tempAplicacao
    let juros = montante - capInicial
    console.log(`Montante R$${montante.toFixed(2)} e seu juros recebido foi de R$${juros.toFixed(2)}` )
    resolve()
  })
}

Simples(500,0.56,1)
Composto(100,10,2)


