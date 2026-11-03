import React, { useState } from 'react';
import CodeViewer from '../CodeViewer';
import { Send, RotateCcw, Check, AlertCircle } from 'lucide-react';

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  experienceLevel: 'intermedio',
  acceptTerms: false,
  comments: ''
};

export default function Module07Forms() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  // Manejador genérico para múltiples campos usando e.target.name
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Limpia el error del campo si el usuario empieza a corregirlo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Introduce un correo electrónico válido';
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
      return;
    }

    setErrors({});
    setSubmittedData({ ...formData, timestamp: new Date().toLocaleTimeString() });
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setSubmittedData(null);
  };

  const codeExample = `// 1. Un solo estado para múltiples campos en lugar de múltiples useState
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  acceptTerms: false
});

// 2. Manejador universal con [e.target.name]
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

// 3. Inputs controlados vinculados por 'value' y 'onChange'
<input
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
/>`;

  return (
    <div className="module-interactive-wrapper">
      <div className="interactive-split">
        {/* Formulario Interactivo */}
        <div className="demo-panel">
          <h4 className="panel-title">Formulario Controlado por React</h4>
          <p className="panel-subtitle">
            Cada cambio se sincroniza instantáneamente con el estado de React (Single Source of Truth).
          </p>

          <form onSubmit={handleSubmit} className="controlled-form">
            <div className="form-group">
              <label htmlFor="fullName">Nombre y Apellido:</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Ej. Sofía Hernández"
                value={formData.fullName}
                onChange={handleChange}
                className={`text-input ${errors.fullName ? 'input-error' : ''}`}
              />
              {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="sofia@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                className={`text-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <span className="field-error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="experienceLevel">Nivel de experiencia previo:</label>
              <select
                id="experienceLevel"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="select-input"
              >
                <option value="principiante">Principiante (HTML/CSS básico)</option>
                <option value="intermedio">Intermedio (JavaScript moderno / DOM)</option>
                <option value="avanzado">Avanzado (Fullstack / APIs)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comentarios o expectativas:</label>
              <textarea
                id="comments"
                name="comments"
                rows="2"
                placeholder="¿Qué deseas construir con React?"
                value={formData.comments}
                onChange={handleChange}
                className="text-input"
              />
            </div>

            <div className="form-check">
              <label>
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                Acepto el código de conducta y términos del curso
              </label>
              {errors.acceptTerms && <div className="field-error-msg">{errors.acceptTerms}</div>}
            </div>

            <div className="form-buttons-row">
              <button type="submit" className="ctrl-btn ctrl-primary">
                <Send size={15} /> Registrar Estudiante
              </button>
              <button type="button" onClick={handleReset} className="ctrl-btn ctrl-reset">
                <RotateCcw size={15} /> Limpiar
              </button>
            </div>
          </form>
        </div>

        {/* Inspección del Estado en Vivo */}
        <div className="demo-panel preview-card">
          <h4 className="panel-title">Estado Reactivo en Tiempo Real</h4>
          <p className="panel-subtitle">
            Observa cómo muta el objeto de estado en cada pulsación de tecla:
          </p>

          <div className="json-state-viewer">
            <span className="json-badge">const [formData, setFormData] = useState()</span>
            <pre>
              <code>{JSON.stringify(formData, null, 2)}</code>
            </pre>
          </div>

          {submittedData && (
            <div className="submitted-banner">
              <div className="banner-title">
                <Check size={16} /> ¡Formulario validado y despachado con éxito!
              </div>
              <p>Procesado a las {submittedData.timestamp} para {submittedData.fullName}.</p>
            </div>
          )}
        </div>
      </div>

      <CodeViewer
        title="07_Formularios_Controlados.jsx"
        code={codeExample}
        annotations={[
          'En un componente controlado, React es la "única fuente de la verdad" (Single Source of Truth) para el valor del input.',
          'Usar [e.target.name]: value permite manejar 10 campos en un formulario con una sola función handleChange.',
          'Para checkboxes, debes leer e.target.checked en lugar de e.target.value.',
          'Inicializa siempre los campos de texto con string vacío "" para evitar advertencias de componente "uncontrolled" a "controlled".'
        ]}
      />
    </div>
  );
}
