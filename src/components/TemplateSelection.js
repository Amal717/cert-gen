// src/components/TemplateSelection.js
import React from 'react';

function TemplateSelection({ selectedTemplate, handleTemplateSelection }) {
  return (
    <div className="template-container">
      <img
        src="/1" // Use the path relative to the public/ directory
        alt="Template 1"
        className={selectedTemplate === 1 ? 'selected' : ''}
        onClick={() => handleTemplateSelection(1)}
      />
      <img
        src="/2" // Use the path relative to the public/ directory
        alt="Template 2"
        className={selectedTemplate === 2 ? 'selected' : ''}
        onClick={() => handleTemplateSelection(2)}
      />
    </div>
  );
}

export default TemplateSelection;

