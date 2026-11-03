// ==========================================
// 07 - MANIPULACIÓN DEL DOM (DOCUMENT OBJECT MODEL)
// Timestamp: [19:21] Manipulación del DOM
// ==========================================

console.log("--- 07: MANIPULACIÓN DEL DOM ---");

// Verificamos si estamos en el navegador o en Node.js
if (typeof document === "undefined") {
  console.log("ℹ️ Este módulo está diseñado para ejecutarse en el navegador con un archivo HTML.");
  console.log("Por favor abre '07-manipulacion-del-dom/index.html' en tu navegador o mediante Live Server.");
} else {
  // 1. Selección de elementos existentes en el DOM
  const counterDisplay = document.getElementById("counter-display");
  const buttonContainer = document.getElementById("button-container");
  const listContainer = document.getElementById("list-container");

  let count = 0;

  // 2. Creación dinámica de elementos con document.createElement
  const btnIncrementar = document.createElement("button");
  btnIncrementar.innerText = "+ Incrementar";

  const btnDecrementar = document.createElement("button");
  btnDecrementar.innerText = "- Decrementar";

  const btnReset = document.createElement("button");
  btnReset.innerText = "Reiniciar";

  // 3. Manejo de eventos con addEventListener
  btnIncrementar.addEventListener("click", () => {
    count++;
    actualizarDisplay();
  });

  btnDecrementar.addEventListener("click", () => {
    count--;
    actualizarDisplay();
  });

  btnReset.addEventListener("click", () => {
    count = 0;
    actualizarDisplay();
  });

  // Función que actualiza el DOM de forma imperativa
  function actualizarDisplay() {
    counterDisplay.innerText = count;
  }

  // 4. Inserción de elementos en el árbol DOM con appendChild
  buttonContainer.appendChild(btnIncrementar);
  buttonContainer.appendChild(btnDecrementar);
  buttonContainer.appendChild(btnReset);

  // 5. Creación de una lista dinámica de tareas
  const tareas = ["Aprender JavaScript", "Entender el DOM", "Dominar React"];
  const ul = document.createElement("ul");

  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.innerText = tarea;
    ul.appendChild(li);
  });

  listContainer.appendChild(ul);

  console.log("DOM manipulado con éxito mediante Vanilla JS.");
}
