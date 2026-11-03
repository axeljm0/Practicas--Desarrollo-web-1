# 03 - Parámetros y Parámetros por Defecto

## 📌 Timestamps
- **[07:44](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=464s) Parámetros de Funciones**
- **[09:59](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=599s) Parámetros por defecto**

Los parámetros permiten que una función reciba datos del exterior para cambiar su comportamiento dinámicamente.

Si una función espera un parámetro y no se le envía ningún argumento durante la llamada, su valor por defecto en JavaScript es `undefined`.

### Parámetros por defecto (ES6):
Permiten definir un valor de respaldo si el argumento no es enviado o llega como `undefined`:

```javascript
function saludar(nombre = "Desconocido") {
  return `Hola, ${nombre}`;
}

saludar(); // "Hola, Desconocido"
saludar("María"); // "Hola, María"
```

---

## ⚛️ Conexión con React
En React, los componentes reciben información a través de `props`. Muchas veces un componente necesita renderizar un valor por defecto si la propiedad no fue provista:

```jsx
// En React con parámetros por defecto:
function Avatar({ size = 50, url = "/default-avatar.png" }) {
  return <img src={url} width={size} height={size} alt="Avatar" />;
}
```
