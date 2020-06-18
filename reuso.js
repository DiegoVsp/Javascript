// Curring
const forcarTextoComTamanhoEntre = min => max => erro => texto => {
  // lazy Evaluation
  const tamanho = (texto || '').trim().length
  if (tamanho < min || tamanho > max) {
    throw erro
  }
}
 const aplicarValidacao = fnValidacao => valor  => {
   try{
    fnValidacao(valor)
    return null
   }catch(e){
     return { erro: e}
   }
 }

const forcarTextoComTamanhoPadrao = forcarTextoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTextoComTamanhoPadrao('Nome do produto Inválido')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = { nome: 'A', preco: 19.88, desconto: 0.25 }
const p2 = { nome: 'ABC para crianças !', preco: 19.88, desconto: 0.25 }
// forcarTextoComTamanhoPadrao('Nome do produto inválido')(p1.nome)
// forcarNomeProdutoValido(p1.nome)
// forcarNomeProdutoValido(p2.nome)

const r1 = validarNomeProduto(p1.nome)
const r2 = validarNomeProduto(p2.nome)

console.log(r1, r2)