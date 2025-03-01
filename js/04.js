// String o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el Curso';
const producto2 = 'Monitor HD"';
const nombre = 'Antonio Garcia';
const email = 'correo@correo.com';

// length es para la extension
console.log(tweet.length); //35
console.log(producto2); // Monitor HD"

// IndexOf (retorna posición)
console.log(tweet.indexOf('JavaScript')); //12
console.log(producto2.indexOf('Tablet')); // -1
console.log(email.indexOf('@')); // 6

// Includes (retorna true o false)
console.log(tweet.includes('JavaScript')); //true
console.log(producto2.includes('Tablet')); //false