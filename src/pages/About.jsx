import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({ triggerOnce: true });
  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({ triggerOnce: true });

  return (
    <div>
      {/* Hero Section with Video Background */}
      <div className="relative min-h-[300px]">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-[300px] object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        <section className="relative z-20 flex flex-col items-center min-h-[300px] text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="m-auto"
          >
            <h1 className="text-4xl font-bold">About Us</h1>
          </motion.div>
        </section>
      </div>

      {/* First Content Section */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, x: -50 }}
        animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-row gap-4 p-4 mt-5 items-center"
      >
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">
            The Idea Behind{" "}
            <span className="border-b-2 border-green-600">
              Meadow <span className="text-green-600">AI</span>
            </span>
          </h1>
          <p className="text-lg mt-2 text-start leading-loose text-gray-600">
            Meadow AI is a machine learning-powered crop prediction system
            designed to help small-scale farmers make data-driven decisions.
            Using a React Native application, the system collects field data and
            predicts the most suitable crops based on a trained AI model hosted
            on Hugging Face. This enables farmers to optimize their yields with
            science-backed insights.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={firstSectionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img src="/about.jpg" alt="Meadow AI Concept" className="rounded-lg" />
        </motion.div>
      </motion.div>
      

      {/* Second Content Section with New Text */}
      <motion.div
        ref={secondSectionRef}
        initial={{ opacity: 0, x: 50 }}
        animate={secondSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-row gap-8 items-center mt-6 h-[500px]"
      >
        <div className="grid grid-cols-2 flex-1 gap-5">
          <motion.img
            src="/about.jpg"
            alt="Farming Tech"
            className="rounded-lg w-[300px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={secondSectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src="/about.jpg"
            alt="AI in Agriculture"
            className="rounded-lg w-[300px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={secondSectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.img
            src="/about.jpg"
            alt="Sustainable Farming"
            className="rounded-lg w-[300px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={secondSectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">
            Transforming Agriculture with{" "}
            <span className="border-b-2 border-green-600">
              Meadow <span className="text-green-600">AI</span>
            </span>
          </h1>
          <p className="text-lg mt-2 text-start leading-loose text-gray-600">
            Meadow AI is not just a crop prediction tool—it’s a game-changer for
            precision farming. By integrating AI-driven insights, small-scale
            farmers gain access to predictive analytics that help them choose
            the best crops, manage resources efficiently, and enhance productivity.
            The platform evolves with real-time data, ensuring that farmers receive
            up-to-date recommendations tailored to their specific environment.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
