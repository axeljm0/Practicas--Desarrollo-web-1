import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import { Loader2, CheckCircle, AlertOctagon, Inbox, Bell, ShieldCheck } from 'lucide-react';

export default function Module05Conditional() {
  const [appState, setAppState] = useState('success'); // 'loading' | 'success' | 'empty' | 'error'
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [isVipMember, setIsVipMember] = useState(true);

  const codeExample = `// 1. Operador Ternario (condición ? renderA : renderB)
{isVip ? <BadgeVip /> : <BadgeEstandar />}

// 2. Operador Lógico && (Renderizado Cortocircuito)
// ATENCIÓN: Si count es 0, "0 && <Badge />" renderizará el número 0 en pantalla.
// Solución segura: usar Boolean(count > 0)
{unreadCount > 0 && <span className="notification-bubble">{unreadCount}</span>}

// 3. Retorno temprano (Guard Clause)
function Dashboard({ status }) {
  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <ErrorMessage />;
  if (status === 'empty') return <EmptyState />;

  return <MainContent />;
}`;

  return (
    <div className="module-interactive-wrapper">
      <div className="interactive-split">
        {/* Controles de estado */}
        <div className="demo-panel">
          <h4 className="panel-title">Selector de Estados del Componente</h4>
          <p className="panel-subtitle">
            Simula las diferentes respuestas que puede tener una interfaz según sus variables.
          </p>

          <div className="state-switcher-buttons">
            <button
              className={`ctrl-btn ${appState === 'loading' ? 'active' : ''}`}
              onClick={() => setAppState('loading')}
            >
              Cargando (Loading)
            </button>
            <button
              className={`ctrl-btn ${appState === 'success' ? 'active' : ''}`}
              onClick={() => setAppState('success')}
            >
              Éxito (Success)
            </button>
            <button
              className={`ctrl-btn ${appState === 'empty' ? 'active' : ''}`}
              onClick={() => setAppState('empty')}
            >
              Vacío (Empty)
            </button>
            <button
              className={`ctrl-btn ${appState === 'error' ? 'active' : ''}`}
              onClick={() => setAppState('error')}
            >
              Error
            </button>
          </div>

          <div className="form-group" style={{ marginTop: '1.25rem' }}>
            <label>Mensajes no leídos (Demuestra operador &&):</label>
            <div className="btn-row">
              <button
                className="ctrl-btn"
                onClick={() => setUnreadMessages(0)}
              >
                0 mensajes
              </button>
              <button
                className="ctrl-btn"
                onClick={() => setUnreadMessages(3)}
              >
                3 mensajes
              </button>
              <button
                className="ctrl-btn"
                onClick={() => setUnreadMessages(prev => prev + 1)}
              >
                +1 mensaje
              </button>
            </div>
          </div>

          <div className="form-check">
            <label>
              <input
                type="checkbox"
                checked={isVipMember}
                onChange={(e) => setIsVipMember(e.target.checked)}
              />
              Membresía VIP (Demuestra Operador Ternario ? :)
            </label>
          </div>
        </div>

        {/* Vista renderizada dinámicamente según condiciones */}
        <div className="demo-panel preview-card">
          <h4 className="panel-title">Vista Dinámica Condicionada</h4>

          {/* Demostración de ternario y operador && */}
          <div className="conditional-header-bar">
            <div className="vip-container">
              {isVipMember ? (
                <span className="badge-vip">
                  <ShieldCheck size={14} /> Plan Premium VIP
                </span>
              ) : (
                <span className="badge-free">Plan Gratuito Estándar</span>
              )}
            </div>

            <div className="notif-container">
              <Bell size={20} />
              {/* Uso seguro de && para evitar renderizar el número 0 */}
              {unreadMessages > 0 && (
                <span className="notif-pill">{unreadMessages}</span>
              )}
            </div>
          </div>

          {/* Renderizado condicional del cuerpo según appState */}
          <div className="conditional-display-area">
            {appState === 'loading' && (
              <div className="state-box state-loading">
                <Loader2 size={36} className="spin-icon" />
                <p>Cargando información del servidor...</p>
              </div>
            )}

            {appState === 'success' && (
              <div className="state-box state-success">
                <CheckCircle size={36} color="#10b981" />
                <h4>Datos cargados correctamente</h4>
                <p>El usuario tiene su sesión activa y los permisos están al día.</p>
              </div>
            )}

            {appState === 'empty' && (
              <div className="state-box state-empty">
                <Inbox size={36} color="#6b7280" />
                <h4>Bandeja sin elementos</h4>
                <p>Aún no has recibido solicitudes en esta sección.</p>
              </div>
            )}

            {appState === 'error' && (
              <div className="state-box state-error">
                <AlertOctagon size={36} color="#ef4444" />
                <h4>Error de conexión</h4>
                <p>No se pudo conectar con el servicio. Por favor, reintenta.</p>
                <button
                  className="ctrl-btn ctrl-primary"
                  onClick={() => setAppState('loading')}
                >
                  Reintentar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CodeViewer
        title="05_Renderizado_Condicional.jsx"
        code={codeExample}
        annotations={[
          'El operador ternario condicion ? <A /> : <B /> es ideal cuando tienes dos ramas posibles (if/else).',
          'El operador && evalúa el lado derecho solo si el izquierdo es verdadero (truthy).',
          'Cuidado con números: si tienes count = 0, {count && <p>Hola</p>} mostrará un "0" visible. Usa siempre {count > 0 && ...}.',
          'Para vistas completas (loading, error, contenido), los "early returns" hacen que el código sea limpio y legible.'
        ]}
      />
    </div>
  );
}
