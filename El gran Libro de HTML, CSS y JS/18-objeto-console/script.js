"use strict";

var contenedorLog = document.getElementById("contenedorLog");
var btnLogBucle = document.getElementById("btnLogBucle");
var btnAssert = document.getElementById("btnAssert");
var btnVerObjeto = document.getElementById("btnVerObjeto");
var btnLimpiar = document.getElementById("btnLimpiar");

var productosTienda = ["Teclado Mecánico", "Monitor 4K", "Mouse Ergonómico", "Auriculares"];

var usuarioSistema = {
  id: 1042,
  nombre: "Valeria Morales",
  rol: "Administrador",
  activo: true,
  preferencias: {
    temaOscuro: true,
    notificaciones: ["email", "push"]
  },
  obtenerFirma: function () {
    return this.nombre + " (" + this.rol + ")";
  }
};

function agregarEntradaLog(texto, claseCss) {
  var entrada = document.createElement("div");
  entrada.className = "log-entry " + (claseCss || "");
  entrada.innerHTML = texto;
  contenedorLog.appendChild(entrada);
  contenedorLog.scrollTop = contenedorLog.scrollHeight;
}

function depurarBucleConLog() {
  console.log("=== INICIO DE DEPURACIÓN DEL BUCLE FOR ===");
  agregarEntradaLog("<strong>[console.log]</strong> Iniciando iteración de " + productosTienda.length + " productos...", "");

  var i;
  for (i = 0; i < productosTienda.length; i++) {

    console.log("Paso #" + (i + 1) + " | Índice: " + i + " | Producto: " + productosTienda[i]);
    agregarEntradaLog("→ Índice " + i + ": <em>" + productosTienda[i] + "</em>", "");
  }

  console.log("=== FIN DE DEPURACIÓN DEL BUCLE ===");
  agregarEntradaLog("✔ Bucle finalizado. Revisa la consola nativa (F12) para ver la salida estructurada.", "assert-pass");
}

function probarConsoleAssert() {
  console.log("=== PROBANDO CONSOLE.ASSERT ===");
  agregarEntradaLog("<strong>[console.assert]</strong> Ejecutando dos pruebas de condición...", "");

  var edadUsuario = 16;
  var stockDisponible = 25;

  console.assert(stockDisponible > 0, "Error: El stock no puede ser menor o igual a cero.");
  agregarEntradaLog("Prueba A: stockDisponible (" + stockDisponible + ") > 0 → <strong style='color:#10b981;'>Condición exitosa (No emite error)</strong>", "assert-pass");

  console.assert(edadUsuario >= 18, "Error de aserción: El usuario debe ser mayor o igual a 18 años (Edad actual: " + edadUsuario + ").");
  agregarEntradaLog("Prueba B: edadUsuario (" + edadUsuario + ") >= 18 → <strong style='color:#ef4444;'>¡Aserción fallida! (Error visible en consola F12)</strong>", "assert-fail");
}

function inspeccionarObjeto() {
  console.log("=== INSPECCIÓN DE OBJETO COMPLETO ===");

  console.log("Objeto usuarioSistema:", usuarioSistema);
  if (typeof console.dir === "function") {
    console.dir(usuarioSistema);
  }

  agregarEntradaLog("<strong>[console.log(objeto)]:</strong> Objeto 'usuarioSistema' emitido a la consola.<br>" +
                    "<pre style='margin: 0.25rem 0; font-size: 0.75rem; color: #d8b4fe;'>" +
                    JSON.stringify(usuarioSistema, null, 2) + "</pre>", "obj");
}

function ejecutarConsoleClear() {

  console.clear();
  console.info("La consola nativa ha sido limpiada mediante console.clear().");

  contenedorLog.innerHTML = "";
  agregarEntradaLog("🧹 <strong>console.clear() ejecutado.</strong> La consola nativa y la pantalla fueron limpiadas.", "assert-pass");
}

btnLogBucle.addEventListener("click", depurarBucleConLog);
btnAssert.addEventListener("click", probarConsoleAssert);
btnVerObjeto.addEventListener("click", inspeccionarObjeto);
btnLimpiar.addEventListener("click", ejecutarConsoleClear);
