// Ejercicios prácticos

// 1  Crea un programa que tome un arreglo de números y realice las siguientes
//  operaciones:

const ejercicio1 = [1, 2, 3, 4];
console.log(ejercicio1);

// 1. Agregar un número al final del arreglo.
ejercicio1.push(200)
console.log(ejercicio1);

// 2. Agregar un número al inicio del arreglo.
ejercicio1.unshift(100);
console.log(ejercicio1);

// 3. Eliminar el último elemento del arreglo.
ejercicio1.pop();
console.log(ejercicio1);

// 4. Eliminar el primer elemento del arreglo.
ejercicio1.shift();
console.log(ejercicio1);

// 5. Encontrar el índice de un número específico dentro del arreglo.

// Forma 1 
// console.log(ejercicio1.indexOf(7));

// Forma 2 (de forma dinámica) solicitando en pantalla el numero y si este tiene index y existe.
let numero = parseInt(prompt('Ingrese el número que quiere buscar'))
let asw = ejercicio1.indexOf(numero)
if (asw == ! -1) {
    alert(`El número esta en la posición ${asw} del arreglo`);
}

//5. Verificar si un número existe en el arreglo.
let incluido = ejercicio1.includes(numero);
if (incluido == ! true) {
    alert(`El número ${numero} no esta en el array`)
}