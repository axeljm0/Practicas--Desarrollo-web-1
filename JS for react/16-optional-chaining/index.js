// ==========================================
// 16 - OPTIONAL CHAINING (?.)
// Timestamp: [01:08:23] Optional Chaining
// ==========================================

console.log("--- 16: OPTIONAL CHAINING ---");

// Objeto simulado de respuesta de backend
const usuarioCompleto = {
  id: 1,
  nombre: "Mateo",
  contacto: {
    email: "mateo@mail.com",
    direccion: {
      ciudad: "Buenos Aires",
      codigoPostal: "C1000"
    }
  },
  obtenerSaludo() {
    return `Hola, soy ${this.nombre}`;
  }
};

const usuarioIncompleto = {
  id: 2,
  nombre: "Lucía"
  // No tiene propiedad 'contacto'
};

// 1. El problema tradicional:
// Si intentamos hacer: usuarioIncompleto.contacto.direccion.ciudad
// JavaScript arroja un error crítico:
// TypeError: Cannot read properties of undefined (reading 'direccion')

// Forma antigua con operadores lógicos '&&' (tediosa y larga):
const ciudadAntigua =
  usuarioIncompleto.contacto &&
  usuarioIncompleto.contacto.direccion &&
  usuarioIncompleto.contacto.direccion.ciudad;

console.log("Forma antigua con &&:", ciudadAntigua); // undefined (sin error)

// 2. Con Optional Chaining (?.)
// Si la referencia es null o undefined, la expresión se detiene y devuelve undefined sin romper el programa:
const ciudadModerna1 = usuarioCompleto.contacto?.direccion?.ciudad;
const ciudadModerna2 = usuarioIncompleto.contacto?.direccion?.ciudad;

console.log("Ciudad de usuarioCompleto:", ciudadModerna1);   // "Buenos Aires"
console.log("Ciudad de usuarioIncompleto:", ciudadModerna2); // undefined (¡seguro y sin crashear!)

// 3. Optional Chaining en llamadas a métodos: ?.()
console.log("Método existente:", usuarioCompleto.obtenerSaludo?.());
console.log("Método inexistente:", usuarioIncompleto.obtenerSaludo?.()); // undefined

// 4. Optional Chaining con Arrays e Indexación: ?.[]
const usuariosLista = [usuarioCompleto];
console.log("Primer elemento:", usuariosLista?.[0]?.nombre); // "Mateo"
console.log("Elemento fuera de rango:", usuariosLista?.[5]?.nombre); // undefined

// 5. Conexión con React:
// Salva a tus componentes de pantalla en blanco (White Screen of Death)
// cuando los datos aún están cargando desde una API externa:
function ProfileCard({ user }) {
  return `
    <div class="profile">
      <h2>${user?.nombre || "Usuario Desconocido"}</h2>
      <p>Ciudad: ${user?.contacto?.direccion?.ciudad || "No especificada"}</p>
    </div>
  `;
}

console.log(ProfileCard({ user: usuarioIncompleto }));
