"use strict";

const inputNumero = document.getElementById("inputNumero");
const btnCalcular = document.getElementById("btnCalcular");
const resultadoCuadrado = document.getElementById("resultadoCuadrado");
const detalleOperacion = document.getElementById("detalleOperacion");
const contenedorOriginal = document.getElementById("contenedorOriginal");
const contenedorTransformado = document.getElementById("contenedorTransformado");

const numerosPrueba = [2, 3, 4, 5, 6];

const elevarAlCuadrado = function (numero) {
  const n = Number(numero);

  if (isNaN(n)) {
    throw new Error("El valor proporcionado no es un número válido.");
  }

  return n * n;
};

function calcularYMostrar() {
  const valor = parseFloat(inputNumero.value);

  try {

    const cuadrado = elevarAlCuadrado(valor);

    resultadoCuadrado.textContent = cuadrado;
    detalleOperacion.textContent = `${valor}² = ${valor} × ${valor} = ${cuadrado}`;
    console.log(`[elevarAlCuadrado]: ${valor}² = ${cuadrado}`);
  } catch (error) {
    resultadoCuadrado.textContent = "Error";
    detalleOperacion.textContent = error.message;
    console.error("[Error]:", error.message);
  }
}

function renderizarChips(arreglo, contenedor, resaltar = false) {
  contenedor.innerHTML = "";
  arreglo.forEach((num) => {
    const chip = document.createElement("span");
    chip.className = `chip ${resaltar ? "highlight" : ""}`;
    chip.textContent = num;
    contenedor.appendChild(chip);
  });
}

function ejecutarDemostracionArray() {
  renderizarChips(numerosPrueba, contenedorOriginal, false);

  const numerosElevados = numerosPrueba.map(function (num) {
    return elevarAlCuadrado(num);
  });

  renderizarChips(numerosElevados, contenedorTransformado, true);
  console.log("[Demostración Array.map]:", numerosPrueba, "->", numerosElevados);
}

calcularYMostrar();
ejecutarDemostracionArray();

btnCalcular.addEventListener("click", calcularYMostrar);

inputNumero.addEventListener("keyup", (evento) => {
  if (evento.key === "Enter") {
    calcularYMostrar();
  }
});
