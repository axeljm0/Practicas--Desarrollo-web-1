# 07 - Manipulación del DOM

## 📌 Timestamp: [19:21](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1161s)

El **DOM (Document Object Model)** es la representación en forma de árbol que el navegador crea a partir de tu archivo HTML. Con JavaScript podemos interactuar con él:

1. **Seleccionar**: `document.getElementById()`, `document.querySelector()`
2. **Crear**: `document.createElement("button")`
3. **Modificar texto o atributos**: `element.innerText = "Texto"`, `element.className = "btn"`
4. **Escuchar eventos**: `element.addEventListener("click", callback)`
5. **Insertar en la página**: `parent.appendChild(element)`

---

## ⚛️ ¿Por qué React cambió esto? (Imperativo vs Declarativo)

- **Vanilla JS (Imperativo)**: Tú debes decirle al navegador **paso a paso cómo** hacer las cosas:
  1. Busca el botón.
  2. Crea el texto.
  3. Añade el listener.
  4. Modifica manualmente el nodo de texto.
  *(Con aplicaciones grandes, esto se vuelve tedioso, propenso a errores y lento).*

- **React (Declarativo y Virtual DOM)**: En React tú solo declaras **qué** quieres ver según el estado:
  ```jsx
  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
    );
  }
  ```
  React se encarga internamente de hacer todas las llamadas al DOM por ti con su algoritmo de reconciliación (*Virtual DOM*).
