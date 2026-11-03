# 09 - Destructuring de Objetos

## 📌 Timestamp: [30:20](https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1820s)

La **desestructuración** (*destructuring*) es una característica de ES6 que permite extraer valores de objetos o arrays y asignarlos a variables individuales de forma limpia y concisa.

### Características clave:
1. **Extracción directa**:
   ```javascript
   const { titulo, precio } = producto;
   ```
2. **Renombrado**:
   ```javascript
   const { id: idProducto } = producto;
   ```
3. **Valores por defecto**:
   ```javascript
   const { descuento = 0 } = producto;
   ```

---

## ⚛️ Conexión con React
En React verás desestructuración en casi cada línea de código:

1. **En las Props de componentes**:
   ```jsx
   // En vez de:
   function Card(props) {
     return <h2>{props.title}</h2>;
   }

   // Se utiliza comúnmente:
   function Card({ title, subtitle, isAvailable = true }) {
     return <h2>{title}</h2>;
   }
   ```

2. **En los Hooks de React**:
   ```jsx
   // Desestructuración de arrays en useState:
   const [count, setCount] = useState(0);

   // Desestructuración de objetos en hooks personalizados o librerías:
   const { data, loading, error } = useFetch("/api/users");
   ```
