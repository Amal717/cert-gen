// src/components/Home.js
import React, { useState } from 'react';
import './Home.css';
import TemplateSelection from './TemplateSelection';
import OptionSelection from './OptionSelection';

function Home() {
  // State
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [individualSelected, setIndividualSelected] = useState(true);
  const [bulkSelected, setBulkSelected] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    event: '',
    csvFile: null,
  });

  // Event Handlers
  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
  };

  const handleOptionChange = (option) => {
    if (option === 'individual') {
      setIndividualSelected(true);
      setBulkSelected(false);
    } else if (option === 'bulk') {
      setIndividualSelected(false);
      setBulkSelected(true);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCSVFileChange = (e) => {
    // Handle CSV file upload
    const file = e.target.files[0];
    setFormData({
      ...formData,
      csvFile: file,
    });
  };

  const handleContinue = () => {
    if (individualSelected) {
      console.log('Navigate to Individual Certificate Generation');
      console.log('Name:', formData.name);
      console.log('Institution:', formData.institution);
      console.log('Event:', formData.event);
    } else if (bulkSelected) {
      console.log('Navigate to Bulk Certificate Generation');
      console.log('Institution:', formData.institution);
      console.log('Event:', formData.event);
      console.log('CSV File:', formData.csvFile);
    }
  };

  // JSX
  return (
    <div className="app-container">
      <div className="content-container">
        <h1>Select a Template</h1>

        {/* Template Selection */}
        <TemplateSelection
          selectedTemplate={selectedTemplate}
          handleTemplateSelection={handleTemplateSelection}
        />

        {/* Option Selection */}
        <OptionSelection
          individualSelected={individualSelected}
          handleOptionChange={handleOptionChange}
        />

        {/* Input Fields */}
        {individualSelected && (
          <div className="input-fields">
            <h2>Enter Your Information</h2>
            <div className="vertical-inputs">
              <div className="input-group">
                <label htmlFor="name">Enter your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="large-input"
                />
              </div>
              <div className="input-group">
                <label htmlFor="institution">Enter the Name of your Institution</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={(e) => handleInputChange('institution', e.target.value)}
                  className="large-input"
                />
              </div>
              <div className="input-group">
                <label htmlFor="event">Enter the Event</label>
                <input
                  type="text"
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={(e) => handleInputChange('event', e.target.value)}
                  className="large-input"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bulk CSV File Upload */}
        {bulkSelected && (
          <div className="input-fields">
            <div className="vertical-inputs">
              <div className="input-group">
                <label htmlFor="institution">Enter the Name of your Institution</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={(e) => handleInputChange('institution', e.target.value)}
                  className="large-input"
                />
              </div>
              <div className="input-group">
                <label htmlFor="event">Enter the Event</label>
                <input
                  type="text"
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={(e) => handleInputChange('event', e.target.value)}
                  className="large-input"
                />
              </div>
              <div className="input-group">
                <label htmlFor="csvFile">Upload CSV file of Participant Names</label>
                <input
                  type="file"
                  id="csvFile"
                  name="csvFile"
                  accept=".csv"
                  onChange={handleCSVFileChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div className="continue-button">
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

