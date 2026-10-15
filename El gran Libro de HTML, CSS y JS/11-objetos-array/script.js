"use strict";

const ARREGLO_INICIAL = [15, 8, 42, 23, 4, 16];

let numeros = [...ARREGLO_INICIAL];

const contenedorTiles = document.getElementById("contenedorTiles");
const btnPush = document.getElementById("btnPush");
const btnPop = document.getElementById("btnPop");
const btnReset = document.getElementById("btnReset");

const resPushPop = document.getElementById("resPushPop");
const resSort = document.getElementById("resSort");
const resFilter = document.getElementById("resFilter");
const resMap = document.getElementById("resMap");
const resReduce = document.getElementById("resReduce");
const resFind = document.getElementById("resFind");

function renderizarTablero() {
  contenedorTiles.innerHTML = "";
  numeros.forEach((num) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.textContent = num;
    contenedorTiles.appendChild(tile);
  });
}

function actualizarOperaciones() {
  renderizarTablero();

  resPushPop.innerHTML = `
    Longitud actual: <strong>${numeros.length} elementos</strong><br>
    Último elemento: <strong>${numeros[numeros.length - 1] ?? "Vacío"}</strong>
  `;

  const arregloOrdenado = numeros.slice().sort(function (a, b) {
    return a - b;
  });
  resSort.textContent = `[${arregloOrdenado.join(", ")}]`;

  const mayoresA15 = numeros.filter(function (num) {
    return num > 15;
  });
  resFilter.innerHTML = `Mayores a 15: <strong>[${mayoresA15.join(", ")}]</strong> (${mayoresA15.length} encontrados)`;

  const duplicados = numeros.map(function (num) {
    return num * 2;
  });
  resMap.textContent = `[${duplicados.join(", ")}]`;

  const sumaTotal = numeros.reduce(function (acumulador, actual) {
    return acumulador + actual;
  }, 0);
  const promedio = (sumaTotal / (numeros.length || 1)).toFixed(2);
  resReduce.innerHTML = `Suma total: <strong>${sumaTotal}</strong> | Promedio: <strong>${promedio}</strong>`;

  const primerMayorA20 = numeros.find(function (num) {
    return num > 20;
  });
  const indiceDe42 = numeros.indexOf(42);
  const contiene23 = numeros.includes(23);

  resFind.innerHTML = `
    Primer número > 20: <strong>${primerMayorA20 ?? "Ninguno"}</strong><br>
    Índice del valor 42: <strong>${indiceDe42}</strong> | ¿Contiene el 23?: <strong>${contiene23 ? "Sí (true)" : "No (false)"}</strong>
  `;

  console.log("=== ESTADO ACTUAL DEL ARRAY ===", numeros);
  console.log("Ordenado:", arregloOrdenado);
  console.log("Filtrado > 15:", mayoresA15);
  console.log("Mapeado x2:", duplicados);
  console.log("Reduce suma:", sumaTotal);
}

btnPush.addEventListener("click", () => {
  numeros.push(99);
  actualizarOperaciones();
  console.log("[Array.push(99)]");
});

btnPop.addEventListener("click", () => {
  if (numeros.length > 0) {
    const eliminado = numeros.pop();
    actualizarOperaciones();
    console.log(`[Array.pop()] Eliminado: ${eliminado}`);
  }
});

btnReset.addEventListener("click", () => {
  numeros = [...ARREGLO_INICIAL];
  actualizarOperaciones();
  console.log("[Array restablecido a valores originales]");
});

actualizarOperaciones();
