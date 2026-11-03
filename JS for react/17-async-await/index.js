// ==========================================
// 17 - ASYNC / AWAIT (PURO VANILLA)
// Timestamp: [01:11:31] Async/await
// ==========================================

console.log("--- 17: ASYNC / AWAIT ---");

// 1. Simulación de una Promesa asíncrona (como una consulta a base de datos)
function obtenerDatosLocales() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve({ id: 101, curso: "React desde cero", estado: "disponible" });
      } else {
        reject(new Error("No se pudo obtener la información local"));
      }
    }, 500);
  });
}

// 2. Consumo tradicional con .then() y .catch():
obtenerDatosLocales()
  .then(datos => {
    console.log("1. Datos con .then():", datos);
  })
  .catch(error => {
    console.error("Error con .catch():", error.message);
  });

// 3. Consumo moderno y limpio con ASYNC / AWAIT y TRY / CATCH
// La palabra 'async' antes de una función indica que siempre retornará una promesa
// La palabra 'await' pausa la ejecución hasta que la promesa se resuelva
async function cargarCurso() {
  try {
    console.log("Cargando curso con async/await...");
    const curso = await obtenerDatosLocales();
    console.log("2. Curso obtenido con await:", curso);
  } catch (error) {
    console.error("Error capturado en try/catch:", error.message);
  }
}

cargarCurso();

// 4. Petición real con la Fetch API nativa (Vanilla JS)
// Node 18+ y todos los navegadores modernos incluyen 'fetch' de forma nativa
async function obtenerPublicacionAPI() {
  try {
    const URL = "https://jsonplaceholder.typicode.com/posts/1";
    console.log(`Haciendo petición a: ${URL}`);

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
      throw new Error(`HTTP Error: ${respuesta.status}`);
    }

    const post = await respuesta.json();
    console.log("3. Datos recibidos de la API pública:", {
      id: post.id,
      titulo: post.title,
      cuerpoResumido: post.body.substring(0, 50) + "..."
    });
  } catch (error) {
    console.error("Error en fetch:", error.message);
  }
}

obtenerPublicacionAPI();

// ==========================================
// Conexión con React:
// En React, el patrón estándar para cargar datos al montar el componente
// es utilizar useEffect junto con una función async interna:
//
// useEffect(() => {
//   async function fetchData() {
//     try {
//       setIsLoading(true);
//       const res = await fetch("/api/productos");
//       const data = await res.json();
//       setProductos(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   fetchData();
// }, []);
// ==========================================
