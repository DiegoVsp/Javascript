// Object.preventExtensions 

const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

//pode excluir e alterar mas n pode criar outros atributos para o produto
// nesse caso, o atributo 'descrição' não foi criado, mas, o produto.nome foi alterado e a produto.tag deletada.
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// não consegue adicionar novos atributos nem excluir atributos do objeto
// consegue modificar os valores dos atributos do objetos
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome='Silva'
delete pessoa.nome
pessoa.idade=29
console.log(pessoa)

// Object.freeze = selado + valores constantes
//não pode incluir, excluir chaves do objeto nem modificar os dados das variaveis do objeto ele é -> completamente constante