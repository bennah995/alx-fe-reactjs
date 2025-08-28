import React from "react";
import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};
    if(!username) newErrors.username = "Username is required";
    if(!email) newErrors.email = "Email is required";
    if(!password) newErrors.password = "Password is required"
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

// //Clear inputs and errors
//   setUsername("");
//   setEmail("");
//   setPassword("");
//   setErrors({});


  return(
    <form onSubmit={handleSubmit} >

      <input 
        type="text"
        name="username"
        placeholder="John Doe"
        value={username}
        onChange={handleChange}
      />
      {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

      <input 
        type="text"
        name="email"
        placeholder="johdoe@gmail.com"
        value={email}
        onChange={handleChange}
      />
      {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

      <input 
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
}