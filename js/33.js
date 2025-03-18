async function obtenerEmpleados() {
    const archivo = 'empleados.json';

    const resultado = await fetch(archivo);  //async / await
    const datos = await resultado.json();
    // console.log(datos);

    const empleados = datos.empleados

    empleados.forEach( empleado => {
        console.log(empleado.id);
        console.log(empleado.nombre);
        console.log(empleado.puesto);
    })
    // fetch(archivo)
    //     .then( resultado => resultado.json())
    //     .then( datos => {
    //         const {empleados} = datos;           //promises

    //         empleados.forEach( empleado => {
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);
    //         })
    //     })
}

obtenerEmpleados();