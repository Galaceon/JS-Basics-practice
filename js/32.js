/** Async / await **/
function descargarUsuarios() {
    return new Promise( resolve => {
        console.log('descargando los usuarios')

        setTimeout( () => {
            resolve('clientes descargados')
        }, 3000)
    }) 
}

function descargarProductos() {
    return new Promise( resolve => {
        console.log('descargando los productos')

        setTimeout( () => {
            resolve('productos descargados')
        }, 8000)
    }) 
}

async function app() {
    try {
        const resultado = await Promise.all( [ descargarUsuarios(), descargarProductos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch(error) {
        console.log(error);
    }
}

app();