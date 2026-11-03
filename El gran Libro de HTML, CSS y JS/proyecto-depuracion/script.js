/**
 * ============================================================================
 * PROYECTO EDUCATIVO: DEPURACIÓN EN JAVASCRIPT (CAPÍTULO 6.6)
 * Archivo: script.js
 * Descripción: Lógica interactiva para la navegación, demostraciones de consola,
 *              simulación de excepciones, escucha de eventos globales y sandbox
 *              evaluador de ejercicios prácticos.
 * ============================================================================
 */

(function () {
  "use strict";

  // ==========================================================================
  // 1. GESTIÓN DE NAVEGACIÓN POR PESTAÑAS
  // ==========================================================================
  function inicializarNavegacion() {
    var tabs = document.querySelectorAll(".nav-tab");
    var sections = document.querySelectorAll(".section-content");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var targetId = tab.getAttribute("data-tab");

        // Desactivar pestañas y secciones previas
        tabs.forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });

        sections.forEach(function (s) {
          s.classList.remove("active");
        });

        // Activar la pestaña y sección seleccionada
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        var targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add("active");
          // Desplazar suavemente hacia la vista si es pantalla pequeña
          if (window.innerWidth < 768) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });
  }

  // ==========================================================================
  // UTILIDAD: ESCRITURA EN CONSOLA VIRTUAL
  // ==========================================================================
  function escribirEnConsola(containerId, mensaje, tipo) {
    var contenedor = document.getElementById(containerId);
    if (!contenedor) return;

    var tipoClase = tipo || "log"; // log, info, warn, error, success
    var linea = document.createElement("div");
    linea.className = "console-line " + tipoClase;

    var hora = new Date().toLocaleTimeString();
    linea.textContent = "[" + hora + "] " + mensaje;

    contenedor.appendChild(linea);
    contenedor.scrollTop = contenedor.scrollHeight;
  }

  function limpiarConsola(containerId, mensajeInicial) {
    var contenedor = document.getElementById(containerId);
    if (!contenedor) return;
    contenedor.innerHTML = "";
    if (mensajeInicial) {
      escribirEnConsola(containerId, mensajeInicial, "info");
    }
  }

  // ==========================================================================
  // 2. SECCIÓN 1: INTRODUCCIÓN A LA DEPURACIÓN (TypeError)
  // ==========================================================================
  function inicializarSeccionIntro() {
    var btnDemoError = document.getElementById("btn-demo-intro-error");
    var btnClear = document.getElementById("btn-clear-intro-console");
    var statusSpan = document.getElementById("intro-status");

    if (btnDemoError) {
      btnDemoError.addEventListener("click", function () {
        limpiarConsola("intro-console-output");
        escribirEnConsola("intro-console-output", "Ejecutando código de prueba...", "info");
        escribirEnConsola("intro-console-output", "var numero = 42; numero();", "log");

        try {
          var numero = 42;
          numero(); // Provoca TypeError intencional
        } catch (error) {
          // Reflejar en la consola nativa del navegador
          console.error("Demostración Capítulo 6.6 - Error capturado:", error);

          // Reflejar en la consola virtual
          escribirEnConsola("intro-console-output", "❌ " + error.name + ": " + error.message, "error");
          escribirEnConsola(
            "intro-console-output",
            "Diagnóstico: Has intentado invocar el número 42 como si fuese una función. En JavaScript solo los objetos invocables (funciones) aceptan paréntesis ().",
            "warn"
          );
          if (statusSpan) statusSpan.textContent = "Error Capturado con Éxito";
        }
      });
    }

    if (btnClear) {
      btnClear.addEventListener("click", function () {
        limpiarConsola("intro-console-output", "Consola virtual reiniciada. Pulsa el botón para probar.");
        if (statusSpan) statusSpan.textContent = "Listo";
      });
    }
  }

  // ==========================================================================
  // 3. SECCIÓN 2: CONSOLA DEL NAVEGADOR (funcionfalsa)
  // ==========================================================================
  function inicializarSeccionConsolaNavegador() {
    var btnTrigger = document.getElementById("btn-trigger-funcionfalsa");
    var btnClear = document.getElementById("btn-clear-browser-console");
    var explanationBox = document.getElementById("browser-explanation-box");

    if (btnTrigger) {
      btnTrigger.addEventListener("click", function () {
        limpiarConsola("browser-console-output");
        escribirEnConsola("browser-console-output", "Invocando funcionfalsa()...", "info");

        try {
          // Intentar llamar a la función inexistente del libro
          /* eslint-disable no-undef */
          funcionfalsa();
          /* eslint-enable no-undef */
        } catch (err) {
          // Emitir a la consola nativa del navegador para que el estudiante use F12
          console.error("Error inducido según el libro (Cap. 6.6):", err);

          // Escribir en la consola virtual
          escribirEnConsola("browser-console-output", "🚨 " + err.name + ": " + err.message, "error");
          escribirEnConsola(
            "browser-console-output",
            "Pista: Abre las DevTools con F12 o Ctrl+Shift+J para ver el rastro rojo en la consola nativa.",
            "warn"
          );

          if (explanationBox) {
            explanationBox.style.display = "block";
          }
        }
      });
    }

    if (btnClear) {
      btnClear.addEventListener("click", function () {
        limpiarConsola(
          "browser-console-output",
          "Consola limpia. Abre las DevTools (F12) o pulsa el botón para probar."
        );
        if (explanationBox) {
          explanationBox.style.display = "none";
        }
      });
    }
  }

  // ==========================================================================
  // 4. SECCIÓN 3: OBJETO CONSOLE (log, assert, clear, bucle f=5)
  // ==========================================================================
  function inicializarSeccionObjetoConsole() {
    var btnLoop = document.getElementById("btn-run-loop-demo");
    var btnAssert = document.getElementById("btn-run-assert-demo");
    var btnInspect = document.getElementById("btn-inspect-object-demo");
    var btnClear = document.getElementById("btn-clear-obj-console");
    var statusSpan = document.getElementById("obj-console-status");

    var ultimoValorDeF = 0;

    if (btnLoop) {
      btnLoop.addEventListener("click", function () {
        limpiarConsola("obj-console-output");
        escribirEnConsola("obj-console-output", "--- INICIO DE BUCLE FOR (var f = 0; f < 5; f++) ---", "info");
        console.log("--- Inicio de bucle educativo Cap. 6.6 ---");

        var f;
        for (f = 0; f < 5; f++) {
          console.log("Iteración del bucle, f vale:", f);
          escribirEnConsola("obj-console-output", "Iteración: f = " + f, "log");
        }

        ultimoValorDeF = f;
        console.log("Bucle terminado. Valor final de f:", f);
        escribirEnConsola("obj-console-output", "--- BUCLE TERMINADO ---", "info");
        escribirEnConsola(
          "obj-console-output",
          "Valor final de f tras salir del bucle: " + f + " (¡Es 5 porque 5 < 5 es falso!)",
          "success"
        );

        if (statusSpan) statusSpan.textContent = "Bucle ejecutado (f final = " + f + ")";
      });
    }

    if (btnAssert) {
      btnAssert.addEventListener("click", function () {
        var f = ultimoValorDeF || 5;
        escribirEnConsola("obj-console-output", "Ejecutando: console.assert(f === 4, 'f no es 4, vale: ' + f);", "info");

        // Ejecutar console.assert en la consola nativa del navegador
        console.assert(f === 4, "¡Fallo de aserción en DevTools! f no es 4, vale:", f);

        // Reflejar en la consola virtual
        if (f !== 4) {
          escribirEnConsola(
            "obj-console-output",
            "Assertion failed: 'f no es 4, vale: " + f + "'",
            "error"
          );
          escribirEnConsola(
            "obj-console-output",
            "Explicación assert: La condición (f === 4) fue evaluada como FALSA. Por eso console.assert emitió este error. Abre F12 para ver la aserción en DevTools.",
            "warn"
          );
        } else {
          escribirEnConsola("obj-console-output", "Aserción superada: f sí vale 4.", "success");
        }
      });
    }

    if (btnInspect) {
      btnInspect.addEventListener("click", function () {
        var libroJS = {
          titulo: "El Gran Libro de HTML5, CSS3 y JavaScript",
          capitulo: "6.6 Depuración",
          temas: ["Consola", "Objeto Console", "Evento error", "Excepciones"],
          nivel: "Intermedio",
          publicado: true
        };

        // Enviar objeto real a la consola nativa
        console.log("Objeto JavaScript completo para inspección interactiva:", libroJS);

        escribirEnConsola("obj-console-output", "Inspección de Objeto en Consola:", "info");
        escribirEnConsola("obj-console-output", JSON.stringify(libroJS, null, 2), "log");
        escribirEnConsola(
          "obj-console-output",
          "Consejo: En las DevTools (F12) puedes desplegar el objeto con el triángulo interactivo para explorar sus propiedades y prototipo.",
          "info"
        );
      });
    }

    if (btnClear) {
      btnClear.addEventListener("click", function () {
        // Ejecutar console.clear nativo
        console.clear();
        limpiarConsola("obj-console-output", "Consola virtual limpiada con console.clear().");
        if (statusSpan) statusSpan.textContent = "Consola vacía";
      });
    }
  }

  // ==========================================================================
  // 5. SECCIÓN 4: EL EVENTO GLOBAL ERROR
  // ==========================================================================
  function inicializarSeccionEventoError() {
    var btnTrigger = document.getElementById("btn-trigger-global-error");
    var btnClear = document.getElementById("btn-clear-error-event");

    var propMsg = document.getElementById("ev-prop-msg");
    var propFile = document.getElementById("ev-prop-file");
    var propLine = document.getElementById("ev-prop-line");
    var propCol = document.getElementById("ev-prop-col");
    var propName = document.getElementById("ev-prop-name");

    // Registro del listener global para el evento "error" en window
    window.addEventListener("error", function (event) {
      // Registrar en la consola virtual de la sección
      escribirEnConsola(
        "error-event-console-output",
        "🚨 [window.onerror] Capturado: " + (event.message || "Error no especificado"),
        "error"
      );
      escribirEnConsola(
        "error-event-console-output",
        "Archivo: " + (event.filename || "desconocido") + " (línea: " + event.lineno + ", col: " + event.colno + ")",
        "info"
      );

      // Actualizar tabla/tarjeta de metadatos del ErrorEvent
      if (propMsg) propMsg.textContent = event.message || "Desconocido";
      if (propFile) {
        var nombreArchivo = event.filename ? event.filename.split("/").pop() : "inline";
        propFile.textContent = nombreArchivo;
        propFile.title = event.filename || "";
      }
      if (propLine) propLine.textContent = event.lineno || "N/A";
      if (propCol) propCol.textContent = event.colno || "N/A";
      if (propName) {
        propName.textContent = (event.error && event.error.name) ? event.error.name : "Error general";
      }
    });

    if (btnTrigger) {
      btnTrigger.addEventListener("click", function () {
        escribirEnConsola(
          "error-event-console-output",
          "Provocando error no atrapado de forma asíncrona...",
          "info"
        );

        // Usamos setTimeout para que la excepción ocurra fuera del manejador de eventos del botón
        // y viaje directamente a window.onerror sin ser absorbida.
        setTimeout(function () {
          /* eslint-disable no-undef */
          objetoInexistenteGlobalParaProbarError.metodoInvalido();
          /* eslint-enable no-undef */
        }, 50);
      });
    }

    if (btnClear) {
      btnClear.addEventListener("click", function () {
        limpiarConsola(
          "error-event-console-output",
          "[Monitor activo] Registros limpiados. Esperando disparador..."
        );
        if (propMsg) propMsg.textContent = "(ningún error capturado)";
        if (propFile) propFile.textContent = "-";
        if (propLine) propLine.textContent = "-";
        if (propCol) propCol.textContent = "-";
        if (propName) propName.textContent = "-";
      });
    }
  }

  // ==========================================================================
  // 6. SECCIÓN 5: EXCEPCIONES (TRY / CATCH / THROW - VENDIDO)
  // ==========================================================================
  function inicializarSeccionExcepciones() {
    var stockActual = 5;
    var stockDisplay = document.getElementById("stock-display");
    var inputUnits = document.getElementById("input-units-to-buy");
    var btnSale = document.getElementById("btn-execute-sale");
    var btnReset = document.getElementById("btn-reset-stock");
    var alertBox = document.getElementById("sale-alert");
    var statusSpan = document.getElementById("stock-console-status");

    function actualizarDisplayStock() {
      if (stockDisplay) {
        stockDisplay.textContent = stockActual;
        if (stockActual === 0) {
          stockDisplay.style.color = "var(--danger)";
        } else if (stockActual <= 2) {
          stockDisplay.style.color = "var(--warning)";
        } else {
          stockDisplay.style.color = "var(--success)";
        }
      }
    }

    /**
     * Función implementada según el manual (Cap. 6.6):
     * Si las unidades a vender superan el stock, lanza una excepción "Sin Existencia".
     */
    function vendido(unidades) {
      if (unidades > stockActual) {
        throw new Error("Sin Existencia");
      }
      stockActual -= unidades;
      return stockActual;
    }

    if (btnSale) {
      btnSale.addEventListener("click", function () {
        var unidades = parseInt(inputUnits.value, 10);

        if (isNaN(unidades) || unidades <= 0) {
          alertBox.className = "alert-message error";
          alertBox.textContent = "Por favor, introduce una cantidad entera mayor a 0.";
          return;
        }

        escribirEnConsola(
          "stock-console-output",
          "Intentando procesar venta de " + unidades + " unidad(es) (Stock actual: " + stockActual + ")...",
          "info"
        );

        // Bloque try...catch para capturar la excepción controlada
        try {
          var restante = vendido(unidades);

          // Si no hubo excepción, la venta concluyó
          actualizarDisplayStock();
          alertBox.className = "alert-message success";
          alertBox.textContent = "✅ ¡Venta autorizada! Se vendieron " + unidades + " unidad(es). Stock restante: " + restante + ".";

          console.log("Venta completada. Stock disponible:", restante);
          escribirEnConsola("stock-console-output", "Venta procesada con éxito. Restan: " + restante, "success");
          if (statusSpan) statusSpan.textContent = "Venta completada";
        } catch (err) {
          // Captura de la excepción "Sin Existencia"
          alertBox.className = "alert-message error";
          alertBox.textContent = "❌ Excepción atrapada: " + err.message + " (Se solicitaron " + unidades + " unidades pero solo hay " + stockActual + ").";

          console.error("Excepción en venta (Capítulo 6.6):", err.message);
          escribirEnConsola("stock-console-output", "Error capturado: " + err.message, "error");
          escribirEnConsola(
            "stock-console-output",
            "El bloque catch interceptó el throw sin interrumpir la ejecución de la página.",
            "warn"
          );
          if (statusSpan) statusSpan.textContent = "Alerta: " + err.message;
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        stockActual = 5;
        actualizarDisplayStock();
        if (alertBox) {
          alertBox.className = "alert-message";
          alertBox.style.display = "none";
          alertBox.textContent = "";
        }
        escribirEnConsola("stock-console-output", "Inventario reabastecido a 5 unidades.", "info");
        if (statusSpan) statusSpan.textContent = "Stock reiniciado (5 unidades)";
      });
    }

    actualizarDisplayStock();
  }

  // ==========================================================================
  // 7. SECCIÓN 6: EJERCICIOS PRÁCTICOS CON SANDBOX EVALUADOR
  // ==========================================================================
  function inicializarEjercicios() {
    // ------------------------------------------------------------------------
    // CÓDIGOS BOILERPLATE PARA RESTABLECER
    // ------------------------------------------------------------------------
    var boilerplateEx1 = 'function calcularTotal(precio, cantidad) {\n  // Corrige los errores en esta línea:\n  retun precio * cantdad;\n}\n\n// Invocación de prueba:\nconsole.log("Total calculado:", calcularTotal(10, 3));';

    var boilerplateEx2 = 'var suma = 0;\n\n// Corrige el límite o condición para sumar del 1 al 5:\nfor (var i = 1; i < 5; i++) {\n  suma += i;\n  console.log("Paso i =", i, "| Suma parcial =", suma);\n}\n\nconsole.log("Suma total final =", suma);';

    var boilerplateEx3 = 'function validarEdad(edad) {\n  if (typeof edad !== "number" || edad <= 0 || edad >= 120) {\n    throw new Error("Edad inválida");\n  }\n  return "Edad permitida: " + edad;\n}\n\ntry {\n  console.log(validarEdad(25));   // Caso válido\n  console.log(validarEdad(-5));   // Debe lanzar excepción\n} catch (error) {\n  console.log("Excepción capturada:", error.message);\n}';

    var boilerplateEx4 = '// Registra el listener global para capturar errores:\nwindow.addEventListener("error", function(event) {\n  console.log("Error global interceptado:", event.message);\n});\n\n// Prueba provocando un fallo no controlado:\nsetTimeout(function() {\n  variableInexistenteDePrueba.activar();\n}, 50);';

    // ------------------------------------------------------------------------
    // UTILIDAD SANDBOX: EVALUADOR SEGURO DE CÓDIGO CON INTERCEPTOR DE CONSOLA
    // ------------------------------------------------------------------------
    function ejecutarEnSandbox(codigo, consoleOutputId) {
      limpiarConsola(consoleOutputId);
      var logs = [];

      var fakeConsole = {
        log: function () {
          var args = Array.prototype.slice.call(arguments);
          var mensaje = args.map(function (arg) {
            return typeof arg === "object" ? JSON.stringify(arg) : String(arg);
          }).join(" ");
          logs.push({ tipo: "log", mensaje: mensaje });
          escribirEnConsola(consoleOutputId, mensaje, "log");
        },
        error: function () {
          var args = Array.prototype.slice.call(arguments);
          var mensaje = args.map(function (arg) {
            return typeof arg === "object" ? JSON.stringify(arg) : String(arg);
          }).join(" ");
          logs.push({ tipo: "error", mensaje: mensaje });
          escribirEnConsola(consoleOutputId, "❌ " + mensaje, "error");
        },
        warn: function () {
          var args = Array.prototype.slice.call(arguments);
          var mensaje = args.map(function (arg) {
            return typeof arg === "object" ? JSON.stringify(arg) : String(arg);
          }).join(" ");
          logs.push({ tipo: "warn", mensaje: mensaje });
          escribirEnConsola(consoleOutputId, "⚠️ " + mensaje, "warn");
        },
        assert: function (afirmacion) {
          var args = Array.prototype.slice.call(arguments, 1);
          if (!afirmacion) {
            var mensaje = args.join(" ") || "Assertion failed";
            logs.push({ tipo: "error", mensaje: mensaje });
            escribirEnConsola(consoleOutputId, "Assertion failed: " + mensaje, "error");
          }
        }
      };

      try {
        // Envolver el código del alumno pasando la consola simulada
        /* eslint-disable no-new-func */
        var funcionEvaluada = new Function("console", codigo);
        /* eslint-enable no-new-func */
        var resultado = funcionEvaluada(fakeConsole);
        return { exito: true, resultado: resultado, logs: logs };
      } catch (err) {
        escribirEnConsola(consoleOutputId, "🚨 Error en ejecución: " + err.name + " - " + err.message, "error");
        return { exito: false, error: err, logs: logs };
      }
    }

    function mostrarFeedback(feedbackId, statusId, superado, mensaje) {
      var fb = document.getElementById(feedbackId);
      var st = document.getElementById(statusId);

      if (fb) {
        fb.style.display = "block";
        fb.style.background = superado ? "var(--success-bg)" : "var(--danger-bg)";
        fb.style.border = superado ? "1px solid var(--success)" : "1px solid var(--danger)";
        fb.style.color = superado ? "#86efac" : "#fca5a5";
        fb.textContent = mensaje;
      }

      if (st) {
        if (superado) {
          st.className = "exercise-status passed";
          st.textContent = "Completado ✓";
        } else {
          st.className = "exercise-status";
          st.textContent = "Requiere Revisión";
        }
      }
    }

    // ------------------------------------------------------------------------
    // EJERCICIO 1: Corregir función mal escrita
    // ------------------------------------------------------------------------
    var btnEx1Run = document.getElementById("btn-ex1-run");
    var btnEx1Reset = document.getElementById("btn-ex1-reset");
    var ex1Code = document.getElementById("ex1-code");

    if (btnEx1Run && ex1Code) {
      btnEx1Run.addEventListener("click", function () {
        var codigo = ex1Code.value;
        var runResult = ejecutarEnSandbox(codigo, "ex1-console");

        if (!runResult.exito) {
          mostrarFeedback(
            "ex1-feedback",
            "ex1-status",
            false,
            "El código arrojó un error: " + runResult.error.message + ". Verifica 'return' y el nombre de la variable 'cantidad'."
          );
          return;
        }

        // Probar la función de manera independiente con varios casos de prueba
        try {
          /* eslint-disable no-new-func */
          var testFn = new Function(codigo + "\nreturn calcularTotal;");
          var calcularTotal = testFn();
          /* eslint-enable no-new-func */

          if (typeof calcularTotal !== "function") {
            mostrarFeedback("ex1-feedback", "ex1-status", false, "No se encontró la función 'calcularTotal' declarada.");
            return;
          }

          var r1 = calcularTotal(10, 3);
          var r2 = calcularTotal(5, 4);

          if (r1 === 30 && r2 === 20) {
            mostrarFeedback(
              "ex1-feedback",
              "ex1-status",
              true,
              "¡Excelente trabajo! Has resuelto el SyntaxError ('retun' -> 'return') y el ReferenceError ('cantdad' -> 'cantidad'). calcularTotal(10, 3) = 30."
            );
          } else {
            mostrarFeedback(
              "ex1-feedback",
              "ex1-status",
              false,
              "La función no devolvió el producto esperado. Con 10 y 3 dio " + r1 + " (esperado 30)."
            );
          }
        } catch (e) {
          mostrarFeedback("ex1-feedback", "ex1-status", false, "Error durante la validación: " + e.message);
        }
      });
    }

    if (btnEx1Reset && ex1Code) {
      btnEx1Reset.addEventListener("click", function () {
        ex1Code.value = boilerplateEx1;
        limpiarConsola("ex1-console", "Código restablecido. Pulsa 'Ejecutar y Validar'.");
        var fb = document.getElementById("ex1-feedback");
        var st = document.getElementById("ex1-status");
        if (fb) fb.style.display = "none";
        if (st) {
          st.className = "exercise-status";
          st.textContent = "Pendiente";
        }
      });
    }

    // ------------------------------------------------------------------------
    // EJERCICIO 2: Depurar bucle con console.log (1 a 5 = 15)
    // ------------------------------------------------------------------------
    var btnEx2Run = document.getElementById("btn-ex2-run");
    var btnEx2Reset = document.getElementById("btn-ex2-reset");
    var ex2Code = document.getElementById("ex2-code");

    if (btnEx2Run && ex2Code) {
      btnEx2Run.addEventListener("click", function () {
        var codigo = ex2Code.value;
        var runResult = ejecutarEnSandbox(codigo, "ex2-console");

        if (!runResult.exito) {
          mostrarFeedback(
            "ex2-feedback",
            "ex2-status",
            false,
            "Error al ejecutar: " + runResult.error.message
          );
          return;
        }

        try {
          /* eslint-disable no-new-func */
          var testFn = new Function(codigo + "\nreturn suma;");
          var sumaFinal = testFn();
          /* eslint-enable no-new-func */

          if (sumaFinal === 15) {
            mostrarFeedback(
              "ex2-feedback",
              "ex2-status",
              true,
              "¡Perfecto! El bucle ahora incluye el número 5 (utilizando i <= 5 o similar), logrando que 1+2+3+4+5 sume exactamente 15."
            );
          } else {
            mostrarFeedback(
              "ex2-feedback",
              "ex2-status",
              false,
              "La suma total obtenida es " + sumaFinal + " (se esperaba 15). Revisa la condición del bucle for: para incluir el 5 usa 'i <= 5'."
            );
          }
        } catch (e) {
          mostrarFeedback("ex2-feedback", "ex2-status", false, "Error al comprobar variable suma: " + e.message);
        }
      });
    }

    if (btnEx2Reset && ex2Code) {
      btnEx2Reset.addEventListener("click", function () {
        ex2Code.value = boilerplateEx2;
        limpiarConsola("ex2-console", "Código restablecido. Pulsa 'Ejecutar y Validar'.");
        var fb = document.getElementById("ex2-feedback");
        var st = document.getElementById("ex2-status");
        if (fb) fb.style.display = "none";
        if (st) {
          st.className = "exercise-status";
          st.textContent = "Pendiente";
        }
      });
    }

    // ------------------------------------------------------------------------
    // EJERCICIO 3: Validar rango de edad con try/catch (0 < edad < 120)
    // ------------------------------------------------------------------------
    var btnEx3Run = document.getElementById("btn-ex3-run");
    var btnEx3Reset = document.getElementById("btn-ex3-reset");
    var ex3Code = document.getElementById("ex3-code");

    if (btnEx3Run && ex3Code) {
      btnEx3Run.addEventListener("click", function () {
        var codigo = ex3Code.value;
        var runResult = ejecutarEnSandbox(codigo, "ex3-console");

        if (!runResult.exito) {
          mostrarFeedback(
            "ex3-feedback",
            "ex3-status",
            false,
            "Error al ejecutar: " + runResult.error.message
          );
          return;
        }

        try {
          /* eslint-disable no-new-func */
          var testFn = new Function(codigo + "\nreturn validarEdad;");
          var validarEdad = testFn();
          /* eslint-enable no-new-func */

          if (typeof validarEdad !== "function") {
            mostrarFeedback("ex3-feedback", "ex3-status", false, "No se encontró la función 'validarEdad'.");
            return;
          }

          var passedNormal = false;
          var threwNegative = false;
          var threwExceed = false;

          try {
            var res = validarEdad(25);
            if (res) passedNormal = true;
          } catch (e1) {
            passedNormal = false;
          }

          try {
            validarEdad(-5);
          } catch (e2) {
            if (e2.message && e2.message.indexOf("Edad inválida") !== -1) {
              threwNegative = true;
            }
          }

          try {
            validarEdad(125);
          } catch (e3) {
            if (e3.message && e3.message.indexOf("Edad inválida") !== -1) {
              threwExceed = true;
            }
          }

          if (passedNormal && threwNegative && threwExceed) {
            mostrarFeedback(
              "ex3-feedback",
              "ex3-status",
              true,
              "¡Magnífico! La función protege el rango 0 < edad < 120 arrojando throw new Error('Edad inválida') ante datos fuera de rango."
            );
          } else {
            mostrarFeedback(
              "ex3-feedback",
              "ex3-status",
              false,
              "Comprobaciones fallidas: asegúrate de que validarEdad(25) funcione sin fallar y que valores <= 0 o >= 120 lancen 'Edad inválida'."
            );
          }
        } catch (e) {
          mostrarFeedback("ex3-feedback", "ex3-status", false, "Error en validación: " + e.message);
        }
      });
    }

    if (btnEx3Reset && ex3Code) {
      btnEx3Reset.addEventListener("click", function () {
        ex3Code.value = boilerplateEx3;
        limpiarConsola("ex3-console", "Código restablecido. Pulsa 'Ejecutar y Validar'.");
        var fb = document.getElementById("ex3-feedback");
        var st = document.getElementById("ex3-status");
        if (fb) fb.style.display = "none";
        if (st) {
          st.className = "exercise-status";
          st.textContent = "Pendiente";
        }
      });
    }

    // ------------------------------------------------------------------------
    // EJERCICIO 4: Capturar evento global de error
    // ------------------------------------------------------------------------
    var btnEx4Run = document.getElementById("btn-ex4-run");
    var btnEx4Reset = document.getElementById("btn-ex4-reset");
    var ex4Code = document.getElementById("ex4-code");

    if (btnEx4Run && ex4Code) {
      btnEx4Run.addEventListener("click", function () {
        var codigo = ex4Code.value;
        var runResult = ejecutarEnSandbox(codigo, "ex4-console");

        if (!runResult.exito) {
          mostrarFeedback(
            "ex4-feedback",
            "ex4-status",
            false,
            "Error al ejecutar: " + runResult.error.message
          );
          return;
        }

        var tieneEventListener = codigo.indexOf("addEventListener") !== -1;
        var escuchaError = codigo.indexOf('"error"') !== -1 || codigo.indexOf("'error'") !== -1;
        var leeMessage = codigo.indexOf("message") !== -1;

        if (tieneEventListener && escuchaError && leeMessage) {
          mostrarFeedback(
            "ex4-feedback",
            "ex4-status",
            true,
            "¡Excelente! Has registrado window.addEventListener('error', ...) y accedido a event.message para capturar el error no controlado."
          );
        } else {
          mostrarFeedback(
            "ex4-feedback",
            "ex4-status",
            false,
            "Verifica que estés registrando 'window.addEventListener(\"error\", ...)' e imprimiendo 'event.message'."
          );
        }
      });
    }

    if (btnEx4Reset && ex4Code) {
      btnEx4Reset.addEventListener("click", function () {
        ex4Code.value = boilerplateEx4;
        limpiarConsola("ex4-console", "Código restablecido. Pulsa 'Ejecutar y Validar'.");
        var fb = document.getElementById("ex4-feedback");
        var st = document.getElementById("ex4-status");
        if (fb) fb.style.display = "none";
        if (st) {
          st.className = "exercise-status";
          st.textContent = "Pendiente";
        }
      });
    }
  }

  // ==========================================================================
  // INICIALIZACIÓN GENERAL CUANDO EL DOM ESTÉ LISTO
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    inicializarNavegacion();
    inicializarSeccionIntro();
    inicializarSeccionConsolaNavegador();
    inicializarSeccionObjetoConsole();
    inicializarSeccionEventoError();
    inicializarSeccionExcepciones();
    inicializarEjercicios();
  });
})();
