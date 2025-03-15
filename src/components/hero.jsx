import React from "react";
import Button from "./button";
import Infobox from "./infobox";
import tractorImage from "../assets/Picture3.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center rounded-t-[30px] text-white m-8 bg-black h-[500px] overflow-hidden">
      <motion.img 
        className="absolute inset-0 object-cover rounded-t-[30px] w-full h-full opacity-50"
        src={tractorImage} 
        alt="tractor" 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="relative z-10 px-6 py-16 md:py-24 max-w-3xl">
        <Infobox info="AI in Agriculture" background_color="white" />
        <motion.h1 
          className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Revolutionizing Smallholder Agriculture
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transforming the future of farming with cutting-edge AI solutions
        </motion.p>
        
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button text="Get Started" color="white" link="" text_color="black" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;