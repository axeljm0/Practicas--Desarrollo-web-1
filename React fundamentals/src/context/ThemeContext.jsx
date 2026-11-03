import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Creación del Contexto
const ThemeContext = createContext();

// 2. Componente Proveedor (Provider)
export const ThemeProvider = ({ children }) => {
  // Inicializa el tema leyendo de localStorage o preferencia del sistema
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('rf_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    localStorage.setItem('rf_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook para consumir el contexto fácilmente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};
