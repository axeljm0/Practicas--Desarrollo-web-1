import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import { Plus, Minus, RotateCcw, Trash2, Tag, Layers } from 'lucide-react';

export default function Module03State() {
  // 1. Estado primitivo: contador
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // 2. Estado complejo: Objeto
  const [profile, setProfile] = useState({
    alias: 'Codemaster',
    level: 1,
    online: true
  });

  // 3. Estado de colección: Array inmutable
  const [tags, setTags] = useState(['React', 'JavaScript', 'Vite']);
  const [newTagInput, setNewTagInput] = useState('');

  // Actualización funcional (Recomendada para evitar carreras de estado)
  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };

  // Demostración de actualización inmutable de objeto con spread operator
  const handleLevelUp = () => {
    setProfile(prev => ({
      ...prev,
      level: prev.level + 1
    }));
  };

  // Demostración de actualización inmutable de array
  const handleAddTag = (e) => {
    e.preventDefault();
    if (!newTagInput.trim()) return;
    if (tags.includes(newTagInput.trim())) return;

    // Correcto: Crea un nuevo array usando spread [...prev, nuevo]
    setTags(prev => [...prev, newTagInput.trim()]);
    setNewTagInput('');
  };

  const handleRemoveTag = (tagToRemove) => {
    // Correcto: filter retorna un nuevo array sin mutar el original
    setTags(prev => prev.filter(t => t !== tagToRemove));
  };

  const codeExample = `// 1. Estado primitivo con actualización funcional
const [count, setCount] = useState(0);
setCount(prev => prev + 1); // Seguro ante múltiples llamadas concurrentes

// 2. Estado de objeto: inmutabilidad obligatoria con spread (...)
const [user, setUser] = useState({ name: 'Alex', level: 1 });
// CORRECTO:
setUser(prev => ({ ...prev, level: prev.level + 1 }));
// INCORRECTO: user.level = 2; setUser(user); (React no detectará el cambio de referencia)

// 3. Estado de Array: nunca usar .push() o .splice()
const [tags, setTags] = useState(['React', 'JS']);
// Agregar elemento:
setTags(prev => [...prev, 'CSS']);
// Eliminar elemento:
setTags(prev => prev.filter(item => item !== 'JS'));`;

  return (
    <div className="module-interactive-wrapper">
      <div className="state-demos-grid">
        {/* Caso 1: Contador y Actualizaciones Funcionales */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <Layers size={16} />
            1. Estado Numérico Reactivo
          </h4>
          <p className="panel-subtitle">
            El valor actual se preserva entre renders y notifica a React para actualizar la vista.
          </p>

          <div className="counter-display">
            <span className="counter-val">{count}</span>
            <span className="counter-step-label">Paso: {step}</span>
          </div>

          <div className="counter-controls">
            <button className="ctrl-btn" onClick={handleDecrement}>
              <Minus size={16} /> Restar
            </button>
            <button className="ctrl-btn ctrl-reset" onClick={() => setCount(0)}>
              <RotateCcw size={16} /> Reset
            </button>
            <button className="ctrl-btn ctrl-primary" onClick={handleIncrement}>
              <Plus size={16} /> Sumar
            </button>
          </div>

          <div className="step-selector">
            <label>Configurar incremento (step):</label>
            <select
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="select-input"
            >
              <option value="1">1 en 1</option>
              <option value="5">5 en 5</option>
              <option value="10">10 en 10</option>
            </select>
          </div>
        </div>

        {/* Caso 2: Objeto Inmutable */}
        <div className="demo-panel">
          <h4 className="panel-title">
            2. Estado en Objetos (Inmutabilidad)
          </h4>
          <p className="panel-subtitle">
            Se debe hacer copia superficial con <code>...prev</code> para generar una nueva referencia en memoria.
          </p>

          <div className="object-state-box">
            <div>
              <strong>Alias:</strong> {profile.alias}
            </div>
            <div>
              <strong>Nivel de Programador:</strong> <span className="level-badge">Lvl {profile.level}</span>
            </div>
            <div>
              <strong>Estado de Conexión:</strong> {profile.online ? '🟢 Conectado' : '⚪ Desconectado'}
            </div>
          </div>

          <div className="btn-row">
            <button className="ctrl-btn" onClick={handleLevelUp}>
              Subir de Nivel (+1)
            </button>
            <button
              className="ctrl-btn"
              onClick={() => setProfile(p => ({ ...p, online: !p.online }))}
            >
              Alternar Estado
            </button>
          </div>
        </div>

        {/* Caso 3: Array Inmutable */}
        <div className="demo-panel full-width">
          <h4 className="panel-title">
            <Tag size={16} />
            3. Colecciones (Arrays inmutables sin .push())
          </h4>
          <p className="panel-subtitle">
            Para agregar usamos <code>[...prev, nuevo]</code> y para eliminar usamos <code>prev.filter()</code>.
          </p>

          <form onSubmit={handleAddTag} className="tag-input-form">
            <input
              type="text"
              placeholder="Nueva etiqueta (ej. TypeScript, Redux...)"
              value={newTagInput}
              onChange={(e) => setNewTagInput(e.target.value)}
              className="text-input"
            />
            <button type="submit" className="ctrl-btn ctrl-primary">
              <Plus size={16} /> Añadir Etiqueta
            </button>
          </form>

          <div className="tags-display">
            {tags.map(t => (
              <span key={t} className="removable-tag">
                #{t}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(t)}
                  title={`Eliminar ${t}`}
                >
                  <Trash2 size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <CodeViewer
        title="03_useState_Inmutabilidad.jsx"
        code={codeExample}
        annotations={[
          'React compara estados por referencia (Object.is). Si mutas un array con .push(), la referencia no cambia y no habrá re-render.',
          'La actualización funcional setCount(prev => prev + 1) garantiza que trabajes con el valor más reciente del estado.',
          'Nunca actualices un objeto omitiendo propiedades previas: usa siempre ...prev para mantener el resto de campos intactos.'
        ]}
      />
    </div>
  );
}
