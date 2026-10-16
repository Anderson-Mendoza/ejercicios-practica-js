console.log(" === ejercicios con spread operator ===");

/* Spread operator: "esparce" el contenido de un array u objeto dentro de uno nuevo, 
sin modificar el original, Si algo va despues del spread y tiene el mismo nombre de propiedad,
sobrescribe el valor anterior.*/

const numeros = [1, 2, 3];
const numeros2 = [...numeros, 4, 5, 6];
console.log(numeros2); // [1, 2, 3, 4, 5, 6] el original no cambia 

const persona = { nombre: "Luis", edad: 30 };
const actualizada = { ...persona, edad: 31, } // sobrescribe la propiedad edad 31 {nombre: "Luis", edad: 31}


// ejercicios 
// 1. crea un array nuevo con los mismos numeros más el 5 al final, usando spread:
const ejerciciosNumeros = [1, 2, 3];
const ejerciciosNumerosSpread = [...ejerciciosNumeros, 5];
console.log(ejerciciosNumeros);
