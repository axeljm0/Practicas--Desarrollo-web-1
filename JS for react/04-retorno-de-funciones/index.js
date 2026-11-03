// ==========================================
// 04 - RETORNO DE FUNCIONES (RETURN)
// Timestamp: [40:30] return
// ==========================================

console.log("--- 04: RETORNO DE FUNCIONES (RETURN) ---");

// 1. La sentencia 'return' especifica el valor que devuelve la función
function multiplicar(x, y) {
  return x * y; // Finaliza la ejecución de la función y devuelve el resultado
  console.log("Esta línea nunca se ejecutará"); // Código inalcanzable
}

console.log("Multiplicar 4 * 3:", multiplicar(4, 3));

// 2. Funciones sin 'return' explícito devuelven 'undefined'
function funcionVacia() {}
console.log("Retorno de funcionVacia():", funcionVacia()); // undefined

// 3. Retorno temprano (Early Return / Guard Clauses)
// Es una técnica muy limpia para validar condiciones antes de ejecutar la lógica principal:
function obtenerPerfilUsuario(estaAutenticado) {
  if (!estaAutenticado) {
    return "Acceso denegado: Por favor inicia sesión."; // Retorno temprano
  }

  // Si está autenticado, continúa la ejecución normalmente
  return "Bienvenido a tu panel de usuario.";
}

console.log(obtenerPerfilUsuario(false));
console.log(obtenerPerfilUsuario(true));

// 4. Retornar diferentes tipos de datos (objetos, arrays, etc.)
function crearConfiguracion(tema, idioma) {
  return {
    tema: tema,
    idioma: idioma,
    version: "1.0.0"
  };
}

console.log("Objeto retornado:", crearConfiguracion("oscuro", "es"));

// 5. Conexión con React:
// El patrón de "Early Return" se utiliza constantemente en componentes para
// renderizar estados de carga (Loading), pantallas de error o vistas vacías:
function ProductList(productos, cargando) {
  if (cargando) {
    return "<p>Cargando productos...</p>";
  }
  if (!productos || productos.length === 0) {
    return "<p>No hay productos disponibles.</p>";
  }
  return `<ul>${productos.map(p => `<li>${p}</li>`).join("")}</ul>`;
}

console.log("Vista cargando:", ProductList([], true));
console.log("Vista con datos:", ProductList(["Laptop", "Mouse"], false));
