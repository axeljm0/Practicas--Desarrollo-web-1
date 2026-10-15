"use strict";

const TEXTO_ORIGINAL = "Texto original inicial: Este párrafo es un nodo del DOM a la espera de ser manipulado mediante JavaScript.";
const TEXTO_MODIFICADO = "¡El DOM ha sido transformado con éxito! JavaScript tiene el poder de alterar el contenido, la estructura y los estilos en tiempo real.";

const parrafoObjetivo = document.getElementById("parrafoObjetivo");
const escenarioObjetivo = document.getElementById("escenarioObjetivo");
const registroDom = document.getElementById("registroDom");

const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const btnRestaurarTexto = document.getElementById("btnRestaurarTexto");

const btnAzul = document.getElementById("btnAzul");
const btnVerde = document.getElementById("btnVerde");
const btnRojo = document.getElementById("btnRojo");
const btnPurpura = document.getElementById("btnPurpura");

const btnResaltar = document.getElementById("btnResaltar");
const btnNegrita = document.getElementById("btnNegrita");
const btnAumentar = document.getElementById("btnAumentar");
const btnReducir = document.getElementById("btnReducir");

let tamanoFuenteActual = 18;

function registrarOperacion(operacion, detalle) {
  registroDom.innerHTML = `> <code>${operacion}</code>: <span style="color: #38bdf8;">${detalle}</span>`;
  console.log(`[DOM API]: ${operacion} -> ${detalle}`);
}

function cambiarTextoParrafo() {
  parrafoObjetivo.textContent = TEXTO_MODIFICADO;
  registrarOperacion("parrafoObjetivo.textContent = ...", "Texto cambiado dinámicamente.");
}

function restaurarTextoParrafo() {
  parrafoObjetivo.textContent = TEXTO_ORIGINAL;
  registrarOperacion("parrafoObjetivo.textContent = TEXTO_ORIGINAL", "Texto restablecido.");
}

function aplicarColor(colorHex, nombreColor) {
  parrafoObjetivo.style.color = colorHex;
  registrarOperacion(`parrafoObjetivo.style.color = "${colorHex}"`, `Color del texto cambiado a ${nombreColor}.`);
}

function alternarResaltado() {
  const activo = escenarioObjetivo.classList.toggle("highlight-box");
  registrarOperacion("escenarioObjetivo.classList.toggle('highlight-box')", activo ? "Clase de resaltado añadida." : "Clase de resaltado retirada.");
}

function alternarNegrita() {
  const activo = parrafoObjetivo.classList.toggle("font-bold");
  registrarOperacion("parrafoObjetivo.classList.toggle('font-bold')", activo ? "Negrita aplicada con classList." : "Negrita retirada.");
}

function cambiarTamanoFuente(delta) {
  tamanoFuenteActual = Math.max(12, Math.min(tamanoFuenteActual + delta, 30));
  parrafoObjetivo.style.fontSize = `${tamanoFuenteActual}px`;
  registrarOperacion(`parrafoObjetivo.style.fontSize = "${tamanoFuenteActual}px"`, `Tamaño ajustado a ${tamanoFuenteActual}px.`);
}

btnCambiarTexto.addEventListener("click", cambiarTextoParrafo);
btnRestaurarTexto.addEventListener("click", restaurarTextoParrafo);

btnAzul.addEventListener("click", () => aplicarColor("#2563eb", "Azul"));
btnVerde.addEventListener("click", () => aplicarColor("#059669", "Verde"));
btnRojo.addEventListener("click", () => aplicarColor("#dc2626", "Rojo"));
btnPurpura.addEventListener("click", () => aplicarColor("#9333ea", "Púrpura"));

btnResaltar.addEventListener("click", alternarResaltado);
btnNegrita.addEventListener("click", alternarNegrita);

btnAumentar.addEventListener("click", () => cambiarTamanoFuente(2));
btnReducir.addEventListener("click", () => cambiarTamanoFuente(-2));
