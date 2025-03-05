const nombre = 'Alberto';
const n1 = 15;
const n2 = 20;
const metodoPago = 'tarjeta';
const cancionID = 3890;

let contenedor = [10, 20, 30, 40, 50, 60]

// switch(metodoPago) {
//     case 'tarjeta':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     case 'cheque':
//         console.log('Pagaste con cheque')
//         break;
//     default:
//         console.log('Aun no has pagado');
//         break;
// }

let resultado = contenedor.filter( numero => numero > 20);

console.log(resultado)