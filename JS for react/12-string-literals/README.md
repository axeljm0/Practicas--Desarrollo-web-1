# 12 - String Literals (Template Strings)

## 📌 Timestamp: [43:56](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2636s)

Los **Template Literals** (o plantillas de cadenas) se delimitan con tildes invertidas o comillas graves (`` ` ``) en lugar de comillas simples o dobles.

### Ventajas principales:
1. **Interpolación de expresiones**: `${expresion}` evalúa cualquier código de JavaScript válido dentro de la cadena.
2. **Cadenas multilínea**: Permiten saltos de línea literales sin necesidad de caracteres de escape como `\n`.
3. **Legibilidad**: Elimina la acumulación de operadores `+` y comillas escapadas.

---

## ⚛️ Conexión con React
En React los usamos principalmente para:
1. **Generación de clases dinámicas (CSS)**:
   ```jsx
   <button className={`btn btn-${variant} ${isSelected ? "selected" : ""}`}>
   ```
2. **Construcción de rutas y endpoints**:
   ```javascript
   const res = await fetch(`${API_URL}/products/${productId}`);
   ```
3. **Librerías de CSS-in-JS (como Styled Components)**:
   ```jsx
   const Button = styled.button`
     background-color: ${props => props.primary ? "blue" : "gray"};
   `;
   ```
