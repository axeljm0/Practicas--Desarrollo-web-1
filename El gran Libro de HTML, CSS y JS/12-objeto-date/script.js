"use strict";

const DIAS_SEMANA = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

const MESES_ANIO = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

const inputCumple = document.getElementById("inputCumple");
const btnCalcularFecha = document.getElementById("btnCalcularFecha");
const dispEdad = document.getElementById("dispEdad");
const dispDiasRestantes = document.getElementById("dispDiasRestantes");
const getAnio = document.getElementById("getAnio");
const getMes = document.getElementById("getMes");
const getDiaMes = document.getElementById("getDiaMes");
const getDiaSemana = document.getElementById("getDiaSemana");

function procesarFechaCumpleanos(fechaString) {
  if (!fechaString) return;

  const partes = fechaString.split("-");
  const anioInput = parseInt(partes[0], 10);
  const mesInput = parseInt(partes[1], 10) - 1;
  const diaInput = parseInt(partes[2], 10);

  const fechaNacimiento = new Date(anioInput, mesInput, diaInput);
  const fechaHoy = new Date();

  const anio = fechaNacimiento.getFullYear();
  const indiceMes = fechaNacimiento.getMonth();
  const diaDelMes = fechaNacimiento.getDate();
  const indiceDiaSemana = fechaNacimiento.getDay();

  getAnio.textContent = anio;
  getMes.textContent = `${indiceMes} (${MESES_ANIO[indiceMes]})`;
  getDiaMes.textContent = diaDelMes;
  getDiaSemana.textContent = `${indiceDiaSemana} (${DIAS_SEMANA[indiceDiaSemana]})`;

  let edad = fechaHoy.getFullYear() - anio;
  const mesActual = fechaHoy.getMonth();
  const diaActual = fechaHoy.getDate();

  if (mesActual < indiceMes || (mesActual === indiceMes && diaActual < diaDelMes)) {
    edad--;
  }

  dispEdad.textContent = `${edad} años`;

  let proximoCumple = new Date(fechaHoy.getFullYear(), indiceMes, diaDelMes);

  if (fechaHoy > proximoCumple && !(mesActual === indiceMes && diaActual === diaDelMes)) {
    proximoCumple.setFullYear(fechaHoy.getFullYear() + 1);
  }

  const unDiaEnMs = 1000 * 60 * 60 * 24;
  const diferenciaMs = proximoCumple.getTime() - fechaHoy.getTime();
  const diasFaltantes = Math.ceil(diferenciaMs / unDiaEnMs);

  if (mesActual === indiceMes && diaActual === diaDelMes) {
    dispDiasRestantes.textContent = "¡Hoy es tu cumpleaños! 🎉";
  } else {
    dispDiasRestantes.textContent = `${diasFaltantes} días`;
  }

  console.log("=== ANÁLISIS DE FECHA ===");
  console.log("Fecha nacimiento:", fechaNacimiento.toLocaleDateString("es-ES"));
  console.log(`Año: ${anio}, Mes: ${indiceMes} (${MESES_ANIO[indiceMes]}), Día: ${diaDelMes}, Semana: ${DIAS_SEMANA[indiceDiaSemana]}`);
  console.log(`Edad: ${edad} años. Días restantes: ${diasFaltantes}`);
}

procesarFechaCumpleanos(inputCumple.value);

btnCalcularFecha.addEventListener("click", () => {
  procesarFechaCumpleanos(inputCumple.value);
});

inputCumple.addEventListener("change", () => {
  procesarFechaCumpleanos(inputCumple.value);
});
