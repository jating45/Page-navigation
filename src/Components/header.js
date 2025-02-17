import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-brand btn btn-link" onClick={() => navigate("/")}>Page Navigation</button>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate("/")}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate("/about")}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate("/login")}>Login</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate("/register")}>Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

