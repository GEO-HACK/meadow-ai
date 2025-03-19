import React from "react";
import {motion} from "framer-motion";
import Customer from "../components/journey/customer";

const Journey = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-50">
      <h1 className="text-center text-4xl font-bold mb-6">
        The Development Journey
      </h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Agriculture is a cornerstone of many economies, yet numerous challenges
        persist, from unpredictable weather to inefficient resource allocation.
        Our journey began with a mission to create an AI-driven platform that
        empowers farmers with real-time insights.
      </p>

      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="/about.jpg"
            alt="Research and Discovery"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg md:max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Problem Discovery & Industry Research
          </h2>
          <h3 className="text-xl font-semibold mb-2">
            Understanding the Challenge
          </h3>
          <p className="text-md leading-relaxed mb-4">
            Farmers and agribusinesses face hurdles like unpredictable weather,
            limited access to real-time data, and inefficient resource
            management. Current solutions often fail to provide adaptable and
            scalable technology, making it difficult for small-scale farmers to
            leverage data-driven decision-making.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Market Research & Validation
          </h3>
          <p className="text-md leading-relaxed">
            Our research process included:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2 text-md">
            <li>
             Conducting field visits to various farms and agribusinesses
            </li>
            <li>
               Holding interviews and surveys with farmers to identify pain
              points
            </li>
            <li>
               Analyzing existing solutions to determine areas for improvement
            </li>
          </ul>
          <p className="mt-4">
            This research validated the need for a user-friendly, AI-driven
            platform that provides actionable insights to optimize farming
            operations efficiently.
          </p>
        </div>
      </section>
{/* customer */}
      <Customer/>
     
      <section className="mt-16 text-center">
        <h1 className="text-4xl font-bold text-gray-50">
          AI Model Training & System Development
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Leveraging machine learning, we trained our AI model using real-world
          agricultural data, refining it through multiple iterations to optimize
          predictive accuracy.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-8">
          {/* Left - Text Section */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl text-green-400 font-semibold mb-3">
              Data Collection & Preprocessing
            </h2>
            <p className="text-md leading-relaxed">
              We sourced real-time farm data through field sensors and
              historical weather reports. Extensive cleaning and feature
              engineering ensured high-quality input for training.
            </p>

            <h2 className="text-2xl text-green-400 font-semibold mt-5 mb-3">
              AI Model Training & Testing
            </h2>
            <p className="text-md leading-relaxed">
              Using deep learning techniques, we iteratively trained the AI
              model to predict crop health and optimal resource allocation,
              achieving an 85% accuracy.
            </p>

            <h2 className="text-2xl text-green-400 font-semibold mt-5 mb-3">
              System Integration & Optimization
            </h2>
            <p className="text-md leading-relaxed">
              The AI model was integrated into our platform using a real-time
              API, ensuring seamless interaction for farmers through an
              intuitive dashboard.
            </p>
          </div>

          {/* Right - Image Section */}
          <div className="md:w-1/2">
            <img
              src="/training.jpeg"
              alt="AI Model Training"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-16 text-center">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-gray-50">
        Field Deployment & Real-World Impact
      </h1>
      <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
        After rigorous testing, our AI system was deployed in real farming environments, 
        delivering actionable insights to farmers and transforming agricultural decision-making.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
        {/* Left - Image */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="/deployment.png" 
            alt="AI Deployment in the Field" 
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right - Text Content */}
        <motion.div 
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl text-green-400 font-semibold mb-3">
            Hands-On Implementation
          </h2>
          <p className="text-md leading-relaxed">
            Partnering with local farmers, we deployed smart sensors and integrated 
            our AI-powered dashboard, enabling real-time monitoring of soil health, 
            weather patterns, and crop conditions.
          </p>

          <h2 className="text-2xl text-green-400 font-semibold mt-5 mb-3">
            Immediate Results & Feedback
          </h2>
          <p className="text-md leading-relaxed">
            Farmers reported a **20% increase in crop yield** and a significant reduction in 
            resource wastage due to optimized irrigation and pesticide use.
          </p>

          <h2 className="text-2xl text-green-400 font-semibold mt-5 mb-3">
            Scaling & Continuous Improvement
          </h2>
          <p className="text-md leading-relaxed">
            Based on field feedback, we fine-tuned our model for better adaptability across 
            different farm sizes and climate conditions, ensuring broader scalability.
          </p>

          {/* Impact Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            <motion.div 
              className="bg-gray-800 p-4 rounded-lg text-center w-36"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-3xl font-bold text-green-400">+20%</h3>
              <p className="text-sm text-gray-300">Yield Increase</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-4 rounded-lg text-center w-36"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-3xl font-bold text-green-400">-30%</h3>
              <p className="text-sm text-gray-300">Resource Wastage</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-4 rounded-lg text-center w-36"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-3xl font-bold text-green-400">100+</h3>
              <p className="text-sm text-gray-300">Farms Benefited</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default Journey;
