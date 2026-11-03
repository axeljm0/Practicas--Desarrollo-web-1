// ==========================================
// 05 - OBJETOS DE JAVASCRIPT
// Timestamp: [12:32] Objetos de Javascript
// ==========================================

console.log("--- 05: OBJETOS DE JAVASCRIPT ---");

// 1. Creación de un objeto literal
const usuario = {
  nombre: "Alex",
  edad: 26,
  activo: true,
  // Objeto anidado
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  },
  // Métodos (funciones asociadas al objeto)
  saludar: function () {
    return `Hola, mi nombre es ${this.nombre}`;
  }
};

console.log("Objeto usuario completo:", usuario);

// 2. Acceso a propiedades
// Notación de punto (dot notation)
console.log("Nombre (punto):", usuario.nombre);
console.log("Ciudad (punto anidado):", usuario.direccion.ciudad);

// Notación de corchetes (bracket notation) - Muy útil cuando la clave es dinámica o tiene caracteres especiales
const claveDinamica = "edad";
console.log("Edad (corchetes dinámicos):", usuario[claveDinamica]);

// 3. Invocación de métodos
console.log("Método saludar():", usuario.saludar());

// 4. Modificar y agregar propiedades
usuario.profesion = "Desarrollador Web"; // Agregar
usuario.edad = 27;                      // Modificar
console.log("Usuario actualizado:", usuario);

// 5. Conexión con React:
// En React, casi todo se modela con objetos: el estado de un componente,
// los estilos en línea (inline styles), y las propiedades que pasan a los hijos:
const headerStyle = {
  backgroundColor: "#20232a",
  color: "#61dafb",
  padding: "16px",
  borderRadius: "8px"
};

console.log("Simulación de style object de React:", headerStyle);
