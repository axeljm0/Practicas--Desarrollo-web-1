// ==========================================
// 11 - ARROW FUNCTIONS E INLINE ARROW FUNCTIONS
// Timestamps: [35:21] Arrow functions | [37:11] Inline arrow functions
// ==========================================

console.log("--- 11: ARROW FUNCTIONS ---");

// 1. Sintaxis básica de una Arrow Function
// Reemplaza la palabra clave 'function' por '=>' después de los parámetros
const sumar = (a, b) => {
  return a + b;
};
console.log("Suma con arrow function:", sumar(10, 20));

// 2. Paréntesis opcionales con exactamente un parámetro
const duplicar = x => {
  return x * 2;
};
console.log("Duplicar 15:", duplicar(15));

// 3. Inline Arrow Functions con RETORNO IMPLÍCITO
// Si la función solo tiene una línea de retorno, se pueden omitir las llaves {} y la palabra 'return':
const restar = (a, b) => a - b;
console.log("Resta inline (retorno implícito):", restar(20, 8));

// 4. Retorno implícito de OBJETOS LITERALES
// Para retornar un objeto en una sola línea sin la palabra return,
// se debe envolver el objeto entre paréntesis ({}) para que JS no confunda las llaves con el cuerpo de la función:
const crearUsuario = (nombre, rol) => ({ nombre, rol, activo: true });
console.log("Objeto retornado implícitamente:", crearUsuario("Axel", "Admin"));

// 5. Conexión con React:
// Las arrow functions son el estándar indiscutible para:
// A) Declarar componentes funcionales:
const HeaderComponent = ({ title }) => `<h1>${title}</h1>`;
console.log("Componente flecha:", HeaderComponent({ title: "Panel Principal" }));

// B) Event handlers con paso de parámetros:
// En React, para pasar un id a una función en un evento se usa una inline arrow function:
// <button onClick={() => eliminarElemento(42)}>Eliminar</button>
const eliminarElemento = id => console.log(`Elemento con ID ${id} eliminado.`);
const simularClickBoton = callback => callback();

simularClickBoton(() => eliminarElemento(42));
