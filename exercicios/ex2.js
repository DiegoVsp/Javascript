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
// let pontuacaoAnterior = "10, 20, 20, 8, 25, 3, 0, 30, 1"

// function avaliarPont(pontuacoes){
// let pontuacao = pontuacoes.split(', ') 
// let melhorPontuacao = pontuacao[0]
// let piorPontuacao = pontuacao[0]
// let quebraRecorde = 0
// let piorJogo = 1;

// for(let i = 0; i< pontuacao.length; i++){
//   if(pontuacao[i]>melhorPontuacao){
//     melhorPontuacao=pontuacao[i];
//     quebraRecorde++

//   }else if(pontuacao[i]<piorPontuacao){
//     piorPontuacao = pontuacao[i];
//     piorJogo = i+1;
//   }
// }
// console.log(quebraRecorde,piorJogo)
// }
// avaliarPont(pontuacaoAnterior)

// function comprimentar(arg) {
//   console.log(`Olá, ${arg}!`)
// }
// comprimentar("Leonardo")

// function converterIdadeEmDias(idade) {

//   let ano = new Date().getFullYear();
//   let anoDias = 365;
//   return idade * anoDias
// if(ano % 4 == 0){
//   anoDias = 366
//   console.log(`Bissexto e tem ${anoDias} dias`)
// }else if(ano % 400 == 0){
//   anoDias=366
//   console.log(`Bissexto e tem ${anoDias} dias`)
// }else if (ano % 100 != 0){
//   anoDias=365
//   console.log(`Não Bissexto e tem ${anoDias} dias`)
// }
// }
// console.log(converterIdadeEmDias(70))

// function calcularSalario(horasTrab, salHora) {
//   let salario = horasTrab * salHora;
//   console.log(`Salário igual a R$ ${salario}`)
// }
// calcularSalario(30, 40.5)

// function mes(n) {
//   switch (n) {
//     case 1:
//       return 'Janeiro'
//     case 2:
//       return 'Fevereiro'
//     case 3:
//       return 'Março'
//     case 4:
//       return 'Abril'
//     case 5:
//       return 'Maio'
//     case 6:
//       return 'Junho'
//     case 7:
//       return 'Julho'
//     case 8:
//       return 'Agosto'
//     case 9:
//       return 'Setembro'
//     case 10:
//       return 'Outubro'
//     case 11:
//       return 'Novembro'
//     case 12:
//       return 'Dezembro'
//     default:
//       return `Inválido`       
//   }
// }
// console.log(mes(4))

// function maiorOuIgual (n1, n2) {
//   if(n1>n2){
//     return `${n1} é maior que ${n2}`
//   }else if(n1<n2){
//     return `${n1} é menor que ${n2}`
//   }else {
//     return `números iguais!`
//   }
// }
// console.log(maiorOuIgual(4,4))

// function inverso(p) {
//   let tipo = typeof p

//   if(tipo == "boolean") return !p
//   else if(tipo == "number") return -p
//   else 
//     return `${p} tem o tipo ${tipo}` 
// }
// console.log(inverso(false))

// function multi(n1,n2){
//   let r = 0
//   for(let i =0; i<n2;i++){
//     r+=n1;
//   }
//   return r
// }
// console.log(multi(3,3))

// function repetir(n1,vezes){
//   let arr = []
//   for(let i=0;i<vezes;i++){
//     arr.push(n1)
//   }
//   return arr
// }
// console.log(repetir(7,3))

let elementos = [4,2,5,8]
function receberPrimeiroEUltimo(elementos) {
  const indicePrimeiro = 0;
  const indiceUltimo = elementos.length - 1

  const primeiroElemento = elementos[indicePrimeiro]
  const ultimoElemento = elementos[indiceUltimo]
  return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimo(elementos))