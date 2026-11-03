# Colección Didáctica de JavaScript: 21 Proyectos Educativos y Proyecto Interactivo de Depuración

Bienvenido a la colección oficial de proyectos educativos de **JavaScript puro (Vanilla JS)**, diseñada con un enfoque pedagógico riguroso y progresivo, basado en el temario del manual *"El gran libro de HTML, CSS y JavaScript"*.

Esta serie de ejercicios está construida para llevar a los estudiantes desde los fundamentos sintácticos de las funciones hasta la manipulación dinámica del DOM, objetos estándar, asincronía, técnicas profesionales de **depuración (debugging)** y el desarrollo de proyectos integradores con persistencia en LocalStorage y manejo robusto de excepciones. Además, incluye la suite interactiva completa **`proyecto-depuracion/`** que unifica todas las lecciones del capítulo 6.6 con editores de código y consolas virtuales.

---

## 📋 Tabla Resumen de Ejercicios y Proyectos

| # | Ejercicio / Proyecto | Módulo del Manual | Dificultad | Conceptos Clave | Enlace |
|---|---|---|:---:|---|:---:|
| 🌟 | **Proyecto Interactivo: Suite de Depuración** | 6.6 Depuración Completo | Intermedio / Avanzado | Pestañas, DevTools, `funcionfalsa()`, bucle `f=5`, `assert`, `ErrorEvent`, `vendido()`, 4 ejercicios interactivos con editor | [Abrir Proyecto](./proyecto-depuracion/) |
| 01 | **Funciones Básicas** | 6.2 Funciones | Principiante | Declaración formal, parámetros, reutilización, DOM dinámico | [Ver Proyecto](./01-funciones-basicas/) |
| 02 | **Funciones con Retorno** | 6.2 Funciones | Principiante | Sentencia `return`, cálculo de área, funciones puras, validación | [Ver Proyecto](./02-funciones-retorno/) |
| 03 | **Ámbito de Variables** | 6.2 Funciones | Intermedio | Global vs. Local, Scope Chain, Shadowing, `ReferenceError` | [Ver Proyecto](./03-ambito-variables/) |
| 04 | **Funciones Anónimas** | 6.2 Funciones | Intermedio | Expresiones de función, ciudadanos de primera clase, callbacks | [Ver Proyecto](./04-funciones-anonimas/) |
| 05 | **Función Autoejecutable** | 6.2 Funciones | Intermedio | Patrón IIFE, encapsulamiento léxico, `Math.PI`, aislamiento de `window` | [Ver Proyecto](./05-funcion-autoejecutable/) |
| 06 | **Objetos Literales** | 6.3 Objetos | Principiante | Estructuras `{ clave: valor }`, notación punto y corchetes, JSON | [Ver Proyecto](./06-objetos-literales/) |
| 07 | **Métodos en Objetos** | 6.3 Objetos | Intermedio | Métodos de instancia, enlace de `this`, control de estado | [Ver Proyecto](./07-metodos-objetos/) |
| 08 | **Funciones Constructoras** | 6.3 Objetos | Intermedio | Operador `new`, moldes de objetos, prototipos compartidos | [Ver Proyecto](./08-constructores/) |
| 09 | **Herencia Prototípica** | 6.3 Objetos | Avanzado | `Object.create()`, delegación, Prototype Chain, `hasOwnProperty` | [Ver Proyecto](./09-herencia-object-create/) |
| 10 | **Objeto String** | 6.4 Objetos Estándar | Principiante | Métodos `length`, `toUpperCase`, `slice`, `replace`, `split` | [Ver Proyecto](./10-objetos-string/) |
| 11 | **Objeto Array** | 6.4 Objetos Estándar | Intermedio | `push`, `pop`, `sort`, `filter`, `map`, `reduce`, `find` | [Ver Proyecto](./11-objetos-array/) |
| 12 | **Objeto Date** | 6.4 Objetos Estándar | Intermedio | `getFullYear`, base 0 en `getMonth`, marcas en ms, cálculo de edad | [Ver Proyecto](./12-objeto-date/) |
| 13 | **Objeto Math** | 6.4 Objetos Estándar | Principiante | `Math.random`, `Math.floor`, `Math.ceil`, `Math.sqrt`, `Math.pow` | [Ver Proyecto](./13-objeto-math/) |
| 14 | **Manipulación del DOM** | 6.5 DOM y Eventos | Intermedio | `getElementById`, `textContent`, `style`, `classList`, eventos | [Ver Proyecto](./14-manipulacion-dom/) |
| 15 | **Temporizadores** | 6.5 DOM y Asincronía | Intermedio | `setInterval`, `clearInterval`, `setTimeout`, Web APIs, Event Loop | [Ver Proyecto](./15-temporizadores/) |
| 16 | **Proyecto Integrador (To-Do List)** | 6 Integración Final | Avanzado | CRUD completo, objetos, arrays, DOM, `localStorage`, filtros | [Ver Proyecto](./16-proyecto-integrador-lista-tareas/) |
| 17 | **Consola del Navegador** | 6.6 Depuración | Principiante | DevTools, atajos de consola, `ReferenceError`, `TypeError`, tabla diagnóstica | [Ver Proyecto](./17-consola-navegador/) |
| 18 | **Objeto Console** | 6.6 Depuración | Intermedio | `console.log`, bucles `for`, `assert`, `clear`, inspección de objetos vs `alert` | [Ver Proyecto](./18-objeto-console/) |
| 19 | **Evento Error** | 6.6 Depuración | Intermedio | `window.addEventListener("error")`, `ErrorEvent`, lineno, colno, telemetría | [Ver Proyecto](./19-evento-error/) |
| 20 | **Excepciones (try / catch / throw)** | 6.6 Depuración | Intermedio | Validaciones defensivas, `throw new Error`, regex, control de formularios | [Ver Proyecto](./20-excepciones-try-catch/) |
| 21 | **Proyecto Integrador (Inventario)** | 6.6 Depuración Final | Avanzado | Errores personalizados (`ErrorProducto`, `ErrorExistencia`), log cromático | [Ver Proyecto](./21-proyecto-integrador-depuracion/) |

