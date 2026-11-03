# ⚛️ Fundamentos de React - Desarrollo Web 1

Bienvenido a la suite educativa interactiva de **Fundamentos de React**, desarrollada con un enfoque pedagógico progresivo, moderno y riguroso. Este proyecto está diseñado para estudiantes y desarrolladores que dan el salto de JavaScript Vanilla a la creación de aplicaciones web escalables con componentes, estado reactivo, hooks y buenas prácticas profesionales.

---

## 🚀 Inicio Rápido

Para ejecutar la plataforma didáctica interactiva en tu entorno local:

```bash
# 1. Acceder al directorio
cd "React fundamentals"

# 2. Instalar dependencias (React 18, Vite, Lucide Icons)
npm install

# 3. Iniciar el servidor de desarrollo en tiempo real
npm run dev
```

Abre tu navegador en `http://localhost:3000` (o el puerto indicado por Vite en la terminal).

### Comandos Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con recarga ultrarrápida (HMR). |
| `npm run build` | Compila y optimiza la aplicación para producción en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |

---

## 📋 Tabla Resumen de Módulos Didácticos

Cada módulo incluye **teoría profunda**, **demostración interactiva en vivo**, **código fuente documentado** y un **desafío práctico**:

| # | Módulo Didáctico | Dificultad | Conceptos Clave | Ubicación del Código |
|---|---|:---:|---|---|
| **01** | **JSX y Elementos** | Principiante | Sintaxis JSX, expresiones embebidas `{ }`, fragmentos `<>`, `className`, estilos inline con objetos JS. | [`src/components/modules/01_JSX.jsx`](./src/components/modules/01_JSX.jsx) |
| **02** | **Componentes y Props** | Principiante | Componentes funcionales, paso de propiedades, desestructuración, valores por defecto, prop especial `children`, comunicación hijo $\rightarrow$ padre mediante callbacks. | [`src/components/modules/02_Props.jsx`](./src/components/modules/02_Props.jsx) |
| **03** | **Estado con useState** | Principiante | Reactividad, memoria del componente, principio sagrado de inmutabilidad, batching de estados, actualizaciones funcionales `prev => prev + 1`. | [`src/components/modules/03_State.jsx`](./src/components/modules/03_State.jsx) |
| **04** | **Manejo de Eventos** | Principiante | Eventos sintéticos (`SyntheticEvent`), `onClick`, `onChange`, `onKeyDown`, `e.preventDefault()`, paso de parámetros con funciones flecha. | [`src/components/modules/04_Events.jsx`](./src/components/modules/04_Events.jsx) |
| **05** | **Renderizado Condicional** | Intermedio | Operador ternario (`? :`), operador lógico `&&` (y prevención del error del número 0), retornos tempranos (*guard clauses*), estados visuales (Loading, Success, Empty, Error). | [`src/components/modules/05_Conditional.jsx`](./src/components/modules/05_Conditional.jsx) |
| **06** | **Listas y Keys** | Intermedio | Iteración de colecciones con `.map()`, importancia crítica de keys únicas y estables, por qué no usar índices, mutaciones inmutables (`filter`, `map`, `[...]`). | [`src/components/modules/06_Lists.jsx`](./src/components/modules/06_Lists.jsx) |
| **07** | **Formularios Controlados** | Intermedio | *Controlled Components*, única fuente de la verdad (*Single Source of Truth*), sincronización bidireccional, manejador genérico con `[e.target.name]`, checkboxes y validación síncrona. | [`src/components/modules/07_Forms.jsx`](./src/components/modules/07_Forms.jsx) |
| **08** | **Efectos con useEffect** | Intermedio | Ciclo de vida funcional: fase de montaje (`[]`), actualización por dependencias (`[dep]`), función de limpieza (*cleanup function*), peticiones asíncronas seguras y temporizadores. | [`src/components/modules/08_Effects.jsx`](./src/components/modules/08_Effects.jsx) |
| **09** | **Referencias con useRef** | Intermedio | Acceso directo a nodos del DOM (`.focus()`, `.select()`), almacenamiento de valores mutables persistentes sin provocar re-render, rastreo de renderizados y timers. | [`src/components/modules/09_Refs.jsx`](./src/components/modules/09_Refs.jsx) |
| **10** | **Context API** | Avanzado | Solución arquitectónica al *Prop Drilling*, `createContext`, componente `Provider`, consumo directo con `useContext`, contextos anidados. | [`src/components/modules/10_Context.jsx`](./src/components/modules/10_Context.jsx) |
| **11** | **Hooks Personalizados** | Avanzado | Abstracción de lógica de estado en funciones `use*`, aislamiento de instancias, composición de hooks nativos (`useCounter`, `useLocalStorage`, `useWindowSize`). | [`src/components/modules/11_CustomHooks.jsx`](./src/components/modules/11_CustomHooks.jsx) |
| **12** | **Proyecto Integrador: TaskMaster** | Avanzado | Aplicación integral con CRUD completo de tareas, filtrado reactivo por categorías y búsqueda, estados derivados (métricas de avance en vivo) y persistencia en LocalStorage. | [`src/components/modules/12_MiniProject.jsx`](./src/components/modules/12_MiniProject.jsx) |

---

## 📂 Estructura del Proyecto

