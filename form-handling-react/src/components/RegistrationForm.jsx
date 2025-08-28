import React from "react";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};
    if(!formData.username) newErrors.username = "Username is required";
    if(!formData.email) newErrors.email = "Email is required";
    if(!formData.password) newErrors.password = "Password is required"
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      return;
    }
    alert("user registred successfully!")
  };



  return(
    <form onSubmit={handleSubmit} >

      <input 
        type="text"
        name="username"
        placeholder="John Doe"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

      <input 
        type="text"
        name="email"
        placeholder="johdoe@gmail.com"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

      <input 
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
}