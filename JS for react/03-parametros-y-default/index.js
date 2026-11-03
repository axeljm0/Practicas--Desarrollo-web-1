// ==========================================
// 03 - PARÁMETROS Y PARÁMETROS POR DEFECTO
// Timestamps: [07:44] Parámetros de Funciones | [09:59] Parámetros por defecto
// ==========================================

console.log("--- 03: PARÁMETROS Y PARÁMETROS POR DEFECTO ---");

// 1. Parámetros de funciones (Variables que recibe la función para operar)
function sumar(a, b) {
  return a + b;
}

console.log("Suma de 5 y 10:", sumar(5, 10)); // Argumentos pasados: 5 y 10

// ¿Qué pasa si no pasamos todos los argumentos esperados en JS?
console.log("Suma con un solo argumento:", sumar(5)); // Retorna NaN porque b es undefined (5 + undefined)

// 2. Parámetros por defecto (Default parameters)
// En JavaScript moderno (ES6+), podemos asignar valores por defecto en caso
// de que el argumento no sea enviado o sea 'undefined':
function sumarConDefault(a = 0, b = 0) {
  return a + b;
}

console.log("Suma con default (sin argumentos):", sumarConDefault()); // 0
console.log("Suma con default (solo un argumento):", sumarConDefault(15)); // 15 + 0 = 15

// 3. Conexión con React:
// En React, a menudo definimos valores por defecto para componentes (default props),
// evitando que la aplicación rompa si el componente padre no envía cierta información:
function UserGreeting(name = "Invitado", role = "Usuario") {
  return `Hola, ${name}. Has ingresado con el rol: ${role}.`;
}

console.log(UserGreeting()); // "Hola, Invitado. Has ingresado con el rol: Usuario."
console.log(UserGreeting("Axel", "Admin")); // "Hola, Axel. Has ingresado con el rol: Admin."
