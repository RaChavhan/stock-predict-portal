import React, { useState } from 'react';
import axios from 'axios';

debugger
const Register = () => {
    const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add API call or validation logic here
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8000/api/register/', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response:', response.data);
    alert('Registration successful!');
    // Optionally clear form or redirect
  } catch (error) {
    console.error('Error submitting form:', error);
    setErrors(error.response.data)
    if (error.response) {
      // alert('Registration failed: ' + JSON.stringify(error.response.data));
    } else {
      alert('Something went wrong. Please try again.');
    }
  }
};

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-light text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="mb-3">
          <label htmlFor="username"  className="form-label text-light">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            required 
          />

          <small>{errors.username && <div className='text-danger'></div>}    </small>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-light">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
            minLength="8"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register