---

## 📂 Estructura de Carpetas

```text
/ejercicios-javascript/
│
├── README.md                                  # Índice general y guía didáctica
│
├── 01-funciones-basicas/                      # 6.2 Funciones
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 02-funciones-retorno/                      # 6.2 Funciones
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 03-ambito-variables/                       # 6.2 Funciones
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 04-funciones-anonimas/                     # 6.2 Funciones
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 05-funcion-autoejecutable/                 # 6.2 Funciones
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 06-objetos-literales/                      # 6.3 Objetos
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 07-metodos-objetos/                        # 6.3 Objetos
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 08-constructores/                          # 6.3 Objetos
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 09-herencia-object-create/                 # 6.3 Objetos
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 10-objetos-string/                         # 6.4 Objetos Estándar
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 11-objetos-array/                          # 6.4 Objetos Estándar
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 12-objeto-date/                            # 6.4 Objetos Estándar
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 13-objeto-math/                            # 6.4 Objetos Estándar
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 14-manipulacion-dom/                       # 6.5 DOM
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── README.md
│
├── 15-temporizadores/                         # 6.5 Temporizadores
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── README.md
│
├── 16-proyecto-integrador-lista-tareas/       # Proyecto Integrador Web
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── README.md
│
├── 17-consola-navegador/                      # 6.6 Depuración
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 18-objeto-console/                         # 6.6 Depuración
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 19-evento-error/                           # 6.6 Depuración
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 20-excepciones-try-catch/                  # 6.6 Depuración
│   ├── index.html
│   ├── script.js
│   └── README.md
│
├── 21-proyecto-integrador-depuracion/         # 6.6 Depuración (Proyecto Integrador)
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── README.md
│
└── proyecto-depuracion/                       # 6.6 Suite Interactiva Integral
    ├── index.html
    ├── script.js
    ├── styles.css
    └── README.md
```

