import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { AuthForm } from "./components/AuthForm.jsx";
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
import * as ReactRouterDOM from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider.jsx";

const { BrowserRouter: Router, Routes, Route, Navigate } = ReactRouterDOM;

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#1a1c23]">
        <Navbar onLogout={handleLogout} />

        <main className="flex-grow flex items-center justify-center px-4">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <AuthForm mode="login" onSuccess={handleLogin} />
                )
              }
            />
            <Route
              path="/register"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <AuthForm mode="register" onSuccess={handleLogin} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
