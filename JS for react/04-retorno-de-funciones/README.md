# 04 - Retorno de Funciones (return)

## 📌 Timestamp: [40:30](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2636s)

La palabra clave `return`:
1. Detiene inmediatamente la ejecución de la función.
2. Devuelve un valor al punto donde la función fue llamada.
3. Si se omite o se coloca sin valor, la función devuelve `undefined`.

---

## 💡 El patrón "Early Return" (Retorno temprano)
En lugar de anidar múltiples bloques `if / else`, se evalúan primero las condiciones de error o salida rápida:

```javascript
function procesarPago(usuario) {
  if (!usuario.tieneTarjeta) return "Error: Sin método de pago";
  if (usuario.saldoInsuficiente) return "Error: Saldo insuficiente";

  // Lógica principal
  return "Pago procesado exitosamente";
}
```

---

## ⚛️ Conexión con React
En React, los componentes utilizan **Early Return** para el renderizado condicional (*Conditional Rendering*):

```jsx
// En React:
function UserProfile({ user, isLoading, error }) {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage text={error} />;
  if (!user) return <p>Usuario no encontrado</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```
