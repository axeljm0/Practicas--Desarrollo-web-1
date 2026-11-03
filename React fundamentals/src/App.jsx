import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ConceptCard from './components/ConceptCard';
import { FUNDAMENTALS_MODULES } from './data/fundamentalsData';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

// Módulos Didácticos
import Module01JSX from './components/modules/01_JSX';
import Module02Props from './components/modules/02_Props';
import Module03State from './components/modules/03_State';
import Module04Events from './components/modules/04_Events';
import Module05Conditional from './components/modules/05_Conditional';
import Module06Lists from './components/modules/06_Lists';
import Module07Forms from './components/modules/07_Forms';
import Module08Effects from './components/modules/08_Effects';
import Module09Refs from './components/modules/09_Refs';
import Module10Context from './components/modules/10_Context';
import Module11CustomHooks from './components/modules/11_CustomHooks';
import Module12MiniProject from './components/modules/12_MiniProject';

const MODULE_COMPONENTS = {
  jsx: Module01JSX,
  props: Module02Props,
  state: Module03State,
  events: Module04Events,
  conditional: Module05Conditional,
  lists: Module06Lists,
  forms: Module07Forms,
  effects: Module08Effects,
  refs: Module09Refs,
  context: Module10Context,
  customhooks: Module11CustomHooks,
  miniproject: Module12MiniProject
};

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState('jsx');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedModules, setCompletedModules] = useLocalStorage('rf_completed_modules', ['jsx']);

  // Filtrado de módulos por búsqueda de palabras clave o etiquetas
  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return FUNDAMENTALS_MODULES;
    const q = searchQuery.toLowerCase();
    return FUNDAMENTALS_MODULES.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.shortDesc.toLowerCase().includes(q) ||
      m.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Módulo actualmente activo
  const activeModule = useMemo(() => {
    return FUNDAMENTALS_MODULES.find(m => m.id === activeModuleId) || FUNDAMENTALS_MODULES[0];
  }, [activeModuleId]);

  // Alternar estado completado de un módulo
  const handleToggleComplete = (id) => {
    setCompletedModules(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Navegación anterior / siguiente
  const currentIndex = FUNDAMENTALS_MODULES.findIndex(m => m.id === activeModuleId);
  const prevModule = currentIndex > 0 ? FUNDAMENTALS_MODULES[currentIndex - 1] : null;
  const nextModule = currentIndex < FUNDAMENTALS_MODULES.length - 1 ? FUNDAMENTALS_MODULES[currentIndex + 1] : null;

  const ActiveComponent = MODULE_COMPONENTS[activeModule.id] || Module01JSX;

  return (
    <div className="app-layout">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        completedCount={completedModules.length}
        totalModules={FUNDAMENTALS_MODULES.length}
      />

      <div className="app-main-container">
        <Sidebar
          modules={filteredModules}
          activeModuleId={activeModuleId}
          onSelectModule={(id) => {
            setActiveModuleId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          completedModules={completedModules}
          isOpen={sidebarOpen}
          onToggleOpen={() => setSidebarOpen(prev => !prev)}
        />

        <main className="app-content-area">
          <ConceptCard
            module={activeModule}
            isCompleted={completedModules.includes(activeModule.id)}
            onToggleComplete={handleToggleComplete}
          >
            <ActiveComponent />
          </ConceptCard>

          {/* Navegación entre Módulos al final de la página */}
          <footer className="module-navigation-footer">
            <button
              className="nav-step-btn prev"
              disabled={!prevModule}
              onClick={() => {
                if (prevModule) {
                  setActiveModuleId(prevModule.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <ChevronLeft size={18} />
              <div>
                <span className="step-direction">Módulo Anterior</span>
                <span className="step-title">{prevModule ? prevModule.title : 'Principio'}</span>
              </div>
            </button>

            {completedModules.length === FUNDAMENTALS_MODULES.length && (
              <div className="course-completed-badge">
                <Award size={20} color="#f59e0b" />
                <span>¡Felicidades! Has completado todos los fundamentos</span>
              </div>
            )}

            <button
              className="nav-step-btn next"
              disabled={!nextModule}
              onClick={() => {
                if (nextModule) {
                  setActiveModuleId(nextModule.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div>
                <span className="step-direction">Siguiente Módulo</span>
                <span className="step-title">{nextModule ? nextModule.title : 'Fin'}</span>
              </div>
              <ChevronRight size={18} />
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
