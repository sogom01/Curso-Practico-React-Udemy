function getSaludo() {
    return 'Hola perras';
};

console.log(getSaludo());

// Dos formas de hacerlo con función normal y función de flecha


const getSaludo2 = (saludo) => {
    return saludo
}

console.log(getSaludo2('Entonces que mks'));

const nombre = 'Juan Sebastian';
const apellido = 'Osorio Gomez';
const fullName = `${nombre} ${apellido}`;
const nombreCompleto = (nombre) => {
    return nombre;
}

console.log(`Mi nombre es ${nombreCompleto(fullName)}`);