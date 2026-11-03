// ==========================================
// 09 - DESTRUCTURING DE OBJETOS
// Timestamp: [30:20] Destructuring de Objetos
// ==========================================

console.log("--- 09: DESTRUCTURING DE OBJETOS ---");

const persona = {
  nombre: "Sofía",
  edad: 28,
  pais: "Argentina",
  redes: {
    twitter: "@sofia_dev",
    github: "sofiadev"
  }
};

// 1. Destructuring básico de propiedades
// En lugar de:
// const nombre = persona.nombre;
// const edad = persona.edad;
const { nombre, edad } = persona;
console.log("Valores extraídos:", nombre, edad);

// 2. Renombrar propiedades (alias)
const { pais: nacionalidad } = persona;
console.log("Alias nacionalidad:", nacionalidad);

// 3. Valores por defecto en destructuring
const { rol = "Desarrollador Junior", salario = 0 } = persona;
console.log("Valores con default:", { rol, salario });

// 4. Destructuring anidado
const { redes: { github } } = persona;
console.log("GitHub (anidado):", github);

// 5. Destructuring directamente en los parámetros de una función
// ¡Este es el patrón más común en todo el ecosistema de React!
function mostrarDetalleUsuario({ nombre, edad, rol = "Miembro" }) {
  return `${nombre} (${edad} años) - Rol: ${rol}`;
}

console.log(mostrarDetalleUsuario(persona));

// 6. Conexión con React:
// En React, prácticamente todos los componentes desestructuran sus props directamente:
function Alert({ tipo = "info", mensaje }) {
  return `<div class="alert alert-${tipo}">${mensaje}</div>`;
}

console.log(Alert({ mensaje: "Operación realizada con éxito", tipo: "success" }));
