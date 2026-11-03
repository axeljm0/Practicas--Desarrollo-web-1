// ==========================================
// 02 - FUNCIONES DE JAVASCRIPT
// Timestamp: [03:41] Funciones de Javascript
// ==========================================

console.log("--- 02: FUNCIONES DE JAVASCRIPT ---");

// 1. Declaración básica de una función
function saludar() {
  return "¡Hola Mundo!";
}

// 2. Invocación de la función
const mensaje = saludar();
console.log("Resultado de saludar():", mensaje);

// 3. Funciones que imprimen directamente vs funciones que retornan valores
function mostrarAlerta() {
  console.log("Acción ejecutada dentro de la función.");
}
mostrarAlerta();

// 4. Conexión con React:
// En React, un componente funcional no es más que una función de JavaScript
// que retorna una representación visual (en React es JSX, aquí simulamos con un string HTML):
function ButtonComponent() {
  return "<button class='btn'>Hacer clic</button>";
}

console.log("Simulación de Componente React:", ButtonComponent());
