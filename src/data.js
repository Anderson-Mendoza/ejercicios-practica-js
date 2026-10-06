// Datos reutilizables para los ejercicios.
// Aquí se guardan los arrays principales que vamos a usar en varios archivos.

const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];

// .find() devuelve el primer elemento que cumple la condición.
const usuario = usuarios.find((u) => u.id === 2);

const PRODUCTOS = [
  { nombre: "Laptop", precio: 1200, stock: 5 },
  { nombre: "Mouse", precio: 25, stock: 0 },
  { nombre: "Teclado", precio: 45, stock: 12 },
  { nombre: "Monitor", precio: 300, stock: 3 }
];

const estudiantes = [
  { nombre: "Camila", nota: 4.5, curso: "Matemáticas" },
  { nombre: "Andres", nota: 2.8, curso: "Matemáticas" },
  { nombre: "Sofia", nota: 3.9, curso: "Historia" },
  { nombre: "Mateo", nota: 4.9, curso: "Historia" },
  { nombre: "Valentina", nota: 2.5, curso: "Matemáticas" }
];

const nombres = ["Ana", "Pedro", "Martha"];
const frutas = ["Manzana", "Pera", "Guayaba"];

// Exponemos estas variables globalmente para que los scripts de ejercicios puedan usarlas.
window.EjerciciosData = {
  usuarios,
  usuario,
  PRODUCTOS,
  estudiantes,
  nombres,
  frutas
};
