console.log("====== Ejercicios Finales map(), filter(), reduce(), destructuring, spread y rest  =====");



// datos
const tareas = [
    { id: 1, titulo: "Estudiar JS", completada: true, horas: 2 },
    { id: 2, titulo: "Hacer ejercicios", completada: false, horas: 3 },
    { id: 3, titulo: "Repasar reduce", completada: false, horas: 1 },
    { id: 4, titulo: "Leer sobre React", completada: true, horas: 4 }
];

// Ejercicios

//1. filter + map: Obten un array solo con los titulos de las tareas pendientes (completada: false)

const titulosPendientes = tareas
    .filter(tareas => tareas.completada === false)
    .map(tareas => tareas.titulo);

console.log("Ejercicio 1 map(), filter(): ", titulosPendientes);


//2. find + destructuring: encuentra la tarea con id: 3 y, usando destructuring, saca titulo y horas en dos variables.

const unaTarea = tareas.find((tarea) => tarea.id === 3);
const { titulo: tituloTarea, horas } = unaTarea;
console.log("Ejercicio 2 find(), destructuring: ", tituloTarea, horas);


//3. map + destructuring en el parámetro: crea un array de strings con este formato: "Estudiar JS (2h)", usando ({ titulo, horas }) => ... y template literals.

const arrDeString = tareas.map(({ titulo, horas }) => `${titulo} (${horas}h)`);
console.log(arrDeString);


//4. reduce: calcula el total de horas de todas las tareas. (Si te trabas, hazlo primero con un for y luego tradúcelo, como hicimos antes.)

//5. map + spread: crea un array nuevo donde la tarea con id: 2 quede con completada: true, sin modificar el original. Imprime ambos para comprobarlo.

//6. Reto (spread + filter): crea un array nuevo que tenga todas las tareas originales más una tarea nueva con id: 5, y luego, de ese array nuevo, saca solo las que tengan horas >= 3.
