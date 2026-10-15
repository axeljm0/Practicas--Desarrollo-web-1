"use strict";

const textoInicial = "JavaScript es genial";

const dispCadena = document.getElementById("dispCadena");
const inputCustomTexto = document.getElementById("inputCustomTexto");
const btnProcesar = document.getElementById("btnProcesar");

const resLongitud = document.getElementById("resLongitud");
const resMayusMinus = document.getElementById("resMayusMinus");
const resBusqueda = document.getElementById("resBusqueda");
const resExtraccion = document.getElementById("resExtraccion");
const resSplit = document.getElementById("resSplit");

function procesarOperacionesString(texto) {
  dispCadena.textContent = `"${texto}"`;

  const longitud = texto.length;
  resLongitud.textContent = `${longitud} caracteres (incluye espacios)`;

  const enMayusculas = texto.toUpperCase();
  const enMinusculas = texto.toLowerCase();
  resMayusMinus.innerHTML = `
    <strong>Mayúsculas:</strong> "${enMayusculas}"<br>
    <strong>Minúsculas:</strong> "${enMinusculas}"
  `;

  const contieneGenial = texto.includes("genial");
  const indiceEs = texto.indexOf("es");
  resBusqueda.innerHTML = `
    ¿Contiene "genial"?: <strong>${contieneGenial ? "Sí (true)" : "No (false)"}</strong><br>
    Posición (índice) de "es": <strong>${indiceEs !== -1 ? `Índice ${indiceEs}` : "No encontrado (-1)"}</strong>
  `;

  const primeraPalabra = texto.slice(0, 10);
  const textoModificado = texto.replace("genial", "increíble");
  resExtraccion.innerHTML = `
    <strong>slice(0, 10):</strong> "${primeraPalabra}"<br>
    <strong>replace("genial", "increíble"):</strong> "${textoModificado}"
  `;

  const arregloPalabras = texto.split(" ");
  resSplit.innerHTML = `
    <strong>Palabras detectadas (${arregloPalabras.length}):</strong> [${arregloPalabras.map((p) => `"${p}"`).join(", ")}]
  `;

  console.log("=== ANÁLISIS DE CADENA ===");
  console.log("Original:", texto);
  console.log("1. Length:", longitud);
  console.log("2. Upper:", enMayusculas, "| Lower:", enMinusculas);
  console.log("3. Includes('genial'):", contieneGenial, "| IndexOf('es'):", indiceEs);
  console.log("4. Slice(0,10):", primeraPalabra, "| Replace:", textoModificado);
  console.log("5. Split(' '):", arregloPalabras);
}

procesarOperacionesString(textoInicial);

btnProcesar.addEventListener("click", () => {
  const valorIngresado = inputCustomTexto.value.trim();
  if (valorIngresado) {
    procesarOperacionesString(valorIngresado);
  } else {
    procesarOperacionesString(textoInicial);
  }
});

inputCustomTexto.addEventListener("keyup", (evento) => {
  if (evento.key === "Enter") {
    btnProcesar.click();
  }
});
