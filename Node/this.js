console.log(this===global);
console.log(this===module);

console.log(this===module.exports);
console.log(this===exports);

function logThis(){
    console.log('Dentro de uma função...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);


}
logThis();

// dentro de uma função This aponta para global
// fora de uma função o This aponta para module.exports