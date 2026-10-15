"use strict";

(function (radioInicial) {

  const PI_LOCAL = Math.PI;

  const circuloVisual = document.getElementById("circuloVisual");
  const inputRadio = document.getElementById("inputRadio");
  const btnRecalcular = document.getElementById("btnRecalcular");
  const dispRadio = document.getElementById("dispRadio");
  const dispArea = document.getElementById("dispArea");
  const checkPi = document.getElementById("checkPi");
  const checkFn = document.getElementById("checkFn");

  function calcularAreaCirculo(radio) {
    const r = Number(radio);
    if (isNaN(r) || r <= 0) {
      throw new Error("El radio debe ser un número positivo.");
    }

    return PI_LOCAL * Math.pow(r, 2);
  }

  function renderizarCirculo(radio) {
    try {
      const area = calcularAreaCirculo(radio);

      dispRadio.textContent = `${radio} cm`;
      dispArea.textContent = `${area.toFixed(2)} cm²`;

      const dimensionPixel = Math.min(Math.max(radio * 14, 60), 220);
      circuloVisual.style.width = `${dimensionPixel}px`;
      circuloVisual.style.height = `${dimensionPixel}px`;
      circuloVisual.textContent = `r = ${radio}`;

      console.log(`[IIFE - Cálculo]: Radio=${radio} => Área=${area.toFixed(4)}`);
    } catch (error) {
      dispArea.textContent = "Error";
      console.error("[IIFE Error]:", error.message);
    }
  }

  function auditarAmbitoGlobal() {

    const piEnWindow = typeof window.PI_LOCAL;
    const fnEnWindow = typeof window.calcularAreaCirculo;

    checkPi.textContent = `${piEnWindow} (Protegida)`;
    checkFn.textContent = `${fnEnWindow} (Encapsulada)`;

    console.log(`[Auditoría IIFE]: typeof window.PI_LOCAL = ${piEnWindow}`);
    console.log(`[Auditoría IIFE]: typeof window.calcularAreaCirculo = ${fnEnWindow}`);
  }

  renderizarCirculo(radioInicial);
  auditarAmbitoGlobal();

  btnRecalcular.addEventListener("click", () => {
    const nuevoRadio = parseFloat(inputRadio.value);
    renderizarCirculo(nuevoRadio);
  });

  inputRadio.addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
      btnRecalcular.click();
    }
  });

})(5);
