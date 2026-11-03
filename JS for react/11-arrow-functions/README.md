# 11 - Arrow Functions e Inline Arrow Functions

## 📌 Timestamps
- **[35:21](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2121s) Arrow functions**
- **[37:11](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2231s) Inline arrow functions**

Las **funciones flecha** (*arrow functions*) introducidas en ES6 ofrecen una sintaxis más corta y limpia:

### Formas sintácticas:
1. **Estándar**:
   ```javascript
   const fn = (a, b) => { return a + b; };
   ```
2. **Inline con retorno implícito**:
   ```javascript
   const fn = (a, b) => a + b;
   ```
3. **Retorno implícito de objetos** (usando paréntesis `({ ... })`):
   ```javascript
   const getUser = name => ({ name, authenticated: true });
   ```

---

## ⚛️ Conexión con React
En React las funciones flecha son indispensables:
1. **Definición de componentes**:
   ```jsx
   export const Navbar = () => <nav>Menu</nav>;
   ```
2. **Inline handlers con parámetros**:
   ```jsx
   // Evita que la función se ejecute al renderizar y pasa el argumento al hacer click:
   <button onClick={() => handleDelete(item.id)}>Eliminar</button>
   ```
3. **En Hooks (`useEffect`, `useMemo`, `useCallback`)**:
   ```jsx
   useEffect(() => {
     console.log("Componente montado");
   }, []);
   ```
