console.log("=== Ejercicios con destructuring ===");



/* que es Destructuring ---> es una forma de "sacar" valores de un objeto o un array y guardarlos en variables,
   sin tener que escribir objeto.propiedad una y otra vez  */

// Destructuring de objetos
// sin destructuring (forma larga)

const USUARIO = { nombre: "Ana", edad: 25, ciudad: "Bogota" };

const nombre = USUARIO.nombre;
const edad = USUARIO.edad;
const ciudad = USUARIO.ciudad;

console.log(nombre); //Ana
