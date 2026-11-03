// ==========================================
// 14 - SPREAD OPERATOR (...)
// Timestamp: [59:07] Spread operator
// ==========================================

console.log("--- 14: SPREAD OPERATOR ---");

// 1. Spread en Arrays: "Esparcir" elementos de un iterable
const frutas = ["🍎 Manzana", "🍌 Plátano"];
const verduras = ["🥕 Zanahoria", "🥦 Brócoli"];

// Combinar arrays creando uno nuevo (sin mutar):
const alimentos = [...frutas, ...verduras, "🍇 Uva"];
console.log("Alimentos combinados:", alimentos);

// Agregar un elemento al inicio o al final sin usar .push() ni .unshift():
const nuevoArrayFrutas = ["🍓 Fresa", ...frutas, "🍍 Piña"];
console.log("Frutas inmutables:", nuevoArrayFrutas);

// 2. Spread en Objetos: Clonar y combinar propiedades
const usuarioBase = {
  nombre: "Carlos",
  email: "carlos@mail.com",
  rol: "lector"
};

// Clonar y sobrescribir propiedades específicas (Overriding):
const usuarioAdmin = {
  ...usuarioBase, // Copia todas las propiedades de usuarioBase
  rol: "administrador", // Sobrescribe 'rol'
  nivelSeguridad: 5     // Agrega una nueva propiedad
};

console.log("Usuario Base (intacto):", usuarioBase);
console.log("Usuario Admin (actualizado):", usuarioAdmin);

// 3. Conexión con React:
// A) Actualizar estado en React (useState):
// ¡REGLA DE ORO DE REACT!: Nunca mutar el estado directamente (ej. state.count = 2)
let estadoUsuario = {
  nombre: "Laura",
  edad: 25,
  preferencias: { tema: "claro" }
};

// Para actualizar la edad en React:
// setUser(prev => ({ ...prev, edad: 26 }));
estadoUsuario = {
  ...estadoUsuario,
  edad: 26
};
console.log("Estado de React actualizado inmutablemente:", estadoUsuario);

// B) Prop Spreading en componentes:
// <CustomInput {...props} /> pasa todas las propiedades restantes de un objeto al elemento
const inputProps = {
  type: "email",
  placeholder: "Ingresa tu correo",
  required: true
};

console.log("Props a esparcir en JSX:", inputProps);
