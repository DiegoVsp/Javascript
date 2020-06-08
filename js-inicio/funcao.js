function soma(a,b =0){
  console.log(a+ b);
}
soma(3,4)
// 3+undefined = NaN
soma(3) 

// Function Declaration
function multiplicar1(a,b){
  return a*b;
}
// Function Expression
const multiplicar2 = function(a,b){ //função anonima é uma função que não tem nome 
  return a*b;
}
console.log(multiplicar1(4,5))
console.log(multiplicar2(4,5))


function executar(fn){
  if(typeof fn === 'function'){
    console.log('Executando')
    fn(3, 500)
  }
}

executar(3)
executar(/*somar(3,4)*/ 7)
executar(soma)