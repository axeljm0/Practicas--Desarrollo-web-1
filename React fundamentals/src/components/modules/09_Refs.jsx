import React, { useState, useRef, useEffect } from 'react';
import CodeViewer from '../CodeViewer';
import { Target, Focus, Play, Square, RotateCcw, Eye } from 'lucide-react';

export default function Module09Refs() {
  const [dummyState, setDummyState] = useState('');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 1. Ref para acceder directamente a un elemento del DOM
  const inputRef = useRef(null);

  // 2. Ref para almacenar un valor mutable sin provocar re-renderizados
  const renderCountRef = useRef(1);

  // 3. Ref para guardar el ID de un temporizador de fondo
  const intervalRef = useRef(null);

  // Cada vez que el componente se renderiza por cualquier causa, incrementamos el contador
  useEffect(() => {
    renderCountRef.current += 1;
  });

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSelectText = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const handleStartTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 100);
  };

  const handleStopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const handleResetTimer = () => {
    handleStopTimer();
    setTimerSeconds(0);
  };

  // Limpieza al desmontar el componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const codeExample = `// 1. Acceso directo al DOM con ref
const inputRef = useRef(null);
const focusInput = () => inputRef.current.focus();
<input ref={inputRef} />

// 2. Variable mutable que NO causa re-render al cambiar
const renderCount = useRef(0);
renderCount.current += 1; // React no vuelve a renderizar

// 3. Almacenar identificadores de temporizadores o WebSockets
const intervalRef = useRef(null);
intervalRef.current = setInterval(...);
clearInterval(intervalRef.current);`;

  return (
    <div className="module-interactive-wrapper">
      <div className="interactive-split">
        {/* Caso 1: Acceso al DOM */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <Focus size={16} />
            1. Manipulación Directa del DOM (Focus / Select)
          </h4>
          <p className="panel-subtitle">
            Con <code>ref.current</code> podemos llamar a métodos nativos del DOM como <code>.focus()</code> o <code>.scrollIntoView()</code>.
          </p>

          <div className="form-group">
            <input
              ref={inputRef}
              type="text"
              defaultValue="¡Texto enfocado por useRef!"
              className="text-input"
            />
          </div>

          <div className="btn-row">
            <button className="ctrl-btn ctrl-primary" onClick={handleFocusInput}>
              <Focus size={15} /> Dar Foco (.focus())
            </button>
            <button className="ctrl-btn" onClick={handleSelectText}>
              Seleccionar Texto (.select())
            </button>
          </div>

          <div className="form-group" style={{ marginTop: '1.5rem' }}>
            <label>Disparar re-renderizado escribiendo aquí:</label>
            <input
              type="text"
              placeholder="Escribe para cambiar estado..."
              value={dummyState}
              onChange={(e) => setDummyState(e.target.value)}
              className="text-input"
            />
          </div>
        </div>

        {/* Caso 2: Variables mutables que no re-renderizan */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <Target size={16} />
            2. Variable Persistente Mutable sin Re-render
          </h4>
          <p className="panel-subtitle">
            A diferencia de <code>useState</code>, mutar <code>ref.current</code> no causa un ciclo de renderizado.
          </p>

          <div className="stats-box-ref">
            <div className="stat-card-ref">
              <span className="stat-label">Veces que este componente se ha renderizado:</span>
              <span className="stat-num">{renderCountRef.current}</span>
              <small>(Rastreado con renderCountRef sin bucles infinitos)</small>
            </div>
          </div>

          <div className="stopwatch-card">
            <h5>Cronómetro usando <code>intervalRef.current</code>:</h5>
            <div className="stopwatch-display">
              {(timerSeconds / 10).toFixed(1)}s
            </div>

            <div className="btn-row">
              <button
                className={`ctrl-btn ${isRunning ? '' : 'ctrl-primary'}`}
                onClick={handleStartTimer}
                disabled={isRunning}
              >
                <Play size={14} /> Iniciar
              </button>
              <button
                className="ctrl-btn"
                onClick={handleStopTimer}
                disabled={!isRunning}
              >
                <Square size={14} /> Detener
              </button>
              <button
                className="ctrl-btn ctrl-reset"
                onClick={handleResetTimer}
              >
                <RotateCcw size={14} /> Reiniciar
              </button>
            </div>
          </div>
        </div>
      </div>

      <CodeViewer
        title="09_useRef_DOM_y_Persistencia.jsx"
        code={codeExample}
        annotations={[
          'useRef devuelve un objeto { current: initialValue } que sobrevive a los renderizados.',
          'Modificar ref.current NO produce re-renderizado, por lo que nunca debe usarse para cosas que afecten directamente lo que se ve en JSX.',
          'Es la solución estándar para almacenar IDs de setInterval o conexiones de WebSockets.',
          'Se vincula a elementos JSX mediante el atributo ref={miRef}.'
        ]}
      />
    </div>
  );
}
