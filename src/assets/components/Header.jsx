import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Navigation Items
  const navItems = [
    { link: "Home", path: "/home" },
    { link: "About Us", path: "/about-us" },
    { link: "Manifesto", path: "/manifesto" },
    { link: "Our Services", path: "/our-services" },
    { link: "Testimonial", path: "/testimonial" },
    { link: "FAQ", path: "/faq" },
    { link: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[50px] md:w-[70px] object-cover"
            onError={(e) => (e.target.src = "/fallback-logo.jpg")} // Fallback for logo
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ link, path }) => (
            <a
              href={path}
              key={path}
              className="text-base text-gray-700 font-medium px-3 py-2 rounded-md hover:text-blue-600 hover:bg-blue-100 transition duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Login / Sign Up (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="text-base font-medium text-blue-500 px-4 py-2 hover:bg-blue-100 rounded-md transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-base text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-3 absolute top-full left-0 right-0">
          <nav className="flex flex-col space-y-2">
            {navItems.map(({ link, path }) => (
              <a
                href={path}
                key={path}
                className="text-base text-gray-700 font-medium px-4 py-2 hover:bg-blue-100 hover:text-blue-600 rounded-md transition"
              >
                {link}
              </a>
            ))}
            <a
              href="/login"
              className="text-base font-medium text-blue-500 px-4 py-2 hover:bg-blue-100 rounded-md transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-base text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
