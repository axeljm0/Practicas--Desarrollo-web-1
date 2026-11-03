# 16 - Optional Chaining (?.)

## 📌 Timestamp: [01:08:23](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=4103s)

El operador de encadenamiento opcional (**Optional Chaining**) `?.` permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que verificar expresamente que cada referencia en la cadena sea válida.

Si el elemento evaluado es `null` o `undefined`, la evaluación se detiene de forma de cortocircuito (*short-circuit*) y devuelve `undefined` en vez de arrojar una excepción `TypeError`.

### Sintaxis:
```javascript
// Propiedades de objetos:
objeto?.propiedad?.subpropiedad

// Acceso por corchetes o arrays:
array?.[indice]

// Invocación segura de funciones o métodos:
objeto.metodoOpcional?.()
```

---

## ⚛️ Conexión con React
En aplicaciones React es extremadamente común consultar datos asíncronos (APIs). Mientras los datos no han llegado del servidor, el estado suele ser `null` o `{}`.

Sin `?.`, la aplicación se rompería con la pantalla en blanco:
```jsx
// Sin optional chaining (se rompe si user es null):
<h1>{user.address.street}</h1>

// Con optional chaining (renderiza de forma segura):
<h1>{user?.address?.street}</h1>
```
Combinado con el operador Nullish Coalescing (`??`) o el operador lógico OR (`||`), proporciona fallbacks muy elegantes:
```jsx
<span>{user?.name ?? "Invitado"}</span>
```
