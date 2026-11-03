import React, { useState } from 'react';
import { Check, Copy, Code } from 'lucide-react';

export default function CodeViewer({ title, code, language = 'jsx', annotations = [] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="code-viewer">
      <div className="code-viewer-header">
        <div className="code-viewer-title">
          <Code size={16} />
          <span>{title || `Código fuente (${language})`}</span>
        </div>
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copiar código al portapapeles"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
        </button>
      </div>

      <div className="code-viewer-body">
        <pre>
          <code>
            {lines.map((line, index) => (
              <div key={index} className="code-line">
                <span className="line-number">{index + 1}</span>
                <span className="line-content">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {annotations.length > 0 && (
        <div className="code-annotations">
          <span className="annotation-label">💡 Puntos Clave del Código:</span>
          <ul>
            {annotations.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
