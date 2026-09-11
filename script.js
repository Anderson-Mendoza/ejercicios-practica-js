// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
// por ejemplo. miFuncion("Hola Mundo") devolverá 10.

function miFuncion(str) {
    return `la cadena de texto contiene ${str.length} caracteres`;
}

console.log(miFuncion("Hola mundo"));



// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
// por ejemplo. miFuncion("Hola Mundo", 4) devolverá "Hola".


function miFuncion2(texto, longitud) {
    return texto.slice(0, longitud);
}

console.log(miFuncion2("Hola mundo", 4));



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
// por ejemplo. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function miFuncion3(texto1, separar) {
    return texto1.split(separar);
}

console.log(miFuncion3("Hola que tal", " "));

// 4) Programa una función que repita un texto X veces,
// por ejemplo. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//forma corta
function miFuncion4(texto2, veces) {
    return texto2.repeat(veces)
}

console.log(miFuncion4("Hola mundo, ", 3));

//forma larga
function formaLarga(texto5, repetir) {
    let resultado = " "
    for (let i = 0; i < repetir; i++) {
        resultado += texto5;
    }
    return resultado
}

console.log(formaLarga("Hola, ", 3));

// 5) Programa una función que invierta las palabras de una cadena de texto,
// por ejemplo. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirTexto = (textoInvertido) => {
    let cadenaVacia = " ";
    for (let i = textoInvertido.length - 1; i >= 0; i--) {
        cadenaVacia += textoInvertido[i];
    }
    return cadenaVacia
}
console.log(invertirTexto("Hola mundo"));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
// por ejemplo. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
// por ejemplo. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
// por ejemplo. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


/* Diferencias entre argumentos y parámetros   */

function nombreCompleto(nombre, apellido /* <--- Parámetros */) {

    console.log(`${nombre} ${apellido}`);
    console.log(nombre);
    console.log(apellido);
    return `Hola ${nombre} ${apellido}, bienvenido a la programación`;
}


console.log(nombreCompleto("Anderson", "Mendoza" /* <--- Argumentos */));

function suma(a, b) {

    return a + b;
}

const resultado = suma(10, 4);
suma(10, 4);
console.log(suma);

console.log(suma(5, 8));

function nombre2(nombre2) {
    // console.log(`Hola ${nombre2}`);
    return `Hola ${nombre2}`;
}

nombre2("Anderson4");
console.log(nombre2("Anderson"));

/* Funcion tipo flecha las arrow functions */

// forma tradicional 

function sumar(a, b) {
    return a + b;
}

// forma flecha equivalente tipo felcha

const sumar2 = (a, b) => {
    return a + b;
}

// forma flecha corta  (si solo hay una linea con return implicito se puede omitir las llaves y el return)
const sumar3 = (a, b) => a + b;

console.log(sumar(5, 8));
console.log(sumar2(5, 8));
console.log(sumar3(5, 8));


function ejecutar(funcion) {
    funcion();
}

function decirHola() {
    console.log("Hola, mundo!");
}

ejecutar(decirHola); // Llamada a la función decirHola a través de ejecutar



//1. Crea una función tradicional llamada esPar que reciba un número y devuelva true si es par, false si es impar.
function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4)); // true



//2. Convierte esa función a función flecha.

const esParFlecha = (numero) => numero % 2 === 0;
console.log(esParFlecha(7));


//3. Crea una función flecha llamada saludarPersona que reciba nombre y edad, y devuelva un string como "Ana tiene 25 años".

const saludarPersona = (nombre, edad) => ` ${nombre} tiene ${edad} años`
console.log(saludarPersona("Ana", 25));

// 4. Crea una función llamada aplicarDescuento que reciba un precio y un porcentaje, y devuelva el precio con el descuento aplicado.

function aplicarDescuento(precio, porcentaje,) {
    const operacion = precio * porcentaje / 100
    const valor = precio - operacion
    return valor
}

console.log(aplicarDescuento(5000, 25))

// aprendiendo for
//  estructura del for ----   for(inicio; condicion; incremento){ codigo que se repite}
// ejemplo 
for (let i = 0; i < 5; i++) {
    console.log(i);

}

// recorrer un array con for

let frutas = ["Manzana", "Pera", "Guayaba"];
frutas.push("Mango");

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//1. Usa un for para imprimir los números del 1 al 10.

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//Usa un for para recorrer este array e imprimir cada nombre:

let nombres = ["Ana", "Pedro", "Martha"]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}


/* 5. crea una función procesar que reciba un array de números y una función,
 y aplique esa función a cada número usando un for, devolviendo el nuevo
 array (esto es básicamente reinventar .map() a mano, para que entiendas cómo funciona por dentro). */


function procesar(array, funcion) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcion(array[i]))

    }
    return resultado

}

console.log(procesar([1, 2, 3], n => n * 2));




/* Practica, llamada a un objeto o a una lista   */
