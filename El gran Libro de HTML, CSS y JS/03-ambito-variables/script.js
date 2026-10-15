"use strict";

const mensajeGlobal = "Soy una variable GLOBAL: accesible en cualquier rincón del script.";

const usuarioActivo = "Ana (Global)";

const pantallaConsola = document.getElementById("pantallaConsola");
const btnProbarGlobal = document.getElementById("btnProbarGlobal");
const btnProbarLocalDentro = document.getElementById("btnProbarLocalDentro");
const btnProbarLocalFuera = document.getElementById("btnProbarLocalFuera");
const btnProbarSombreado = document.getElementById("btnProbarSombreado");
const btnLimpiarLogs = document.getElementById("btnLimpiarLogs");

function registrarLog(texto, tipo = "info") {
  const entrada = document.createElement("div");
  entrada.className = `log-entry ${tipo}`;
  entrada.textContent = `> ${texto}`;
  pantallaConsola.appendChild(entrada);
  pantallaConsola.scrollTop = pantallaConsola.scrollHeight;
}

function probarAccesoGlobal() {
  registrarLog("Iniciando prueba de variable global...", "info");
  registrarLog(`Lectura directa de 'mensajeGlobal': "${mensajeGlobal}"`, "success");

  function funcionInterna() {

    registrarLog(`Lectura anidada dentro de funcionInterna(): "${mensajeGlobal}"`, "success");
  }

  funcionInterna();
}

function demostrarAmbitoLocal() {

  const mensajeLocal = "Soy una variable LOCAL: existo solo dentro de demostrarAmbitoLocal().";
  registrarLog("Dentro de la función: variable 'mensajeLocal' creada exitosamente.", "info");
  registrarLog(`Valor leído desde dentro: "${mensajeLocal}"`, "success");
}

function intentarAccesoInvalido() {
  registrarLog("Intentando leer 'mensajeLocal' desde fuera de su función contenedora...", "warning");

  try {

    eval("mensajeLocal");
  } catch (error) {
    registrarLog(`¡Capturado ReferenceError esperado!: "${error.message}"`, "error");
    registrarLog("Explicación: Las variables locales son destruidas al terminar la función y son invisibles al exterior.", "warning");
  }
}

function demostrarSombreado() {
  registrarLog(`1. Antes de entrar a la función sombra, 'usuarioActivo' vale: "${usuarioActivo}"`, "info");

  function funcionConSombra() {

    const usuarioActivo = "Carlos (Local Sombreado)";
    registrarLog(`2. Dentro de funcionConSombra(), 'usuarioActivo' vale: "${usuarioActivo}"`, "warning");
  }

  funcionConSombra();
  registrarLog(`3. Al salir de la función, la global permanece intacta: "${usuarioActivo}"`, "success");
}

registrarLog("Sistema de inspección de ámbitos cargado. Haz clic en los botones para iniciar las pruebas.", "info");

btnProbarGlobal.addEventListener("click", probarAccesoGlobal);
btnProbarLocalDentro.addEventListener("click", demostrarAmbitoLocal);
btnProbarLocalFuera.addEventListener("click", intentarAccesoInvalido);
btnProbarSombreado.addEventListener("click", demostrarSombreado);

btnLimpiarLogs.addEventListener("click", () => {
  pantallaConsola.innerHTML = "";
  registrarLog("Consola reiniciada.", "info");
});
