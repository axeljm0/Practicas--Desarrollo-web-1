import React, { useState, useEffect } from 'react';
import CodeViewer from '../CodeViewer';
import { RefreshCw, Timer, User, CheckCircle2, AlertCircle } from 'lucide-react';

// Subcomponente con efecto y función de limpieza (Cleanup)
function AutoTimerWidget() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Fase de Montaje: Iniciamos el temporizador
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Fase de Desmontaje (Cleanup): Detener el temporizador para evitar fugas de memoria
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Array vacío = solo se ejecuta al montar y limpia al desmontar

  return (
    <div className="timer-badge-box">
      <Timer size={16} className="spin-slow" />
      <span>Cronómetro activo: <strong>{seconds}s</strong></span>
      <small>(Limpieza automática activa con clearInterval)</small>
    </div>
  );
}

export default function Module08Effects() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [effectLogs, setEffectLogs] = useState([]);

  const addEffectLog = (msg) => {
    const time = new Date().toLocaleTimeString();
    setEffectLogs(prev => [`[${time}] ${msg}`, ...prev.slice(0, 5)]);
  };

  // Simulación de petición a API con useEffect
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    addEffectLog(`▶ useEffect disparado por cambio en [selectedUserId: ${selectedUserId}]`);

    // Simula latencia de red
    const timeoutId = setTimeout(() => {
      if (!isCancelled) {
        const mockUsers = {
          1: { name: 'Elena Gómez', role: 'Diseñadora UI/UX', repos: 14, location: 'Madrid' },
          2: { name: 'Mateo Ortiz', role: 'Ingeniero de Software', repos: 32, location: 'Buenos Aires' },
          3: { name: 'Camila Silva', role: 'DevOps & Cloud', repos: 21, location: 'Bogotá' }
        };

        setUserData(mockUsers[selectedUserId]);
        setLoading(false);
        addEffectLog(`✔ Petición completada para ID #${selectedUserId}`);
      }
    }, 700);

    // Función de limpieza para cancelar solicitudes pendientes si el ID cambia rápidamente
    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
      addEffectLog(`⏹ Cleanup: cancelación de la petición previa ID #${selectedUserId}`);
    };
  }, [selectedUserId]); // Dependencia reactiva: solo se ejecuta cuando selectedUserId cambia

  const codeExample = `// 1. Array de dependencias vacío []: Solo al montar
useEffect(() => {
  console.log('Componente montado en el DOM');
}, []);

// 2. Con dependencias [userId]: Al montar y cuando userId cambie
useEffect(() => {
  let isMounted = true;
  fetchUser(userId).then(data => {
    if (isMounted) setUser(data);
  });

  // 3. Función de limpieza (Cleanup): antes del siguiente efecto o al desmontar
  return () => {
    isMounted = false; // Previene actualización de estado en componente desmontado
  };
}, [userId]);`;

  return (
    <div className="module-interactive-wrapper">
      <div className="interactive-split">
        {/* Panel de prueba de efectos */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <RefreshCw size={16} />
            Efectos Asíncronos y Dependencias [ ]
          </h4>
          <p className="panel-subtitle">
            Cambia el identificador de usuario para comprobar cómo el efecto se cancela y re-ejecuta.
          </p>

          <div className="form-group">
            <label>Seleccionar Usuario a Consultar (Dependencia reactiva):</label>
            <div className="btn-row">
              {[1, 2, 3].map(id => (
                <button
                  key={id}
                  className={`ctrl-btn ${selectedUserId === id ? 'ctrl-primary' : ''}`}
                  onClick={() => setSelectedUserId(id)}
                >
                  Usuario #{id}
                </button>
              ))}
            </div>
          </div>

          {/* Tarjeta de datos obtenidos */}
          <div className="user-api-preview">
            {loading ? (
              <div className="loading-state-mini">
                <RefreshCw size={20} className="spin-icon" />
                <span>Consultando datos del usuario #{selectedUserId}...</span>
              </div>
            ) : userData ? (
              <div className="user-profile-loaded">
                <div className="user-icon-circle">
                  <User size={22} />
                </div>
                <div>
                  <h5>{userData.name}</h5>
                  <p>{userData.role} • {userData.location}</p>
                  <small>Repositorios públicos: {userData.repos}</small>
                </div>
              </div>
            ) : null}
          </div>

          {/* Montaje / Desmontaje de subcomponente con timer */}
          <div className="timer-section-box">
            <div className="form-check">
              <label>
                <input
                  type="checkbox"
                  checked={showTimer}
                  onChange={(e) => setShowTimer(e.target.checked)}
                />
                Montar Subcomponente Temporizador (Demuestra Cleanup en desmontaje)
              </label>
            </div>
            {showTimer ? <AutoTimerWidget /> : <p className="unmounted-note">Componente desmontado: clearInterval ejecutado.</p>}
          </div>
        </div>

        {/* Consola de ciclo de vida del efecto */}
        <div className="demo-panel">
          <h4 className="panel-title">Registro de Ejecución del Efecto</h4>
          <p className="panel-subtitle">
            Observa el orden estricto: primero se ejecuta la función de limpieza (cleanup) y luego el nuevo efecto.
          </p>

          <div className="event-console">
            {effectLogs.map((log, index) => (
              <div key={index} className="console-log-row">
                <span className="log-detail">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CodeViewer
        title="08_useEffect_CicloDeVida.jsx"
        code={codeExample}
        annotations={[
          'useEffect(fn, []) con array vacío simula componentDidMount: corre 1 sola vez.',
          'useEffect(fn, [id]) corre al inicio y cada vez que "id" cambie de valor.',
          'La función retornada return () => { ... } es la función de limpieza. Se ejecuta antes de volver a correr el efecto y cuando el componente se desmonta.',
          'Evita dejar fuera variables reactivas usadas dentro del efecto para no crear cierres obsoletos (stale closures).'
        ]}
      />
    </div>
  );
}
