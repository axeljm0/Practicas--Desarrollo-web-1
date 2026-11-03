import { useState, useEffect } from 'react';

/**
 * Custom Hook: useLocalStorage
 * Sincroniza un estado de React con localStorage del navegador.
 */
export function useLocalStorage(key, initialValue) {
  // Estado inicial recuperado de localStorage de forma segura
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error al leer la clave "${key}" de localStorage:`, error);
      return initialValue;
    }
  });

  // Cada vez que cambia storedValue o key, actualizamos localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error al guardar en localStorage para "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
