console.log("=== Ejercicios con destructuring ===");



/* que es Destructuring ---> es una forma de "sacar" valores de un objeto o un array y guardarlos en variables,
   sin tener que escribir objeto.propiedad una y otra vez  */

// Destructuring de objetos
// sin destructuring (forma larga)

const USUARIO = { nombre: "Ana", edad: 25, ciudad: "Bogota" };

// const nombre = USUARIO.nombre;
// const edad = USUARIO.edad;
// const ciudad = USUARIO.ciudad;

// console.log(nombre); //Ana


// con destructuring forma correcta

const { nombre, edad, ciudad } = USUARIO;

console.log(nombre);
console.log(edad);

// Ejercicios 

// 1. Dado este objeto, usa destructuring para sacar titulo y autor en variables separadas:

const libro = { titulo: "Cien años de soledad", autor: "García Márquez", año: 1967 };

const { titulo } = libro;
const { autor } = libro;

// 2. Dado este array, usa destructuring para sacar los dos primeros valores

const coordenadas = [4.71, - 74.07, "Bogotá"];

const [primero, segundo, tercero] = coordenadas;
console.log(primero);
console.log(segundo);

// 3. Convierte esta función para que use destructuring en sus parámetros, en vez de acceder con punto

function saludar({ nombre, edad }) {
    return "Hola " + nombre + ", tienes " + edad + " años";
}

console.log(saludar({ nombre: "Ana", edad: 25 }));


// 4. Reto: dado este array de objetos, usa map() combinado con destructuring para sacar solo los nombres (destructuring dentro del map)

const estudiantes2 = [
    { nombre: "Camila", nota: 4.5 },
    { nombre: "Andres", nota: 2.8 }
];

const soloNombres = estudiantes2.map(({ nombre }) => nombre);
console.log(soloNombres);



