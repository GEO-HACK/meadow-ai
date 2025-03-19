import React from "react";
import { motion } from "framer-motion";

const CustomerEngagement = () => {
  return (
    <div className="relative overflow-hidden py-20 bg-gray-950">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl opacity-40"></div>

      <section className="relative z-10 text-center">
        {/* Section Title with Neon Glow */}
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Customer Engagement & Validation
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-12 px-6">
          {/* Left - Text Content */}
          <motion.div
            className="md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-green-400/30"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl text-green-400 font-semibold mb-4">
              Customer Engagement
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We harness cutting-edge AI-driven insights to redefine farmer
              interaction, ensuring data-driven decision-making for sustainable
              agriculture.
            </p>
            <p className="text-gray-400 mt-4 italic">
              “Empowering communities with AI-backed precision farming.”
            </p>

            {/* Key Engagement Highlights */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="p-4 bg-gray-800/70 border border-green-400/50 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-green-400">AI Monitoring</h3>
                <p className="text-gray-300 text-sm">
                  Real-time tracking of soil health, weather, and crop conditions.
                </p>
              </motion.div>

              <motion.div
                className="p-4 bg-gray-800/70 border border-blue-400/50 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-blue-400"> Data Insights</h3>
                <p className="text-gray-300 text-sm">
                  AI-powered analytics to predict yield and optimize resource usage.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Image with Holographic Effect */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <img
                src="/farm-team.jpeg"
                alt="Customer Engagement"
                className="w-full max-w-lg rounded-2xl shadow-xl border border-green-400/30"
              />
              {/* Holographic Glow Effect */}
              <div className="absolute inset-0 border-4 border-green-400 rounded-2xl opacity-30 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerEngagement;
