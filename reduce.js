// const numbers = [1, 2, 3]
// const sum = numbers.reduce((acumulador, item) => acumulador + item ,0)
// console.log(sum)

// const cart = [
//   {name: 'Dark Souls III', price: 95.03},
//   {name: 'Shadow of the Tomb Raider', price: 101.19},
//   {name: 'Sekiro: Shadows Die Twice', price: 179.99},
//   {name: 'Resident Evil 2', price: 119.90},
//   {name: 'Death Stranding', price: 149.99},
// ]

// const productList = cart.reduce((acumulador, {name})=> `${acumulador}- ${name}\n`, '')
// console.log(productList)

const people = [
  { id:5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco'},
  { id:81, name: 'Angelica', age: 19, federativeUnit: 'São Paulo'},
  { id:47, name: 'Angelica', age: 18, federativeUnit: 'Alagoas'},
  { id:87, name: 'Angelica', age: 18, federativeUnit: 'Minas Gerais'},
  { id:9, name: 'Angelica', age: 20, federativeUnit: 'São Paulo'},
  { id:73, name: 'Angelica', age: 19, federativeUnit: 'Brasília'},
]

const agesFrequency = people.reduce((acumulador, { age }) => {
  acumulador[age] = acumulador[age]+1 || 1
  return acumulador
}, {})
console.log(agesFrequency);

// teste sozinho
// const somaAges = people.reduce((acumulator, item) => {
//   return acumulator+=item.age;
// }, 0)

// console.log((somaAges/people.length).toFixed(2))