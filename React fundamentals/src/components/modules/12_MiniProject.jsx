import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import {
  CheckCircle2,
  Circle,
  Trash2,
  Plus,
  Search,
  Filter,
  BarChart3,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const INITIAL_TASKS = [
  { id: 'task-1', title: 'Comprender la sintaxis JSX y Fragment', priority: 'alta', completed: true },
  { id: 'task-2', title: 'Implementar flujo unidireccional de props', priority: 'alta', completed: true },
  { id: 'task-3', title: 'Aprender inmutabilidad con useState', priority: 'media', completed: false },
  { id: 'task-4', title: 'Dominar la función de limpieza de useEffect', priority: 'baja', completed: false }
];

export default function Module12MiniProject() {
  // Persistencia de tareas en LocalStorage mediante nuestro Custom Hook
  const [tasks, setTasks] = useLocalStorage('rf_taskmaster_items', INITIAL_TASKS);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('media');
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'pending' | 'completed'

  // CRUD: Crear Tarea
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle.trim(),
      priority: newTaskPriority,
      completed: false
    };

    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
  };

  // CRUD: Alternar estado completado
  const handleToggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // CRUD: Eliminar Tarea
  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Limpiar completadas
  const handleClearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  // Estados Derivados (Calculados en tiempo real sin estados redundantes)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Filtrado y búsqueda reactiva
  const visibleTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesStatus =
      statusFilter === 'all'
        ? true
        : statusFilter === 'completed'
        ? task.completed
        : !task.completed;
    return matchesSearch && matchesStatus;
  });

  const codeExample = `// Arquitectura Integrada de TaskMaster
// 1. Estado persistido con Custom Hook:
const [tasks, setTasks] = useLocalStorage('tasks', []);

// 2. Estados derivados (sin redundancia):
const total = tasks.length;
const completadas = tasks.filter(t => t.completed).length;

// 3. Mutación inmutable de elementos (Toggle):
const toggleTask = (id) => {
  setTasks(prev => prev.map(t => 
    t.id === id ? { ...t, completed: !t.completed } : t
  ));
};

// 4. Eliminación inmutable:
const deleteTask = (id) => {
  setTasks(prev => prev.filter(t => t.id !== id));
};`;

  return (
    <div className="module-interactive-wrapper">
      <div className="demo-panel full-width">
        <div className="taskmaster-header">
          <div>
            <h4 className="panel-title">
              <Sparkles size={18} />
              TaskMaster: Proyecto Integrador de Fundamentos
            </h4>
            <p className="panel-subtitle">
              Demuestra la unión de componentes, props, eventos, listas con keys, estados reactivos, filtrado y persistencia en LocalStorage.
            </p>
          </div>

          {/* Métricas calculadas al vuelo */}
          <div className="taskmaster-metrics">
            <div className="metric-pill">
              <span className="lbl">Total</span>
              <span className="num">{totalTasks}</span>
            </div>
            <div className="metric-pill">
              <span className="lbl">Pendientes</span>
              <span className="num pending">{pendingTasks}</span>
            </div>
            <div className="metric-pill">
              <span className="lbl">Completadas</span>
              <span className="num done">{completedTasks}</span>
            </div>
            <div className="metric-pill rate">
              <span className="lbl">Avance</span>
              <span className="num">{completionPercentage}%</span>
            </div>
          </div>
        </div>

        {/* Formulario para agregar tareas */}
        <form onSubmit={handleAddTask} className="taskmaster-add-form">
          <input
            type="text"
            placeholder="¿Qué nueva tarea o concepto deseas practicar hoy?..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="text-input"
          />

          <select
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value)}
            className="select-input priority-select"
          >
            <option value="alta">Prioridad Alta 🔴</option>
            <option value="media">Prioridad Media 🟡</option>
            <option value="baja">Prioridad Baja 🟢</option>
          </select>

          <button type="submit" className="ctrl-btn ctrl-primary">
            <Plus size={16} /> Añadir Tarea
          </button>
        </form>

        {/* Barra de Filtros y Búsqueda */}
        <div className="taskmaster-filter-row">
          <div className="search-bar-inline">
            <Search size={15} />
            <input
              type="text"
              placeholder="Buscar tareas..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>

          <div className="status-tabs-inline">
            <button
              className={`filter-tab ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => setStatusFilter('all')}
            >
              Todas ({totalTasks})
            </button>
            <button
              className={`filter-tab ${statusFilter === 'pending' ? 'active' : ''}`}
              onClick={() => setStatusFilter('pending')}
            >
              Pendientes ({pendingTasks})
            </button>
            <button
              className={`filter-tab ${statusFilter === 'completed' ? 'active' : ''}`}
              onClick={() => setStatusFilter('completed')}
            >
              Completadas ({completedTasks})
            </button>
          </div>

          {completedTasks > 0 && (
            <button
              className="ctrl-btn ctrl-reset clear-done-btn"
              onClick={handleClearCompleted}
            >
              Limpiar {completedTasks} completada(s)
            </button>
          )}
        </div>

        {/* Lista de Tareas */}
        <div className="taskmaster-tasks-list">
          {visibleTasks.length === 0 ? (
            <div className="empty-tasks-placeholder">
              <CheckCircle2 size={36} color="#10b981" />
              <p>¡No hay tareas en esta vista! Todo en orden o no hay coincidencias de búsqueda.</p>
            </div>
          ) : (
            visibleTasks.map(task => (
              <div
                key={task.id}
                className={`task-card-item ${task.completed ? 'completed' : ''}`}
              >
                <button
                  className="task-check-btn"
                  onClick={() => handleToggleTask(task.id)}
                  title={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
                >
                  {task.completed ? (
                    <CheckCircle2 size={20} className="icon-checked" />
                  ) : (
                    <Circle size={20} className="icon-unchecked" />
                  )}
                </button>

                <div className="task-body">
                  <span className="task-title-text">{task.title}</span>
                  <div className="task-meta">
                    <span className={`priority-tag priority-${task.priority}`}>
                      {task.priority === 'alta' ? 'Alta' : task.priority === 'media' ? 'Media' : 'Baja'}
                    </span>
                    <span className="task-id-mono">ID: {task.id}</span>
                  </div>
                </div>

                <button
                  className="task-delete-btn"
                  onClick={() => handleDeleteTask(task.id)}
                  title="Eliminar tarea"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <CodeViewer
        title="12_ProyectoIntegrador_TaskMaster.jsx"
        code={codeExample}
        annotations={[
          'Los estados derivados (como total, completadas, porcentaje) nunca deben guardarse en un useState aparte, ya que se desincronizarían.',
          'El uso de useLocalStorage permite que tus tareas sigan allí incluso si cierras la pestaña o reinicias la computadora.',
          'Cada modificación sobre la lista utiliza métodos inmutables (map, filter) generando nuevas referencias que activan el re-render de React.',
          'Esta arquitectura limpia separa la presentación visual de la lógica de negocio.'
        ]}
      />
    </div>
  );
}
