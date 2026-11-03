# 10 - Funciones Anónimas

## 📌 Timestamp: [32:28](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1948s)

Una función anónima es una función que no tiene un identificador de nombre:

```javascript
// Expresión de función anónima asignada a una variable:
const sumar = function(a, b) {
  return a + b;
};
```

Son fundamentales en JavaScript porque el lenguaje trata a las funciones como ciudadanos de primera clase (*first-class citizens*), permitiendo pasarlas como argumentos a otras funciones (**callbacks**).

---

## ⚛️ Conexión con React
En React tradicional se usaban funciones anónimas para conectar eventos de UI:

```jsx
// En React:
<button onClick={function() {
  console.log("Botón presionado");
}}>
  Presionar
</button>
```

Aunque hoy en día la mayoría de las funciones anónimas se escriben utilizando la sintaxis moderna de **Arrow Functions**, entender su naturaleza anónima y su rol como callbacks es esencial para React.
