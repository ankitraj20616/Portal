import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { AuthForm } from "./components/AuthForm.jsx";
import { Dashboard } from "./components/Dashboard.jsx";
import { useState } from "react";
function App() {
  const [view, setView] = useState("landing");
  const [user, setUser] = useState(null);

  const handleNavigate = (newView) => {
    setView(newView);
  };

  const handleLogin = (name) => {
    setUser({ name });
    // Redirecting to landing for now since Dashboard is removed
    setView("landing");
    alert(`Welcome, ${name}! Dashboard is currently under construction.`);
  };

  const handleLogout = () => {
    setUser(null);
    setView("landing");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1c23]">
      <Navbar
        onNavigate={handleNavigate}
        isLoggedIn={!!user}
        onLogout={handleLogout}
        view={view}
      />

      <main className="flex-grow flex items-center justify-center px-4">
        {view === "landing" && <Hero onLoginClick={() => setView("login")} />}

        {(view === "login" || view === "register") && (
          <AuthForm
            mode={view}
            onSuccess={handleLogin}
            onSwitch={() => setView(view === "login" ? "register" : "login")}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
