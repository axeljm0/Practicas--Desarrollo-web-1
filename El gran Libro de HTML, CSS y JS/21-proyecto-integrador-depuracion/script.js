"use strict";

function ErrorProducto(mensaje) {
  this.name = "ErrorProducto";
  this.message = mensaje || "El producto no se encuentra registrado en el catálogo.";
  this.stack = (new Error()).stack;
}
ErrorProducto.prototype = Object.create(Error.prototype);
ErrorProducto.prototype.constructor = ErrorProducto;

function ErrorExistencia(mensaje) {
  this.name = "ErrorExistencia";
  this.message = mensaje || "No hay existencias suficientes para satisfacer la cantidad solicitada.";
  this.stack = (new Error()).stack;
}
ErrorExistencia.prototype = Object.create(Error.prototype);
ErrorExistencia.prototype.constructor = ErrorExistencia;

function ErrorCantidad(mensaje) {
  this.name = "ErrorCantidad";
  this.message = mensaje || "La cantidad solicitada debe ser un número entero mayor que cero.";
  this.stack = (new Error()).stack;
}
ErrorCantidad.prototype = Object.create(Error.prototype);
ErrorCantidad.prototype.constructor = ErrorCantidad;

var INVENTARIO_BASE = {
  laptop: { nombre: "Laptop Ultrabook 15", precio: 899.99, stock: 5 },
  tablet: { nombre: "Tablet Pro 10 pulgadas", precio: 449.50, stock: 8 },
  smartphone: { nombre: "Smartphone 5G OLED", precio: 699.00, stock: 12 },
  auriculares: { nombre: "Auriculares Bluetooth", precio: 79.90, stock: 15 }
};

var inventario = clonarInventario(INVENTARIO_BASE);

var cuerpoTablaInventario = document.getElementById("cuerpoTablaInventario");
var selectProducto = document.getElementById("selectProducto");
var inputCantidad = document.getElementById("inputCantidad");
var formularioVenta = document.getElementById("formularioVenta");
var pantallaDebug = document.getElementById("pantallaDebug");

var btnTestVentaValida = document.getElementById("btnTestVentaValida");
var btnTestSinStock = document.getElementById("btnTestSinStock");
var btnTestCantidadNegativa = document.getElementById("btnTestCantidadNegativa");
var btnTestProductoInexistente = document.getElementById("btnTestProductoInexistente");
var btnDispararErrorGlobal = document.getElementById("btnDispararErrorGlobal");

var btnRestaurarInventario = document.getElementById("btnRestaurarInventario");
var btnLimpiarLog = document.getElementById("btnLimpiarLog");

function clonarInventario(origen) {
  var copia = {};
  var clave;
  for (clave in origen) {
    if (Object.prototype.hasOwnProperty.call(origen, clave)) {
      copia[clave] = {
        nombre: origen[clave].nombre,
        precio: origen[clave].precio,
        stock: origen[clave].stock
      };
    }
  }
  return copia;
}

function registrarEnBitacora(texto, tipoClase) {
  var fecha = new Date();
  var hora = (fecha.getHours() < 10 ? "0" : "") + fecha.getHours() + ":" +
             (fecha.getMinutes() < 10 ? "0" : "") + fecha.getMinutes() + ":" +
             (fecha.getSeconds() < 10 ? "0" : "") + fecha.getSeconds();

  var entrada = document.createElement("div");
  entrada.className = "log-entry " + tipoClase;
  entrada.innerHTML = "<span style='opacity: 0.7;'>[" + hora + "]</span> " + texto;

  pantallaDebug.appendChild(entrada);
  pantallaDebug.scrollTop = pantallaDebug.scrollHeight;
}

function actualizarVistaInventario() {
  cuerpoTablaInventario.innerHTML = "";
  selectProducto.innerHTML = "";

  var clave;
  for (clave in inventario) {
    if (Object.prototype.hasOwnProperty.call(inventario, clave)) {
      var prod = inventario[clave];

      var claseStock = "stock-high";
      if (prod.stock === 0) {
        claseStock = "stock-out";
      } else if (prod.stock <= 3) {
        claseStock = "stock-low";
      }

      var fila = document.createElement("tr");
      fila.innerHTML =
        "<td><code>" + clave + "</code></td>" +
        "<td><strong>" + prod.nombre + "</strong></td>" +
        "<td>$" + prod.precio.toFixed(2) + "</td>" +
        "<td><span class='stock-pill " + claseStock + "'>" + prod.stock + " unid.</span></td>";
      cuerpoTablaInventario.appendChild(fila);

      var opcion = document.createElement("option");
      opcion.value = clave;
      opcion.textContent = prod.nombre + " (Stock: " + prod.stock + ")";
      selectProducto.appendChild(opcion);
    }
  }
}

