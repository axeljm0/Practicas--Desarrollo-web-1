// ==========================================
// 13 - MÉTODOS DE ARRAYS (MAP, FILTER, FOREACH, CONCAT)
// Timestamp: [49:50] Métodos de arrays
// ==========================================

console.log("--- 13: MÉTODOS DE ARRAYS ---");

const nombres = ["Ana", "Carlos", "Beatriz", "David"];

// 1. forEach()
// Recorre el array para ejecutar un efecto secundario (side-effect).
// ¡OJO!: forEach NO retorna nada (retorna undefined), no genera un nuevo array.
console.log("Iteración con forEach():");
nombres.forEach((nombre, index) => {
  console.log(`  [${index}] ${nombre}`);
});

// 2. map() - ¡EL MÉTODO MÁS USADO EN REACT!
// Transforma cada elemento del array y RETORNA UN NUEVO ARRAY de la misma longitud.
// No muta el array original (es inmutable).
const nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Array original:", nombres);
console.log("Nuevo array con map():", nombresEnMayusculas);

// 3. filter()
// Evalúa una condición booleana para cada elemento y RETORNA UN NUEVO ARRAY
// con los elementos que cumplieron la condición (true).
const nombresConMasDe4Letras = nombres.filter(nombre => nombre.length > 4);
console.log("Filtrados con más de 4 letras:", nombresConMasDe4Letras);

// 4. concat()
// Une dos o más arrays y RETORNA UN NUEVO ARRAY sin modificar los originales.
const masNombres = ["Elena", "Fernando"];
const todosLosNombres = nombres.concat(masNombres);
console.log("Array unido con concat():", todosLosNombres);

// ==========================================
// Conexión con React: Renderizado de Listas e Inmutabilidad
// ==========================================

const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, enStock: true },
  { id: 2, nombre: "Teclado", precio: 80, enStock: false },
  { id: 3, nombre: "Mouse", precio: 40, enStock: true }
];

// En React, usamos .map() para convertir datos en elementos JSX:
const listaHTML = productos.map(producto => `
  <li key="${producto.id}">
    <strong>${producto.nombre}</strong> - $${producto.precio}
  </li>
`).join("");

console.log("HTML generado con .map():", listaHTML);

// En React, para 'eliminar' un elemento de la lista sin mutar el estado se usa .filter():
const idAEliminar = 2;
const productosActualizados = productos.filter(p => p.id !== idAEliminar);
console.log(`Productos después de filtrar (sin id ${idAEliminar}):`, productosActualizados);
