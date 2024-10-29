// Aca podemos ver que se puede agregar datos con kla propiedad .push

const arreglo = [];
arreglo.push(1)
arreglo.push(5)
arreglo.push(10)
arreglo.push(15)
// no es recomendable usar el push porque modifica el arreglo debemos usar el spread
const otro = 40
let copia = [...arreglo, otro];


// En este ejercicio realizamos una copia del arreglo 2 y multiplicamos el valor *2 para obtener el doble de cada valor 
// El .map crea una copia del arreglo y esto puede servirnos para el ejercicio 
// Documentación que puedes ser util https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const dobles = arreglo.map(function (numero) {
    return numero * 2
})

console.log(arreglo);
console.log(dobles);
console.log(copia);



