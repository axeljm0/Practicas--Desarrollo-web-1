// ==========================================
// 10 - FUNCIONES ANÓNIMAS
// Timestamp: [32:28] Funciones anonimas
// ==========================================

console.log("--- 10: FUNCIONES ANÓNIMAS ---");

// 1. Una función anónima es una función que no tiene nombre asignado tras la palabra 'function'.
// Frecuentemente se asignan a una constante (Function Expression):
const saludarAnonimo = function () {
  return "Hola desde una función anónima guardada en variable";
};

console.log(saludarAnonimo());

// 2. Funciones anónimas como Callbacks (funciones que se pasan como argumento a otra función)
function ejecutarOperacion(a, b, operacionCallback) {
  return operacionCallback(a, b);
}

// Pasamos la función anónima directamente en el argumento:
const resultado = ejecutarOperacion(10, 5, function (x, y) {
  return x * y;
});

console.log("Resultado de callback anónimo:", resultado);

// 3. Funciones anónimas en temporizadores y eventos de JavaScript
setTimeout(function () {
  console.log("⏰ Este mensaje se ejecuta tras un temporizador de 100ms usando función anónima.");
}, 100);

// 4. Conexión con React:
// En React, las funciones anónimas son muy utilizadas para manejar eventos como clics,
// cambios de texto en inputs o envíos de formulario:
// <button onClick={function() { alert("Clickeado!"); }}>Click</button>
function simularBotonReact(onClickHandler) {
  console.log("Simulando clic de usuario...");
  onClickHandler();
}

simularBotonReact(function () {
  console.log("Manejador de evento ejecutado con éxito.");
});
