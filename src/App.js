import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header"; 
import HomePage from "./Components/home";
import AboutPage from "./Components/about";
import LoginPage from "./Components/Login";
import RegisterPage from "./Components/register";
import ProfilePage from "./Components/profile";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
