"use strict";

const CLAVE_LOCALSTORAGE = "ejercicios_js_tareas_v1";

const TAREAS_POR_DEFECTO = [
  {
    id: 1700000000001,
    texto: "Estudiar la declaración de funciones y el valor de retorno",
    completada: true,
    fechaCreacion: "10:30"
  },
  {
    id: 1700000000002,
    texto: "Aprender el modelo prototípico y Object.create()",
    completada: false,
    fechaCreacion: "11:15"
  },
  {
    id: 1700000000003,
    texto: "Completar los ejercicios del objeto estándar Array y Date",
    completada: false,
    fechaCreacion: "12:00"
  }
];

let estado = {
  tareas: cargarTareasDesdeStorage(),
  filtroActual: "todas"
};

const formNuevaTarea = document.getElementById("formNuevaTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const contadorPendientes = document.getElementById("contadorPendientes");
const botonesFiltro = document.querySelectorAll(".btn-filter");
const btnLimpiarCompletadas = document.getElementById("btnLimpiarCompletadas");

function cargarTareasDesdeStorage() {
  try {
    const datosSerializados = localStorage.getItem(CLAVE_LOCALSTORAGE);
    if (datosSerializados) {
      return JSON.parse(datosSerializados);
    }
  } catch (error) {
    console.error("[Storage]: Error al leer de localStorage:", error);
  }
  return [...TAREAS_POR_DEFECTO];
}

function guardarTareasEnStorage() {
  try {
    localStorage.setItem(CLAVE_LOCALSTORAGE, JSON.stringify(estado.tareas));
    console.log(`[Storage]: ${estado.tareas.length} tareas sincronizadas.`);
  } catch (error) {
    console.error("[Storage]: Error al escribir en localStorage:", error);
  }
}

function agregarTarea(texto) {
  const textoLimpio = texto.trim();
  if (!textoLimpio) return;

  const ahora = new Date();
  const horaFormateada = `${String(ahora.getHours()).padStart(2, "0")}:${String(ahora.getMinutes()).padStart(2, "0")}`;

  const nuevaTarea = {
    id: Date.now(),
    texto: textoLimpio,
    completada: false,
    fechaCreacion: horaFormateada
  };

  estado.tareas.unshift(nuevaTarea);

  guardarTareasEnStorage();
  renderizarAplicacion();
  console.log("[CRUD - Crear]:", nuevaTarea);
}

function alternarCompletada(id) {
  estado.tareas = estado.tareas.map((tarea) => {
    if (tarea.id === id) {
      return { ...tarea, completada: !tarea.completada };
    }
    return tarea;
  });

  guardarTareasEnStorage();
  renderizarAplicacion();
  console.log(`[CRUD - Actualizar]: Tarea ${id} alternada.`);
}

function eliminarTarea(id) {
  estado.tareas = estado.tareas.filter((tarea) => tarea.id !== id);

  guardarTareasEnStorage();
  renderizarAplicacion();
  console.log(`[CRUD - Eliminar]: Tarea ${id} eliminada.`);
}

function limpiarCompletadas() {
  const cantidadCompletadas = estado.tareas.filter((t) => t.completada).length;
  if (cantidadCompletadas === 0) {
    alert("No hay tareas completadas para eliminar.");
    return;
  }

  if (confirm(`¿Deseas eliminar las ${cantidadCompletadas} tareas completadas?`)) {
    estado.tareas = estado.tareas.filter((tarea) => !tarea.completada);
    guardarTareasEnStorage();
    renderizarAplicacion();
    console.log(`[CRUD - Limpieza]: Se eliminaron ${cantidadCompletadas} tareas.`);
  }
}

function crearElementoTarea(tarea) {
  const li = document.createElement("li");
  li.className = `task-item ${tarea.completada ? "completed" : ""}`;
  li.dataset.id = tarea.id;

  const contenedorInfo = document.createElement("div");
  contenedorInfo.className = "task-content";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.checked = tarea.completada;
  checkbox.setAttribute("aria-label", `Marcar como completada: ${tarea.texto}`);

  const spanTexto = document.createElement("span");
  spanTexto.className = "task-text";
  spanTexto.textContent = tarea.texto;

  contenedorInfo.appendChild(checkbox);
  contenedorInfo.appendChild(spanTexto);

  const spanFecha = document.createElement("span");
  spanFecha.className = "task-date";
  spanFecha.textContent = tarea.fechaCreacion;

  const btnBorrar = document.createElement("button");
  btnBorrar.className = "btn-delete";
  btnBorrar.type = "button";
  btnBorrar.innerHTML = "×";
  btnBorrar.title = "Eliminar tarea";
  btnBorrar.setAttribute("aria-label", `Eliminar tarea ${tarea.texto}`);

  checkbox.addEventListener("change", () => alternarCompletada(tarea.id));
  btnBorrar.addEventListener("click", () => eliminarTarea(tarea.id));

  li.appendChild(contenedorInfo);
  li.appendChild(spanFecha);
  li.appendChild(btnBorrar);

  return li;
}

function obtenerTareasFiltradas() {
  switch (estado.filtroActual) {
    case "pendientes":
      return estado.tareas.filter((t) => !t.completada);
    case "completadas":
      return estado.tareas.filter((t) => t.completada);
    case "todas":
    default:
      return estado.tareas;
  }
}

function renderizarAplicacion() {

  listaTareas.innerHTML = "";

  const tareasParaMostrar = obtenerTareasFiltradas();

  if (tareasParaMostrar.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <div class="empty-icon">📝</div>
      <p>No hay tareas en esta categoría.</p>
    `;
    listaTareas.appendChild(emptyState);
  } else {

    tareasParaMostrar.forEach((tarea) => {
      const nodo = crearElementoTarea(tarea);
      listaTareas.appendChild(nodo);
    });
  }

  const cantidadPendientes = estado.tareas.filter((t) => !t.completada).length;
  contadorPendientes.textContent = `${cantidadPendientes} tarea${cantidadPendientes === 1 ? "" : "s"} pendiente${cantidadPendientes === 1 ? "" : "s"}`;
}

formNuevaTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  agregarTarea(inputTarea.value);
  inputTarea.value = "";
  inputTarea.focus();
});

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((b) => b.classList.remove("active"));
    boton.classList.add("active");
    estado.filtroActual = boton.dataset.filtro;
    renderizarAplicacion();
  });
});

btnLimpiarCompletadas.addEventListener("click", limpiarCompletadas);

renderizarAplicacion();
console.log("=== PROYECTO INTEGRADOR INICIALIZADO ===");
console.log("Tareas cargadas:", estado.tareas);
