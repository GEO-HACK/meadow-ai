import React from "react";
import image from "../assets/img-01.png";
import image2 from "../assets/img-02.png";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="flex justify-center px-4 my-10">
      <motion.div
        className="flex flex-col md:flex-row max-w-[1100px] gap-8 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-800 bg-black/50 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image2}
            alt="Farmer with oranges"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text & Features Section */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Small Image */}
          <motion.div
            className="w-full max-w-[350px] mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image}
              alt="Gardening"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Heading & Description */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left">
              Introducing{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-md shadow-md">
                Data Driven
              </span>{" "}
              Agriculture.
            </h2>
            <p className="text-md text-gray-300 mt-5 text-center md:text-left">
              Using machine learning for **data-driven crop cultivation**, farmers
              can **optimize yields** by analyzing soil quality, weather patterns,
              and crop health—leading to **smarter, more efficient farming**.
            </p>

            {/* Features List */}
            <motion.ul
              className="grid grid-cols-2 gap-3 text-gray-200 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                "Increased crop yield",
                "Efficient resource use",
                "Improved crop quality",
                "Reduced environmental impact",
                "Cost savings",
                "Smart irrigation",
                "Early disease detection",
                "Automated farming insights",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 hover:text-green-400 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  ✅ {feature}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
