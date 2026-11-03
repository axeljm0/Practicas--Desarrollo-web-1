# 13 - Métodos de Arrays (map, filter, forEach, concat)

## 📌 Timestamp: [49:50](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2990s)

En React la **inmutabilidad** es obligatoria: nunca debes modificar directamente un array u objeto del estado (`state.push(...)` está prohibido porque React no detecta la mutación y no re-renderiza).

Por eso, los métodos que devuelven un nuevo array son la base del desarrollo en React.

| Método | ¿Muta el original? | ¿Qué retorna? | Uso común en React |
|--------|---------------------|---------------|-------------------|
| `forEach()` | No | `undefined` | Efectos secundarios simples o depuración. |
| `map()` | No | **Nuevo Array** | Renderizar listas de elementos en JSX. |
| `filter()` | No | **Nuevo Array** | Eliminar elementos del estado o buscadores en tiempo real. |
| `concat()` | No | **Nuevo Array** | Agregar elementos sin mutar (también se suele usar `...spread`). |

---

## ⚛️ Conexión con React: Renderizado de Listas
En JSX, renderizar una lista de datos es simplemente invocar `.map()`:

```jsx
function ProductList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

Y para eliminar un elemento del estado:
```javascript
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};
```
