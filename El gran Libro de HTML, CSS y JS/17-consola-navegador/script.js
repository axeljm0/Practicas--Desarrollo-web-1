"use strict";

var pantallaConsola = document.getElementById("pantallaConsola");
var btnErrorFuncion = document.getElementById("btnErrorFuncion");
var btnErrorObjeto = document.getElementById("btnErrorObjeto");
var btnErrorVariable = document.getElementById("btnErrorVariable");
var btnLimpiarConsola = document.getElementById("btnLimpiarConsola");

function registrarErrorEnPantalla(tipo, mensaje, explicacion) {
  var item = document.createElement("div");
  item.className = "log-item";
  item.innerHTML = "<strong>❌ [" + tipo + "]:</strong> " + mensaje + "<br>" +
                   "<small style='color: #fecaca;'>Causa didáctica: " + explicacion + "</small>";
  pantallaConsola.appendChild(item);
  pantallaConsola.scrollTop = pantallaConsola.scrollHeight;
}

function limpiarConsolaVisual() {
  pantallaConsola.innerHTML = "";
  var itemInfo = document.createElement("div");
  itemInfo.className = "log-item info";
  itemInfo.textContent = "Consola limpia. Haz clic en un botón para provocar un nuevo error.";
  pantallaConsola.appendChild(itemInfo);
}

function provocarErrorFuncionInexistente() {
  console.log("--> Iniciando intento de llamada a funcionInexistente()...");
  try {

    calcularTotalInexistente();
  } catch (error) {

    console.error("[Consola del Navegador] Error capturado:", error);
    registrarErrorEnPantalla(
      error.name,
      error.message,
      "Se invocó 'calcularTotalInexistente()', pero esa función no existe en memoria."
    );
  }
}

function provocarErrorObjetoInexistente() {
  console.log("--> Iniciando intento de acceso a propiedad de un objeto nulo...");
  try {

    var usuario = null;
    var perfil = usuario.perfil.configuracion;
    console.log(perfil);
  } catch (error) {
    console.error("[Consola del Navegador] Error capturado:", error);
    registrarErrorEnPantalla(
      error.name,
      error.message,
      "La variable 'usuario' tiene valor null; al intentar leer 'usuario.perfil' el motor falla."
    );
  }
}

function provocarErrorVariableNoDeclarada() {
  console.log("--> Iniciando intento de lectura de variable no declarada...");
  try {

    eval("valorTotalSinDeclarar");
  } catch (error) {
    console.error("[Consola del Navegador] Error capturado:", error);
    registrarErrorEnPantalla(
      error.name,
      error.message,
      "Se intentó leer 'valorTotalSinDeclarar' sin haberla declarado previamente con 'var'."
    );
  }
}

btnErrorFuncion.addEventListener("click", provocarErrorFuncionInexistente);
btnErrorObjeto.addEventListener("click", provocarErrorObjetoInexistente);
btnErrorVariable.addEventListener("click", provocarErrorVariableNoDeclarada);
btnLimpiarConsola.addEventListener("click", limpiarConsolaVisual);

console.info("%c[Ejercicio 17 cargado con éxito]", "color: #2563eb; font-weight: bold; font-size: 14px;");
console.log("Presiona los botones en la interfaz para ver cómo se reportan los errores aquí y en pantalla.");
