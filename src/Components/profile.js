import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <div className="container text-center mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-brand btn btn-link" onClick={() => navigate("/")}>Home</button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {user && (
                <li className="nav-item">
                  <span className="nav-link">Welcome, {user.fullName}</span>
                </li>
              )}
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>Profile Page</h2>
      {user ? (
        <div className="card w-50 mx-auto p-4 shadow">
          <h4>{user.fullName}</h4>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
