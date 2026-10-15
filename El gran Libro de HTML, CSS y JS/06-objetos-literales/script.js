"use strict";

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967,
  paginas: 471,
  genero: "Realismo mágico",
  disponible: true
};

const dispTitulo = document.getElementById("dispTitulo");
const dispAutor = document.getElementById("dispAutor");
const dispAnio = document.getElementById("dispAnio");
const dispPaginas = document.getElementById("dispPaginas");
const dispGenero = document.getElementById("dispGenero");
const dispDisponible = document.getElementById("dispDisponible");
const codigoJson = document.getElementById("codigoJson");
const btnAlternarDisponibilidad = document.getElementById("btnAlternarDisponibilidad");
const btnModificarAnio = document.getElementById("btnModificarAnio");

function renderizarLibro() {

  dispTitulo.textContent = libro.titulo;
  dispAutor.textContent = `Por ${libro.autor}`;
  dispAnio.textContent = libro.anioPublicacion;
  dispPaginas.textContent = `${libro.paginas} págs.`;

  dispGenero.textContent = libro["genero"];
  const estaDisponible = libro["disponible"];

  if (estaDisponible) {
    dispDisponible.textContent = "Disponible";
    dispDisponible.className = "status-badge available";
  } else {
    dispDisponible.textContent = "Prestado";
    dispDisponible.className = "status-badge borrowed";
  }

  codigoJson.textContent = JSON.stringify(libro, null, 2);
}

function alternarDisponibilidad() {
  libro.disponible = !libro.disponible;
  renderizarLibro();
  console.log(`[Disponibilidad actualizada]: libro.disponible = ${libro.disponible}`);
}

function actualizarEdicion() {

  const nuevoAnio = prompt("Ingresa el nuevo año de edición:", libro.anioPublicacion);
  if (nuevoAnio !== null && !isNaN(Number(nuevoAnio))) {
    libro.anioPublicacion = parseInt(nuevoAnio, 10);
    renderizarLibro();
    console.log(`[Año actualizado]: libro.anioPublicacion = ${libro.anioPublicacion}`);
  }
}

renderizarLibro();

btnAlternarDisponibilidad.addEventListener("click", alternarDisponibilidad);
btnModificarAnio.addEventListener("click", actualizarEdicion);

console.log("Objeto libro instanciado:", libro);
console.log(`Acceso por punto: libro.titulo -> "${libro.titulo}"`);
console.log(`Acceso por corchetes: libro["autor"] -> "${libro["autor"]}"`);
