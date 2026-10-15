"use strict";

var contenedorErrores = document.getElementById("contenedorErrores");
var contadorErrores = document.getElementById("contadorErrores");
var btnErrorSincrono = document.getElementById("btnErrorSincrono");
var btnErrorAsincrono = document.getElementById("btnErrorAsincrono");
var btnErrorEvaluacion = document.getElementById("btnErrorEvaluacion");
var btnLimpiarLog = document.getElementById("btnLimpiarLog");

var totalErroresRegistrados = 0;

window.addEventListener("error", function (evento) {
  totalErroresRegistrados++;
  actualizarContador();

  var emptyState = contenedorErrores.querySelector(".empty-state");
  if (emptyState) {
    contenedorErrores.innerHTML = "";
  }

  var mensaje = evento.message || "Error desconocido";
  var archivo = evento.filename || "Archivo inline o no identificado";
  var linea = evento.lineno || "N/A";
  var columna = evento.colno || "N/A";
  var objetoError = evento.error;
  var nombreError = objetoError && objetoError.name ? objetoError.name : "Error No Controlado";

  var tarjeta = document.createElement("article");
  tarjeta.className = "error-card";

  tarjeta.innerHTML =
    "<div class='error-title'>🚨 #" + totalErroresRegistrados + " - " + nombreError + ": " + mensaje + "</div>" +
    "<div class='error-details'>" +
      "<div><strong>Archivo:</strong> " + archivo.split("/").pop() + "</div>" +
      "<div><strong>Línea:</strong> " + linea + " | <strong>Columna:</strong> " + columna + "</div>" +
    "</div>";

  contenedorErrores.insertBefore(tarjeta, contenedorErrores.firstChild);

  console.warn(
    "[window.onerror capturó]:",
    "Mensaje: " + mensaje + " | Línea: " + linea + " | Columna: " + columna
  );

  return false;
});

function actualizarContador() {
  contadorErrores.textContent = totalErroresRegistrados + " evento(s)";
}

function limpiarRegistroErrores() {
  totalErroresRegistrados = 0;
  actualizarContador();
  contenedorErrores.innerHTML =
    "<div class='empty-state'>" +
      "Bitácora vaciada. Provoca un nuevo error para volver a registrarlo." +
    "</div>";
  console.info("Registro visual de errores globales limpiado.");
}

function dispararErrorSincrono() {
  console.log("--> Disparando error síncrono no atrapado...");

  metodoQueNoExisteEnElSistema();
}

function dispararErrorAsincrono() {
  console.log("--> Programando error asíncrono con setTimeout (se disparará en 300ms)...");
  setTimeout(function () {
    var clienteInvalido = undefined;

    clienteInvalido.enviarFacturaElectronica();
  }, 300);
}

function dispararErrorCallback() {
  console.log("--> Disparando error en procesamiento de lista...");
  var lista = [10, 20, 30];
  lista.forEach(function (elemento) {
    if (elemento === 20) {

      var objetoFalso = null;
      objetoFalso.procesarDato();
    }
  });
}

btnErrorSincrono.addEventListener("click", dispararErrorSincrono);
btnErrorAsincrono.addEventListener("click", dispararErrorAsincrono);
btnErrorEvaluacion.addEventListener("click", dispararErrorCallback);
btnLimpiarLog.addEventListener("click", limpiarRegistroErrores);
