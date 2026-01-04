import * as ReactRouterDOM from "react-router-dom";
const { Link, useNavigate, useLocation } = ReactRouterDOM;
export const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/");
  };

  return (
    <header className="w-full border-b border-gray-800 bg-[#1a1c23] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl text-white font-medium tracking-tight hover:text-cyan-400 transition-colors"
        >
          Stock Prediction Portal
        </Link>

        <div className="flex space-x-3">
          {isLoggedIn ? (
            <>
              <span className="hidden md:inline-block text-gray-400 py-2 px-4 italic">
                Welcome back
              </span>
              <button
                onClick={handleLogoutClick}
                className="px-5 py-2 rounded-md border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-5 py-2 rounded-md border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-200 ${
                  location.pathname === "/login" ? "bg-cyan-500/10" : ""
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
