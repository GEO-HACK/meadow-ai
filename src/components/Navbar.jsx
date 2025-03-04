import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import phone from "../assets/telephone.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      {/* nav section */}
      <Link to="/">
          <p className="text-2xl font-bold text-gray-600">
            Meadow <span className="text-green-600">AI</span>
          </p>
        </Link>

      {/* logo section */}

      <div className="flex items-center">
      
      <nav className="flex flex-row justify-between items-center">
        <Link to="/" className="hover:bg-gray-200 px-3 py-2 rounded-md">
          Home
        </Link>
        <Link to="/about" className="hover:bg-gray-200 px-3 py-2 rounded-md">
          About
        </Link>
        <Link to="/services" className="hover:bg-gray-200 px-3 py-2 rounded-md">
          Services
        </Link>
        <Link to="/contact" className="hover:bg-gray-200 px-3 py-2 rounded-md">
          Contact
        </Link>
      </nav>
      </div>
      {/* contact section */}
      <div className="flex items-center space-x-4">
        <img className="h-8 w-8" src={phone} alt="phone" />
        <div className="flex flex-col items-center text-sm">
          <span>Call us now</span>
          <span>(+254)7** ******</span>
        </div>
        <Button
          text="Get In Touch"
          color="#EDDD5E"
          link="https://github.com/VictorCodebase"
        />
      </div>
    </div>
  );
};

export default Navbar;
