import React from "react";
import { motion } from "framer-motion";
import { Activity, Droplets, CloudSunRain, TrendingUpDown } from "lucide-react";
import CustomAccordion from "./Accordion";


const AnimatedCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="relative flex flex-col items-start gap-3 p-3 w-[250px] bg-gray-100 rounded-xl overflow-hidden cursor-pointer"
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { backgroundColor: "rgb(243 244 246)" }, 
        hover: { backgroundColor: "rgb(74 222 128)", transition: { duration: 0.4, ease: "easeInOut" } }, // green-400
      }}
    >
      
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { scaleX: 0, scaleY: 0, originX: 1, originY: 1 },
          hover: { scaleX: 1, scaleY: 1, transition: { duration: 0.4, ease: "easeInOut" } },
        }}
        initial="initial"
        animate="initial"
      />

      {/* Content */}
      <div className="relative z-10 transition-colors mt-4 mb-5">
        {icon}
        <h1 className="font-bold text-2xl transition-colors"> {title} </h1>
        <p className="text-md transition-colors"> {description} </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
   <div className="flex flex-col items-center min-h-max mt-6 gap-4">
    <div className="flex flex-col items-center min-h-max mt-6">
      <h1 className="font-bold text-3xl text-center">
        Revolutionize Your Farm With <br />
        <span className="block text-center border-b-2 border-green-500">
          The Power of AI
        </span>
      </h1>
      <p className="text-md mt-2 text-center">
        We are offering data-driven crop monitoring solutions to help farmers
        and agricultural companies monitor crop <br />
        <span className="block text-center">
          health, weather patterns, and predict yield.
        </span>
      </p>

      <div className="flex flex-row mt-6 justify-evenly w-full flex-wrap gap-6">
        <AnimatedCard
          icon={<Activity size={48} className="text-green-600 block text-center" />}
          title="Crop Health"
          description="Monitor crop vitality by detecting signs of stress, disease, and pests early to ensure optimal growth."
        />
        <AnimatedCard
          icon={<Droplets size={48} className="text-green-600 block text-center" />}
          title="Moisture Update"
          description="Stay informed about soil moisture levels to optimize irrigation and prevent water stress."
        />
        <AnimatedCard
          icon={<CloudSunRain size={48} className="text-green-600 block text-center" />}
          title="Weather Forecast"
          description="Access real-time and predictive weather data to plan farming activities effectively."
        />
        <AnimatedCard
          icon={<TrendingUpDown size={48} className="text-green-600 block text-center" />}
          title="Yield Prediction"
          description="Utilize AI-driven insights to estimate crop yields and improve harvest planning."
        />
      </div>
    </div>
    <div><p className="font-bold text-3xl mb-6 border-b-1 border-green-500">Frequently Asked Questions</p></div>
    <CustomAccordion />
   </div>
  );
};

export default Services;
