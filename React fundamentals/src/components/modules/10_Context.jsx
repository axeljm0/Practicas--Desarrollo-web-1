import React, { createContext, useContext, useState } from 'react';
import CodeViewer from '../CodeViewer';
import { Network, UserCheck, LogOut, LogIn, ArrowDown } from 'lucide-react';

// 1. Creación del contexto de sesión de usuario
const UserContext = createContext(null);

// Subcomponente Nivel 4 (Nieto más profundo): Consume el contexto directamente sin prop drilling
function UserProfileBadge() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div className="deep-child-card">
      <div className="child-badge-header">
        <span className="child-level-tag">Nivel 4: Componente Nieto (Hoja del árbol)</span>
      </div>

      {user ? (
        <div className="user-logged-box">
          <div className="avatar-circle">{user.name.charAt(0)}</div>
          <div>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
            <span className="role-tag">{user.role}</span>
          </div>
          <button className="ctrl-btn ctrl-reset" onClick={logout} title="Cerrar sesión">
            <LogOut size={14} /> Salir
          </button>
        </div>
      ) : (
        <div className="user-guest-box">
          <p>No hay usuario autenticado en el contexto.</p>
          <button
            className="ctrl-btn ctrl-primary"
            onClick={() => login({ name: 'Carla Méndez', email: 'carla@react.dev', role: 'Administrador' })}
          >
            <LogIn size={14} /> Iniciar Sesión de Prueba
          </button>
        </div>
      )}
    </div>
  );
}

// Subcomponente Nivel 3: Intermediario (no usa props de usuario)
function MiddleSection() {
  return (
    <div className="context-nesting-box level-3">
      <span className="nesting-tag">Nivel 3: Componente Intermedio</span>
      <p>Este componente <strong>NO</strong> recibe props ni sabe qué usuario está conectado.</p>
      <div className="connector-arrow"><ArrowDown size={14} /></div>
      <UserProfileBadge />
    </div>
  );
}

// Subcomponente Nivel 2: Intermediario superior
function DashboardLayout() {
  return (
    <div className="context-nesting-box level-2">
      <span className="nesting-tag">Nivel 2: Layout Principal</span>
      <p>Tampoco maneja props de usuario; el Contexto viaja por teletransporte.</p>
      <div className="connector-arrow"><ArrowDown size={14} /></div>
      <MiddleSection />
    </div>
  );
}

export default function Module10Context() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Sebastián Mora',
    email: 'sebastian@desarrolloweb.edu',
    role: 'Profesor Titular'
  });

  const handleLogin = (newUser) => setCurrentUser(newUser);
  const handleLogout = () => setCurrentUser(null);

  const codeExample = `// 1. Crear el contexto
const AuthContext = createContext(null);

// 2. Proveer el contexto en el nivel superior (Abuelo)
function App() {
  const [user, setUser] = useState({ name: 'Ana' });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </AuthContext.Provider>
  );
}

// 3. Consumir directamente en cualquier descendiente con useContext (Nieto)
function BotonPerfil() {
  const { user } = useContext(AuthContext); // ¡Sin prop drilling!
  return <span>Hola, {user.name}</span>;
}`;

  return (
    <div className="module-interactive-wrapper">
      <div className="demo-panel">
        <h4 className="panel-title">
          <Network size={16} />
          Solución al "Prop Drilling" con Context API
        </h4>
        <p className="panel-subtitle">
          El componente raíz <code>UserContext.Provider</code> distribuye los datos a cualquier nivel de profundidad sin pasarlo manualmente por cada intermediario.
        </p>

        {/* Proveedor local envolviendo la jerarquía */}
        <UserContext.Provider value={{ user: currentUser, login: handleLogin, logout: handleLogout }}>
          <div className="context-nesting-box level-1">
            <span className="nesting-tag">Nivel 1: Proveedor Raíz (UserContext.Provider)</span>
            <div className="connector-arrow"><ArrowDown size={14} /></div>
            <DashboardLayout />
          </div>
        </UserContext.Provider>
      </div>

      <CodeViewer
        title="10_Context_API.jsx"
        code={codeExample}
        annotations={[
          'createContext(defaultValue) crea el contenedor del contexto.',
          'Context.Provider emite el valor que estará disponible para cualquier componente hijo mediante el atributo value={...}.',
          'useContext(Context) se suscribe al valor más cercano del Provider y re-renderiza cuando este valor cambia.',
          'Evita abusar de Context para estados locales simples, ya que cualquier cambio en value fuerza el re-render de todos los consumidores suscritos.'
        ]}
      />
    </div>
  );
}
