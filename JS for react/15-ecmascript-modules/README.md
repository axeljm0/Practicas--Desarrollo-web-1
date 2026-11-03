# 15 - ECMAScript Modules (ES Modules)

## 📌 Timestamp: [01:01:30](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=3690s)

Los **módulos de ECMAScript** permiten dividir el código en múltiples archivos independientes y reutilizables mediante las palabras clave `export` e `import`.

### Tipos de exportación e importación:

1. **Exportación nombrada (*Named Export*)**:
   ```javascript
   // math.js
   export const PI = 3.1416;
   export function sumar(a, b) { return a + b; }

   // index.js
   import { PI, sumar } from "./math.js";
   ```

2. **Exportación por defecto (*Default Export*)**:
   ```javascript
   // Button.js
   export default function Button() { ... }

   // index.js (puede importarse con cualquier nombre sin llaves)
   import MiBoton from "./Button.js";
   ```

3. **Uso en HTML**:
   Para que el navegador permita `import` sin herramientas adicionales como Webpack o Vite, se debe agregar el atributo `type="module"`:
   ```html
   <script type="module" src="./index.js"></script>
   ```

---

## ⚛️ Conexión con React
Toda la arquitectura de aplicaciones React se estructura con módulos:
- Cada componente vive en su propio archivo (`Header.jsx`, `Footer.jsx`).
- Los componentes principales se exportan por defecto (`export default App`).
- Los componentes auxiliares, hooks y utilidades se exportan de forma nombrada (`export { useAuth, Header }`).
- Los estilos y librerías externas se importan arriba: `import React, { useState } from 'react';`.
