"use strict";

const animal = {
  esSerVivo: true,
  tipo: "Animal genérico",

  hacerSonido: function () {
    return `${this.nombre || "El animal"} emite un sonido biológico estándar.`;
  },

  dormir: function () {
    return `${this.nombre || "El animal"} está descansando plácidamente... Zzz.`;
  }
};

const perro = Object.create(animal);

perro.tipo = "Canino";
perro.nombre = "Firulais";
perro.raza = "Golden Retriever";

perro.ladrar = function () {
  return `¡Guau! ¡Guau! (Dice ${this.nombre} moviendo la cola).`;
};

perro.hacerSonido = function () {
  return `${this.nombre} ladra con entusiasmo canino.`;
};

const pantallaSalida = document.getElementById("pantallaSalida");
const btnLadrar = document.getElementById("btnLadrar");
const btnDormir = document.getElementById("btnDormir");
const btnSonido = document.getElementById("btnSonido");
const btnInspeccionar = document.getElementById("btnInspeccionar");

function mostrarEnPantalla(texto) {
  pantallaSalida.innerHTML = texto;
}

btnLadrar.addEventListener("click", () => {
  const mensaje = perro.ladrar();
  mostrarEnPantalla(`> [Método Propio perro.ladrar()]:<br><strong style="color: #38bdf8;">${mensaje}</strong>`);
  console.log("[perro.ladrar()]:", mensaje);
});

btnDormir.addEventListener("click", () => {

  const mensaje = perro.dormir();
  mostrarEnPantalla(`> [Método Heredado animal.dormir()]:<br><strong style="color: #4ade80;">${mensaje}</strong><br><small style="color: #94a3b8;">(El método fue encontrado en el prototipo 'animal', pero 'this.nombre' resolvió a '${perro.nombre}')</small>`);
  console.log("[perro.dormir() - heredado]:", mensaje);
});

btnSonido.addEventListener("click", () => {
  const mensaje = perro.hacerSonido();
  mostrarEnPantalla(`> [Método Sobrescrito perro.hacerSonido()]:<br><strong style="color: #facc15;">${mensaje}</strong><br><small style="color: #94a3b8;">(Se ejecutó la versión de 'perro', ocultando la versión genérica de 'animal')</small>`);
  console.log("[perro.hacerSonido() - override]:", mensaje);
});

btnInspeccionar.addEventListener("click", () => {
  const tieneNombrePropio = Object.prototype.hasOwnProperty.call(perro, "nombre");
  const tieneDormirPropio = Object.prototype.hasOwnProperty.call(perro, "dormir");
  const prototipoDePerro = Object.getPrototypeOf(perro);
  const esHijoDeAnimal = prototipoDePerro === animal;

  const reporte = `
    > [Diagnóstico de la Cadena Prototípica]:<br>
    • ¿'nombre' es propiedad PROPIA de perro?: <span style="color: #4ade80;">${tieneNombrePropio}</span><br>
    • ¿'dormir' es propiedad PROPIA de perro?: <span style="color: #f87171;">${tieneDormirPropio} (Viene de animal)</span><br>
    • ¿Object.getPrototypeOf(perro) === animal?: <span style="color: #4ade80;">${esHijoDeAnimal}</span><br>
    • perro.esSerVivo (heredado sin definir en perro): <span style="color: #38bdf8;">${perro.esSerVivo}</span>
  `;

  mostrarEnPantalla(reporte);
  console.log("Prototipo de perro:", prototipoDePerro);
});
