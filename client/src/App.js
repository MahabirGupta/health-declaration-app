// App.js
import React, { useState } from "react";
import HealthDeclarationForm from "./HealthDeclarationForm";

function App() {
  // Define state for form data
  const [formData, setFormData] = useState({
    patientName: "",
    temperature: "",
    symptoms: {
      cough: false,
      fever: false,
      smell_impairment: false,
      breathing_difficulties: false,
      body_aches: false,
      headaches: false,
      fatigue: false,
      sore_throat: false,
      diarrhea: false,
      runny_nose: false,
    },
    contactHistory: false,
  });

  // Define a function to handle form data submission
  const handleFormSubmit = (data) => {
    // Send the form data to the server
    fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response from server:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <HealthDeclarationForm
        formData={formData}
        setFormData={setFormData}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
