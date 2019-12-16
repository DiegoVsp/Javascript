function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('TV',2233.55));
console.log(criarProduto('Radio',234.99));