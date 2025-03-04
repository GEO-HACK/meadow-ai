import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" min-h-max bg-green-100 text-white p-8 flex flex-row gap-4">
      <div className="flex flex-col gap-2 w-[30%]">
        <p className="text-2xl font-bold text-gray-600">
          Meadow <span className="text-green-600">AI</span>
        </p>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque autem quia fugiat, cupiditate molestias et eligendi magni quaerat aperiam,</p>
      </div>
      <div className="flex flex-col gap-2 w-[30%] items-center justify-start">
        <span className="text-md font-semibold text-green-500">Quick Links</span>
        <Link  to="/"   className="text-gray-600  hover:text-amber-600 hover:underline">Home</Link>
        <Link  to="/about " className="text-gray-600 hover:text-amber-600 hover:underline">About</Link>
        <Link  to="/services " className="text-gray-600 hover:text-amber-600 hover:underline">Services</Link>
        <Link  to="/contact " className="text-gray-600 hover:text-amber-600 hover:underline">Contact</Link>

      </div>
    </div>
  );
};

export default Footer;
