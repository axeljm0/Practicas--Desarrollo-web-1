# Ejercicio 19: El Evento Global Error

## Objetivo
Aprender a implementar una capa de telemetría y monitoreo global en JavaScript mediante el evento `error` en el objeto `window`, comprendiendo cómo interceptar fallos imprevistos que escapan a los bloques locales de control y extrayendo las propiedades del objeto estándar `ErrorEvent` (`message`, `filename`, `lineno`, `colno` y `error`).

## Conceptos Aplicados
- **Escuchador global de errores:** `window.addEventListener("error", function(e) { ... })`.
- **Propiedades del objeto ErrorEvent:**
  - `message`: Descripción en texto del error producido.
  - `filename`: Nombre o ruta del archivo de script origen.
  - `lineno`: Número de línea exacto de la instrucción fallida.
  - `colno`: Número de columna donde se detectó el fallo.
  - `error`: Instancia de la clase de error (con su `name` y `stack`).
- **Errores síncronos vs. asíncronos:** Comportamiento del escuchador global ante errores diferidos generados dentro de llamadas `setTimeout`.
- **Sintaxis ES5:** Estructura clásica sin dependencias externas.

## Instrucciones
1. Abre `index.html` en el navegador.
2. Abre la consola de desarrollo (<kbd>F12</kbd>).
3. Haz clic en **1. Provocar Error Síncrono no Atrapado**: notarás que no hay ningún bloque `try/catch` que lo contenga, pero el escuchador global lo atrapa y crea una tarjeta roja en pantalla indicando el mensaje y la línea exacta.
4. Haz clic en **2. Provocar Error Asíncrono (setTimeout)**: observa cómo el error que ocurre 300ms después dentro del *Event Loop* también es capturado sin problemas por `window`.
5. Haz clic en **3. Provocar Error en Función Callback**: comprueba la captura de errores generados durante la iteración de un array.
6. Pulsa **Limpiar Registro de Errores** para vaciar la bitácora visual.

## Captura / Resultado Esperado
- Un contador en tiempo real que informa la cantidad total de eventos de error interceptados.
- Tarjetas rojas apiladas en la bitácora con borde izquierdo llamativo:
  - `🚨 #1 - ReferenceError: metodoQueNoExisteEnElSistema is not defined`
  - `Archivo: script.js`
  - `Línea: 98 | Columna: 3`
- La confirmación simultánea en la consola nativa del navegador.

## Código Clave Explicado (ES5)
```javascript
// Suscripción al evento global de error en la ventana
window.addEventListener("error", function (evento) {
  var mensaje = evento.message;
  var archivo = evento.filename;
  var linea = evento.lineno;
  var columna = evento.colno;

  console.log("Error global atrapado en línea " + linea + ": " + mensaje);

  // Renderizar información en el DOM para alertar al usuario o registrar analítica
  mostrarTarjetaError(mensaje, archivo, linea, columna);
});
```
> **Explicación didáctica:** En aplicaciones profesionales (como las que utilizan servicios como Sentry o Datadog), este evento global es el que permite enviar automáticamente reportes de fallos al servidor cuando un usuario sufre un error en su navegador, evitando que los errores pasen desapercibidos.

## Retos Adicionales
1. **Envío simulado a servidor:** Simula el envío de telemetría a una API mediante una función que registre en consola una petición `POST` con los datos del error en formato JSON.
2. **Evento unhandledrejection:** Investiga y añade el escuchador para promesas rechazadas no capturadas (`window.addEventListener("unhandledrejection", ...)`).
3. **Filtro de scripts externos:** Configura una condición para ignorar errores que provengan de extensiones del navegador o scripts de terceros evaluando `evento.filename`.
