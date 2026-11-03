import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import { Heart, MessageSquare, Share2, Info } from 'lucide-react';

// Subcomponente 1: Recibe props desestructuradas con valores por defecto
function ProductCard({ title, price, category = 'General', inStock = true, onLike, isLiked }) {
  return (
    <div className="subcomponent-card">
      <div className="card-top-row">
        <span className="category-pill">{category}</span>
        <button
          className={`like-pill ${isLiked ? 'liked' : ''}`}
          onClick={onLike}
          title="Comunicar evento al padre"
        >
          <Heart size={14} fill={isLiked ? '#ef4444' : 'none'} color={isLiked ? '#ef4444' : 'currentColor'} />
        </button>
      </div>

      <h4 className="prod-title">{title}</h4>
      <p className="prod-price">${price.toFixed(2)}</p>

      <span className={`stock-indicator ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? '● En inventario' : '○ Agotado'}
      </span>
    </div>
  );
}

// Subcomponente 2: Demuestra el uso de la prop especial 'children'
function ContentWrapper({ title, children, variant = 'info' }) {
  return (
    <div className={`content-wrapper wrapper-${variant}`}>
      <div className="wrapper-header">
        <Info size={16} />
        <strong>{title}</strong>
      </div>
      <div className="wrapper-body">
        {children}
      </div>
    </div>
  );
}

export default function Module02Props() {
  const [likes, setLikes] = useState({ 1: false, 2: true, 3: false });
  const [lastAction, setLastAction] = useState('Ninguna interacción aún');

  const handleToggleLike = (id, name) => {
    setLikes(prev => {
      const next = !prev[id];
      setLastAction(`Hijo #${id} (${name}) notificó al Padre: ${next ? '❤️ Me gusta' : '🤍 No me gusta'}`);
      return { ...prev, [id]: next };
    });
  };

  const codeExample = `// 1. Desestructuración de props con valores por defecto
function ProductCard({ title, price, category = "General", onLike, isLiked }) {
  return (
    <div className="card">
      <span className="badge">{category}</span>
      <h4>{title}</h4>
      <p>\${price.toFixed(2)}</p>
      {/* 2. Comunicación Hijo -> Padre mediante callback onLike */}
      <button onClick={onLike}>
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

// 3. Uso de la prop especial 'children' para envolver contenido arbitrario
function ContentWrapper({ title, children }) {
  return (
    <div className="box">
      <strong>{title}</strong>
      <div className="body">{children}</div>
    </div>
  );
}`;

  return (
    <div className="module-interactive-wrapper">
      <div className="demo-panel">
        <h4 className="panel-title">
          Flujo de Datos Unidireccional y Comunicación Padre-Hijo
        </h4>
        <p className="panel-subtitle">
          El componente Padre pasa datos hacia abajo mediante <strong>props</strong> y recibe notificaciones hacia arriba mediante <strong>funciones callback</strong>.
        </p>

        {/* Notificador de eventos emitidos por hijos */}
        <div className="parent-event-monitor">
          <span className="monitor-badge">📡 Estado del Componente Padre:</span>
          <code>{lastAction}</code>
        </div>

        {/* Renderizado de componentes hijos reutilizables */}
        <div className="cards-grid-props">
          <ProductCard
            title="Teclado Mecánico RGB"
            price={89.99}
            category="Periféricos"
            inStock={true}
            isLiked={likes[1]}
            onLike={() => handleToggleLike(1, 'Teclado Mecánico')}
          />
          <ProductCard
            title="Monitor UltraWide 34''"
            price={420.50}
            category="Monitores"
            inStock={false}
            isLiked={likes[2]}
            onLike={() => handleToggleLike(2, 'Monitor UltraWide')}
          />
          <ProductCard
            title="Ratón Ergonómico"
            price={45.00}
            // category omitida a propósito para probar valor por defecto
            inStock={true}
            isLiked={likes[3]}
            onLike={() => handleToggleLike(3, 'Ratón')}
          />
        </div>

        {/* Demostración de props.children */}
        <div style={{ marginTop: '1.5rem' }}>
          <ContentWrapper title="Ejemplo de la prop 'children' (Composición)">
            <p>
              Este párrafo no fue predefinido dentro de <code>ContentWrapper</code>. Se inyectó dinámicamente como <code>props.children</code>, lo que otorga máxima flexibilidad para crear contenedores reutilizables como modales, tarjetas y paneles.
            </p>
          </ContentWrapper>
        </div>
      </div>

      <CodeViewer
        title="02_Componentes_y_Props.jsx"
        code={codeExample}
        annotations={[
          'Las props son de solo lectura: un componente jamás debe mutar sus propias props.',
          'La sintaxis { title, price, category = "General" } desestructura y asigna valores por defecto.',
          'Para que un hijo modifique el estado del padre, el padre le pasa una función callback (onLike) y el hijo la invoca.',
          'props.children permite proyectar cualquier elemento JSX o texto dentro del cuerpo del componente.'
        ]}
      />
    </div>
  );
}
