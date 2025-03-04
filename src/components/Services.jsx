import React from "react";
import { motion } from "framer-motion";
import { Activity, Droplets, CloudSunRain, TrendingUpDown } from "lucide-react";

const Services = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-max mt-6">
      <h1 className="font-bold text-3xl alignt-center">
        Revolutionaise Your Farm With <br />
        <span className="block text-center border-b-1 border-green-500">
          The Power of Ai
        </span>
      </h1>
      <p className="text-md mt-2">
        We are offering data-driven crop monitoring solutions to help farmers
        and agricultural companies monitor crop
        <br />{" "}
        <span className="block text-center">
          health, weather patterns and predict yield.
        </span>
      </p>

      <div className="flex flex-row mt-6 justify-evenly w-full">
        <motion.div className="flex flex-col items-start gap-2 p-3 w-[250px] h- bg-gray-100 rounded-xl hover:bg-green-400 hover:text-white ">
          <Activity size={48} className="text-green-600  block text-center" />
          <h1 className="font-bold text-2xl">Crop Health</h1>
          <p className="text-sm">
            Monitor crop vitality by detecting signs of stress, disease, and
            pests early to ensure optimal growth.
          </p>
        </motion.div>
        <div className="flex flex-col items-start gap-2 p-3 w-[250px] bg-gray-100 rounded-xl">
          <Droplets size={48} className="text-green-600  block text-center" />
          <h1 className="font-bold text-2xl">Moisture Update</h1>
          <p className="text-sm">
            Stay informed about soil moisture levels to optimize irrigation and
            prevent water stress.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-3 w-[250px] bg-gray-100 rounded-xl">
          <CloudSunRain
            size={48}
            className="text-green-600  block text-center"
          />
          <h1 className="font-bold text-2xl">Weather Forecast</h1>
          <p className="text-sm">
            Access real-time and predictive weather data to plan farming
            activities effectively.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-3 w-[250px] bg-gray-100 rounded-xl">
          <TrendingUpDown
            size={48}
            className="text-green-600  block text-center"
          />
          <h1 className="font-bold text-2xl">Yield Prediction</h1>
          <p className="text-sm">
            Utilize AI-driven insights to estimate crop yields and improve
            harvest planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
