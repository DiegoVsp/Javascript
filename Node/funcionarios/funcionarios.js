const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');// axios é um client http - ele faz requisições de algo que está remoto

const chineses = f => f.pais === 'China';
const mulher = f => f.genero === 'F';
const menorSalario = (funcionario, funcionarioAtual)=>{
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
}



axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulher)
        .reduce(menorSalario);
        
    console.log(func)
});

