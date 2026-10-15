"use strict";

function Persona(nombre, edad, profesion) {

  this.nombre = nombre;
  this.edad = Number(edad);
  this.profesion = profesion;
  this.fechaRegistro = new Date();
}

Persona.prototype.presentarse = function () {
  return `¡Hola! Soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.profesion}.`;
};

const persona1 = new Persona("Sofía Ramos", 28, "Ingeniera de Software");
const persona2 = new Persona("Mateo Fernández", 34, "Diseñador UX/UI");
const persona3 = new Persona("Elena Gómez", 42, "Arquitecta Cloud");

const listaPersonas = [persona1, persona2, persona3];

const contenedorInstancias = document.getElementById("contenedorInstancias");
const formNuevaPersona = document.getElementById("formNuevaPersona");
const inputNombre = document.getElementById("inputNombre");
const inputEdad = document.getElementById("inputEdad");
const inputProfesion = document.getElementById("inputProfesion");

function renderizarInstancias() {
  contenedorInstancias.innerHTML = "";

  listaPersonas.forEach((persona, indice) => {
    const card = document.createElement("article");
    card.className = "person-card";

    const infoDiv = document.createElement("div");

    const header = document.createElement("div");
    header.className = "person-header";
    header.textContent = `${indice + 1}. ${persona.nombre}`;

    const meta = document.createElement("div");
    meta.className = "person-meta";
    meta.textContent = `${persona.edad} años · ${persona.profesion}`;

    infoDiv.appendChild(header);
    infoDiv.appendChild(meta);

    const btnSaludar = document.createElement("button");
    btnSaludar.className = "btn-saludar-card";
    btnSaludar.type = "button";
    btnSaludar.textContent = "Ejecutar .presentarse()";

    btnSaludar.addEventListener("click", () => {
      const saludo = persona.presentarse();
      alert(saludo);
      console.log(`[Método Prototípico]: ${saludo}`);
    });

    card.appendChild(infoDiv);
    card.appendChild(btnSaludar);
    contenedorInstancias.appendChild(card);
  });
}

formNuevaPersona.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = inputNombre.value.trim();
  const edad = parseInt(inputEdad.value, 10);
  const profesion = inputProfesion.value.trim();

  if (nombre && !isNaN(edad) && profesion) {

    const nuevaPersona = new Persona(nombre, edad, profesion);
    listaPersonas.push(nuevaPersona);

    renderizarInstancias();
    formNuevaPersona.reset();
    inputNombre.focus();

    console.log("[Nueva instancia creada con 'new']:", nuevaPersona);
  }
});

renderizarInstancias();

console.log("persona1 instanceof Persona:", persona1 instanceof Persona);
console.log("¿Comparte el mismo prototipo que persona2?", Object.getPrototypeOf(persona1) === Object.getPrototypeOf(persona2));
