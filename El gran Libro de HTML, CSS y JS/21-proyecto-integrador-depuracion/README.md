# Ejercicio 21: Proyecto Integrador - Sistema de Inventario con Depuración

## Objetivo
Consolidar de forma práctica e integral todas las técnicas de depuración, gestión de excepciones y monitoreo de errores estudiadas en el módulo 6.6 del manual:
1. Creación de clases de error personalizadas (`ErrorProducto`, `ErrorExistencia`, `ErrorCantidad`) mediante herencia prototípica en ES5.
2. Control defensivo de transacciones comerciales con `try / catch / throw`.
3. Escucha global de fallos de la aplicación mediante `window.addEventListener("error", ...)`.
4. Empleo de métodos del objeto `console` (`console.log`, `console.warn`, `console.error`, `console.assert`).
5. Renderizado en el DOM con retroalimentación visual cromática diferenciando información (`.log-info`), advertencias (`.log-warning`), errores (`.log-error`) y éxitos (`.log-success`).

## Conceptos Aplicados
- **Herencia de Error en ES5:** `Object.create(Error.prototype)` y asignación de constructor.
- **Jerarquía de excepciones y operador `instanceof`:** Discriminación precisa de qué tipo de fallo ocurrió dentro de un mismo bloque `catch`.
- **Reglas de negocio de un Inventario:** Validación de existencia del producto, comprobación de números enteros positivos y verificación de existencias disponibles antes de mutar el stock.
- **Aserciones defensivas:** `console.assert()` para corroborar la integridad antes de aplicar descuentos de inventario.
- **Escuchador global:** `window.addEventListener("error", ...)` como salvaguarda ante excepciones imprevistas.

## Instrucciones
1. Abre `index.html` en tu navegador y mantén abiertas las herramientas de desarrollador (<kbd>F12</kbd>).
2. Observa la tabla superior con los 4 productos disponibles y sus existencias actuales.
3. Prueba los botones de **Pruebas de Depuración**:
   - **✔ Venta Válida (1 Laptop):** Verás el mensaje verde de éxito y el stock de la Laptop se descontará de 5 a 4.
   - **✖ Exceder Stock (100 Laptops):** Atrapa una advertencia amarilla `ErrorExistencia` informando cuántas unidades faltan.
   - **✖ Cantidad Negativa (-3):** Captura una excepción roja `ErrorCantidad` bloqueando la venta.
   - **✖ Producto Falso ("Consola"):** Captura una excepción roja `ErrorProducto` al no existir en el catálogo.
   - **⚡ Forzar Error Global:** Provoca un `ReferenceError` intencional sin `try/catch` para verificar cómo el escuchador en `window` intercepta la falla en vivo.
4. Puedes realizar ventas manuales con el selector y el campo de cantidad.
5. Pulsa **🔄 Restaurar Stock** para devolver las existencias a su estado inicial, o **🧹 Limpiar Bitácora** para vaciar el panel.

## Captura / Resultado Esperado
- Una tabla de catálogo con insignias de stock (*verde*, *ámbar* para stock bajo, *rojo* para agotado).
- Un formulario de venta responsivo con opciones dinámicas.
- Un terminal oscuro en la parte inferior con mensajes clasificados por color:
  - `[INFO]: Iniciando venta: 1 unidad(es) de 'laptop'...` (Azul)
  - `✔ VENTA APROBADA: 1x Laptop Ultrabook 15 | Total: $899.99 (Stock restante: 4)` (Verde)
  - `⚠️ [ErrorExistencia]: Existencias insuficientes para 'Laptop Ultrabook 15'. Solicitadas: 100 | En bodega: 4.` (Amarillo)
  - `❌ [ErrorCantidad]: La cantidad solicitada ('-3') es inválida.` (Rojo)
  - `🌐 [ERROR GLOBAL INTERCEPTADO]: funcionCriticaNoDefinidaEnServidor is not defined` (Rojo)

## Código Clave Explicado (ES5)
```javascript
// 1. Creación de error personalizado en ES5
function ErrorExistencia(mensaje) {
  this.name = "ErrorExistencia";
  this.message = mensaje;
  this.stack = (new Error()).stack;
}
ErrorExistencia.prototype = Object.create(Error.prototype);
ErrorExistencia.prototype.constructor = ErrorExistencia;

// 2. Función de negocio que emite excepciones
function vender(codigo, cantidad) {
  if (!inventario[codigo]) {
    throw new ErrorProducto("Producto no encontrado");
  }
  if (cantidad > inventario[codigo].stock) {
    throw new ErrorExistencia("No hay existencias suficientes");
  }
  inventario[codigo].stock -= cantidad;
}

// 3. Captura selectiva con instanceof
try {
  vender("laptop", 50);
} catch (error) {
  if (error instanceof ErrorExistencia) {
    console.warn("Problema de stock:", error.message);
  } else {
    console.error("Error general:", error.message);
  }
}
```
> **Explicación didáctica:** Crear tus propios tipos de error (`instanceof ErrorProducto`) permite que el código que consume la función diferencie entre un problema de existencias (que puede ser una advertencia al cliente) y un fallo crítico de programación o base de datos.

## Retos Adicionales
1. **Historial de transacciones:** Agrega una tabla que liste todas las ventas aprobadas con su hora y subtotal generado.
2. **Reabastecimiento interactivo:** Agrega una función `reabastecer(producto, cantidad)` con su propia excepción `ErrorReabastecimiento` si la cantidad ingresada no es positiva.
3. **Persistencia con localStorage:** Guarda el estado del inventario en `localStorage` para que los descuentos de existencias persistan tras recargar la página.
