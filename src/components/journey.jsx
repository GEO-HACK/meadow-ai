import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Journey = () => {
  const router = useNavigate();

  return (
    <section className=" bg-gradient-to-r from-green-800 to-green-600 text-white py-16 px-6 md:px-16 rounded-2xl shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[950px] mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Journey Behind Meadow AI
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          From a vision to reality—Meadow AI started as an ambitious idea and evolved into a powerful solution. 
          With the support of <span className="font-semibold">JHub</span> and real-world feedback from farmers and businesses, 
          we built an AI-driven platform that transforms agricultural intelligence.
        </p>
        <motion.button
          onClick={() => router.push("/journey")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-green-700 px-6 py-3 rounded-full flex items-center gap-2 text-lg font-medium shadow-md hover:bg-gray-200 transition"
        >
          Explore Our Journey <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Journey;
