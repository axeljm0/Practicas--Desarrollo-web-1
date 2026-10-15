"use strict";

var formularioValidacion = document.getElementById("formularioValidacion");
var inputEdad = document.getElementById("inputEdad");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var contenedorResultados = document.getElementById("contenedorResultados");

var btnTestValido = document.getElementById("btnTestValido");
var btnTestMenorEdad = document.getElementById("btnTestMenorEdad");
var btnTestEmailInvalido = document.getElementById("btnTestEmailInvalido");
var btnTestPasswordCorta = document.getElementById("btnTestPasswordCorta");

function validarEdad(edad) {
  var texto = String(edad).trim();

  if (texto === "") {
    throw new Error("El campo 'Edad' es obligatorio y no puede estar vacío.");
  }

  var numero = parseInt(texto, 10);

  if (isNaN(numero)) {
    throw new Error("La edad ingresada no es un número entero válido.");
  }

  if (numero < 0) {
    throw new Error("La edad no puede ser un número negativo (" + numero + ").");
  }

  if (numero < 18) {
    throw new Error("Acceso restringido: Debes tener al menos 18 años para registrarte (Edad ingresada: " + numero + ").");
  }

  if (numero > 120) {
    throw new Error("La edad ingresada supera el límite biológico razonable (máximo 120 años).");
  }

  return numero;
}

function validarEmail(email) {
  var texto = String(email).trim();

  if (texto === "") {
    throw new Error("El campo 'Correo electrónico' es obligatorio.");
  }

  var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!patronEmail.test(texto)) {
    throw new Error("El formato del correo '" + texto + "' es inválido (ejemplo correcto: nombre@servidor.com).");
  }

  return texto.toLowerCase();
}

function validarPassword(password) {
  var texto = String(password);

  if (texto.length < 8) {
    throw new Error("La contraseña debe contener al menos 8 caracteres (actualmente tiene " + texto.length + ").");
  }

  var tieneNumero = /[0-9]/.test(texto);
  if (!tieneNumero) {
    throw new Error("La contraseña debe incluir al menos un número (0-9).");
  }

  var tieneMayuscula = /[A-Z]/.test(texto);
  if (!tieneMayuscula) {
    throw new Error("La contraseña debe incluir al menos una letra mayúscula (A-Z).");
  }

  return true;
}

function procesarFormulario() {
  contenedorResultados.innerHTML = "";

  var erroresEncontrados = [];
  var edadFinal;
  var emailFinal;

  console.log("=== INICIANDO VALIDACIÓN CON TRY / CATCH ===");

  try {
    edadFinal = validarEdad(inputEdad.value);
    mostrarResultado(true, "Edad aprobada: " + edadFinal + " años (Mayor de edad).");
  } catch (errorEdad) {
    erroresEncontrados.push(errorEdad.message);
    mostrarResultado(false, "Fallo en Edad: " + errorEdad.message);
    console.warn("[Excepción capturada en Edad]:", errorEdad.message);
  }

  try {
    emailFinal = validarEmail(inputEmail.value);
    mostrarResultado(true, "Correo electrónico validado: " + emailFinal);
  } catch (errorEmail) {
    erroresEncontrados.push(errorEmail.message);
    mostrarResultado(false, "Fallo en Email: " + errorEmail.message);
    console.warn("[Excepción capturada en Email]:", errorEmail.message);
  }

  try {
    validarPassword(inputPassword.value);
    mostrarResultado(true, "Contraseña segura: Cumple con longitud, números y mayúsculas.");
  } catch (errorPass) {
    erroresEncontrados.push(errorPass.message);
    mostrarResultado(false, "Fallo en Contraseña: " + errorPass.message);
    console.warn("[Excepción capturada en Password]:", errorPass.message);
  }

  if (erroresEncontrados.length === 0) {
    console.log("✔ Todos los campos fueron validados exitosamente sin excepciones.");
  } else {
    console.error("❌ Se capturaron " + erroresEncontrados.length + " excepciones en total.");
  }
}

function mostrarResultado(esValido, mensaje) {
  var tarjeta = document.createElement("div");
  tarjeta.className = "status-card " + (esValido ? "success" : "error");
  tarjeta.innerHTML = (esValido ? "✔ " : "✖ ") + mensaje;
  contenedorResultados.appendChild(tarjeta);
}

formularioValidacion.addEventListener("submit", function (evento) {
  evento.preventDefault();
  procesarFormulario();
});

btnTestValido.addEventListener("click", function () {
  inputEdad.value = "28";
  inputEmail.value = "ana.garcia@empresa.com";
  inputPassword.value = "Segura2026";
  procesarFormulario();
});

btnTestMenorEdad.addEventListener("click", function () {
  inputEdad.value = "15";
  inputEmail.value = "estudiante@colegio.edu";
  inputPassword.value = "Password99";
  procesarFormulario();
});

btnTestEmailInvalido.addEventListener("click", function () {
  inputEdad.value = "22";
  inputEmail.value = "correoSinArrobaNiPunto";
  inputPassword.value = "ClaveValida1";
  procesarFormulario();
});

btnTestPasswordCorta.addEventListener("click", function () {
  inputEdad.value = "30";
  inputEmail.value = "carlos@web.com";
  inputPassword.value = "123";
  procesarFormulario();
});

procesarFormulario();
