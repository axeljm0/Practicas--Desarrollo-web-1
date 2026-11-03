# Fundamentos de JavaScript para React (Vanilla JS) 🚀

Este repositorio contiene los conceptos fundamentales de JavaScript que todo desarrollador debe dominar antes o durante su aprendizaje de **React**. Cada tema está organizado en su propia carpeta con explicaciones teóricas, código Vanilla JS limpio, ejemplos didácticos y su equivalencia o uso en React.

---

## 📚 Índice de Contenidos

| # | Tema | Minuto en Video | Enfoque principal / Relevancia en React |
|---|------|-----------------|------------------------------------------|
| **01** | [Introducción y Configuración](./01-introduccion-y-configuracion/) | [00:00](https://www.youtube.com/watch?v=lVqHiTCIRQg) - [00:29](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=29s) | Entorno, Node.js y ejecución en navegador |
| **02** | [Funciones de JavaScript](./02-funciones/) | [03:41](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=221s) | Base de los *Functional Components* |
| **03** | [Parámetros y Parámetros por Defecto](./03-parametros-y-default/) | [07:44](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=464s) - [09:59](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=599s) | Valores iniciales y configuración de funciones |
| **04** | [Retorno de Funciones (return)](./04-retorno-de-funciones/) | [40:30](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2430s) | Retorno de UI (JSX) y renderizado condicional (*early return*) |
| **05** | [Objetos de JavaScript](./05-objetos/) | [12:32](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=752s) | Estructuración de datos y modelos de estado |
| **06** | [Shorthand Property Names](./06-shorthand-properties/) | [17:31](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1051s) | Sintaxis abreviada al crear objetos y pasar estados |
| **07** | [Manipulación del DOM](./07-manipulacion-del-dom/) | [19:21](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1161s) | Cómo funciona el DOM real vs Virtual DOM de React |
| **08** | [Objetos como Parámetros](./08-objetos-como-parametros/) | [27:06](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1626s) | El patrón fundamental de las `props` en React |
| **09** | [Destructuring de Objetos](./09-destructuring/) | [30:20](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1820s) | Desempaquetado de `props`, `state` y retorno de hooks |
| **10** | [Funciones Anónimas](./10-funciones-anonimas/) | [32:28](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1948s) | Callbacks en eventos (`onClick`, `onChange`) y efectos |
| **11** | [Arrow Functions e Inline](./11-arrow-functions/) | [35:21](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2121s) - [37:11](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2231s) | Sintaxis moderna de componentes y handlers inline |
| **12** | [String Literals (Template Strings)](./12-string-literals/) | [43:56](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2636s) | Clases dinámicas, interpolación y composición de texto |
| **13** | [Métodos de Arrays (map, filter, forEach, concat)](./13-metodos-de-arrays/) | [49:50](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2990s) | Inmutabilidad y renderizado dinámico de listas en UI |
| **14** | [Spread Operator (...)](./14-spread-operator/) | [59:07](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=3547s) | Clonación inmutable, combinación de estados y rest props |
| **15** | [ECMAScript Modules](./15-ecmascript-modules/) | [01:01:30](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=3690s) | Organización en archivos con `import` y `export` |
| **16** | [Optional Chaining (?.)](./16-optional-chaining/) | [01:08:23](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=4103s) | Acceso seguro a propiedades anidadas que pueden no existir |
| **17** | [Async / Await](./17-async-await/) | [01:11:31](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=4291s) | Peticiones asíncronas con `fetch` y consumo de APIs en `useEffect` |

---

## 🛠️ Cómo ejecutar los ejemplos

### 1. Con Node.js (Consola)
La gran mayoría de los ejercicios pueden ejecutarse directamente en tu terminal:

```bash
# Ejemplo:
node 02-funciones/index.js
node 13-metodos-de-arrays/index.js
```

### 2. Con el Navegador
Abre el archivo [index.html](./index.html) en tu navegador preferido o usa la extensión **Live Server** de VS Code. Podrás interactuar con los temas y ver los resultados en la consola de herramientas de desarrollador (`F12` -> *Console*).
