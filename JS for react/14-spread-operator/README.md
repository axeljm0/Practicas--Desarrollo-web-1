# 14 - Spread Operator (...)

## 📌 Timestamp: [59:07](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=3547s)

El operador de propagación (**Spread Operator**) representado por tres puntos (`...`) permite "esparcir" o expandir los elementos de un array o las propiedades de un objeto dentro de otro.

### Casos de uso:
1. **Copiar o clonar arrays/objetos** (copia superficial / shallow copy).
2. **Combinar múltiples fuentes de datos** en una nueva referencia.
3. **Sobrescribir propiedades específicas** manteniendo el resto.

---

## ⚛️ Conexión con React: La regla de la Inmutabilidad
En React, si modificas un objeto existente directamente (`user.name = "Nuevo"`), la referencia en memoria no cambia, por lo que React no detecta que deba re-renderizar la interfaz.

El **Spread Operator** es la herramienta estándar para actualizar estados:

```jsx
// En React con useState:
const [user, setUser] = useState({ name: "Ana", age: 20 });

// Forma correcta (inmutable con spread):
setUser(prevUser => ({
  ...prevUser,
  age: 21 // Solo actualiza la edad manteniendo el resto
}));
```

También es muy común para pasar propiedades restantes (*rest props*) a elementos nativos:
```jsx
function CustomButton({ label, ...restProps }) {
  return <button {...restProps}>{label}</button>;
}
```
