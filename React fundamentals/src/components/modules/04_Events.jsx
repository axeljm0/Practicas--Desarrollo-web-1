import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import { MousePointer, ShieldAlert, Terminal, Send } from 'lucide-react';

export default function Module04Events() {
  const [eventLogs, setEventLogs] = useState([]);
  const [inputText, setInputText] = useState('');
  const [formFeedback, setFormFeedback] = useState('');

  const addLog = (type, details) => {
    const timestamp = new Date().toLocaleTimeString();
    setEventLogs(prev => [
      { id: Date.now() + Math.random(), type, details, time: timestamp },
      ...prev.slice(0, 5) // Mantiene solo los últimos 6 logs
    ]);
  };

  // 1. Evento con parámetro personalizado mediante Arrow Function
  const handleItemClick = (category, buttonId) => {
    addLog('onClick con argumento', `Botón #${buttonId} pulsado en la categoría "${category}"`);
  };

  // 2. Evento de teclado con lectura de e.key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addLog('onKeyDown (Enter)', `El usuario confirmó: "${inputText}"`);
    } else {
      addLog('onKeyDown', `Tecla presionada: [${e.key}]`);
    }
  };

  // 3. Evento submit con e.preventDefault()
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar toda la página web
    if (!inputText.trim()) {
      setFormFeedback('⚠️ Escribe algo antes de enviar');
      return;
    }
    addLog('onSubmit', `Formulario enviado con éxito: "${inputText}" (e.preventDefault() impidió el refresco del navegador)`);
    setFormFeedback(`✅ Procesado: "${inputText}"`);
    setInputText('');
  };

  const codeExample = `// 1. Manejador básico pasando referencia (SIN paréntesis)
function BotonSimple() {
  const handleClick = (e) => {
    console.log('Tipo de evento sintético:', e.type);
  };
  return <button onClick={handleClick}>Clic Aquí</button>;
}

// 2. Pasar parámetros usando una función flecha envolvente
function BotonConArgumentos({ id, nombre }) {
  return (
    <button onClick={() => handleEliminar(id, nombre)}>
      Eliminar #{id}
    </button>
  );
}

// 3. Prevenir comportamiento predeterminado en formularios
function Formulario() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Detiene el envío HTTP tradicional
    console.log('Datos procesados en el cliente con React');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Enviar</button>
    </form>
  );
}`;

  return (
    <div className="module-interactive-wrapper">
      <div className="interactive-split">
        {/* Panel de prueba de eventos */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <MousePointer size={16} />
            Zona de Pruebas de Eventos Sintéticos
          </h4>

          {/* Botones parametrizados */}
          <div className="form-group">
            <label>1. Paso de Parámetros a onClick con Arrow Functions:</label>
            <div className="btn-row">
              <button
                className="ctrl-btn"
                onClick={() => handleItemClick('Servidores', 101)}
              >
                Servidor #101
              </button>
              <button
                className="ctrl-btn"
                onClick={() => handleItemClick('Base de Datos', 202)}
              >
                Base de Datos #202
              </button>
              <button
                className="ctrl-btn"
                onClick={() => handleItemClick('Cache Redis', 303)}
              >
                Cache #303
              </button>
            </div>
          </div>

          {/* Formulario con preventDefault */}
          <div className="form-group" style={{ marginTop: '1.25rem' }}>
            <label>2. Formulario con <code>e.preventDefault()</code>:</label>
            <form onSubmit={handleSubmit} className="event-test-form">
              <input
                type="text"
                placeholder="Escribe y presiona Enter..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="text-input"
              />
              <button type="submit" className="ctrl-btn ctrl-primary">
                <Send size={15} /> Enviar
              </button>
            </form>
            {formFeedback && <p className="form-feedback-text">{formFeedback}</p>}
          </div>
        </div>

        {/* Consola de Eventos en tiempo real */}
        <div className="demo-panel">
          <h4 className="panel-title">
            <Terminal size={16} />
            Monitor de Eventos Despachados
          </h4>

          <div className="event-console">
            {eventLogs.length === 0 ? (
              <p className="empty-console-msg">
                Interactúa con los botones o escribe arriba para capturar los eventos sintéticos.
              </p>
            ) : (
              eventLogs.map(log => (
                <div key={log.id} className="console-log-row">
                  <span className="log-time">{log.time}</span>
                  <span className="log-type">[{log.type}]</span>
                  <span className="log-detail">{log.details}</span>
                </div>
              ))
            )}
          </div>

          {eventLogs.length > 0 && (
            <button
              className="ctrl-btn ctrl-reset"
              onClick={() => setEventLogs([])}
              style={{ marginTop: '0.75rem' }}
            >
              Limpiar Consola
            </button>
          )}
        </div>
      </div>

      <CodeViewer
        title="04_Eventos_Sinteticos.jsx"
        code={codeExample}
        annotations={[
          'React envuelve los eventos nativos del navegador en una clase SyntheticEvent para asegurar compatibilidad en todos los navegadores.',
          'NUNCA ejecutes la función al pasarla: onClick={handleClick()} provocará una ejecución inmediata durante el render.',
          'e.preventDefault() es fundamental en formularios (<form onSubmit={...}>) para evitar la recarga completa del navegador.'
        ]}
      />
    </div>
  );
}
