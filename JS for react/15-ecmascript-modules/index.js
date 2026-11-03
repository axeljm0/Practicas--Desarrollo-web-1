// ==========================================
// 15 - ECMASCRIPT MODULES: ARCHIVO PRINCIPAL (index.js)
// Timestamp: [01:01:30] Ecmascript modules
// ==========================================

// Importamos la exportación por defecto y las exportaciones nombradas
import calculadoraInfo, { sumar, restar, multiplicar, PI } from "./math.js";

console.log("--- 15: ECMASCRIPT MODULES ---");
console.log("Info del módulo:", calculadoraInfo());
console.log("Valor de PI importado:", PI);
console.log("Suma (10 + 5):", sumar(10, 5));
console.log("Resta (10 - 5):", restar(10, 5));
console.log("Multiplicación (10 * 5):", multiplicar(10, 5));

// Si estamos en el navegador, renderizamos en el documento
if (typeof document !== "undefined") {
  const resultDiv = document.getElementById("module-output");
  if (resultDiv) {
    resultDiv.innerHTML = `
      <p><strong>Info:</strong> ${calculadoraInfo()}</p>
      <p><strong>PI:</strong> ${PI}</p>
      <p><strong>10 + 5 =</strong> ${sumar(10, 5)}</p>
      <p><strong>10 * 5 =</strong> ${multiplicar(10, 5)}</p>
    `;
  }
}
