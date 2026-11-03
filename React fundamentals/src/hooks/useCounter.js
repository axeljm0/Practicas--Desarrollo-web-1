import { useState } from 'react';

/**
 * Custom Hook: useCounter
 * Encapsula la lógica de un contador con límites opcionales.
 */
export function useCounter(initialValue = 0, { min = -Infinity, max = Infinity, step = 1 } = {}) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prev => Math.min(max, prev + step));
  };

  const decrement = () => {
    setCount(prev => Math.max(min, prev - step));
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setValue = (val) => {
    const num = Number(val);
    if (!isNaN(num) && num >= min && num <= max) {
      setCount(num);
    }
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
    canIncrement: count < max,
    canDecrement: count > min
  };
}
