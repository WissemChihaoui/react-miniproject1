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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    //const name = e.target.name
    //const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    if (formData.name && formData.email && formData.age && formData.gender) {
      alert('Form Submitted');
    }
  };

  return (
    <div className="app-container">
      <h1>User Information Form</h1>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitted={isSubmitted}/>
      <Display formData={formData} />
    </div>
  );
};

export default App;
