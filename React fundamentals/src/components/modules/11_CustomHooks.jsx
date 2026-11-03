import React from 'react';
import CodeViewer from '../CodeViewer';
import { Wrench, Monitor, Save, Plus, Minus, RotateCcw } from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function Module11CustomHooks() {
  // 1. Instancias independientes del custom hook useCounter
  const counterA = useCounter(10, { min: 0, max: 50, step: 2 });
  const counterB = useCounter(0, { min: -10, max: 20, step: 1 });

  // 2. Custom hook useLocalStorage
  const [note, setNote] = useLocalStorage('rf_student_note', '¡Esta nota persiste al refrescar la página!');

  // 3. Custom hook useWindowSize
  const windowSize = useWindowSize();

  const codeExample = `// 1. Definición de un Custom Hook (debe empezar con "use")
function useCounter(initialValue = 0, { min = 0, max = 100 } = {}) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => Math.min(max, c + 1));
  const decrement = () => setCount(c => Math.max(min, c - 1));
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// 2. Uso en cualquier componente:
function MiComponente() {
  // Cada llamada crea un estado aislado e independiente
  const counter1 = useCounter(0);
  const counter2 = useCounter(50);
  return <button onClick={counter1.increment}>{counter1.count}</button>;
}`;

  return (
    <div className="module-interactive-wrapper">
      <div className="state-demos-grid">
        {/* Hook 1: useCounter con estados independientes */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <Wrench size={16} />
            1. useCounter (Lógica Reutilizable)
          </h4>
          <p className="panel-subtitle">
            Dos instancias separadas comparten la misma lógica pero mantienen estados 100% aislados.
          </p>

          <div className="custom-hook-counters">
            <div className="counter-mini-card">
              <span className="card-lbl">Instancia A (Paso: 2, Min: 0, Max: 50)</span>
              <div className="val">{counterA.count}</div>
              <div className="btn-row">
                <button className="ctrl-btn" onClick={counterA.decrement} disabled={!counterA.canDecrement}>-2</button>
                <button className="ctrl-btn ctrl-reset" onClick={counterA.reset}>Reset</button>
                <button className="ctrl-btn ctrl-primary" onClick={counterA.increment} disabled={!counterA.canIncrement}>+2</button>
              </div>
            </div>

            <div className="counter-mini-card">
              <span className="card-lbl">Instancia B (Paso: 1, Min: -10, Max: 20)</span>
              <div className="val">{counterB.count}</div>
              <div className="btn-row">
                <button className="ctrl-btn" onClick={counterB.decrement} disabled={!counterB.canDecrement}>-1</button>
                <button className="ctrl-btn ctrl-reset" onClick={counterB.reset}>Reset</button>
                <button className="ctrl-btn ctrl-primary" onClick={counterB.increment} disabled={!counterB.canIncrement}>+1</button>
              </div>
            </div>
          </div>
        </div>

        {/* Hook 2: useLocalStorage */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <Save size={16} />
            2. useLocalStorage (Sincronización Web)
          </h4>
          <p className="panel-subtitle">
            React sincroniza automáticamente este estado con el almacenamiento local del navegador.
          </p>

          <div className="form-group">
            <label>Nota del estudiante en localStorage:</label>
            <textarea
              rows="3"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="text-input"
            />
          </div>

          <div className="localstorage-status">
            <small>💾 Clave en localStorage: <code>rf_student_note</code></small>
            <button
              className="ctrl-btn ctrl-reset"
              onClick={() => setNote('')}
              style={{ marginTop: '0.5rem' }}
            >
              Borrar Nota
            </button>
          </div>
        </div>

        {/* Hook 3: useWindowSize */}
        <div className="demo-panel full-width">
          <h4 className="panel-title">
            <Monitor size={16} />
            3. useWindowSize (Escucha de Eventos Globales)
          </h4>
          <p className="panel-subtitle">
            Redimensiona la ventana del navegador para observar cómo el hook reacciona en tiempo real.
          </p>

          <div className="window-size-display">
            <div className="size-metric">
              <span className="metric-label">Ancho de pantalla (width):</span>
              <span className="metric-val">{windowSize.width}px</span>
            </div>
            <div className="size-metric">
              <span className="metric-label">Alto de pantalla (height):</span>
              <span className="metric-val">{windowSize.height}px</span>
            </div>
            <div className="size-metric">
              <span className="metric-label">Dispositivo estimado:</span>
              <span className="metric-badge">
                {windowSize.width < 768 ? '📱 Móvil' : windowSize.width < 1024 ? '💻 Tablet' : '🖥️ Escritorio'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <CodeViewer
        title="11_Custom_Hooks.jsx"
        code={codeExample}
        annotations={[
          'Los Custom Hooks deben comenzar obligatoriamente con la palabra "use" para que el linter de React aplique las Reglas de los Hooks.',
          'Permiten empaquetar lógica con useState, useEffect, etc., y compartirla entre cientos de componentes.',
          'Comparten únicamente la lógica, NO el estado: cada vez que llamas al hook obtienes una nueva variable de estado aislada.'
        ]}
      />
    </div>
  );
}
