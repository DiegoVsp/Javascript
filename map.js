// const numbers = [1, 2, 3,4]

// const aoQuadrado = numbers.map(item => item ** 2)

// console.log(aoQuadrado)

const tvShows = [
  {name: 'Breaking Bad', releaseYear: 2008},
  {name: 'Mr. Robot', releaseYear: 2015},
  {name: 'True Detective', releaseYear: 2014},
  {name: 'Hannibal', releaseYear: 2013},
  {name: 'The Handmaid\'s Tale', releaseYear: 2017},
  {name: 'House M.D', releaseYear: 2004},
  {name: 'Watchmen', releaseYear: 2019},
]

// const nomes = tvShows.map(n => n.name);
// console.log(nomes)
const nomes = tvShows.map(({name}) => name); //com destructuring
console.table(nomes)


