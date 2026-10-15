"use strict";

const contenedorSaludos = document.getElementById("contenedorSaludos");
const inputNombre = document.getElementById("inputNombre");
const btnSaludar = document.getElementById("btnSaludar");

let contadorSaludos = 0;

function saludar(nombre) {

  if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
    return "¡Hola, visitante anónimo! Bienvenido al curso de JavaScript.";
  }

  return `¡Hola, ${nombre.trim()}! Bienvenido al apasionante mundo de JavaScript.`;
}

function mostrarSaludoEnPantalla(mensaje) {
  contadorSaludos++;

  const tarjeta = document.createElement("article");
  tarjeta.className = "greeting-card";

  const spanIndice = document.createElement("span");
  spanIndice.className = "greeting-index";
  spanIndice.textContent = `#${contadorSaludos}`;

  const spanTexto = document.createElement("span");
  spanTexto.className = "greeting-text";
  spanTexto.textContent = mensaje;

  tarjeta.appendChild(spanIndice);
  tarjeta.appendChild(spanTexto);
  contenedorSaludos.appendChild(tarjeta);
}

function ejecutarSaludo(nombre) {
  const mensajeGenerado = saludar(nombre);
  mostrarSaludoEnPantalla(mensajeGenerado);
  console.log(`[Registro de saludo]: ${mensajeGenerado}`);
}

ejecutarSaludo("Ana García");
ejecutarSaludo("Carlos Mendoza");
ejecutarSaludo("Lucía Morales");

btnSaludar.addEventListener("click", () => {
  const nombreIngresado = inputNombre.value;
  ejecutarSaludo(nombreIngresado);

  inputNombre.value = "";
  inputNombre.focus();
});

inputNombre.addEventListener("keyup", (evento) => {
  if (evento.key === "Enter") {
    btnSaludar.click();
  }
});
