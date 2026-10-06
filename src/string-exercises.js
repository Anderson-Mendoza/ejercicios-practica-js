(function () {
  console.log("=== Ejercicios con funciones y strings ===");

  // 1) Programa una función que cuente el número de caracteres de una cadena de texto.
  function miFuncion(str) {
    return `la cadena de texto contiene ${str.length} caracteres`;
  }
  console.log(miFuncion("Hola mundo"));

  // 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
  function miFuncion2(texto, longitud) {
    return texto.slice(0, longitud);
  }
  console.log(miFuncion2("Hola mundo", 4));

  // 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.
  function miFuncion3(texto1, separar) {
    return texto1.split(separar);
  }
  console.log(miFuncion3("Hola que tal", " "));

  // 4) Programa una función que repita un texto X veces.
  function miFuncion4(texto2, veces) {
    return texto2.repeat(veces);
  }
  console.log(miFuncion4("Hola mundo, ", 3));

  // forma larga de repetir un texto usando un for
  function formaLarga(texto5, repetir) {
    let resultado = " ";
    for (let i = 0; i < repetir; i++) {
      resultado += texto5;
    }
    return resultado;
  }
  console.log(formaLarga("Hola, ", 3));

  // 5) Programa una función que invierta las palabras de una cadena de texto.
  const invertirTexto = (textoInvertido) => {
    let cadenaVacia = " ";
    for (let i = textoInvertido.length - 1; i >= 0; i--) {
      cadenaVacia += textoInvertido[i];
    }
    return cadenaVacia;
  };
  console.log(invertirTexto("Hola mundo"));

  // Diferencias entre argumentos y parámetros.
  function nombreCompleto(nombre, apellido /* Parámetros */) {
    console.log(`${nombre} ${apellido}`);
    console.log(nombre);
    console.log(apellido);
    return `Hola ${nombre} ${apellido}, bienvenido a la programación`;
  }
  console.log(nombreCompleto("Anderson", "Mendoza" /* Argumentos */));

  function sumaBasica(a, b) {
    return a + b;
  }
  console.log("Suma:", sumaBasica(10, 4));
  console.log("Suma:", sumaBasica(5, 8));

  function nombre2(nombre2) {
    return `Hola ${nombre2}`;
  }
  console.log(nombre2("Anderson"));

  /*
    Funcion tipo flecha las arrow functions
    forma tradicional
    function sumar(a, b) {
      return a + b;
    }

    forma flecha equivalente
  */
  function sumarTradicional(a, b) {
    return a + b;
  }

  const sumar2 = (a, b) => {
    return a + b;
  };

  // forma flecha corta (si solo hay una línea con return implícito)
  const sumar3 = (a, b) => a + b;
  console.log(sumarTradicional(5, 8));
  console.log(sumar2(5, 8));
  console.log(sumar3(5, 8));

  function ejecutar(funcion) {
    funcion();
  }

  function decirHola() {
    console.log("Hola, mundo!");
  }

  ejecutar(decirHola); // Llamada a la función decirHola a través de ejecutar

  // 1. Crea una función tradicional llamada esPar que reciba un número y devuelva true si es par, false si es impar.
  function esPar(numero) {
    return numero % 2 === 0;
  }
  console.log("esPar(4):", esPar(4));

  // 2. Convierte esa función a función flecha.
  const esParFlecha = (numero) => numero % 2 === 0;
  console.log("esParFlecha(7):", esParFlecha(7));

  // 3. Crea una función flecha llamada saludarPersona que reciba nombre y edad.
  const saludarPersona = (nombre, edad) => `${nombre} tiene ${edad} años`;
  console.log(saludarPersona("Ana", 25));

  // 4. Crea una función llamada aplicarDescuento que reciba un precio y un porcentaje.
  function aplicarDescuento(precio, porcentaje) {
    const operacion = (precio * porcentaje) / 100;
    const valor = precio - operacion;
    return valor;
  }
  console.log("Descuento:", aplicarDescuento(5000, 25));

  // aprendiendo for
  for (let i = 0; i < 5; i++) {
    console.log("Bucle for:", i);
  }

  // recorrer un array con for
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }

  // 1. Usa un for para imprimir los números del 1 al 10.
  for (let i = 1; i <= 10; i++) {
    console.log("Número:", i);
  }

  // Usa un for para recorrer este array e imprimir cada nombre.
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }

  console.log("Resultado de la función invertida:", invertirTexto("Hola mundo"));
})();