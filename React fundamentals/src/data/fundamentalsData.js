export const FUNDAMENTALS_MODULES = [
  {
    id: 'jsx',
    number: '01',
    title: 'JSX y Elementos',
    shortDesc: 'Sintaxis declarativa de React, diferencias con HTML y expresiones embebidas.',
    difficulty: 'Principiante',
    time: '15 min',
    icon: 'Code2',
    tags: ['JSX', 'React.createElement', 'Fragment', 'className'],
    summary: 'JSX (JavaScript XML) es una extensión sintáctica de JavaScript que permite escribir estructuras de interfaz similares a HTML dentro de archivos JS. React transforma cada etiqueta JSX en llamadas a React.createElement().',
    keyConcepts: [
      'JSX no es HTML: se compila a llamadas JavaScript estándar.',
      'Solo se puede retornar un elemento raíz o usar un Fragment (<> ... </>).',
      'Las llaves { } permiten evaluar cualquier expresión JavaScript válida.',
      'Las propiedades usan camelCase: className en vez de class, htmlFor en vez de for.',
      'Los estilos en línea se pasan como objetos: style={{ color: "blue", fontSize: "16px" }}.'
    ],
    commonMistakes: [
      {
        mistake: 'Retornar múltiples elementos adyacentes sin un contenedor o Fragment.',
        solution: 'Envuelve los elementos hermanos en <> ... </> o un <div> contenedor.'
      },
      {
        mistake: 'Usar "class" en lugar de "className".',
        solution: 'En JSX, "class" es una palabra reservada de JS; debes usar "className".'
      },
      {
        mistake: 'Pasar strings a style como style="color: red;".',
        solution: 'En React, style recibe un objeto JS: style={{ color: "red" }}.'
      }
    ],
    challenge: 'Crea una tarjeta de usuario que use un objeto JS para su información, condicione un badge según su rol y aplique estilos dinámicos calculados.'
  },
  {
    id: 'props',
    number: '02',
    title: 'Componentes y Props',
    shortDesc: 'Estructuración modular, flujo unidireccional y comunicación de componentes.',
    difficulty: 'Principiante',
    time: '20 min',
    icon: 'Boxes',
    tags: ['Components', 'Props', 'Destructuring', 'children', 'Callbacks'],
    summary: 'Los componentes son bloques de construcción reutilizables e independientes. Las Props (propiedades) son argumentos que se pasan de componentes padres a componentes hijos, siguiendo un flujo de datos estrictamente unidireccional (de arriba hacia abajo).',
    keyConcepts: [
      'Los componentes funcionales reciben un único objeto "props" como argumento.',
      'Las props son de solo lectura (inmutables); un componente nunca debe modificar sus propias props.',
      'Desestructuración de props: ({ titulo, subtitulo = "Valor por defecto" }).',
      'La prop especial "children" permite componer componentes envolviendo contenido arbitrario.',
      'Comunicación Hijo -> Padre: el padre pasa una función callback por props y el hijo la invoca.'
    ],
    commonMistakes: [
      {
        mistake: 'Intentar modificar directamente una prop: props.contador = 5.',
        solution: 'Las props son de solo lectura. Para valores que cambian, utiliza el estado (useState).'
      },
      {
        mistake: 'Olvidar desestructurar y usar variables no definidas.',
        solution: 'Desestructura directamente en los parámetros: function Card({ title, desc }) { ... }.'
      }
    ],
    challenge: 'Construye un componente Modal o Card reutilizable que acepte props personalizadas de cabecera, contenido mediante children y un callback onClose.'
  },
  {
    id: 'state',
    number: '03',
    title: 'Estado con useState',
    shortDesc: 'Memoria del componente, reactividad y principio de inmutabilidad.',
    difficulty: 'Principiante',
    time: '25 min',
    icon: 'Database',
    tags: ['useState', 'Inmutabilidad', 'Re-render', 'Batching'],
    summary: 'El estado es la memoria privada de un componente. A diferencia de las variables ordinarias que se reinician en cada ejecución, useState preserva la información entre renderizados y notifica a React que debe redibujar la interfaz cuando el valor cambia.',
    keyConcepts: [
      'Declaración: const [estado, setEstado] = useState(valorInicial);',
      'Inmutabilidad: nunca modifiques el estado directamente (prohibido: estado.push() o estado.x = 2).',
      'Actualización con copia superficial: setObj(prev => ({ ...prev, campo: nuevoValor })).',
      'Actualizaciones funcionales: setContador(prev => prev + 1) para evitar condiciones de carrera.',
      'Batching automático: React agrupa múltiples llamadas a setEstado para optimizar el rendimiento.'
    ],
    commonMistakes: [
      {
        mistake: 'Modificar arrays u objetos directamente (ej. lista.push(nuevoItem); setLista(lista);).',
        solution: 'Crea una nueva referencia: setLista([...lista, nuevoItem]).'
      },
      {
        mistake: 'Leer el estado inmediatamente después de setEstado esperando que ya tenga el nuevo valor.',
        solution: 'setEstado es asíncrono y encola un re-render; usa useEffect si necesitas reaccionar al cambio.'
      }
    ],
    challenge: 'Implementa un contador interactivo con paso configurable, historial de cambios (deshacer/rehacer) y límites mínimos/máximos.'
  },
  {
    id: 'events',
    number: '04',
    title: 'Manejo de Eventos',
    shortDesc: 'Eventos sintéticos (SyntheticEvent), preventDefault y paso de parámetros.',
    difficulty: 'Principiante',
    time: '15 min',
    icon: 'MousePointerClick',
    tags: ['SyntheticEvent', 'onClick', 'onChange', 'e.preventDefault'],
    summary: 'React utiliza un envoltorio de eventos entre navegadores llamado SyntheticEvent. Los eventos se declaran en camelCase directamente en el JSX y se les pasa una referencia a una función, no su invocación.',
    keyConcepts: [
      'Nombres camelCase: onClick, onSubmit, onChange, onKeyDown.',
      'Pasar la referencia a la función: onClick={handleClick} (no onClick={handleClick()}).',
      'Paso de parámetros mediante arrow function: onClick={() => handleEliminar(id)}.',
      'Prevenir comportamientos nativos: e.preventDefault() en envíos de formularios o enlaces.',
      'Acceso al valor: e.target.value en eventos de inputs.'
    ],
    commonMistakes: [
      {
        mistake: 'Escribir onClick={saludar()} provocando un bucle infinito de ejecuciones en el render.',
        solution: 'Pasa la función sin paréntesis: onClick={saludar} o onClick={() => saludar(id)}.'
      },
      {
        mistake: 'Olvidar e.preventDefault() en formularios, recargando toda la página.',
        solution: 'Añade e.preventDefault() en la primera línea de tu función handleSubmit.'
      }
    ],
    challenge: 'Crea un lienzo interactivo donde al hacer clic, mover el ratón o presionar teclas se muestren las coordenadas y tipo de evento en pantalla.'
  },
  {
    id: 'conditional',
    number: '05',
    title: 'Renderizado Condicional',
    shortDesc: 'Ternarios, cortocircuito lógico (&&), guard clauses y estados múltiples.',
    difficulty: 'Intermedio',
    time: '20 min',
    icon: 'Split',
    tags: ['Ternario', 'Operador &&', 'Early Return', 'Switch'],
    summary: 'En React, el renderizado condicional funciona igual que en JavaScript puro: usando estructuras de control para decidir qué fragmento de JSX mostrar según el estado de la aplicación.',
    keyConcepts: [
      'Operador ternario: condicion ? <ComponenteA /> : <ComponenteB />.',
      'Operador lógico &&: tieneNotificaciones && <Badge contador={5} />.',
      'Peligro del 0 con &&: 0 && <p>Hola</p> renderiza el número 0 en pantalla; usa Boolean(longitud) > 0.',
      'Early return (Guard clauses): if (cargando) return <Spinner />.',
      'Múltiples estados o variantes: objeto de mapas o switch-case para estados complejos.'
    ],
    commonMistakes: [
      {
        mistake: 'Usar array.length && <Lista /> mostrando un "0" no deseado cuando el array está vacío.',
        solution: 'Usa array.length > 0 && <Lista /> o un operador ternario.'
      },
      {
        mistake: 'Anidar más de 3 operadores ternarios volviendo el código ilegible.',
        solution: 'Separa la lógica en subcomponentes o variables antes del return.'
      }
    ],
    challenge: 'Diseña un panel de autenticación que muestre 4 estados: Cargando (Skeleton), No autenticado (Login), Autenticado (Perfil) y Error con botón de reintento.'
  },
  {
    id: 'lists',
    number: '06',
    title: 'Listas y Keys',
    shortDesc: 'Uso de .map(), algoritmos de reconciliación e importancia de keys únicas.',
    difficulty: 'Intermedio',
    time: '20 min',
    icon: 'ListFilter',
    tags: ['.map', 'Keys únicas', 'Reconciliación', 'Virtual DOM'],
    summary: 'Para renderizar colecciones de datos dinámicas en React se utiliza el método .map() de JavaScript. Cada elemento generado debe tener una propiedad key única y constante para que React identifique qué elementos cambiaron, se agregaron o se eliminaron.',
    keyConcepts: [
      'Renderizado con .map(): items.map(item => <li key={item.id}>{item.nombre}</li>).',
      'La "key" debe ser un identificador único y estable (ej. ID de base de datos o UUID).',
      'No usar el índice del array como key si los elementos se reordenan, filtran o eliminan.',
      'Inmutabilidad al modificar listas: usar filter() para eliminar, map() para editar, [...items] para agregar.',
      'Fragmentos con key: <React.Fragment key={item.id}> ... </React.Fragment>.'
    ],
    commonMistakes: [
      {
        mistake: 'Usar Math.random() como key en cada renderizado.',
        solution: 'Provoca que React destruya y recree el DOM de toda la lista cada vez; usa un ID estable.'
      },
      {
        mistake: 'Olvidar la prop key, generando advertencias en la consola y errores de estado interno.',
        solution: 'Asigna siempre una key única en el elemento de nivel superior devuelto por map().'
      }
    ],
    challenge: 'Crea una tabla o cuadrícula de productos con buscador en tiempo real, filtro por categorías y ordenamiento ascendente/descendente.'
  },
  {
    id: 'forms',
    number: '07',
    title: 'Formularios Controlados',
    shortDesc: 'Inputs controlados, estado unificado y validación en tiempo real.',
    difficulty: 'Intermedio',
    time: '25 min',
    icon: 'FileText',
    tags: ['Controlled Components', 'value', 'onChange', 'Validación'],
    summary: 'En un componente controlado, el valor del input HTML está sincronizado y gobernado por el estado de React (Single Source of Truth). Cada cambio dispara onChange actualizando el estado, y el estado define el atributo value.',
    keyConcepts: [
      'Componentes controlados: <input value={formData.nombre} onChange={handleChange} />.',
      'Manejador genérico con computed property names: [e.target.name]: e.target.value.',
      'Tipos especiales: type="checkbox" usa e.target.checked.',
      'Validaciones síncronas antes de enviar el formulario.',
      'Resetear el formulario restaurando el objeto de estado a sus valores iniciales.'
    ],
    commonMistakes: [
      {
        mistake: 'Cambiar un input de "uncontrolled" a "controlled" pasando value={undefined} inicialmente.',
        solution: 'Inicializa siempre tus campos de texto con strings vacíos: nombre: "" en vez de nombre: null/undefined.'
      },
      {
        mistake: 'Crear 10 funciones handleChange individuales para 10 campos.',
        solution: 'Usa una sola función: setFormData(prev => ({ ...prev, [name]: value })).'
      }
    ],
    challenge: 'Construye un formulario de registro completo con validación de contraseña segura, confirmación, selector de términos y visualización de errores contextuales.'
  },
  {
    id: 'effects',
    number: '08',
    title: 'Efectos con useEffect',
    shortDesc: 'Ciclo de vida, peticiones asíncronas, suscripciones y función de limpieza.',
    difficulty: 'Intermedio',
    time: '30 min',
    icon: 'RefreshCw',
    tags: ['useEffect', 'Montaje', 'Dependencias', 'Cleanup'],
    summary: 'El hook useEffect permite sincronizar un componente con sistemas externos (APIs, temporizadores, el DOM manual, WebSockets). Reemplaza y unifica los métodos del ciclo de vida componentDidMount, componentDidUpdate y componentWillUnmount.',
    keyConcepts: [
      'Sin dependencias: se ejecuta en cada renderizado (poco común).',
      'Array vacío []: se ejecuta solo una vez al montarse el componente.',
      'Con dependencias [a, b]: se ejecuta al montar y cada vez que "a" o "b" cambian.',
      'Función de limpieza (cleanup): return () => { ... } para cancelar suscripciones, timers o abortar peticiones.',
      'Peticiones Fetch: manejar banderas de carga (loading), datos (data) y errores (error).'
    ],
    commonMistakes: [
      {
        mistake: 'Declarar la función pasada a useEffect como async: useEffect(async () => { ... }, []).',
        solution: 'useEffect debe retornar una función síncrona o nada. Declara la función async dentro del efecto y llámala.'
      },
      {
        mistake: 'Omitir dependencias usadas dentro del efecto, causando "stale closures" (datos obsoletos).',
        solution: 'Incluye todas las variables o estados reactivos que utilices dentro del array de dependencias.'
      }
    ],
    challenge: 'Desarrolla un buscador con debounce (retardo) conectado a una API pública simulada que cancele peticiones anteriores y muestre estado de carga.'
  },
  {
    id: 'refs',
    number: '09',
    title: 'Referencias con useRef',
    shortDesc: 'Acceso directo a nodos del DOM y almacenamiento mutable sin re-renders.',
    difficulty: 'Intermedio',
    time: '20 min',
    icon: 'Target',
    tags: ['useRef', 'DOM Access', 'Mutable value', 'current'],
    summary: 'useRef devuelve un objeto mutable con la propiedad .current que persiste durante toda la vida útil del componente. Modificar .current no provoca que React vuelva a renderizar la vista, lo que lo hace perfecto para acceder a nodos del DOM o retener valores de fondo.',
    keyConcepts: [
      'Acceso al DOM: const inputRef = useRef(null); <input ref={inputRef} /> -> inputRef.current.focus().',
      'Valores mutables persistentes: guardar IDs de temporizadores (setInterval/setTimeout) para limpiarlos.',
      'Contador de renders: rastrear cuántas veces se ha renderizado el componente sin provocar un bucle.',
      'Diferencia clave con useState: modificar un ref NO desencadena un nuevo renderizado.',
      'Cuándo no usarlo: no uses refs para construir interfaces visuales que deberían depender del estado.'
    ],
    commonMistakes: [
      {
        mistake: 'Intentar usar un ref para mostrar texto en el JSX esperando que se actualice solo.',
        solution: 'Si el cambio debe verse reflejado visualmente de inmediato, usa useState.'
      },
      {
        mistake: 'Acceder a ref.current durante la fase de render (fuera de efectos o manejadores).',
        solution: 'Lee y muta ref.current dentro de useEffect o en manejadores de eventos como onClick.'
      }
    ],
    challenge: 'Construye un reproductor de video / audio con controles personalizados (Play, Pause, Mute, Barra de progreso) usando useRef sobre el elemento multimedia.'
  },
  {
    id: 'context',
    number: '10',
    title: 'Context API',
    shortDesc: 'Estado global ligero, erradicación de Prop Drilling y consumo con useContext.',
    difficulty: 'Avanzado',
    time: '25 min',
    icon: 'Network',
    tags: ['createContext', 'useContext', 'Provider', 'Prop Drilling'],
    summary: 'Context proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel (problema conocido como "Prop Drilling"). Es ideal para configuraciones globales como temas, idioma o usuario autenticado.',
    keyConcepts: [
      'createContext(): crea el contexto con un valor por defecto.',
      'Context.Provider: provee el valor accesible a todos los componentes descendientes.',
      'useContext(Context): hook para leer y suscribirse al valor actual del contexto.',
      'Patrón Custom Provider: envolver el Provider en un componente que maneje el estado.',
      'Patrón Custom Hook: exportar useMyContext() para evitar importar useContext y Context en cada archivo.'
    ],
    commonMistakes: [
      {
        mistake: 'Usar Context para todo tipo de estados rápidos (provoca re-renders innecesarios en consumidores).',
        solution: 'Usa Context para datos globales o semiglobales; mantén el estado local con useState.'
      },
      {
        mistake: 'Consumir un contexto fuera de su Provider sin manejar el caso nulo.',
        solution: 'Valida dentro de tu custom hook si context === undefined y lanza un error explicativo.'
      }
    ],
    challenge: 'Crea un contexto de Carrito de Compras (CartContext) con funciones para agregar, eliminar y calcular el total desde múltiples componentes anidados.'
  },
  {
    id: 'customhooks',
    number: '11',
    title: 'Hooks Personalizados',
    shortDesc: 'Abstracción de lógica de estado, reutilización y composición limpia.',
    difficulty: 'Avanzado',
    time: '25 min',
    icon: 'Wrench',
    tags: ['Custom Hooks', 'Reutilización', 'Reglas de Hooks', 'Composición'],
    summary: 'Un Custom Hook es una función de JavaScript cuyo nombre comienza con "use" y que puede invocar a otros hooks de React. Permiten extraer y reutilizar la lógica de estado de los componentes sin alterar la jerarquía visual.',
    keyConcepts: [
      'Convención de nomenclatura obligatoria: debe empezar por "use" (ej. useFetch, useAuth).',
      'Comparten lógica, NO estado: cada componente que llama al hook obtiene una copia aislada del estado.',
      'Pueden retornar cualquier estructura: arrays [valor, setValor] u objetos { data, loading, error }.',
      'Cumplen las Reglas de Hooks: solo llamarse en el nivel superior y desde funciones de React.',
      'Facilitan enormemente las pruebas unitarias y el desacoplamiento de la interfaz visual.'
    ],
    commonMistakes: [
      {
        mistake: 'Crear un custom hook que no utiliza ningún hook nativo de React.',
        solution: 'Si no usa useState, useEffect, etc., es simplemente una función utilitaria estándar.'
      },
      {
        mistake: 'Creer que dos componentes comparten la misma variable de estado al invocar el mismo hook.',
        solution: 'El estado es local a cada instancia donde se invoque el hook.'
      }
    ],
    challenge: 'Crea un custom hook "useToggle" para alternar booleanos fácilmente y un "useDebounce" para retrasar valores de búsqueda.'
  },
  {
    id: 'miniproject',
    number: '12',
    title: 'Proyecto Integrador: TaskMaster',
    shortDesc: 'Aplicación completa combinando estados, listas, efectos, filtros y persistencia.',
    difficulty: 'Avanzado',
    time: '40 min',
    icon: 'FolderKanban',
    tags: ['Proyecto Integrador', 'CRUD', 'LocalStorage', 'Filtros', 'Métricas'],
    summary: 'Proyecto de consolidación que une todos los fundamentos aprendidos: componentes modulares, props, estado con useState, eventos, renderizado condicional, renderizado de listas con keys estables, formularios controlados, persistencia con hooks y contexto.',
    keyConcepts: [
      'Arquitectura de componentes desacoplada (Formulario, Lista, Item, Filtros, Estadísticas).',
      'CRUD reactivo completo: Crear, Leer, Actualizar (completar/editar) y Eliminar tareas.',
      'Persistencia automática en LocalStorage mediante Custom Hook.',
      'Filtrado y búsqueda combinada con debounce y estados derivados.',
      'Métricas de productividad calculadas en tiempo real sin estados redundantes.'
    ],
    commonMistakes: [
      {
        mistake: 'Guardar estados redundantes que pueden ser calculados sobre la marcha (ej. totalTareas).',
        solution: 'Calcula variables derivadas en el cuerpo del componente: const total = tareas.length;.'
      }
    ],
    challenge: 'Extiende TaskMaster añadiendo fechas límite con alertas visuales de vencimiento y etiquetas de prioridad personalizadas.'
  }
];
