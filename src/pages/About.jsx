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
      {/* Hero Section with Video Background */}

      {/* <div className="relative min-h-[300px]">
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
      </div> */}

      {/* First Content Section */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, x: -50 }}
        animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-row gap-4 p-4 mt-5 items-center"
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
            className="rounded-lg"
          />
        </motion.div>
        <div className="flex-1">
          
          <h1 className="text-3xl font-bold text-green-500">About us</h1>

          <h1 className="text-4xl font-semibold">
            {" "}
            <span className="border-b-2 border-green-600">
              Meadow <span className="text-green-600">AI</span>
            </span>
          </h1>
          <p className="text-lg mt-2 text-start leading-loose text-gray-100">
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
      <section className="p-4 mt-5 h-[600px] bg-[url('/africa.png')] bg-cover bg-center">
        <div className="flex flex-row justify-evenly p-4 items-center">
          <div className="w-[350px] flex flex-col items-center gap-5 bg-amber-950 p-5 rounded-lg transition-all duration-300 group hover:bg-amber-500">
            <MountainSnow
              size={60}
              className="text-green-600 group-hover:text-white"
            />
            <h1 className="font-bold text-amber-800 text-4xl group-hover:text-white">
              mission
            </h1>
            <p className="text-gray-300 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              exercitationem iusto similique dicta eum voluptatem, quidem
              debitis molestias nostrum, distinctio illo fugit nesciunt
              aspernatur, ratione fuga? Laboriosam tempore tenetur sit!
            </p>
          </div>

          <div className="w-[350px] flex flex-col items-center mt-20 gap-5 bg-red-950 p-5 rounded-lg transition-all duration-300 group hover:bg-red-500">
            <Telescope
              size={60}
              className="text-green-600 group-hover:text-white"
            />
            <h1 className="font-bold text-amber-800 text-4xl group-hover:text-white">
              vision
            </h1>
            <p className="text-gray-300 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              exercitationem iusto similique dicta eum voluptatem, quidem
              debitis molestias nostrum, distinctio illo fugit nesciunt
              aspernatur, ratione fuga? Laboriosam tempore tenetur sit!
            </p>
          </div>

          <div className="w-[350px] flex flex-col items-center mt-40 gap-5 bg-blue-950 p-5 rounded-lg transition-all duration-300 group hover:bg-blue-500">
            <Gem size={60} className="text-green-600 group-hover:text-white" />
            <h1 className="font-bold text-amber-800 text-4xl group-hover:text-white">
              value
            </h1>
            <p className="text-gray-300 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              exercitationem iusto similique dicta eum voluptatem, quidem
              debitis molestias nostrum, distinctio illo fugit nesciunt
              aspernatur, ratione fuga? Laboriosam tempore tenetur sit!
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
                Hello, this is the section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus, dolorem quisquam. Voluptatum tenetur fugit quasi
                nostrum debitis! Molestiae sit atque tenetur explicabo, dicta
                quasi optio at vel eligendi omnis quia?
              </p>
            </div>
            <div className="bg-white w-full max-w-[400px] p-4 gap-3 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white">
              <h1 className="font-bold text-lg text-gray-500 hover:text-white">
                Hello, this is the section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus, dolorem quisquam. Voluptatum tenetur fugit quasi
                nostrum debitis! Molestiae sit atque tenetur explicabo, dicta
                quasi optio at vel eligendi omnis quia?
              </p>
            </div>
            <div className="bg-white w-full max-w-[400px] p-4 gap-3 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white">
              <h1 className="font-bold text-lg text-gray-500 hover:text-white">
                Hello, this is the section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus, dolorem quisquam. Voluptatum tenetur fugit quasi
                nostrum debitis! Molestiae sit atque tenetur explicabo, dicta
                quasi optio at vel eligendi omnis quia?
              </p>
            </div>
            <div className="bg-white w-full max-w-[400px] p-4 gap-3 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-green-600 hover:text-white">
              <h1 className="font-bold text-lg text-gray-500 hover:text-white">
                Hello, this is the section
              </h1>
              <p className="text-gray-600 text-md mt-2 hover:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus, dolorem quisquam. Voluptatum tenetur fugit quasi
                nostrum debitis! Molestiae sit atque tenetur explicabo, dicta
                quasi optio at vel eligendi omnis quia?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team/>
      <InvestorsSection/>
    </div>
  );
};

export default About;
