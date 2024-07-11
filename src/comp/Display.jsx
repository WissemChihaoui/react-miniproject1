// src/Display.js
import React from 'react';

const Display = ({ formData }) => {
  return (
    <div className="display-container">
      <h2>Display Information</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
    </div>
  );
};

export default Display;
