# 08 - Objetos como Parámetros

## 📌 Timestamp: [27:06](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1626s)

Cuando una función requiere más de 2 o 3 datos, pasar parámetros posicionales separados (`fn(a, b, c, d)`) provoca:
1. Confusión en el orden de los argumentos.
2. Dificultad para omitir parámetros intermedios o hacerlos opcionales.

**La solución estándar en JavaScript** es agrupar los datos en un solo objeto literal:
```javascript
function configurarPerfil(opciones) {
  console.log(opciones.tema);
  console.log(opciones.notificaciones);
}

configurarPerfil({ notificaciones: true, tema: "oscuro" });
```

---

## ⚛️ Conexión con React: Las "Props"
En React, las propiedades (**props**) que le pasas a cualquier componente se empaquetan en un único objeto de JavaScript:

```jsx
// Cuando en React escribes:
<ProductCard title="Monitor 4K" price={300} inStock={true} />

// React internamente invoca la función así:
ProductCard({ title: "Monitor 4K", price: 300, inStock: true });
```
Por lo tanto, `props` no es magia ni sintaxis especial de React; es simplemente un objeto de JavaScript pasado como parámetro a una función.
