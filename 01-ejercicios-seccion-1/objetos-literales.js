
// Es importante tener en cuenta que al imprimir en pantalla 
// el objeto se imprime en orden alfabético, eso quiere decir 
// que los años de servicio van a aparecer primero
// (Ver en este ejemplo)

const persona = {
    nombreCompleto: 'Juan Sebastián Osorio Gómez',
    nacionalidad: 'Colombiano',
    edad: 26,
    rango: 'Capitan',
    // Los años de servicio se ponen de primeros al desplegar el objeto porque js los imprime ordenándolos alfabéticamente
    anosDeServicio: '2 años',
    dirección: {
        ciudad: 'Manizales',
        lat: 35.3242345,
        lng: 35.3242345
    }
}



// Vamos a aprender a clonar un objeto para ponerlo en uso con el operador Spread que permite crear una copia en memoria del objeto

const persona2 = { ...persona }
// Aca podemos modificar cada linea o valor especifico que queremos modificar del objeto o arreglo inicial
persona2.nombreCompleto = 'Andres Carne de Res'

console.log(persona);
console.log(persona2);