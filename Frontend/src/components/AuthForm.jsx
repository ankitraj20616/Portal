import { useState } from "react";

export const AuthForm = ({ mode, onSuccess, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to Django backend
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(email.split("@")[0]);
    }, 800);
  };

  return (
    <div className="w-full max-w-md animate-fadeIn">
      <div className="bg-[#24262d] rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
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

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1c23] border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all transform active:scale-[0.98] flex justify-center items-center"
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
          <p className="text-gray-400">
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
