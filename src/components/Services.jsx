import React from "react";
import { motion } from "framer-motion";
import { Activity, Droplets, CloudSunRain, TrendingUpDown } from "lucide-react";
import CustomAccordion from "./Accordion";
import journey from "./journey";
import Journey from "./journey";

const AnimatedCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="relative flex flex-col items-start gap-3 p-4 w-[250px] bg-black/50 border border-gray-800 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-green-400/50 transition-all"
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { scale: 1 },
        hover: {
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-white">
        {icon}
        <h1 className="font-semibold text-2xl mt-4 text-green-400">{title}</h1>
        <p className="text-sm text-gray-300 mt-3">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden">
      {/* Particles Background */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-white">
          Revolutionize Your Farm With <br />
          <span className="block border-b-2 border-green-500 inline-block">
            The Power of AI
          </span>
        </h1>
        <p className="text-md mt-3 text-gray-300 max-w-[600px]">
          We offer **data-driven crop monitoring solutions** to help farmers and
          agricultural companies track **crop health, weather patterns,** and
          **predict yield** efficiently.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <AnimatedCard
            icon={<Activity size={48} className="text-green-400" />}
            title="Crop Health"
            description="Monitor vitality by detecting signs of stress, disease, and pests early."
          />
          <AnimatedCard
            icon={<Droplets size={48} className="text-blue-400" />}
            title="Moisture Update"
            description="Track soil moisture levels to optimize irrigation and prevent water stress."
          />
          <AnimatedCard
            icon={<CloudSunRain size={48} className="text-yellow-400" />}
            title="Weather Forecast"
            description="Access predictive weather data to plan farming activities effectively."
          />
          <AnimatedCard
            icon={<TrendingUpDown size={48} className="text-purple-400" />}
            title="Yield Prediction"
            description="Utilize AI-driven insights to estimate crop yields and improve planning."
          />
        </div>
      </div>
      <section className=" flex items-center justify-center w-[100%] mt-6">
        <div>
          <Journey />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 flex flex-col items-center w-[80%] justify-center min-h-max mt-10 mb-3 gap-6 bg-black/60 border border-gray-800 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-400 border-b-2 border-green-500 inline-block pb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 mt-3">
            Find answers to commonly asked questions about Meadow AI.
          </p>
        </div>

        <div className>
          <CustomAccordion />
        </div>
      </section>
    </div>
  );
};

export default Services;
