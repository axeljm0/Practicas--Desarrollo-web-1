# 17 - Async / Await (Vanilla JS)

## 📌 Timestamp: [01:11:31](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=4291s)

JavaScript es un lenguaje de un solo hilo (*single thread*), lo que significa que solo puede ejecutar una cosa a la vez. Para no bloquear la interfaz mientras espera respuestas lentas (como una petición de red), utiliza operaciones **asíncronas**.

### Evolución de la asincronía:
1. **Callbacks**: Generaban el famoso *Callback Hell* (código anidado en forma de pirámide).
2. **Promesas (`.then()` / `.catch()`)**: Mejoraron la legibilidad pero aún requerían encadenamiento.
3. **`async / await` (ES2017)**: Azúcar sintáctico sobre las promesas que permite escribir código asíncrono como si fuera síncrono.

### Estructura típica:
```javascript
async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://api.ejemplo.com/usuarios");
    const usuarios = await respuesta.json();
    return usuarios;
  } catch (error) {
    console.error("Hubo un error al obtener usuarios:", error);
  }
}
```

---

## ⚛️ Conexión con React
En React, las llamadas a APIs suelen realizarse dentro del hook `useEffect` o con librerías como TanStack Query (React Query) o SWR.

El patrón más habitual con hooks es:
```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```
