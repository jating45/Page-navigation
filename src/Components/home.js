import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
      <div className="card shadow-lg" style={{ maxWidth: "40rem" }}>
      
        <div className="card-body text-center">
          <h1 className="card-title text-primary">Welcome to Our Website</h1>
          <p className="card-text text-muted">
            Discover the beauty of nature and explore breathtaking landscapes.
            Our website brings you stunning visuals and informative content.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
