(function () {
  console.log("=== Ejercicios con arrays ===");

  /*
    .map()  TRANSFORMAR
    idea: recorre el array y transforma cada elemento, devolviendo un array nuevo del mismo tamaño.
    Piensa en una fila de personas donde a cada una le entregas un regalo distinto según una regla.
    Nadie se queda sin regalo, y nadie se va de la fila; solo cambia lo que cada uno tiene en las manos.
  */
  const nombreProductos = PRODUCTOS.map((producto) => producto.nombre);
  console.log("Nombres de productos:", nombreProductos);

  /*
    .filter() SELECCIONAR
    idea: recorre un array y decide, elemento por elemento, si se queda o se va según una condición.
    Devuelve un array nuevo, posiblemente más pequeño.
  */
  const STOCK_DISPONIBLE = PRODUCTOS.filter((producto) => producto.stock > 0);
  console.log("Productos con stock:", STOCK_DISPONIBLE);

  /*
    .find() BUSCAR UNO
    idea: recorre el array buscando el primer elemento que cumple una condición.
    Devuelve ese único elemento y se detiene cuando lo encuentra.
  */
  const ENCONTRAR_PRODUCTO = PRODUCTOS.find((producto) => producto.nombre === "Teclado");
  console.log("Producto encontrado:", ENCONTRAR_PRODUCTO);

  /*
    .reduce() ACUMULAR / RESUMIR
    idea: recorre el array y va combinando todo en un solo valor final (suma, promedio, objeto, etc.).
    Es el más flexible y el más difícil de entender al principio.
  */
  const CALCULAR_VALOR = PRODUCTOS.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.stock;
  }, 0);
  console.log("Valor total del inventario:", CALCULAR_VALOR);

  const PRODUCTOS_CAROS = PRODUCTOS
    .filter((producto) => producto.precio > 50)
    .map((producto) => producto.nombre);
  console.log("Productos caros:", PRODUCTOS_CAROS);

  // ejercicios con estudiantes
  const NOMBRES_ESTUDIANTES = estudiantes.map((estudiante) => estudiante.nombre);
  console.log("Nombres de estudiantes:", NOMBRES_ESTUDIANTES);

  const NOTA_ESTUDIANTES = estudiantes.filter((estudiante) => estudiante.nota > 3);
  console.log("Estudiantes aprobados:", NOTA_ESTUDIANTES);

  const BUSCAR_ESTUDIANTE = estudiantes.find((estudiante) => estudiante.nombre === "Mateo");
  console.log("Estudiante Mateo:", BUSCAR_ESTUDIANTE);

  function buscarNombre(nombreABuscar) {
    return estudiantes.find((estudiante) => estudiante.nombre === nombreABuscar)?.nombre || "Nombre no encontrado";
  }

  console.log("Buscar nombre con función:", buscarNombre("Mateo"));
  console.log("Buscar nombre con función:", buscarNombre("Sofia"));

  const SUMA_NOTAS = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0);
  const PROMEDIO = SUMA_NOTAS / estudiantes.length;
  console.log("Promedio general:", PROMEDIO);

  const CURSO_MATEMATICAS = estudiantes.filter((estudiante) => estudiante.curso === "Matemáticas");
  console.log("Curso Matemáticas:", CURSO_MATEMATICAS);

  const ESTUDIANTES_REPROBADOS = estudiantes
    .filter((estudiante) => estudiante.nota < 3)
    .map((estudiante) => estudiante.nombre);
  console.log("Estudiantes reprobados:", ESTUDIANTES_REPROBADOS);

  const ESTUDIANTES_HISTORIA = estudiantes.filter((estudiante) => estudiante.curso === "Historia");
  const NOTAS_HISTORIA = ESTUDIANTES_HISTORIA.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0);
  const PROMEDIO_HISTORIA = NOTAS_HISTORIA / ESTUDIANTES_HISTORIA.length;
  console.log("Promedio de Historia:", PROMEDIO_HISTORIA);

  // 8. Crea un objeto que cuente cuantos estudiantes hay por curso.
  const conteo = {};
  for (let i = 0; i < estudiantes.length; i++) {
    const curso = estudiantes[i].curso;
    conteo[curso] = conteo[curso] ? conteo[curso] + 1 : 1;
  }
  console.log("Conteo por curso (bucle for):", conteo);

  const conteo2 = estudiantes.reduce((acumulador, estudiante) => {
    const curso = estudiante.curso;
    acumulador[curso] = acumulador[curso] ? acumulador[curso] + 1 : 1;
    return acumulador;
  }, {});
  console.log("Conteo por curso (reduce):", conteo2);

  const numerosTransformar = [1, 2, 3];
  const dobles = numerosTransformar.map((n) => n * 2);
  console.log("Dobles:", dobles);

  const numerosSeleccionar = [1, 2, 3, 4, 5, 6];
  const pares = numerosSeleccionar.filter((n) => n % 2 === 0);
  console.log("Pares:", pares);

  const numerosAcumular = [1, 2, 3, 4];
  const sumaAcumulada = numerosAcumular.reduce((acumulador, actual) => acumulador + actual, 0);
  console.log("Suma acumulada:", sumaAcumulada);

  // Esto es básicamente reinventar .map() a mano, para entender cómo funciona por dentro.
  function procesar(array, funcion) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
      resultado.push(funcion(array[i]));
    }
    return resultado;
  }
  console.log("Procesar con for:", procesar([1, 2, 3], (n) => n * 2));
})();
