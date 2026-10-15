# Ejercicio 17: La Consola del Navegador y Errores de Programación

## Objetivo
Familiarizarse con el entorno de la consola de desarrollador del navegador web, reconociendo la anatomía de los tres errores de ejecución más habituales en JavaScript (`ReferenceError`, `TypeError` y variables no declaradas), aprendiendo a leer la pila de llamadas (*stack trace*) y a diagnosticar la causa raíz.

## Conceptos Aplicados
- **Herramientas de Desarrollador (DevTools):** Acceso y atajos de teclado en Chrome, Firefox, Safari y Edge.
- **ReferenceError:** Se produce cuando el intérprete intenta evaluar un identificador que no existe en el ámbito léxico actual.
- **TypeError:** Ocurre cuando una operación se ejecuta sobre un valor de tipo incompatible, como intentar leer propiedades o invocar métodos sobre `null` o `undefined`.
- **Modo Estricto (`"use strict";`):** Bloqueo de la creación accidental de variables globales al olvidar la palabra reservada `var`.
- **Sintaxis ES5 pura:** Uso estricto de `var`, `function` y compatibilidad con navegadores clásicos.

## Instrucciones
1. Abre `index.html` en tu navegador web preferido.
2. Abre la consola de desarrollo de tu navegador presionando la tecla <kbd>F12</kbd> (o <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> / <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>I</kbd>) y selecciona la pestaña **Console**.
3. Haz clic en el botón **1. Función Inexistente**: observa cómo aparece un mensaje rojo tanto en la consola del navegador como en la pantalla del ejercicio, indicando que la función no está definida.
4. Haz clic en **2. Propiedad de Nulo**: comprueba el `TypeError` derivado de leer propiedades anidadas de un valor `null`.
5. Haz clic en **3. Variable no Declarada**: analiza cómo `"use strict";` impide acceder a identificadores ausentes.
6. Haz clic en **Limpiar Pantalla** para reiniciar el registro visual.

## Captura / Resultado Esperado
- Un panel superior con las instrucciones y atajos por sistema operativo y navegador.
- Tres botones rojos destacados para cada error.
- Una consola oscura interactiva en el DOM donde cada clic agrega una entrada con el formato:
  `❌ [ReferenceError]: calcularTotalInexistente is not defined`
  `Causa didáctica: Se invocó 'calcularTotalInexistente()', pero esa función no existe en memoria.`
- En la consola nativa de DevTools (<kbd>F12</kbd>), la traza completa indicando el archivo `script.js` y el número de línea exacto de cada fallo.
- Una tabla comparativa detallando causas y métodos de prevención.

## Código Clave Explicado (ES5)
```javascript
"use strict";

// Error 1: Llamar a una función no declarada produce ReferenceError
try {
  calcularTotalInexistente();
} catch (error) {
  console.error("Error capturado:", error.name, error.message);
}

// Error 2: Leer propiedad de null produce TypeError
try {
  var usuario = null;
  var perfil = usuario.perfil.configuracion; // Falla aquí
} catch (error) {
  console.error("Error capturado:", error.name, error.message);
}
```
> **Explicación didáctica:** En JavaScript, los errores detienen de inmediato el flujo del programa si no se capturan. La consola del navegador es la herramienta primordial del desarrollador para inspeccionar el nombre del error, su mensaje explicativo y la línea exacta donde se produjo.

## Retos Adicionales
1. **Inspección de la pila (`stack`):** Modifica el script para mostrar la propiedad `error.stack` dentro de la tarjeta de error en el DOM, permitiendo ver toda la secuencia de funciones previas al fallo.
2. **Error de sintaxis dinámico:** Utiliza `eval("var a = ;")` dentro de un bloque `try/catch` para provocar y capturar un `SyntaxError`.
3. **Validación defensiva con 'typeof':** Crea una función que antes de invocar una función verifique defensivamente `if (typeof miFuncion === "function")` para evitar que el programa se rompa.
