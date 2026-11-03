import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import { ListPlus, ArrowDownUp, Trash2, Key, Check } from 'lucide-react';

const INITIAL_TOPICS = [
  { id: 't-1', name: 'Arquitectura por Componentes', category: 'Diseño' },
  { id: 't-2', name: 'Virtual DOM y Reconciliación', category: 'Core' },
  { id: 't-3', name: 'Reglas de los Hooks', category: 'React' },
  { id: 't-4', name: 'Inmutabilidad en JavaScript', category: 'Buenas Prácticas' }
];

export default function Module06Lists() {
  const [topics, setTopics] = useState(INITIAL_TOPICS);
  const [newItemName, setNewItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showKeyBadge, setShowKeyBadge] = useState(true);

  // Agregar un elemento al inicio para evidenciar la importancia de las keys estables
  const handleAddTopic = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newTopic = {
      id: `t-${Date.now()}`,
      name: newItemName.trim(),
      category: 'Nuevo'
    };

    setTopics(prev => [newTopic, ...prev]);
    setNewItemName('');
  };

  const handleDelete = (id) => {
    setTopics(prev => prev.filter(item => item.id !== id));
  };

  const handleShuffle = () => {
    setTopics(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  const filteredTopics = selectedCategory === 'Todos'
    ? topics
    : topics.filter(t => t.category === selectedCategory);

  const codeExample = `// 1. Transformación de arrays a elementos JSX mediante .map()
// 2. Asignación obligatoria de la prop 'key' con un ID único y estable
// 3. Modificaciones inmutables (filter para borrar, spread para agregar)

function ListaTemas({ topics, onDelete }) {
  return (
    <ul>
      {topics.map(topic => (
        // CORRECTO: Usar un ID único del objeto de datos
        <li key={topic.id} className="topic-item">
          <span>{topic.name}</span>
          <button onClick={() => onDelete(topic.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}`;

  return (
    <div className="module-interactive-wrapper">
      <div className="demo-panel">
        <h4 className="panel-title">
          <ListPlus size={16} />
          Renderizado de Colecciones con .map() y Keys Únicas
        </h4>
        <p className="panel-subtitle">
          React utiliza la prop <code>key</code> para identificar qué elementos cambiaron, se agregaron o se eliminaron entre renders.
        </p>

        {/* Formulario de agregar nuevo elemento */}
        <form onSubmit={handleAddTopic} className="list-add-bar">
          <input
            type="text"
            placeholder="Añadir nuevo tema de estudio..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="text-input"
          />
          <button type="submit" className="ctrl-btn ctrl-primary">
            Añadir al Inicio
          </button>
        </form>

        {/* Barra de filtros y ordenamiento */}
        <div className="list-filter-bar">
          <div className="category-filters">
            {['Todos', 'Core', 'React', 'Diseño', 'Buenas Prácticas', 'Nuevo'].map(cat => (
              <button
                key={cat}
                className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="list-actions">
            <button className="ctrl-btn" onClick={handleShuffle} title="Desordenar lista para verificar reconciliación">
              <ArrowDownUp size={14} /> Reordenar Azar
            </button>
            <label className="key-toggle-label">
              <input
                type="checkbox"
                checked={showKeyBadge}
                onChange={(e) => setShowKeyBadge(e.target.checked)}
              />
              Mostrar key
            </label>
          </div>
        </div>

        {/* Lista renderizada dinámicamente */}
        <div className="items-list-container">
          {filteredTopics.length === 0 ? (
            <div className="empty-list-notice">No hay temas en esta categoría.</div>
          ) : (
            filteredTopics.map((topic, index) => (
              <div key={topic.id} className="list-row-item">
                <div className="row-left">
                  <span className="row-index">#{index + 1}</span>
                  {showKeyBadge && (
                    <span className="key-badge">
                      <Key size={11} /> key="{topic.id}"
                    </span>
                  )}
                  <span className="topic-title">{topic.name}</span>
                </div>

                <div className="row-right">
                  <span className="topic-cat-badge">{topic.category}</span>
                  <button
                    className="delete-row-btn"
                    onClick={() => handleDelete(topic.id)}
                    title="Eliminar elemento"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <CodeViewer
        title="06_Listas_y_Keys.jsx"
        code={codeExample}
        annotations={[
          'Siempre que uses .map() para renderizar elementos, debes proporcionar una prop "key" única.',
          'NUNCA uses el índice del array (key={index}) si la lista puede ser ordenada, filtrada o si se agregan/eliminan elementos, ya que provocará fallos en inputs y estado interno.',
          'NUNCA generes keys al vuelo como key={Math.random()}, pues React destruirá y recreará el DOM en cada render.',
          'Para eliminar un elemento, usamos .filter() para no mutar el array original.'
        ]}
      />
    </div>
  );
}
