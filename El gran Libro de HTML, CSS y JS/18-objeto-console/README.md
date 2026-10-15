# Ejercicio 18: El Objeto Console

## Objetivo
Dominar el uso práctico del objeto global `console` como herramienta central de depuración en JavaScript, aprendiendo a registrar valores intermedios durante la ejecución de bucles con `console.log()`, aplicar aserciones condicionales con `console.assert()`, limpiar el historial con `console.clear()` e inspeccionar estructuras de datos complejas sin interrumpir la experiencia de usuario.

## Conceptos Aplicados
- **console.log():** Salida estándar de depuración; admite múltiples argumentos y objetos interactivos.
- **console.assert(condicion, mensaje):** Comprobación defensiva en desarrollo; si la condición resulta falsa (`false`), emite un error con la traza correspondiente en la consola sin detener la ejecución del script.
- **console.clear():** Purgado sistemático de mensajes previos de la terminal.
- **console.dir() / Inspección de Objetos:** Visualización de árboles de propiedades, funciones y prototipos.
- **Contraste con alert():** Inconvenientes del bloqueo síncrono frente a la asincronía de la consola.
- **Sintaxis ES5:** Estructuras clásicas con `var` y bucles `for` indexados.

## Instrucciones
1. Abre `index.html` en el navegador y abre la consola con <kbd>F12</kbd>.
2. Haz clic en **1. Depurar bucle for con console.log()**: comprueba en la consola nativa cada paso de la iteración con su índice y producto.
3. Haz clic en **2. Validar con console.assert()**: observa que la prueba válida no genera ruido, mientras que la prueba con condición falsa imprime una línea roja de aserción fallida en la consola.
4. Haz clic en **3. Mostrar objeto con console.log / dir**: despliega el objeto `usuarioSistema` en la consola y navega por sus propiedades anidadas.
5. Haz clic en **4. Ejecutar console.clear()**: observa cómo la consola del navegador y el panel en pantalla quedan completamente limpios.

## Captura / Resultado Esperado
- Un panel oscuro con los registros replicados en tiempo real.
- En la consola del navegador (<kbd>F12</kbd>):
  - Salidas de bucle: `Paso #1 | Índice: 0 | Producto: Teclado Mecánico`.
  - Error de aserción rojo: `Assertion failed: Error de aserción: El usuario debe ser mayor o igual a 18 años`.
  - Objeto interactivo con flechas de expansión para explorar `preferencias`, `notificaciones` y métodos.
- Una tabla comparativa que fundamenta por qué `console.log()` es muy superior a `alert()` para tareas de depuración.

## Código Clave Explicado (ES5)
```javascript
// Aserción: si la condición es falsa, emite error en consola
var edad = 16;
console.assert(edad >= 18, "El usuario debe ser mayor de edad");

// Depuración de bucle for tradicional
for (var i = 0; i < productos.length; i++) {
  console.log("Índice:", i, "Valor:", productos[i]);
}

// Limpiar la consola
console.clear();
```
> **Explicación didáctica:** `console.assert()` es una técnica fundamental para escribir pruebas de humo rápidas mientras desarrollas. En lugar de llenar tu código de sentencias `if (...) console.error(...)`, `console.assert()` resume la verificación en una sola línea elegante.

## Retos Adicionales
1. **Medición de tiempos:** Usa `console.time("bucle")` antes del bucle y `console.timeEnd("bucle")` al finalizar para medir los milisegundos exactos que tarda en procesarse.
2. **Tablas de datos:** Prueba el método `console.table(productosTienda)` para visualizar arreglos u objetos en formato de tabla interactiva en la consola.
3. **Agrupación de mensajes:** Organiza los logs del bucle dentro de un bloque colapsable usando `console.group("Detalles del bucle")` y `console.groupEnd()`.
