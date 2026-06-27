
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold">
          <span className="text-gray-900">Lawctopus</span>
          <span className="text-orange-500">Learn</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500 transition"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/opportunities"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500 transition"
            }
          >
            Opportunities
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "hover:text-orange-500 transition"
            }
          >
            About
          </NavLink>

        </nav>

        {/* CONTACT BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-800"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">

          <div className="px-6 py-5 space-y-5">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-500"
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-500"
            >
              Courses
            </NavLink>

            <NavLink
              to="/opportunities"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-500"
            >
              Opportunities
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-500"
            >
              About
            </NavLink>

            <button
              onClick={() => {
                navigate("/contact");
                setMenuOpen(false);
              }}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold"
            >
              Contact Us
            </button>

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;

