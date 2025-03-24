import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-800 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="logo.png" 
              alt="Meadow AI" 
              className="w-12 h-12"
            />
            <h3 className="text-2xl font-bold">
              Meadow <span className="text-green-600">AI</span>
            </h3>
          </div>
          <p className="italic">"Cultivating smarter futures with AI"</p>
          <div className="flex gap-4">
            <FaLinkedin className="text-gray-600 hover:text-green-600 text-xl cursor-pointer" />
            <FaTwitter className="text-gray-600 hover:text-green-600 text-xl cursor-pointer" />
            <FaGithub className="text-gray-600 hover:text-green-600 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-green-600">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/journey" className="hover:text-green-600 hover:underline">
                Journey
              </Link>
            </li> <li>
              <Link to="/blog" className="hover:text-green-600 hover:underline">
               Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-green-600">Contact Us</h4>
          <address className="not-italic space-y-2">
            <p>meadowai@gmail.com</p>
            <p>+254(12345678)</p>
            <p>Nairobi, Kenya</p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-300">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Meadow AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;