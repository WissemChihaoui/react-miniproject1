// src/Form.js
import React from 'react';

const Form = ({ formData, handleChange, handleSubmit, isSubmitted }) => {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          
        />
        {!formData.name && isSubmitted && <span>Name is required</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
        />
         {!formData.email && isSubmitted && <span>email is required</span>}
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          
        />
         {!formData.age && isSubmitted && <span>age is required</span>}
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {!formData.gender && isSubmitted && <span>gender is required</span>}
      </div>
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  );
};

export default Form;