---

## 🔍 Sección 6.6: Depuración (Debugging)

La sección 6.6 dota a los estudiantes de herramientas críticas para la resolución de errores en desarrollo profesional:
- **🌟 Suite Interactiva (`proyecto-depuracion/`):** Aplicación interactiva con navegación por pestañas fijas, demostraciones de consola con DevTools, análisis de `funcionfalsa()`, bucle con variable `f=5`, simulación de inventario `vendido()` con `throw new Error("Sin Existencia")`, monitoreo global con `window.addEventListener('error')` y laboratorio con 4 ejercicios prácticos editables y evaluados al instante en un sandbox seguro.
- **17 · Consola del Navegador:** Comprensión de herramientas de desarrollo (DevTools), atajos de teclado para Chrome, Firefox, Edge y Safari, y diagnóstico de `ReferenceError` y `TypeError`.
- **18 · Objeto Console:** Dominio de `console.log()` en bucles `for`, aserciones con `console.assert()`, limpieza con `console.clear()` y visualización no bloqueante frente a `alert()`.
- **19 · Evento Global Error:** Monitoreo y telemetría de fallos en tiempo de ejecución interceptados en `window` con `ErrorEvent` (`message`, `lineno`, `colno`, `filename`).
- **20 · Excepciones (try / catch / throw):** Validaciones defensivas emitiendo instancias de `Error` y captura con retroalimentación visual en tiempo real.
- **21 · Proyecto Integrador - Sistema de Inventario:** Arquitectura comercial con catálogo en memoria, excepciones personalizadas (`ErrorProducto`, `ErrorExistencia`, `ErrorCantidad`) mediante herencia prototípica en ES5 y panel de diagnóstico cromático (`.log-info`, `.log-warning`, `.log-error`, `.log-success`).

---

## 🚀 Requisitos e Instrucciones de Uso

### Requisitos del Sistema
- No se requiere Node.js, compiladores, ni paquetes externos.
- Solo necesitas un **navegador web moderno** (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari u Opera).

### ¿Cómo probar cualquiera de los proyectos?
1. Navega a la carpeta del ejercicio deseado (por ejemplo `17-consola-navegador/` o `21-proyecto-integrador-depuracion/`).
2. Abre el archivo `index.html` con un doble clic en tu explorador de archivos, o haz clic derecho y selecciona **Abrir con... > Tu navegador**.
3. Abre la consola de desarrollo del navegador (<kbd>F12</kbd> o <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) para observar las salidas, advertencias y trazas de error estructuradas en paralelo al DOM.

---

## 💡 Metodología Didáctica Aplicada

Todos los archivos han sido construidos respetando los estándares de la industria y la didáctica moderna:
- **Modo Estricto (`"use strict";`):** Previene errores silenciosos, asignaciones accidentales a variables globales no declaradas y optimizaciones del motor JS.
- **Salida Gráfica en el DOM:** Se evita el abuso de `alert()` o simples `console.log()` en favor de componentes visuales (tarjetas, medidores, formularios e insignias) para una experiencia inmersiva.
- **Gestión Moderna de Eventos:** Uso de `addEventListener` desacoplando la estructura HTML del comportamiento JavaScript.
- **Cumplimiento de Especificaciones:** Los ejercicios 17 al 21 emplean sintaxis canónica **ES5** (`var`, `function`, concatenación con `+`), facilitando la comprensión profunda de los mecanismos nativos del lenguaje.
- **Documentación Exhaustiva:** Cada carpeta contiene su propio `README.md` con objetivos formativos, código clave comentado y retos adicionales para incentivar la práctica independiente.

---
