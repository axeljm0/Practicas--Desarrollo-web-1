# 02 - Funciones de JavaScript

## 📌 Timestamp: [03:41](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=221s)

Las funciones son bloques de código reutilizables diseñados para realizar tareas específicas. Se declaran con la palabra clave `function` seguida de un nombre, paréntesis `()` y llaves `{}`.

### Sintaxis básica:
```javascript
function saludar() {
  return "Hola mundo";
}

// Invocación
saludar();
```

---

## ⚛️ Conexión con React
En el React moderno, la unidad básica de interfaz es el **Componente Funcional** (*Functional Component*). Un componente de React es exactamente una función de JavaScript que retorna lo que debe dibujarse en pantalla:

```jsx
// En React:
function Header() {
  return <h1>Bienvenido a mi sitio web</h1>;
}
```
Si entiendes cómo declarar, invocar y organizar funciones en JavaScript puro, ya entiendes la base de los componentes de React.
