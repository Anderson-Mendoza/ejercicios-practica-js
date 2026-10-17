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
console.log(ejerciciosNumerosSpread);


// =========================================================================

const frutasEjemplo = ["Manzana", "Pera"];
const masFrutas = [...frutasEjemplo, "Uva", "Mango"];
console.log("se añadieron más frutas con spread operator", masFrutas);
console.log("lista de frutas antes del spread operator", frutasEjemplo);

const ciudadesEjemplo = ["Ibague", "Cajamarca", "Armenia", "Pereira"]
const ciudadesEjemploSpread = [...ciudadesEjemplo, "Santa Rosa", "Manizales"];
console.log("ejemplo adicional utilizando spread operator", ciudadesEjemploSpread);
console.log("ejemplo adicional sin utilizar spread operator", ciudadesEjemplo);


// el spread operator sirve tambien para unir dos arrays
/*  ...frutasEjemplo significa: "saca todos los elementos de frutasEjemplo y ponlos aqui".
   asi creas un array nuevo sin tocar el original (a diferencia de push(), que modifica el array original)*/

