// ==========================================
// 12 - STRING LITERALS (TEMPLATE STRINGS)
// Timestamp: [43:56] String literals
// ==========================================

console.log("--- 12: STRING LITERALS (TEMPLATE STRINGS) ---");

const nombre = "Valeria";
const edad = 24;
const rol = "Frontend Developer";

// 1. Concatenación tradicional (antigua y propensa a errores)
const mensajeTradicional = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log("Concatenación antigua:", mensajeTradicional);

// 2. Template Literals con backticks (``) e interpolación (${})
const mensajeModerno = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log("Template Literal:", mensajeModerno);

// 3. Evaluación de expresiones de JavaScript dentro de ${}
const saldo = 1500;
const descuento = 200;
console.log(`Saldo final tras descuento: $${saldo - descuento}`);

const esActivo = true;
console.log(`Estado de cuenta: ${esActivo ? "Activa ✅" : "Inactiva ❌"}`);

// 4. Cadenas multilínea limpias
const plantillaHTML = `
  <div class="user-card">
    <h2>${nombre}</h2>
    <p>Profesión: ${rol}</p>
  </div>
`;
console.log("Plantilla multilínea HTML:", plantillaHTML);

// 5. Conexión con React:
// Se utiliza constantemente en React para:
// A) Generar clases dinámicas en elementos JSX:
const isActive = true;
const theme = "dark";
const className = `btn ${theme === "dark" ? "btn-dark" : "btn-light"} ${isActive ? "active" : ""}`;
console.log("Clase dinámica calculada:", className);

// B) Construir URLs dinámicas para consumo de APIs:
const API_URL = "https://api.ejemplo.com";
const userId = 45;
const endpoint = `${API_URL}/users/${userId}/posts`;
console.log("Endpoint generado:", endpoint);
