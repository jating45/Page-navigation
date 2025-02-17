import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    alert("You have been logged out.");
    navigate("/login");
  }, [navigate]);

  return (
    <div className="container text-center mt-5">
      <h2>Logging out...</h2>
      <p>Navigate to other pages:</p>
      <button className="btn btn-primary m-2" onClick={() => navigate("/")}>Home</button>
      <button className="btn btn-secondary m-2" onClick={() => navigate("/about")}>About</button>
      <button className="btn btn-success m-2" onClick={() => navigate("/register")}>Register</button>
      <button className="btn btn-info m-2" onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default LogoutPage;
