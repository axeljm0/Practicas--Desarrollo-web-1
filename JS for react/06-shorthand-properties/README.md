# 06 - Shorthand Property Names

## 📌 Timestamp: [17:31](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1051s)

En ECMAScript 6 (ES6), si el identificador de una variable tiene el mismo nombre que la propiedad del objeto que deseas crear, puedes omitir la repetición del valor:

```javascript
const nombre = "Carlos";
const edad = 20;

// Antes:
const user = { nombre: nombre, edad: edad };

// Con Shorthand:
const user = { nombre, edad };
```

---

## ⚛️ Conexión con React
En React verás esta sintaxis a diario:
1. **React Context Provider**:
   ```jsx
   <AuthContext.Provider value={{ user, login, logout }}>
   ```
2. **Creación de objetos para peticiones fetch**:
   ```javascript
   const body = JSON.stringify({ email, password });
   ```
3. **Manejo de estado**:
   ```javascript
   setUser(prevUser => ({ ...prevUser, token }));
   ```
