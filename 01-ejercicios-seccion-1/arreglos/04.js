const calificaciones = [2.8, 4.8, 3.0, 3.0, 2.8, 1.8, 3.0, 4.0, 3.5, 4.8];

// Encontrar el promedio de notas.
const sumatoriaNotas = calificaciones.reduce((cont, num) => cont + num, 0);
const calcularPromedio = sumatoriaNotas / calificaciones.length;
console.log(`El promedio total es: ${calcularPromedio}`);

// Encontrar la nota mas alta y mas baja
const notaMasAlta = Math.max(...calificaciones);
console.log(`La nota mas alta es: ${notaMasAlta}`);

const notaMasBaja = Math.min(...calificaciones)
console.log(`La nota mas baja es: ${notaMasBaja}`);

const notasDescendientes = [...calificaciones];
const notasAscendientes = [...calificaciones];
notasDescendientes.sort((a, b) => b - a);
notasAscendientes.sort((a, b) => a - b);
console.log(notasDescendientes);
console.log(notasAscendientes);

const notasAprobadas = calificaciones.filter(notas => (notas >= 3));
const notasReprobadas = calificaciones.filter(notas => (notas < 3));
console.table(notasAprobadas);
console.table(notasReprobadas);


