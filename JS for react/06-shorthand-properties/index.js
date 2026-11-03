// ==========================================
// 06 - SHORTHAND PROPERTY NAMES
// Timestamp: [17:31] Shorthand property names
// ==========================================

console.log("--- 06: SHORTHAND PROPERTY NAMES ---");

// Variables existentes
const titulo = "Aprender React";
const autor = "Fazt";
const duracionHoras = 1.5;

// Forma tradicional (antes de ES6):
// Repetir el nombre de la variable como clave y como valor
const cursoTradicional = {
  titulo: titulo,
  autor: autor,
  duracionHoras: duracionHoras
};

console.log("Objeto tradicional:", cursoTradicional);

// Forma moderna con Shorthand Property Names:
// Si el nombre de la propiedad coincide con el de la variable, solo se escribe una vez
const cursoModerno = {
  titulo,
  autor,
  duracionHoras,
  // También se pueden mezclar con propiedades normales
  publicado: true
};

console.log("Objeto con shorthand:", cursoModerno);

// 2. Shorthand Method Definitions:
// Sintaxis concisa para definir métodos sin la palabra 'function':
const reproductor = {
  volumen: 80,
  // En lugar de: reproducir: function() { ... }
  reproducir() {
    return "Reproduciendo contenido...";
  },
  pausar() {
    return "Contenido pausado.";
  }
};

console.log(reproductor.reproducir());

// 3. Conexión con React:
// Se usa constantemente al pasar valores a proveedores de Contexto o al crear objetos de estado:
const usuarioActivo = "Axel";
const tema = "dark";

// En React Context API:
// <ThemeContext.Provider value={{ usuarioActivo, tema }}>
const contextValue = { usuarioActivo, tema };
console.log("Valor de contexto en React:", contextValue);
