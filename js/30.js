const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve('Usuario autenticado');
    }else {
        reject('No se pudo iniciar sesion') 
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then( resultado =>  console.log(resultado))
    .catch ( error =>  console.log(error))