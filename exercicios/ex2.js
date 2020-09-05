// let numeros = [9,2,8,7,1,6,5,44,4,3,0,11]
// let menor = 1;
// let maior = 1;

// for(let i of numeros){
//   if(i>maior){
//     maior = i
//   }
//   if(i<menor){
//     menor=i
//   }
// }

// for(let a = 0; a<numeros.length;a++){
//   for(let b = a+1; b<numeros.length;b++){
//     if(numeros[a]>numeros[b]){
//       let aux = numeros[a]
//       numeros[a] = numeros[b]
//       numeros[b] = aux
//     }
//   }

// }

//   console.log(`Em ordem ${numeros}`)



// console.log(`O maior número ${maior} e o menor é ${menor}`)

// // ex4
// function f(dividendo, divisor) {
//   console.log(`A Divisão é ${dividendo / divisor}`);
//   console.log(`O Resto é ${dividendo % divisor}`);
// }

// f(2, 5)

// // ex5
// function arredonda(valor) {
//   console.log(valor.toFixed(2).toString().replace('.', ','))
// }
// arredonda(1.55555)

// // ex 7
// function baskara(ax2, bx, c) {
//   let resultado = []
//   let delta = (bx ** 2) - (4 * ax2 * c)
//   if(delta<0){
//     console.log('Delta é negativo')
//   }
//   let x1 = (-bx + Math.sqrt(delta))/2*ax2
//   let x2 = (-bx - Math.sqrt(delta))/2*ax2
//   resultado.push(x1)
//   resultado.push(x2)
//   return resultado
// }
// console.log(baskara(1,12,-13))

// ex8
let pontuacaoAnterior = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function avaliarPont(pontuacoes){
let pontuacao = pontuacoes.split(', ') 
let melhorPontuacao = pontuacao[0]
let piorPontuacao = pontuacao[0]
let quebraRecorde = 0
let piorJogo = 1;

for(let i = 0; i< pontuacao.length; i++){
  if(pontuacao[i]>melhorPontuacao){
    melhorPontuacao=pontuacao[i];
    quebraRecorde++
    
  }else if(pontuacao[i]<piorPontuacao){
    piorPontuacao = pontuacao[i];
    piorJogo = i+1;
  }
}
console.log(quebraRecorde,piorJogo)
}
avaliarPont(pontuacaoAnterior)