import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="font-bold text-3xl text-gray-800">
          Meadow<span className="text-green-600">AI</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Journey", path: "/journey" },
            { name: "Blog", path: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-800 hover:text-green-600 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation (Toggled) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-4 py-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Journey", path: "/journey" },
            { name: "Blog", path: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-800 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
