import React, { useState } from 'react';

const TemplateNavigator = () => {
  // Assuming you have an array of templates
  const templates = ['Template1', 'Template2', 'Template3', 'Template4'];

  // State to keep track of the current template index
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);

  const goToPreviousTemplate = () => {
    if (currentTemplateIndex > 0) {
      setCurrentTemplateIndex(currentTemplateIndex - 1);
    }
  };

  const goToNextTemplate = () => {
    if (currentTemplateIndex < templates.length - 1) {
      setCurrentTemplateIndex(currentTemplateIndex + 1);
    }
  };

  return (
    <div>
      {/* Display the current template */}
      <h2>{templates[currentTemplateIndex]}</h2>

      {/* Backward arrow */}
      <button onClick={goToPreviousTemplate} disabled={currentTemplateIndex === 0}>
        Backward
      </button>

      {/* Forward arrow */}
      <button onClick={goToNextTemplate} disabled={currentTemplateIndex === templates.length - 1}>
        Forward
      </button>
    </div>
  );
};

export default TemplateNavigator;