function vender(claveProducto, cantidad) {

  if (!inventario[claveProducto]) {
    throw new ErrorProducto("El producto con código '" + claveProducto + "' no existe en el catálogo comercial.");
  }

  var cantNum = Number(cantidad);
  if (isNaN(cantNum) || cantNum <= 0 || Math.floor(cantNum) !== cantNum) {
    throw new ErrorCantidad("La cantidad solicitada ('" + cantidad + "') es inválida. Debe ser un número entero mayor que 0.");
  }

  var articulo = inventario[claveProducto];
  if (cantNum > articulo.stock) {
    throw new ErrorExistencia(
      "Existencias insuficientes para '" + articulo.nombre + "'. " +
      "Solicitadas: " + cantNum + " | En bodega: " + articulo.stock + "."
    );
  }

  console.assert(articulo.stock >= cantNum, "Fallo crítico: El stock debe ser mayor o igual a la venta.");

  articulo.stock -= cantNum;
  var subtotal = cantNum * articulo.precio;

  return {
    producto: articulo.nombre,
    unidades: cantNum,
    precioUnitario: articulo.precio,
    total: subtotal,
    stockRestante: articulo.stock
  };
}

function ejecutarVentaControlada(prodKey, cant) {
  try {
    registrarEnBitacora("Iniciando venta: " + cant + " unidad(es) de '" + prodKey + "'...", "log-info");
    console.log("--> Intentando procesar venta:", prodKey, cant);

    var resultado = vender(prodKey, cant);

    var mensajeExito = "✔ VENTA APROBADA: " + resultado.unidades + "x " + resultado.producto +
                       " | Total: $" + resultado.total.toFixed(2) +
                       " (Stock restante: " + resultado.stockRestante + ")";
    registrarEnBitacora(mensajeExito, "log-success");
    console.log("[Transacción Exitosa]:", resultado);

    actualizarVistaInventario();
  } catch (error) {

    if (error instanceof ErrorProducto) {
      registrarEnBitacora("❌ [ErrorProducto]: " + error.message, "log-error");
      console.error("[ErrorProducto capturado]:", error);
    } else if (error instanceof ErrorExistencia) {
      registrarEnBitacora("⚠️ [ErrorExistencia]: " + error.message, "log-warning");
      console.warn("[ErrorExistencia capturado]:", error);
    } else if (error instanceof ErrorCantidad) {
      registrarEnBitacora("❌ [ErrorCantidad]: " + error.message, "log-error");
      console.error("[ErrorCantidad capturado]:", error);
    } else {
      registrarEnBitacora("💥 [Error Inesperado]: " + error.message, "log-error");
      console.error("[Error desconocido]:", error);
    }
  }
}

window.addEventListener("error", function (evento) {
  var mensajeGlobal = "🌐 [ERROR GLOBAL INTERCEPTADO]: " + evento.message +
                      " en " + (evento.filename ? evento.filename.split("/").pop() : "script") +
                      " (Línea " + evento.lineno + ")";
  registrarEnBitacora(mensajeGlobal, "log-error");
  console.warn("[window.onerror]:", evento);
  return false;
});

formularioVenta.addEventListener("submit", function (evento) {
  evento.preventDefault();
  var prodSeleccionado = selectProducto.value;
  var cantIngresada = parseInt(inputCantidad.value, 10);
  ejecutarVentaControlada(prodSeleccionado, cantIngresada);
});

btnTestVentaValida.addEventListener("click", function () {
  ejecutarVentaControlada("laptop", 1);
});

btnTestSinStock.addEventListener("click", function () {
  ejecutarVentaControlada("laptop", 100);
});

btnTestCantidadNegativa.addEventListener("click", function () {
  ejecutarVentaControlada("smartphone", -3);
});

btnTestProductoInexistente.addEventListener("click", function () {
  ejecutarVentaControlada("consolaVideojuegosFalsa", 1);
});

btnDispararErrorGlobal.addEventListener("click", function () {
  registrarEnBitacora("Disparando intencionalmente un error global no capturado...", "log-warning");

  funcionCriticaNoDefinidaEnServidor();
});

btnRestaurarInventario.addEventListener("click", function () {
  inventario = clonarInventario(INVENTARIO_BASE);
  actualizarVistaInventario();
  registrarEnBitacora("Inventario y niveles de stock restaurados a sus valores originales.", "log-info");
  console.info("[Inventario Restaurado]");
});

btnLimpiarLog.addEventListener("click", function () {
  pantallaDebug.innerHTML = "";
  registrarEnBitacora("Bitácora de depuración limpiada por el usuario.", "log-info");
});

actualizarVistaInventario();
console.log("=== SISTEMA DE INVENTARIO Y DEPURACIÓN INICIALIZADO ===", inventario);
