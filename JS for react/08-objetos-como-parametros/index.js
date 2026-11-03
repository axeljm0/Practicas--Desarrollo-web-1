// ==========================================
// 08 - OBJETOS COMO PARÁMETROS
// Timestamp: [27:06] Objetos como parámetros
// ==========================================

console.log("--- 08: OBJETOS COMO PARÁMETROS ---");

// Problema de pasar múltiples parámetros individuales:
// Es muy fácil equivocarse en el orden de los argumentos al invocar la función
function registrarUsuarioMalo(nombre, apellido, edad, email, pais) {
  return `Usuario: ${nombre} ${apellido}, Edad: ${edad}, Email: ${email}, País: ${pais}`;
}

// Si cambiamos el orden sin querer, los datos quedan desordenados:
console.log(registrarUsuarioMalo("Pérez", "Juan", 30, "juan@mail.com", "México"));

// Solución: Pasar un único objeto como parámetro
function registrarUsuario(datosUsuario) {
  return `Usuario: ${datosUsuario.nombre} ${datosUsuario.apellido}, Edad: ${datosUsuario.edad}, Email: ${datosUsuario.email}, País: ${datosUsuario.pais}`;
}

// Al invocar con un objeto, el orden de las propiedades NO importa:
const nuevoUsuario = {
  pais: "México",
  email: "juan@mail.com",
  edad: 30,
  nombre: "Juan",
  apellido: "Pérez"
};

console.log(registrarUsuario(nuevoUsuario));

// ----------------------------------------------------
// Conexión con React: ¡Así nacieron las PROPS!
// En React, todos los componentes reciben exactamente UN objeto como parámetro:
// function MiComponente(props) { ... }
// ----------------------------------------------------
function CardComponent(props) {
  return `
    <div class="card">
      <img src="${props.imagen}" alt="${props.titulo}" />
      <h3>${props.titulo}</h3>
      <p>${props.descripcion}</p>
      <span>Precio: $${props.precio}</span>
    </div>
  `;
}

const productProps = {
  titulo: "Teclado Mecánico",
  descripcion: "Teclado RGB con switches azules",
  precio: 79.99,
  imagen: "https://via.placeholder.com/150"
};

console.log("Simulación de componente con props:", CardComponent(productProps));
