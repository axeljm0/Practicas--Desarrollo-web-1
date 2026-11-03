# Proyecto Interactivo: Depuración en JavaScript (Capítulo 6.6)

Este proyecto educativo interactivo está basado en el capítulo **6.6 Depuración** del libro *El Gran Libro de HTML5, CSS3 y JavaScript*. Proporciona un entorno completo y visual para experimentar, comprender y dominar las herramientas y técnicas de depuración (debugging) en JavaScript moderno.

---

## 🎯 Objetivos de Aprendizaje

1. **Entender qué es la depuración:** Conocer la naturaleza del proceso deductivo y la importancia de la paciencia en la resolución de problemas.
2. **Clasificar los tipos de errores:** Distinguir entre errores de programación (`SyntaxError`, `ReferenceError`, `TypeError`), errores lógicos y errores personalizados.
3. **Dominar la consola del navegador:** Conocer los atajos de teclado en Chrome, Firefox, Edge y Safari, e interpretar el *stack trace*.
4. **Utilizar el objeto `Console`:** Emplear eficazmente los métodos `console.log()`, `console.assert()` y `console.clear()`.
5. **Interceptar fallos con el evento global `error`:** Escuchar en el objeto `window` y extraer metadatos del `ErrorEvent` (`message`, `filename`, `lineno`, `colno`, `error`).
6. **Manejar excepciones estructuradas:** Implementar control defensivo con `try`, `catch` y `throw` para reglas de negocio.
7. **Resolver ejercicios prácticos interactivos:** Corregir y validar código en tiempo real dentro de un entorno virtual integrado.

---

## 📁 Estructura del Proyecto

```text
proyecto-depuracion/
├── index.html        # Estructura semántica, pestañas, paneles interactivos y consolas
├── styles.css        # Diseño responsivo en modo oscuro con CSS moderno
├── script.js         # Lógica interactiva, simuladores y sandbox evaluador
└── README.md         # Documentación pedagógica y guía de uso
```

---

## 🧭 Guía de Secciones y Módulos

### 1. Introducción a la Depuración
- **Concepto clave:** La depuración es el proceso metódico de aislar y corregir fallos.
- **Tipos de errores:**
  - **Programación:** Infracciones de sintaxis o referencias inválidas que detienen el script.
  - **Lógicos:** El código corre sin alertar, pero el cálculo o flujo produce resultados errados.
  - **Personalizados:** Excepciones lanzadas deliberadamente con `throw` cuando se violan restricciones.
- **Simulador interactivo:** Permite provocar un `TypeError` controlado (`numero()`) e inspeccionar el mensaje explicativo.

### 2. La Consola del Navegador
- **Atajos directos para DevTools:**
  - **Google Chrome:** `Ctrl + Shift + J` (Win/Linux) o `Cmd + Option + J` (Mac).
  - **Mozilla Firefox:** `Ctrl + Shift + K` (Win/Linux) o `Cmd + Option + K` (Mac).
  - **Microsoft Edge:** `Ctrl + Shift + I` (Win/Linux) o `Cmd + Option + I` (Mac).
  - **Apple Safari:** `Cmd + Option + C` (tras habilitar menú Desarrollo en Ajustes).
- **Caso del libro:** Invocación de `funcionfalsa()`. Genera un `ReferenceError` y desglosa paso a paso qué significa `funcionfalsa is not defined`.

### 3. El Objeto Console
- **Métodos cubiertos:**
  - `console.log(...)`: Registro de variables, mensajes y objetos completos.
  - `console.assert(afirmacion, mensaje)`: Emite error solo si la afirmación es falsa.
  - `console.clear()`: Limpia el búfer activo.
- **Caso del bucle con variable `f`:**
  ```javascript
  for (var f = 0; f < 5; f++) {
    console.log("Iteración f =", f);
  }
  console.log("Valor final de f =", f); // f vale 5
  console.assert(f === 4, "f no es 4, vale:", f);
  ```
- **Explicación didáctica:** Se explica por qué al finalizar el bucle `f === 5`, ya que la condición de salida `5 < 5` evalúa a falso tras el último incremento `f++`.

### 4. El Evento Global Error
- **Mecanismo:** `window.addEventListener('error', callback)` permite capturar cualquier error no atrapado antes de que rompa la experiencia del usuario.
- **Metadatos examinados del `ErrorEvent`:**
  - `message`: Descripción legible del problema.
  - `filename`: Nombre o ruta del archivo origen.
  - `lineno`: Número de línea exacto.
  - `colno`: Número de columna dentro de la línea.
  - `error`: Instancia del error nativo (`Error`, `TypeError`, etc.).
- **Simulador:** Dispara un error global asíncrono y rellena en tiempo real los valores capturados en una tarjeta de inspección.

### 5. Excepciones: try, catch y throw
- **Patrón:**
  ```javascript
  try {
    // Código propenso a fallar
    vendido(solicitud);
  } catch (error) {
    // Recuperación y tratamiento elegante
    console.error("Capturado:", error.message);
  }
  ```
- **Simulación de almacén `vendido(cantidad)`:**
  - Stock inicial: **5 unidades**.
  - Si la compra supera las existencias, lanza `throw new Error("Sin Existencia")`.
  - El bloque `catch` atrapa la excepción y muestra avisos tanto en el DOM como en la consola sin interrumpir la página.
  - Botón interactivo para reabastecer el inventario a 5 unidades.

### 6. Laboratorio de Ejercicios Prácticos
Dispone de un entorno seguro con consola virtual integrada y validación automatizada:
1. **Ejercicio 1 (Corregir función mal escrita):** Reparar `retun` y `cantdad` en `calcularTotal(precio, cantidad)`.
2. **Ejercicio 2 (Depurar bucle con `console.log`):** Ajustar la condición del bucle for para que la suma del 1 al 5 sea `15`.
3. **Ejercicio 3 (Validar rango con `try / catch`):** Función `validarEdad(edad)` que rechaza edades no numéricas o fuera del rango estricto `0 < edad < 120` lanzando `throw new Error("Edad inválida")`.
4. **Ejercicio 4 (Capturar evento global de error):** Registrar `window.addEventListener("error", ...)` e imprimir `event.message`.

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Directamente en el navegador:**
   - Haz doble clic sobre el archivo `index.html` o arrástralo a tu navegador web favorito (Chrome, Firefox, Edge o Safari).
2. **Mediante un servidor local (opcional):**
   ```bash
   # Con Python 3
   python3 -m http.server 8000
   # Luego abre en tu navegador: http://localhost:8000/proyecto-depuracion/
   ```
3. **Verificación con DevTools:**
   - Presiona `F12` en tu teclado para abrir las Herramientas de Desarrollador y observa en paralelo la consola nativa del navegador y la consola virtual embebida en la página.

---

## ✅ Criterios de Evaluación y Buenas Prácticas

- [x] Código JavaScript modular dentro de un IIFE estricto (`"use strict"`).
- [x] Estructura HTML5 accesible con roles ARIA (`tab`, `tabpanel`, `role="alert"`).
- [x] Estilos modernos con variables CSS y diseño totalmente responsivo.
- [x] Intercepción segura de consolas en ejercicios prácticos sin alterar el entorno global del navegador.
- [x] Compatibilidad total con estándares ECMAScript.
