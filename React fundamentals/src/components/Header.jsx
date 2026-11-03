import React from 'react';
import { Sun, Moon, Search, Sparkles, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header({
  searchQuery,
  onSearchChange,
  completedCount,
  totalModules,
  onResetProgress
}) {
  const { theme, toggleTheme } = useTheme();
  const percentage = Math.round((completedCount / totalModules) * 100);

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="brand-logo">
          <div className="react-spin-icon">
            <span className="core"></span>
          </div>
          <div>
            <div className="brand-badge">Desarrollo Web 1</div>
            <h1 className="brand-title">Fundamentos de React</h1>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por concepto (JSX, useEffect, props, keys...)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="clear-search-btn"
              title="Limpiar búsqueda"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="header-right">
        {/* Barra de progreso */}
        <div className="progress-card">
          <div className="progress-info">
            <span className="progress-label">
              <Sparkles size={14} />
              Progreso
            </span>
            <span className="progress-count">
              {completedCount} / {totalModules} ({percentage}%)
            </span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Botón de cambio de tema */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          aria-label="Alternar tema"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}
