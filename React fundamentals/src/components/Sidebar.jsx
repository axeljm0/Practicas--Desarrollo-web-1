import React from 'react';
import {
  Code2,
  Boxes,
  Database,
  MousePointerClick,
  Split,
  ListFilter,
  FileText,
  RefreshCw,
  Target,
  Network,
  Wrench,
  FolderKanban,
  CheckCircle,
  Circle,
  Menu,
  X
} from 'lucide-react';

const ICON_MAP = {
  Code2,
  Boxes,
  Database,
  MousePointerClick,
  Split,
  ListFilter,
  FileText,
  RefreshCw,
  Target,
  Network,
  Wrench,
  FolderKanban
};

export default function Sidebar({
  modules,
  activeModuleId,
  onSelectModule,
  completedModules,
  isOpen,
  onToggleOpen
}) {
  return (
    <>
      {/* Botón flotante para dispositivos móviles */}
      <button
        className="mobile-sidebar-toggle"
        onClick={onToggleOpen}
        aria-label="Abrir navegación de módulos"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop para cerrar en móvil */}
      {isOpen && (
        <div className="sidebar-backdrop" onClick={onToggleOpen}></div>
      )}

      <aside className={`app-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-heading">
          <span className="sidebar-title">Índice Didáctico</span>
          <span className="sidebar-count">{modules.length} módulos</span>
        </div>

        <nav className="modules-nav">
          {modules.map((mod) => {
            const IconComponent = ICON_MAP[mod.icon] || Code2;
            const isCompleted = completedModules.includes(mod.id);
            const isActive = mod.id === activeModuleId;

            return (
              <button
                key={mod.id}
                className={`nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => {
                  onSelectModule(mod.id);
                  if (isOpen) onToggleOpen();
                }}
              >
                <div className="nav-item-left">
                  <span className="nav-mod-number">{mod.number}</span>
                  <div className="nav-icon-wrapper">
                    <IconComponent size={17} />
                  </div>
                  <div className="nav-text">
                    <span className="nav-title">{mod.title}</span>
                    <span className="nav-diff-tag">{mod.difficulty}</span>
                  </div>
                </div>

                <div className="nav-item-right">
                  {isCompleted ? (
                    <CheckCircle size={16} className="check-icon completed" />
                  ) : (
                    <Circle size={16} className="check-icon pending" />
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <p className="sidebar-footer-text">
            <strong>React 18+</strong> con Hooks y Functional Components.
          </p>
        </div>
      </aside>
    </>
  );
}
