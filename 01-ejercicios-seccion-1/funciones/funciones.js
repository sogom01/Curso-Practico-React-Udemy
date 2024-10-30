// Este es ejemplo de una función normal
const saludar = function (nombre) {
    return `Hola mi nombre es: ${nombre}`
}
console.log(saludar('Sebastian'));

// Este es el ejemplo de un función de flecha NO SIMPLIFICADA
const saludarTodos = (nombre) => {
    return `Hola a todos mi nombre completo es: ${nombre}`
}
console.log(saludarTodos('Juan Sebastián Osorio Gómez'));

// Ahora vamos con una función de flecha SIMPLIFICADA ya que no tiene nada mas que el return
const saludar2 = (nombre) => `Hola, me llamo ${nombre}`;
console.log(saludar2('Miau miau miau miau'));
// esta es una forma mucho mas fácil de representar una función 

const getUser = () =>
({
    id: '189231272349087234',
    user: 'sogom_01'
})
console.log(getUser());

// Ejercicio practico 

const userActivo = (nombre) => ({
    userId: '123456',
    userName: nombre
}
)

console.log(userActivo('Fabio Osorio Marin'));