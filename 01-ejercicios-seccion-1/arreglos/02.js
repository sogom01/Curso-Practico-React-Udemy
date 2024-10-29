// Crea un programa que tome un arreglo de números y:

// 1. Devuelva un nuevo arreglo con solo los números pares.

// Forma 1 ()

// const ejercicio2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(ejercicio2);

// let odds = [];

// for (let i = 0; i < ejercicio2.length; i++) {
//     if (ejercicio2[i] % 2 === 0) {
//         odds.push(ejercicio2[i])
//     }
// }

// console.log(odds);


// Forma 2 (Se logra hacer con el método filter)

const ejercicio2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Arreglo inicial: ${ejercicio2}`);

let odds = ejercicio2.filter(function (numero) {
    return numero % 2 === 0
})

console.log(`Números pares: ${odds}`);

// 2. Devuelva un nuevo arreglo donde cada número esté elevado al cuadrado.
const potencias = ejercicio2.map(function (numero) {
    return numero * numero
})

console.log(`Números elevados al cuadrado: ${potencias}`);

// 3. Calcule la suma de todos los números.
const suma = odds.reduce((cont, numero) => cont + numero, 0)
console.log(`La suma de todos los valores del array es: ${suma}`);

// Estructura del .reduce((acumulador, número) => operación , valorInicial)

// El .reduce funciona de la siguiente manera:
// cont: acumula el valor de la suma
// numero: trae el numero de la cada una de las posiciones del array
// Posterior a eso se hace la operación necesaria (Suma, Resta, Multiplicación, Division), después de la coma va el valor inicial del contador.

