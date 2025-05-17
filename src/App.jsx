import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Discography from "./components/Discography";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Auth from "./auth/Auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in (for persistent login)
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");
    if (isAuthenticated === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle successful login and update state
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Persist login state
  };

  // Function to handle logout (optional)
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login state on logout
  };

  return (
    <>
      {/* Show Navbar only if logged in */}
      {isLoggedIn && <Navbar handleLogout={handleLogout} />}

      {/* Protect Routes */}
      <Routes>
        {/* Protected Routes */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/discography"
          element={isLoggedIn ? <Discography /> : <Navigate to="/login" />}
        />
        <Route
          path="/events"
          element={isLoggedIn ? <Events /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
        />

        {/* Login Page - Show the Auth component */}
        <Route
          path="/login"
          element={<Auth setIsLoggedIn={handleLogin} />}
        />
      </Routes>
    </>
  );
};

export default App;