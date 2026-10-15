"use strict";

const vehiculo = {

  marca: "Toyota",
  modelo: "Corolla Hybrid",
  anio: 2024,
  motorEncendido: false,
  velocidadActual: 0,

  descripcion: function () {
    const estadoMotor = this.motorEncendido ? "encendido" : "apagado";
    return `Este vehículo es un ${this.marca} ${this.modelo} (Año ${this.anio}). Se encuentra con el motor ${estadoMotor} y viaja a ${this.velocidadActual} km/h.`;
  },

  alternarMotor: function () {
    this.motorEncendido = !this.motorEncendido;

    if (!this.motorEncendido) {
      this.velocidadActual = 0;
    }
    return this.motorEncendido;
  },

  acelerar: function (incremento) {
    if (!this.motorEncendido) {
      throw new Error("¡No puedes acelerar con el motor apagado! Enciéndelo primero.");
    }
    this.velocidadActual += incremento;
    return this.velocidadActual;
  },

  frenar: function () {
    this.velocidadActual = 0;
    return this.velocidadActual;
  }
};

const cajaDescripcion = document.getElementById("cajaDescripcion");
const dispMotor = document.getElementById("dispMotor");
const dispVelocidad = document.getElementById("dispVelocidad");
const btnObtenerDescripcion = document.getElementById("btnObtenerDescripcion");
const btnAlternarMotor = document.getElementById("btnAlternarMotor");
const btnAcelerar = document.getElementById("btnAcelerar");
const btnFrenar = document.getElementById("btnFrenar");

function actualizarInterfaz() {

  const textoDescripcion = vehiculo.descripcion();
  cajaDescripcion.textContent = `"${textoDescripcion}"`;

  dispMotor.textContent = vehiculo.motorEncendido ? "Encendido 🟢" : "Apagado 🔴";
  dispMotor.style.color = vehiculo.motorEncendido ? "#059669" : "#dc2626";
  dispVelocidad.textContent = `${vehiculo.velocidadActual} km/h`;

  console.log(`[vehiculo.descripcion()]: ${textoDescripcion}`);
}

btnObtenerDescripcion.addEventListener("click", () => {
  actualizarInterfaz();
});

btnAlternarMotor.addEventListener("click", () => {
  vehiculo.alternarMotor();
  actualizarInterfaz();
});

btnAcelerar.addEventListener("click", () => {
  try {
    vehiculo.acelerar(20);
    actualizarInterfaz();
  } catch (error) {
    alert(error.message);
    console.warn("[Aviso del vehículo]:", error.message);
  }
});

btnFrenar.addEventListener("click", () => {
  vehiculo.frenar();
  actualizarInterfaz();
});

actualizarInterfaz();
