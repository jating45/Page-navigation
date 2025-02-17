import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container text-center mt-5">
      <h2>Register Your Self First  </h2>
      <form className="w-50 mx-auto mt-3 p-4 border rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="fullName" placeholder="Enter full name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <p className="mt-3">Already have an account? <button className="btn btn-link" onClick={() => navigate("/login")}>Login here</button></p>
    </div>
  );
};

export default RegisterPage;

