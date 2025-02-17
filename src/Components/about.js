
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h2>About Us</h2>
      <p>Welcome to MyWebsite! We are dedicated to providing the best services and information.</p>
      <p>Use the navigation buttons below to explore more:</p>
      <button className="btn btn-primary m-2" onClick={() => navigate("/")}>Go to Home</button>
      <button className="btn btn-secondary m-2" onClick={() => navigate("/login")}>Go to Login</button>
      <button className="btn btn-success m-2" onClick={() => navigate("/register")}>Go to Register</button>
    </div>
  );
};

export default AboutPage;
