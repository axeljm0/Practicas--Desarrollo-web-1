// ==========================================
// 15 - ECMASCRIPT MODULES: ARCHIVO DE MÓDULO (math.js)
// ==========================================

// 1. Exportaciones nombradas (Named Exports)
// Se pueden exportar múltiples variables, constantes o funciones por archivo
export const PI = 3.141592;

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

// 2. Exportación por defecto (Default Export)
// Solo puede haber UN export default por archivo
export default function calculadoraInfo() {
  return "Módulo de utilidades matemáticas v1.0";
}
