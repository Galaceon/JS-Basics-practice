let animales = [
    { especie: 'leon', añosVivo: 50},
    { especie: 'tigre', añosVivo: 10},
    { especie: 'gato', añosVivo: 15}
]

let precio1 = 10;
let precio2 = 5

let PCPiezas = ['Raton', 'Pantalla', 'Grafica', 'Procesador', 'Cables']
let arrayDeNumeros = [10, 20, 30, 40, 50];

let total = 0

const producto = {
    nombreProducto : "monitor 20 pulgadas",
    disponible : true,
    precio : 30
}


/**--------------------------------------------- **/
function Juego(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const darkSouls = new Juego ('Dark souls', 30, true);
const hollowKnight = new Juego ('Hollow Knight', 15, false);

function formatearJuego(juego) {
    return `El juego ${juego.nombre} vale $ ${juego.precio} y esta ${juego.disponible}`;
}

// console.log(formatearJuego(darkSouls))

console.log(darkSouls);
console.log(hollowKnight);
/**--------------------------------------------- **/


/** THIS **/
// const obj = {
//     name : 'Anto',
//     normalFunction: function() {
//         console.log(this.name);
//     },
//     arrowFunction: () => {
//         console.log(this.name);
//     }
// }
// obj.normalFunction();
// obj.arrowFunction();



/** forEach & Map || Mostrar en consola y imprimir en HTML && Crear nuevos arrays con los parametros deseados **/
// const yokse1 = animales.forEach( animal => console.log(`animal seria: ${animal.especie} y lo que vive seria: ${animal.añosVivo}`));
// const animalada2 = animales.map( animal => `animal: ${animal.especie} - añosQueVive: ${animal.añosVivo}`)
// console.log(animalada2)



/** WHILE LOOP **/
// let i = 1;
// while(i <= 10) {
//     console.log(i);
//     console.log('buena');

//     i++;
// }


/** SPREAD OPERATOR || JUNTA ARRAYS O OBJETOS EN UNO SOLO **/
// const newArray = [...arrayDeNumeros, ...PCPiezas]

// console.log(newArray)



/** CREAR MIS PROPIOS METODOS **/
// const reproductor = {
//     reproducir: function(id) {
//         console.log(`Reproduciendo canciones con ID: ${id}`)
//     },
//     pausar: function() {
//         console.log('Pausando cancion...')
//     }
// }
// const spoty = {
//     reproducir: id => console.log(`Reproducion cancion con ID: ${id}`)
// }
// spoty.reproducir(15)

// reproductor.reproducir(12);
// reproductor.pausar();



/** UNIR OBJETOS || SPREAD OPERATOR **/
// const producto = {
//     nombreProducto : "monitor 20 pulgadas",
//     disponible : true,
//     precio : 30
// }
// const medidas = {
//     peso: '1Kg',
//     medida: '1m'
// }
// const nuevoProducto = {
//     ...producto, ...medidas
// }
// console.log(nuevoProducto)


/** METODO REDUCE || SUMA TODOS LAS PROPIEDADES DE UN ARRAY DE OBJETOS **/
// let resultado = animales.reduce( (palabra, vivo) => {return palabra + vivo.añosVivo}, 0)
// console.log(resultado);


/** METODO SOME || BUSCA UN ELEMENTO EN UN ARRAY ANIDADO, TAMBIEN LLAMADO DE OBJETOS **/
// let resultado1 = animales.some( function(elm) {
//     return elm.especie === 'leon'
// })
// let resultado2 = animales.some( elm => elm.especie === 'pato');
// console.log(resultado1)
// console.log(resultado2)



// const sumar = (n1, n2) => console.log(n1 + n2);
// sumar(precio1, precio2);