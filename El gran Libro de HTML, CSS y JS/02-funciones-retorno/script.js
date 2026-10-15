"use strict";

const inputBase = document.getElementById("inputBase");
const inputAltura = document.getElementById("inputAltura");
const btnCalcular = document.getElementById("btnCalcular");
const valorArea = document.getElementById("valorArea");
const formulaExplicada = document.getElementById("formulaExplicada");
const listaHistorial = document.getElementById("listaHistorial");

function calcularAreaRectangulo(base, altura) {

  const b = Number(base);
  const h = Number(altura);

  if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
    throw new Error("Tanto la base como la altura deben ser números positivos mayores que cero.");
  }

  return b * h;
}

function registrarEnHistorial(base, altura, area) {
  const item = document.createElement("div");
  item.className = "history-item";

  const spanDatos = document.createElement("span");
  spanDatos.textContent = `Base: ${base} cm | Altura: ${altura} cm`;

  const spanResultado = document.createElement("strong");
  spanResultado.textContent = `${area} cm²`;

  item.appendChild(spanDatos);
  item.appendChild(spanResultado);

  listaHistorial.prepend(item);
}

function procesarCalculo() {
  const base = parseFloat(inputBase.value);
  const altura = parseFloat(inputAltura.value);

  try {

    const area = calcularAreaRectangulo(base, altura);

    valorArea.textContent = `${area} cm²`;
    formulaExplicada.textContent = `Fórmula: ${base} × ${altura} = ${area} cm²`;

    registrarEnHistorial(base, altura, area);

    console.log(`[Cálculo exitoso]: Base=${base}, Altura=${altura} => Área=${area}`);
  } catch (error) {
    valorArea.textContent = "Error";
    formulaExplicada.textContent = error.message;
    console.error("[Error en cálculo]:", error.message);
  }
}

procesarCalculo();

const areaEjemplo = calcularAreaRectangulo(5, 4);
const costoEstimado = areaEjemplo * 15;
console.log(`Ejemplo de composición: Área de 5x4 = ${areaEjemplo} cm². Costo estimado: $${costoEstimado}`);

btnCalcular.addEventListener("click", procesarCalculo);

[inputBase, inputAltura].forEach((input) => {
  input.addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
      procesarCalculo();
    }
  });
});
