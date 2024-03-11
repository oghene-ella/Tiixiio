import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex justify-center py-1 bg-orange-50">
      <div className="w-10/12 px-4 md:px-8 lg:px-0">
        <div className="flex justify-between items-center">
          {/* Dropdown Menu */}
          <div className="relative md:hidden">
            <button
              className="flex items-center text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
            {/* Dropdown Content */}
            {isOpen && (
              <div className="absolute -left-9 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <a
                    href="#about"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                  <a
                    href="#event"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                    onClick={toggleMenu}
                  >
                    Events
                  </a>
                  <Link
                    to="/sign_up"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                    onClick={toggleMenu}
                  >
                    Log In
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Desktop Navigation */}
          <section className="hidden md:flex gap-8">
            <Link to="/" className="font-light text-sm">
              Home
            </Link>
            <a href="#about" className="font-light text-sm">
              About
            </a>
            <a href="#event" className="font-light text-sm">
              Events
            </a>
          </section>
          <div className="flex-none px-2 mx-2">
            <Link to="/" className="text-lg font-bold">
              <img src={Logo} alt="logo" className="w-20 h-20" />
            </Link>
          </div>
          <section className="hidden md:flex gap-6 items-center">
            <Link
              to="/sign_up"
              className="px-5 py-2 rounded-md text-gray-800 font-light text-sm"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-orange-600 px-6 py-2 text-center text-sm rounded-2xl text-white font-medium"
            >
              Log In
            </Link>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;