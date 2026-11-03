import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import { Sparkles, Palette, Code, Check } from 'lucide-react';

export default function Module01JSX() {
  const [userName, setUserName] = useState('Alex Rivera');
  const [role, setRole] = useState('Desarrollador Frontend');
  const [accentColor, setAccentColor] = useState('#3b82f6');
  const [showBadge, setShowBadge] = useState(true);

  // Expresiones JS evaluadas dinámicamente en JSX
  const registrationDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const skillCount = 5;

  const codeExample = `// 1. Fragment (<>...</>) para retornar múltiples elementos sin <div> extra
// 2. Uso de className en lugar de class
// 3. Estilos en línea mediante objetos JS: style={{ borderColor: accentColor }}
// 4. Expresiones JS dentro de llaves { }

function UserCard({ name, role, color, showBadge }) {
  const formattedDate = new Date().toLocaleDateString('es-ES');

  return (
    <>
      <div 
        className="profile-card"
        style={{ borderTop: \`4px solid \${color}\` }}
      >
        <div className="card-header">
          <h3>{name.toUpperCase()}</h3>
          {showBadge && <span className="badge">Verificado</span>}
        </div>
        <p className="role-text">{role}</p>
        <small>Miembro desde: {formattedDate}</small>
      </div>
    </>
  );
}`;

  return (
    <div className="module-interactive-wrapper">
      <div className="interactive-split">
        {/* Panel de Controles / Experimentación */}
        <div className="demo-panel controls-card">
          <h4 className="panel-title">
            <Palette size={16} />
            Experimenta con Expresiones JSX
          </h4>

          <div className="form-group">
            <label>Nombre (se transforma con .toUpperCase() en JSX):</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="text-input"
            />
          </div>

          <div className="form-group">
            <label>Rol profesional:</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="text-input"
            />
          </div>

          <div className="form-group">
            <label>Color de acento (aplicado como objeto style):</label>
            <div className="color-presets">
              {['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'].map(c => (
                <button
                  key={c}
                  style={{ backgroundColor: c }}
                  className={`color-dot ${accentColor === c ? 'active' : ''}`}
                  onClick={() => setAccentColor(c)}
                  aria-label={`Color ${c}`}
                />
              ))}
            </div>
          </div>

          <div className="form-check">
            <label>
              <input
                type="checkbox"
                checked={showBadge}
                onChange={(e) => setShowBadge(e.target.checked)}
              />
              Mostrar insignia condicional (expresión lógica en JSX)
            </label>
          </div>
        </div>

        {/* Panel de Resultado Visual (JSX Renderizado) */}
        <div className="demo-panel preview-card">
          <h4 className="panel-title">
            <Sparkles size={16} />
            Resultado del Renderizado JSX
          </h4>

          <div
            className="student-preview-card"
            style={{
              borderLeft: `6px solid ${accentColor}`,
              boxShadow: `0 4px 20px -2px ${accentColor}33`
            }}
          >
            <div className="student-header">
              <div className="student-avatar" style={{ backgroundColor: accentColor }}>
                {userName.charAt(0) || 'U'}
              </div>
              <div>
                <h3 className="student-name">
                  {/* Expresión JS evaluada entre llaves */}
                  {userName.trim() ? userName.toUpperCase() : 'NOMBRE VACÍO'}
                </h3>
                <p className="student-role">{role || 'Sin rol asignado'}</p>
              </div>
              {showBadge && (
                <span className="student-badge" style={{ backgroundColor: `${accentColor}22`, color: accentColor }}>
                  <Check size={12} /> Verificado
                </span>
              )}
            </div>

            <div className="student-footer">
              <span>📅 Registro: <strong>{registrationDate}</strong></span>
              <span>⚡ Total Habilidades: <strong>{skillCount * 2} pts</strong></span>
            </div>
          </div>

          <div className="live-explanation-bubble">
            <span className="bubble-tag">Sintaxis Detectada:</span>
            <code>{`<h3 className="student-name">{userName.toUpperCase()}</h3>`}</code>
          </div>
        </div>
      </div>

      <CodeViewer
        title="01_JSX_Sintaxis.jsx"
        code={codeExample}
        annotations={[
          'className se utiliza en vez de class porque class es palabra reservada en JS.',
          'Las llaves { } evalúan cualquier expresión válida (como .toUpperCase() o cálculo matemático).',
          'Los estilos inline reciben un objeto: style={{ borderTop: "4px solid blue" }}.',
          'Los fragmentos <> ... </> evitan agregar nodos <div> innecesarios al DOM del navegador.'
        ]}
      />
    </div>
  );
}
