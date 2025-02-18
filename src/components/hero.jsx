import React from "react";
import Button from "./button"
import Infobox from "./infobox";
import tractorImage from "../assets/Picture3.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white bg-black h-[500px]">
      <img className="absolute inset-0 object-cover w-full h-full opacity-50" src={tractorImage} alt="tractor" />
      
      <div className="relative z-10 px-6 py-16 md:py-24">
        <Infobox info="AI in Agriculture" background_color="white" />
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Revolutionizing Smallholder Agriculture
        </h1>
        <p className="mt-2 text-lg sm:text-xl">Transforming the future of farming</p>
        
        <div className="mt-6">
          <Button text="Get Started" color="white" link="" text_color="black" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
