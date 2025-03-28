import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MountainSnow, Telescope, Gem } from "lucide-react";
import Team from "../components/Team";
import InvestorsSection from "../components/Investors";

const About = () => {
  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
  });
  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-black text-white">
      {/* First Content Section */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, x: -50 }}
        animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-4 p-4 mt-5 items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={firstSectionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="/about.jpg"
            alt="Meadow AI Concept"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-green-500">About us</h1>
          <h1 className="text-4xl font-semibold">
            <span className="border-b-2 border-green-600">
              Meadow <span className="text-green-600">AI</span>
            </span>
          </h1>
          <p className="text-lg mt-2 leading-loose text-gray-100">
            Meadow AI is a machine learning-powered crop prediction system
            designed to help small-scale farmers make data-driven decisions.
            Using a React Native application, the system collects field data and
            predicts the most suitable crops based on a trained AI model hosted
            on Hugging Face. This enables farmers to optimize their yields with
            science-backed insights.
          </p>
        </div>
      </motion.div>

      {/* Second Content Section with New Text */}
      <section className="p-4 mt-5 bg-[url('/africa.png')] bg-cover  bg-center">
        <div className="flex flex-col md:flex-row justify-center gap-10  items-center">
          <div className="w-full max-w-[350px] flex flex-col items-center gap-5 bg-amber-950 p-5 rounded-lg transition-all duration-300 group hover:bg-amber-500">
            <MountainSnow
              size={60}
              className="text-green-600 group-hover:text-white"
            />
            <h1 className="font-bold text-amber-800 text-4xl group-hover:text-white">
              mission
            </h1>
            <p className="text-gray-300 group-hover:text-white text-center">
              To create AI systems that grow and adapt like natural ecosystems —
              seamlessly integrating with human workflows to solve complex
              challenges while nurturing ethical innovation.
            </p>
          </div>

          <div className="w-full max-w-[350px] flex flex-col items-center gap-5 bg-red-950 p-5 rounded-lg transition-all duration-300 group hover:bg-red-500">
            <Telescope
              size={60}
              className="text-green-600 group-hover:text-white"
            />
            <h1 className="font-bold text-amber-800 text-4xl group-hover:text-white">
              vision
            </h1>
            <p className="text-gray-300 group-hover:text-white text-center">
              "We develop intuitive AI tools that transform raw data into
              actionable intelligence, prioritizing transparency, security, and
              measurable impact for businesses and communities."
            </p>
          </div>

          <div className="w-full max-w-[350px] flex flex-col items-center gap-5 bg-blue-950 p-5 rounded-lg transition-all duration-300 group hover:bg-blue-500">
            <Gem size={60} className="text-green-600 group-hover:text-white" />
            <h1 className="font-bold text-amber-800 text-4xl group-hover:text-white">
              value
            </h1>
            <p className="text-gray-300 group-hover:text-white text-center">
              Ethical AI grown transparently, built collaboratively, and
              harvested responsibly—balancing innovation with human-centric
              design
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-10">
        <div className="flex flex-col items-center p-4">
          <h1 className="text-green-400 font-bold text-4xl">Why Us</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white w-full max-w-[400px] p-4 gap-3 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white">
              <h1 className="font-bold text-lg text-gray-500 hover:text-white">
                First Section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam temporibus quas aliquam tempora eaque rem sequi facere
                magnam alias fugit, dolore nemo praesentium est id veniam
                pariatur quo ullam asperiores.
              </p>
            </div>
            <div className="bg-white w-full max-w-[400px] p-4 gap-3 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white">
              <h1 className="font-bold text-lg text-gray-500 hover:text-white">
                Second Section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                at fugiat quaerat blanditiis, maxime deleniti accusantium sed
                doloremque nostrum? Illum cupiditate vitae sunt est alias
                molestias, soluta voluptas animi laboriosam.
              </p>
            </div>
            <div className="bg-white w-full max-w-[400px] p-4 gap-3 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white">
              <h1 className="font-bold text-lg text-gray-500 hover:text-white">
                Third Section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                ad commodi vero neque ab, porro at asperiores eaque esse soluta
                voluptas excepturi vitae reprehenderit sed harum numquam aliquam
                voluptate animi.
              </p>
            </div>
            <div className="bg-white w-full max-w-[400px] p-4 gap-3 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white">
              <h1 className="font-bold text-lg text-gray-500 hover:text-white">
                Fourth Section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore repellat laboriosam voluptatem commodi aut deleniti
                minus, sit velit voluptatum laborum repellendus quis ipsum
                possimus eos. Mollitia deleniti iure veritatis qui.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <InvestorsSection />
    </div>
  );
};

export default About;
