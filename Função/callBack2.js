const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem callBack

const NotasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        NotasBaixas1.push(notas[i]);
    }
}
console.log(NotasBaixas1);

// com callBack

const NotasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(NotasBaixas2);

const notasMenorQue7 = nota => nota < 7;
const NotasBaixas3 = notas.filter(notasMenorQue7);
console.log(NotasBaixas3);

// ou  const NotasBaixas3 = notas.filter(nota=>nota<7)
//     console.log(NotasBaixas3);