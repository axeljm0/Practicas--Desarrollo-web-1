# 01 - Introducción y Configuración del Proyecto

## 📌 Timestamps del Video
- **[00:00] Introducción**: Por qué aprender JavaScript antes de aprender React. React no es un nuevo lenguaje, es una biblioteca de JavaScript. Todo lo que escribes en React (JSX, componentes, hooks, props) es JavaScript estándar.
- **[00:11] Requerimientos**:
  - Editor de código recomendado: **Visual Studio Code**.
  - Entorno de ejecución: **Node.js** (para ejecutar scripts en terminal o gestionar paquetes más adelante).
  - Un navegador web moderno (Chrome, Firefox, Brave, Edge).
- **[00:29] Configuración de Proyecto**:
  - Extensión recomendada en VS Code: **Live Server** (para recargar cambios automáticamente en el navegador).
  - Estructura básica de un proyecto web:
    - Archivo `index.html`
    - Archivo de scripts `index.js` (vinculado mediante `<script src="./index.js"></script>`).

---

## 💡 ¿Por qué es fundamental para React?
1. **React no oculta JavaScript**: En frameworks como Angular o Vue hay sintaxis específica de directivas (`*ngIf`, `v-for`). En React se usan expresiones puras de JavaScript (`condition ? <Component /> : null`, `array.map(...)`).
2. **Entorno de desarrollo**: React moderno utiliza herramientas como Vite o Next.js, pero todas ellas se basan en Node.js y en los mismos módulos y conceptos de ECMAScript que aquí estudiamos.

---

## 🚀 Cómo probar los ejercicios
- **Opción A (Node.js)**: Abre la terminal en esta carpeta o en la raíz y ejecuta:
  ```bash
  node 02-funciones/index.js
  ```
- **Opción B (Navegador)**: Abre el archivo `index.html` de la raíz en tu navegador y presiona `F12` para ver la pestaña **Consola**.
