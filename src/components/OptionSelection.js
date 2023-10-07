// src/components/OptionSelection.js
import React from 'react';

function OptionSelection({ individualSelected, handleOptionChange }) {
  return (
    <div className="options-container">
      <div className="options">
        <label>
          <input
            type="radio"
            name="option"
            value="individual"
            checked={individualSelected}
            onChange={() => handleOptionChange('individual')}
          />
          Individual
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="bulk"
            checked={!individualSelected}
            onChange={() => handleOptionChange('bulk')}
          />
          Bulk
        </label>
      </div>
    </div>
  );
}

export default OptionSelection;