```text
React fundamentals/
├── index.html                       # Documento HTML base con fuentes Inter y Fira Code
├── package.json                     # Definición del proyecto, scripts y dependencias
├── vite.config.js                   # Configuración de Vite con soporte para React Fast Refresh
├── README.md                        # Esta guía didáctica y documentación de referencia
└── src/
    ├── main.jsx                     # Punto de entrada de React 18 con createRoot y ThemeProvider
    ├── App.jsx                      # Orquestador principal, navegación entre módulos y buscador
    ├── index.css                    # Variables CSS, soporte para Modo Claro/Oscuro y tipografía
    ├── App.css                      # Estilos de interfaz, tarjetas, paneles de código y demos
    │
    ├── context/
    │   └── ThemeContext.jsx         # Context API real para alternar tema (Dark/Light mode)
    │
    ├── hooks/
    │   ├── useLocalStorage.js       # Hook personalizado para persistir estados en el navegador
    │   ├── useCounter.js            # Hook personalizado para contadores con límites y pasos
    │   └── useWindowSize.js         # Hook personalizado reactivo al redimensionar la ventana
    │
    ├── data/
    │   └── fundamentalsData.js      # Base de conocimientos teóricos, errores comunes y retos
    │
    └── components/
        ├── Header.jsx               # Cabecera con barra de búsqueda reactiva y barra de progreso
        ├── Sidebar.jsx              # Menú lateral con índice de módulos y checklist de avance
        ├── CodeViewer.jsx           # Visor de código con numeración de líneas y botón de copiado
        ├── ConceptCard.jsx          # Contenedor modular con 4 pestañas didácticas
        │
        └── modules/                 # Los 12 módulos de fundamentos prácticos
            ├── 01_JSX.jsx
            ├── 02_Props.jsx
            ├── 03_State.jsx
            ├── 04_Events.jsx
            ├── 05_Conditional.jsx
            ├── 06_Lists.jsx
            ├── 07_Forms.jsx
            ├── 08_Effects.jsx
            ├── 09_Refs.jsx
            ├── 10_Context.jsx
            ├── 11_CustomHooks.jsx
            └── 12_MiniProject.jsx
```

---

## 🧠 Guía Teórica de Conceptos Fundamentales

### 1. ¿Qué es JSX?
JSX significa **JavaScript XML**. Es una extensión de la sintaxis de JavaScript que permite describir cómo debe ser la apariencia de la interfaz de usuario.
- **Detrás de escena**: El compilador transforma cada etiqueta JSX en una llamada a `React.createElement()`.
- **Regla de oro**: Todo código JSX debe retornar un único elemento padre o un fragmento vacío (`<> ... </>`).

### 2. Flujo Unidireccional y Props
En React, la información viaja siempre de padres a hijos. Un componente hijo recibe propiedades (`props`) que son estrictamente de solo lectura (**inmutables**). Si el hijo necesita cambiar un dato del padre, debe invocar una función callback que el padre le haya proporcionado previamente como prop.

### 3. Inmutabilidad y `useState`
React detecta cambios utilizando comparación por referencia (`Object.is`).
- **Incorrecto (mutación directa)**:
  ```javascript
  lista.push("nuevo elemento"); // ¡Nunca hagas esto en React!
  setLista(lista); // React ve la misma referencia en memoria y NO re-renderiza
  ```
- **Correcto (copia inmutable)**:
  ```javascript
  setLista(prev => [...prev, "nuevo elemento"]); // Nueva referencia creada
  ```

### 4. Ciclo de Vida y `useEffect`
`useEffect` gestiona la sincronización con sistemas externos:
- `useEffect(fn, [])`: Se ejecuta **1 sola vez** al insertarse el componente en el DOM (montaje).
- `useEffect(fn, [depA, depB])`: Se ejecuta al montar y **cada vez** que `depA` o `depB` cambien de valor.
- `return () => { ... }`: Función de limpieza (*cleanup*), indispensable para cancelar temporizadores (`clearInterval`), abortar peticiones de red o remover escuchadores de eventos.

### 5. ¿Cuándo usar `useRef` en lugar de `useState`?
- Usa `useState` si el dato debe verse reflejado visualmente en la pantalla cuando cambia.
- Usa `useRef` cuando necesitas retener un dato mutable entre renders (como el ID de un timer) **sin** provocar que el componente se vuelva a pintar, o cuando necesitas interactuar directamente con un elemento nativo del DOM (como invocar `.focus()`).

---

## 🏆 Proyecto Integrador: TaskMaster

El módulo 12 reúne todos los conceptos en una aplicación práctica completa:
- **Gestión de Tareas (CRUD)**: Creación, lectura, marcado de completado y eliminación.
- **Categorización y Prioridades**: Prioridad Alta, Media y Baja con badges cromáticos.
- **Filtrado Reactivo**: Búsqueda en tiempo real por texto y filtrado por estado (*Todas*, *Pendientes*, *Completadas*).
- **Métricas Derivadas**: Cálculo al vuelo del porcentaje de avance sin variables de estado redundantes.
- **Persistencia**: Integración con `useLocalStorage` para mantener tus datos guardados entre recargas.

---

## 🎓 Ejercicios y Retos Propuestos

Para consolidar tu aprendizaje, intenta resolver los siguientes retos modificando los archivos en `src/components/modules/`:

1. **Reto JSX (Módulo 01)**: Añade un selector para cambiar la fuente tipográfica de la tarjeta de usuario en tiempo real mediante estilos inline.
2. **Reto Props (Módulo 02)**: Agrega una prop `discount` al componente `ProductCard` y muestra el precio final tachando el precio original si el descuento es mayor a cero.
3. **Reto Estado (Módulo 03)**: Añade un botón "Deshacer" (Undo) al contador que guarde un historial con los últimos 5 valores previos.
4. **Reto Formularios (Módulo 07)**: Implementa validación para que el formulario exija que el nombre tenga al menos 3 caracteres y que el campo de comentarios no supere los 100 caracteres.
5. **Reto Proyecto Integrador (Módulo 12)**: Agrega la capacidad de editar el título de una tarea existente haciendo doble clic sobre su texto.
