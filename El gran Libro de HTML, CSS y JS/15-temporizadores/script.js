"use strict";

let idIntervalo = null;
let idTimeoutAlarma = null;
let centesimasTranscurridas = 0;

const displayTiempo = document.getElementById("displayTiempo");
const indicadorEstado = document.getElementById("indicadorEstado");
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");

const inputSegundosAlarma = document.getElementById("inputSegundosAlarma");
const btnProgramarAlarma = document.getElementById("btnProgramarAlarma");
const alertaToast = document.getElementById("alertaToast");

function formatearTiempo(totalCentesimas) {
  const minutos = Math.floor(totalCentesimas / 6000);
  const segundos = Math.floor((totalCentesimas % 6000) / 100);
  const centesimas = totalCentesimas % 100;

  const minStr = String(minutos).padStart(2, "0");
  const segStr = String(segundos).padStart(2, "0");
  const cenStr = String(centesimas).padStart(2, "0");

  return `${minStr}:${segStr}:${cenStr}`;
}

function iniciarCronometro() {
  if (idIntervalo !== null) {
    console.warn("[Temporizador]: El cronómetro ya está en ejecución.");
    return;
  }

  indicadorEstado.textContent = "EN EJECUCIÓN";
  indicadorEstado.className = "status-indicator running";

  idIntervalo = setInterval(() => {
    centesimasTranscurridas++;
    displayTiempo.textContent = formatearTiempo(centesimasTranscurridas);
  }, 10);

  console.log(`[setInterval]: Intervalo iniciado con ID=${idIntervalo}`);
}

function pausarCronometro() {
  if (idIntervalo !== null) {
    clearInterval(idIntervalo);
    idIntervalo = null;
    indicadorEstado.textContent = "PAUSADO";
    indicadorEstado.className = "status-indicator paused";
    console.log("[clearInterval]: Intervalo detenido correctamente.");
  }
}

function reiniciarCronometro() {
  pausarCronometro();
  centesimasTranscurridas = 0;
  displayTiempo.textContent = formatearTiempo(0);
  indicadorEstado.textContent = "DETENIDO";
  indicadorEstado.className = "status-indicator";
  console.log("[Cronómetro]: Reiniciado a 00:00:00");
}

function programarAlarma() {
  const segundos = parseInt(inputSegundosAlarma.value, 10);

  if (isNaN(segundos) || segundos <= 0) {
    alert("Por favor, ingresa un número de segundos válido mayor a 0.");
    return;
  }

  alertaToast.style.display = "none";

  if (idTimeoutAlarma !== null) {
    clearTimeout(idTimeoutAlarma);
  }

  console.log(`[setTimeout]: Alarma programada para sonar en ${segundos} segundo(s)...`);
  btnProgramarAlarma.textContent = `⏳ Esperando ${segundos}s...`;
  btnProgramarAlarma.disabled = true;

  idTimeoutAlarma = setTimeout(() => {
    alertaToast.style.display = "block";
    btnProgramarAlarma.textContent = "⏰ Programar Alarma (seg)";
    btnProgramarAlarma.disabled = false;
    idTimeoutAlarma = null;

    console.log("[setTimeout]: ¡Callback disparado por el Event Loop!");

    setTimeout(() => {
      alertaToast.style.display = "none";
    }, 5000);
  }, segundos * 1000);
}

btnIniciar.addEventListener("click", iniciarCronometro);
btnPausar.addEventListener("click", pausarCronometro);
btnReiniciar.addEventListener("click", reiniciarCronometro);
btnProgramarAlarma.addEventListener("click", programarAlarma);
