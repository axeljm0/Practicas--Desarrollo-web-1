# 05 - Objetos de JavaScript

## 📌 Timestamp: [12:32](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=752s)

Un objeto es una colección de pares clave-valor (*key-value pairs*). Es una de las estructuras de datos más importantes y usadas en JavaScript.

### Formas de acceso:
1. **Notación de punto (`objeto.propiedad`)**: La más común y recomendada cuando se conoce el nombre de la propiedad.
2. **Notación de corchetes (`objeto["propiedad"]`)**: Permite acceder con nombres calculados o variables dinámicas:
   ```javascript
   const campo = "email";
   console.log(usuario[campo]);
   ```

---

## ⚛️ Conexión con React
En React, los objetos son omnipresentes:
- **Estilos en línea (`style={{ color: "red" }}`)**: Se pasan como objetos literales.
- **Estado compuesto**: `const [formData, setFormData] = useState({ email: "", password: "" });`
- **Manejo de inputs dinámicos**:
  ```javascript
  // Al escribir en un formulario en React:
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // ¡Notación de corchetes para campos dinámicos!
    });
  };
  ```
