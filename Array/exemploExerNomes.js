const names = ['José', 'João', 'Maria']

const contacts = [
    {
        name: 'João', age:22
    },
    {
        name: 'Rubens', age:24
    },
    {
        name: 'Maria', age:25
    },
    {
        name: 'Roger', age:26
    },
    {
        name: 'Lucas', age:27
    },
    {
        name: 'Kátia', age:28
    },
]

// const result = contacts.filter(person => names.includes(person.name));

// const result = contacts.filter(person => names.indexOf(person.name) > -1);


const result = contacts.filter(person => person.name === names.find(nome => nome === person.name));  

console.log(r)