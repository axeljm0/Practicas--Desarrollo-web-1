import React, { useState } from 'react';
import { PlayCircle, BookOpen, AlertTriangle, Trophy, Clock, CheckCircle2 } from 'lucide-react';

export default function ConceptCard({
  module,
  children,
  codeSnippet,
  codeAnnotations = [],
  isCompleted,
  onToggleComplete
}) {
  const [activeTab, setActiveTab] = useState('demo');

  const getDifficultyClass = (diff) => {
    switch (diff.toLowerCase()) {
      case 'principiante': return 'badge-easy';
      case 'intermedio': return 'badge-medium';
      case 'avanzado': return 'badge-hard';
      default: return '';
    }
  };

  return (
    <article className="concept-card">
      {/* Encabezado del Módulo */}
      <header className="concept-header">
        <div className="concept-header-top">
          <div className="concept-badges">
            <span className="module-number">Módulo {module.number}</span>
            <span className={`difficulty-badge ${getDifficultyClass(module.difficulty)}`}>
              {module.difficulty}
            </span>
            <span className="time-badge">
              <Clock size={13} />
              {module.time}
            </span>
          </div>

          <button
            onClick={() => onToggleComplete(module.id)}
            className={`complete-toggle-btn ${isCompleted ? 'completed' : ''}`}
            title={isCompleted ? 'Marcar como pendiente' : 'Marcar como completado'}
          >
            <CheckCircle2 size={16} />
            <span>{isCompleted ? 'Completado' : 'Marcar completado'}</span>
          </button>
        </div>

        <h2 className="concept-title">{module.title}</h2>
        <p className="concept-short-desc">{module.shortDesc}</p>

        <div className="tag-list">
          {module.tags.map(tag => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </header>

      {/* Navegación por Pestañas */}
      <div className="concept-tabs">
        <button
          className={`tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
          onClick={() => setActiveTab('demo')}
        >
          <PlayCircle size={16} />
          <span>Demo en Vivo</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'theory' ? 'active' : ''}`}
          onClick={() => setActiveTab('theory')}
        >
          <BookOpen size={16} />
          <span>Teoría y Conceptos</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'mistakes' ? 'active' : ''}`}
          onClick={() => setActiveTab('mistakes')}
        >
          <AlertTriangle size={16} />
          <span>Errores Comunes ({module.commonMistakes?.length || 0})</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'challenge' ? 'active' : ''}`}
          onClick={() => setActiveTab('challenge')}
        >
          <Trophy size={16} />
          <span>Reto Práctico</span>
        </button>
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="concept-content">
        {activeTab === 'demo' && (
          <div className="tab-pane demo-pane">
            <div className="interactive-container">
              {children}
            </div>
          </div>
        )}

        {activeTab === 'theory' && (
          <div className="tab-pane theory-pane">
            <div className="theory-box">
              <h3>Resumen Didáctico</h3>
              <p className="theory-summary">{module.summary}</p>

              <h4>Puntos Esenciales</h4>
              <ul className="key-concepts-list">
                {module.keyConcepts.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'mistakes' && (
          <div className="tab-pane mistakes-pane">
            <div className="mistakes-grid">
              {module.commonMistakes.map((item, idx) => (
                <div key={idx} className="mistake-card">
                  <div className="mistake-header">
                    <span className="mistake-badge">❌ Error Frecuente</span>
                    <p className="mistake-text">{item.mistake}</p>
                  </div>
                  <div className="solution-box">
                    <span className="solution-badge">✅ Solución Recomendada</span>
                    <p className="solution-text">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'challenge' && (
          <div className="tab-pane challenge-pane">
            <div className="challenge-card">
              <div className="challenge-icon-box">
                <Trophy size={32} />
              </div>
              <div className="challenge-body">
                <h3>Desafío para el Estudiante</h3>
                <p>{module.challenge}</p>
                <div className="challenge-hint">
                  <strong>💡 Consejo:</strong> Puedes duplicar o modificar el componente del módulo en <code>src/components/modules/</code> para probar tu solución directamente en vivo.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
