"use strict";

const numAleatorio = document.getElementById("numAleatorio");
const btnGenerarRandom = document.getElementById("btnGenerarRandom");

const resSqrt = document.getElementById("resSqrt");
const resPow = document.getElementById("resPow");
const resPow3 = document.getElementById("resPow3");
const resPi = document.getElementById("resPi");

const numDividido = document.getElementById("numDividido");
const resFloor = document.getElementById("resFloor");
const resCeil = document.getElementById("resCeil");
const resRound = document.getElementById("resRound");

function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function procesarCalculosMath(n) {

  numAleatorio.textContent = n;

  const raiz = Math.sqrt(n);
  resSqrt.textContent = raiz % 1 === 0 ? raiz : raiz.toFixed(4);

  const alCuadrado = Math.pow(n, 2);
  const alCubo = Math.pow(n, 3);
  resPow.textContent = alCuadrado.toLocaleString("es-ES");
  resPow3.textContent = alCubo.toLocaleString("es-ES");

  const multiplicacionPi = (Math.PI * n).toFixed(4);
  resPi.textContent = multiplicacionPi;

  const division = n / 3;
  numDividido.textContent = division.toFixed(4);

  resFloor.textContent = `${Math.floor(division)} (piso)`;

  resCeil.textContent = `${Math.ceil(division)} (techo)`;

  resRound.textContent = `${Math.round(division)} (redondeo estándar)`;

  console.log(`=== OBJETO MATH: N = ${n} ===`);
  console.log(`Math.sqrt(${n}) = ${raiz}`);
  console.log(`Math.pow(${n}, 2) = ${alCuadrado}`);
  console.log(`Math.floor(${division.toFixed(2)}) = ${Math.floor(division)}`);
  console.log(`Math.ceil(${division.toFixed(2)}) = ${Math.ceil(division)}`);
  console.log(`Math.round(${division.toFixed(2)}) = ${Math.round(division)}`);
}

procesarCalculosMath(generarEnteroAleatorio(1, 100));

btnGenerarRandom.addEventListener("click", () => {
  const nuevoNumero = generarEnteroAleatorio(1, 100);
  procesarCalculosMath(nuevoNumero);
});
