
// variaveis (var, let, const)
// var a=1;
// let b=2;
// const c =a+b; //const não pode ser alterado
// console.log(c)

// operadores
// unários
// let a = 3;
// a++; // postfix
// ++a //prefix
// console.log(a)

// binários(aritmeticos, atribuição, relacionais, logicos)
// let b = 557;
// let x = a+b; //infix

// let a =3;
// a+=3;
// a = a +3;
// a*= 7;
// console.log(a)

//> < >= <= !=
// console.log(3>2);
// console.log(!(3<2));

// let temSol = false;
// let estouComDinheiro = true;
// let vouSair = temSol && estouComDinheiro;
// console.log(vouSair)

// ternarios
let temSol = false;
let estouComDinheiro = true;
let vouSair = temSol || estouComDinheiro;
let resultado = vouSair ? 'Eba!' : 'Que Chato!'
console.log(resultado)

// estruturas de controles
let nota = 3;
let bomComportamento = true;

if (nota >= 9 && bomComportamento) {
  console.log('Quadro de Honra')
  console.log('Parabéns')
} else if (nota >= 7) {
  console.log('Aprovado')
} else {
  console.log('Recuperação');
  console.log('é uma pena');
}
for(i=0;i<=100;i+=10){
  console.log(i)
}

// Array
const notas = [6.5, 7.7, 3.2, 8.1, 9.7]

// console.log(notas[3])

// for(let i =0;i < notas.length;i++){
// console.log(notas[i])
// }
// for(let nota of notas){
//   console.log(nota)
// }

// notas.forEach(nota => console.log(nota))

// função (Rei!!)


// Objeto