// HealthDeclarationForm.js
import React from "react";
import "./HealthDeclarationForm.css"; // Import the CSS file

function HealthDeclarationForm({ formData, setFormData, onFormSubmit }) {
  // Define state variables
  const { patientName, temperature, symptoms, contactHistory } = formData;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          symptoms: { ...prevData.symptoms, [name]: checked },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2>Health Declaration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientName">Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={patientName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="temperature">Temperature (°C):</label>
          <input
            type="number"
            id="temperature"
            name="temperature"
            value={temperature}
            onChange={handleInputChange}
          />
        </div>
        <div className="checkbox-group">
          <p>
            Do you have any of the following symptoms now or within the last 14
            days:
          </p>
          {/* Repeat the pattern for all symptom checkboxes */}
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="cough"
              checked={symptoms.cough}
              onChange={handleInputChange}
            />{" "}
            Cough
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="fever"
              checked={symptoms.fever}
              onChange={handleInputChange}
            />{" "}
            Fever
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="smell_impairment"
              checked={symptoms.smell_impairment}
              onChange={handleInputChange}
            />{" "}
            Smell/Test impairment
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="breathing_difficulties"
              checked={symptoms.breathing_difficulties}
              onChange={handleInputChange}
            />{" "}
            Breathing Difficulties
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="body_aches"
              checked={symptoms.body_aches}
              onChange={handleInputChange}
            />{" "}
            Body Aches
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="headaches"
              checked={symptoms.headaches}
              onChange={handleInputChange}
            />{" "}
            Headaches
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="fatigue"
              checked={symptoms.fatigue}
              onChange={handleInputChange}
            />{" "}
            Fatigue
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="sore_throat"
              checked={symptoms.sore_throat}
              onChange={handleInputChange}
            />{" "}
            Sore Throat
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="diarrhea"
              checked={symptoms.diarrhea}
              onChange={handleInputChange}
            />{" "}
            Diarrhea
          </label>
        </div>
        <div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="runny_nose"
              checked={symptoms.runny_nose}
              onChange={handleInputChange}
            />{" "}
            Runny Nose(even if your symptoms are mild)
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="contactHistory"
              checked={contactHistory}
              onChange={handleInputChange}
            />{" "}
            Have you been in contact with anyone suspected to have/has been
            diagnosed with Covid-19 within the last 14 days?
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HealthDeclarationForm;
