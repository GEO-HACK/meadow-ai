import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <Link to="/">
        <p className="text-3xl font-bold text-gray-800">
          Meadow <span className="text-green-600">AI</span>
        </p>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-green-600 transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-green-600 transition-colors font-medium"
        >
          About
        </Link>
        <Link
          to="/journey"
          className="text-gray-700 hover:text-green-600 transition-colors font-medium"
        >
          Journey
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-green-600 transition-colors font-medium"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
