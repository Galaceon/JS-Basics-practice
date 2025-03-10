/** POO || PROGRAMACION ORIENTADA A OBJETOS **/

/**--------------------------------------------- **/
/** CLASES ANTIGUAS **/
function Juego(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const darkSouls = new Juego ('Dark souls', 30);
const hollowKnight = new Juego ('Hollow Knight', 15);


/* Con prototype(antiguo) */
Juego.prototype.precioJuego = function() {
    return `El precio es de ${this.precio}`
}
console.log(darkSouls.precioJuego())
console.log(Juego)

/* Sin prototype */
function textJuego(juego) {
    return `El juego es ${juego.nombre} y vale ${juego.precio}`
}
console.log(textJuego(darkSouls))

/**--------------------------------------------- **/

/**--------------------------------------------- **/
/** CLASES MODERNAS EN POO **/
class Celular {
    constructor(modelo, sistema, precio) {
        this.modelo = modelo;
        this.sistema = sistema;
        this.precio = precio
    }

    precioCelular() { /* Prototype moderno */
        return `El precio es de ${this.precio}`
    }
}
const celular1 = new Celular('iPhone15', 14, 1200);
const celular2 = new Celular('android', 2, 400);
console.log(celular1.precioCelular())


/** POO - HERENCIA **/
class Movil extends Celular {
    constructor(modelo, sistema, precio, color) {
        super(modelo, sistema, precio); /* Con super() tenemos la informacion de la clase anterior */
        this.color = color;
    }
    precioCelular() {
        return `${super.precioCelular()} y su color es ${this.color}` /* Con super() tenemos la frase del metodo anteior deseado */
    }
}

const movil1 = new Movil('samsung', 'android', 300, 'rojo');
console.log(movil1.precioCelular());
/**--------------------------------------------- **/
/** OBJETO NORMAL **/
// const bolis = {
//     nombre: "nose",
//     precio: 2,
//     marca: "unaMarca"
// }

// console.log(bolis.nombre)