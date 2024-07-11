// src/App.js
import React, { useState } from 'react';
import Form from './comp/Form';
import Display from './comp/Display';
import './index.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age || !formData.gender) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Form submitted successfully!');
  };

  return (
    <div className="app-container">
      <h1>User Information Form</h1>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Display formData={formData} />
    </div>
  );
};

export default App;
