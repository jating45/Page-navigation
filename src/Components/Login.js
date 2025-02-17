import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Login</h2>
      <form className="w-50 mx-auto mt-3 p-4 border rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3">Don't have an account? <button className="btn btn-link" onClick={() => navigate("/register")}>Register here</button></p>
    </div>
  );
};

export default LoginPage;
