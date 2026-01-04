import { useState } from "react";
import * as ReactRouterDOM from "react-router-dom";

const { useNavigate } = ReactRouterDOM;

export const AuthForm = ({ mode, onSuccess }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSwitch = () => {
    setError(null);
    navigate(mode === "login" ? "/register" : "/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const endpoint =
      mode === "register" ? `${baseUrl}/register/` : `${baseUrl}/login/`;

    const payload =
      mode === "register"
        ? { username, email, password }
        : { username, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg =
          data.detail ||
          (data.username ? `Username: ${data.username[0]}` : null) ||
          (data.email ? `Email: ${data.email[0]}` : null) ||
          (data.password ? `Password: ${data.password[0]}` : null) ||
          "Something went wrong. Please try again.";
        throw new Error(errorMsg);
      }

      if (mode === "register") {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        onSuccess({ name: username || "User", data });
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md animate-fadeIn">
      <div className="bg-[#24262d] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1c23] border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors"
                placeholder="ankit_raj"
              />
            </div>

            {mode === "register" && (
              <div className="animate-slideDown">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1c23] border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1c23] border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all transform active:scale-[0.98] flex justify-center items-center shadow-lg shadow-cyan-500/20"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : mode === "login" ? (
                "Login"
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>

        <div className="bg-[#1a1c23] p-6 text-center border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <button
              onClick={onSwitch}
              className="ml-2 text-cyan-400 hover:underline font-medium"
            >
              {mode === "login" ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
