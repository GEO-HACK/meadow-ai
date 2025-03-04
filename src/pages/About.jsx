import { div } from "framer-motion/client";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="relative min-h-[300px]">
        {/* Video Background */}
        <video
          src="/video.mp4" // Replace with your actual video path
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-[300px] object-cover z-0"
        />

        {/* Optional Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10" />

        {/* Content Section */}
        <section className="relative z-20 flex flex-col items-center  min-h-[300px]  text-white">
          <div className="m-auto">
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>
        </section>
      </div>
      <div className="flex flex-row gap-4 p-4 mt-5 items-center">
        <div className="flex-1 ">
          <h1 className="text-2xl font-semibold ">
            The Idea behind{" "}
            <span className="border-b-2 border-green-600">
              Meadow <span className="text-green-600 ">AI</span>
            </span>
          </h1>
          <p className="text-md mt-2 text-start leading-loose text-gray-600 ">
            Meadow AI is a machine learning-powered crop prediction system
            designed to help small-scale farmers make data-driven decisions. The
            system consists of a React Native application that collects relevant
            features and predicts the most probable crop labels by communicating
            with a proxy server, which in turn interacts with a deployed machine
            learning model on Hugging Face.
          </p>
        </div>
        <div className="flex-1">
          <img
           src="/about.jpg"
            alt=""
            className="rounded-lg" />
        
        </div>
      </div>
    </div>
  );
};

export default About;
