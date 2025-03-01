// Objeto Math

let resultado;

resultado = Math.PI;
resultado = Math.round(2.5); //3.14
resultado = Math.ceil(2.1); // Ceil siempre redondea hacia arriba
resultado = Math.floor(2.9); // Floor siempre redondea hacia abajo
resultado = Math.sqrt(144); // 12 Da la raiz cuadrada
resultado = Math.abs(-200); // 200 Combierte el numero en positivo
resultado = Math.min( 3, 5, 1, 8 , 2, 10 ); // 1 Da el numero mas pequeño
resultado = Math.max( 3, 5, 1, 8 , 2, 10 ); // 10 Da el numero mas grande
resultado = Math.random(); // Da un numero random || ejem: 0.512412...
resultado = Math.floor( Math.random() * 30 ); // Da un numero aleatorio, lo multiplica por 30 y lo redondea con floor

console.log(resultado);