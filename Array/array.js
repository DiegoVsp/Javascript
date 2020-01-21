console.log(typeof Array, typeof new Array, typeof[]);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]='Paulo';
console.log(aprovados[3])
aprovados.push('Abia') 
console.log(aprovados[4])
console.log(aprovados.length)

aprovados[9]= 'Rafael'
console.log(aprovados[9])
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] // colocou undefined na posição 1
console.log(aprovados[1])

aprovados=['Bia','Carlos','Ana']
aprovados.splice(1, 1) // Excluir elemento 1 a partir do elemento 1 nesse caso Carlos estava no indice 1 e foi excluido
console.log(aprovados)