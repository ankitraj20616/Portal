export const Navbar = ({ onNavigate, isLoggedIn, onLogout, view }) => {
  return (
    <header className="w-full border-b border-gray-800 bg-[#1a1c23] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-medium tracking-tight cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={() => onNavigate("landing")}
        >
          Stock Prediction Portal
        </h1>

        <div className="flex space-x-3">
          {isLoggedIn ? (
            <>
              <span className="hidden md:inline-block text-gray-400 py-2 px-4 italic">
                Welcome back
              </span>
              <button
                onClick={onLogout}
                className="px-5 py-2 rounded-md border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onNavigate("login")}
                className={`px-5 py-2 rounded-md border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-200 ${
                  view === "login" ? "bg-cyan-500/10" : ""
                }`}
              >
                Login
              </button>
              <button
                onClick={() => onNavigate("register")}
                className="px-5 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-200"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
