import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { AuthForm } from "./components/AuthForm.jsx";
import * as ReactRouterDOM from "react-router-dom";
import { useState } from "react";

const { BrowserRouter: Router, Routes, Route, Navigate } = ReactRouterDOM;

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#1a1c23]">
        <Navbar isLoggedIn={!!user} onLogout={handleLogout} />

        <main className="flex-grow flex items-center justify-center px-4">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <AuthForm mode="login" onSuccess={handleLogin} />
                )
              }
            />
            <Route
              path="/register"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <AuthForm mode="register" onSuccess={handleLogin} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
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
