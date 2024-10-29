// Dado un arreglo de palabras, realiza las siguientes tareas:
const ejercicio3 = ['Juan', 'Fabio', 'Patricia', 'Nora', 'Olga', 'Daniela'];
console.log(ejercicio3);

// Ordena el arreglo alfabéticamente.
const ordenado = [...ejercicio3];  //Se crea una copia del arreglo para asi no afectar los valores que son referencias en memoria
ordenado.sort()
console.log(ordenado);
console.log(ejercicio3); // Al imprimir este valor nos damos cuenta que los valores del arreglo original no se afectaron

// Invierte el orden de los elementos en el arreglo.
const invertido = [...ordenado];
invertido.reverse();
console.log(invertido);

// Convierte todas las palabras en mayúsculas.
const capitalizado = ejercicio3.map(function (word) {
    return word.toUpperCase();
})

console.log(capitalizado);

// Devuelve un nuevo arreglo con la longitud de cada palabra.
const cantidaPalabras = ejercicio3.map(function (word) {
    return word.length;
})

console.log(cantidaPalabras);
