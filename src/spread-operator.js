console.log(" === ejercicios con spread operator ===");

/* Spread operator: "esparce" el contenido de un array u objeto dentro de uno nuevo, 
sin modificar el original, Si algo va despues del spread y tiene el mismo nombre de propiedad,
sobrescribe el valor anterior.*/

const numeros = [1, 2, 3];
const numeros2 = [...numeros, 4, 5, 6];
console.log(numeros2); // [1, 2, 3, 4, 5, 6] el original no cambia 

const persona = { nombre: "Luis", edad: 30 };
const actualizada = { ...persona, edad: 31, } // sobrescribe la propiedad edad 31 {nombre: "Luis", edad: 31}
console.log("utilizando spread operator con objetos:", actualizada);
console.log(persona);

/* Rest: "recoger" lo que sobra, es lo contrario: junta varios valores en uno solo. Se usa en parametros de funciones 
  o en destructuring */

// en parametros de funcion

function sumar(...numeros) {
   return numeros.reduce((acc, numeros) => acc + numeros, 0);
}
console.log("Utilizando rest:", sumar(1, 2, 3, 4)); //10
//...numeros recoge todos los argumentos que le pases y los mete en un array.


//En destructuring:
const [primeros, ...resto] = [10, 20, 30, 40];
console.log(primeros); // 10
console.log(resto);   // [20, 30, 40]

const { nombre: nombreExtraido, ...otros } = { nombre: "Ana", edad: 25, ciudad: "Bogotá" };
console.log(nombreExtraido); // "Ana"
console.log(otros);  // { edad: 25, ciudad: "Bogotá" }




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

// 2. Une estos dos arrays en uno solo 
const frontend = ["HTML", "CSS", "JS"];
const backend = ["NODE", "SQL"];

const fullstack = [...frontend, ...backend];
console.log(fullstack);

// 3. Crea un objeto nuevo con la edad cambiada a 31 y una propiedad nueva  ciudad: "Medellin", sin modificar el original

const persona1 = { nombre: "Luis", edad: 30 };
const actualizada1 = { ...persona1, edad: 31, ciudad: "Medellin" };
console.log("objeto de persona1", persona1)
console.log("objeto modificado con spread operator de persona1 ", actualizada1);


/* 4. Crea una funcion multiplicar que reciba un número y luego cualquier cantidad de números más (rest), y devuelva un array  
   con cada uno multiplicado por el primero */



function multiplicar(factor, ...listaMultiplicar) {

   return listaMultiplicar.map(numero => numero * factor);

}

console.log(multiplicar(2, 1, 2, 3)); // 2, 4, 6
console.log(multiplicar(3, 1, 2, 3)); // 3, 6, 9
console.log(multiplicar(10, 5, 6, 7, 8)); // 50, 60, 70, 80

/*5. Dado este array de productos, crea uno nuevo donde:
       1. Cambies el stock del primer producto a 10
       2. Agregues un produnto mas al final
       3. No modifiques el original */


const productos = [
   { nombre: "Laptop", stock: 5 },
   { nombre: "Mouse", stock: 0 }
];

const resultadoDelMap = productos.map(producto => {
   if (producto.nombre === "Laptop") {
      return { ...producto, stock: 10 };
   }
   return producto;
})

const productoNuevo = { nombre: "Teclado", stock: 2 };
const productosFinales = [...resultadoDelMap, productoNuevo];
console.log(productosFinales);
console.log(productos);




