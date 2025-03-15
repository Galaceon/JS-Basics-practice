Async / await

function descargarClientes(callback) {
    
    console.log('Se estan descargando los clientes')

    setTimeout( () => {
        callback('Los clientes han sido descargados')
    }, 5000)
}


// function descargarNuevosClientes() {
//     return new Promise( resolve => {
//         console.log('Descargando Clientes... Espere...')

//         setTimeout( () => {
//             resolve('Los clientes fueron descargados')
//         }, 5000)
//     })
// }

async function app() {
    try {
        const resultado = await descargarClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}

app();