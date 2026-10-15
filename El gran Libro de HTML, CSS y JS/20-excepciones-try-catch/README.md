# Ejercicio 20: Excepciones con try, catch y throw

## Objetivo
Aprender a implementar mecanismos de validación defensiva mediante el lanzamiento explícito de excepciones con la sentencia `throw new Error()`, y su captura controlada mediante bloques `try / catch / finally` para evitar que las entradas inválidas corrompan el estado de la aplicación.

## Conceptos Aplicados
- **La sentencia `throw`:** Emisión de instancias de `Error` personalizadas ante incumplimientos de reglas de negocio.
- **Estructura `try / catch`:** Confinamiento de bloques de código susceptibles a fallos y captura del objeto de error en la variable del `catch`.
- **Validaciones clásicas de formulario:**
  - `validarEdad(edad)`: comprobaciones de tipo numérico, enteros y límites biológicos.
  - `validarEmail(email)`: comprobación de formato con expresiones regulares (`RegExp.prototype.test()`).
  - `validarPassword(password)`: auditoría de complejidad (mínimo de caracteres, mayúsculas y dígitos).
- **Retroalimentación en el DOM:** Diferenciación visual de estados con tarjetas verdes (éxito) y rojas (error).
- **Sintaxis ES5:** Empleo estricto de `var` y `function`.

## Instrucciones
1. Abre `index.html` en el navegador.
2. Observa cómo al inicio se valida automáticamente un conjunto de datos predeterminados válidos.
3. Prueba los botones de **Pruebas rápidas** situados en la parte inferior del formulario:
   - **Caso Válido:** Muestra las tres tarjetas en color verde.
   - **Menor de Edad (15):** Dispara la excepción de edad menor a 18 años.
   - **Email sin '@':** Captura la excepción de formato de correo erróneo.
   - **Clave corta (123):** Provoca el fallo por no cumplir con la longitud mínima de 8 caracteres.
4. Escribe tus propios datos en los campos y presiona **Validar Datos con try / catch**.

## Captura / Resultado Esperado
- Un formulario limpio con tres campos de entrada y etiquetas de ayuda descriptivas.
- Una sección de diagnóstico con tarjetas dinámicas:
  - `✔ Edad aprobada: 28 años (Mayor de edad).`
  - `✔ Correo electrónico validado: ana.garcia@empresa.com`
  - `✖ Fallo en Contraseña: La contraseña debe contener al menos 8 caracteres (actualmente tiene 3).`
- En la consola del navegador (<kbd>F12</kbd>), advertencias amarillas documentando cada excepción capturada.

## Código Clave Explicado (ES5)
```javascript
// Función que arroja una excepción si la edad no es legal
function validarEdad(edad) {
  var numero = parseInt(edad, 10);
  if (isNaN(numero) || numero < 18) {
    throw new Error("Debes tener al menos 18 años para ingresar.");
  }
  return numero;
}

// Bloque de captura controlada
try {
  var edadAprobada = validarEdad(inputEdad.value);
  console.log("Edad válida:", edadAprobada);
} catch (error) {
  console.warn("Excepción atrapada:", error.message);
  mostrarErrorEnDOM(error.message);
}
```
> **Explicación didáctica:** En lugar de hacer que las funciones retornen valores ambiguos como `false` o `-1` cuando algo sale mal, el uso de `throw new Error(...)` detiene inmediatamente la rama errónea y comunica exactamente qué regla se violó, permitiendo que el llamador decida cómo presentar la incidencia al usuario.

## Retos Adicionales
1. **Cláusula `finally`:** Agrega un bloque `finally` para reactivar botones o registrar una marca de tiempo al término de la validación, sin importar si tuvo éxito o falló.
2. **Validación de número de teléfono:** Crea una función `validarTelefono(tel)` que compruebe que el teléfono contenga exactamente 10 dígitos numéricos.
3. **Múltiples excepciones encadenadas:** Modifica `validarPassword` para que reporte en un solo mensaje todos los requisitos faltantes de forma acumulativa.
