import React from "react";
import image from "../assets/img-01.png";
import image2 from "../assets/img-02.png";

const Landing = () => {
  return (
    <div className="flex justify-center mb-6 px-4">
      <div className="flex flex-col md:flex-row max-w-[1100px] gap-8 bg-white p-6 rounded-xl shadow-md">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={image2}
            alt="Farmer with oranges"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text & Features Section */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Small Image */}
          <div className="w-full max-w-[350px] mx-auto md:mx-0">
            <img
              src={image}
              alt="Gardening"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Heading & Description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
              Introducing{" "}
              <span className="bg-green-600 text-white px-2 py-1 rounded-md">
                Data Driven
              </span>{" "}
              agriculture.
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-5 text-center md:text-left">
              Using machine learning for data-driven crop cultivation allows
              farmers to optimize their yield by analyzing soil quality, weather
              patterns, and crop health. This technology enhances decision-making,
              reduces waste, and increases productivity.
            </p>

            {/* Features List */}
            <ul className="grid grid-cols-2 gap-3 text-gray-700 mt-6">
              <li>✔️ Increased crop yield</li>
              <li>✔️ Efficient resource use</li>
              <li>✔️ Improved crop quality</li>
              <li>✔️ Reduced environmental impact</li>
              <li>✔️ Cost savings</li>
              <li>✔️ Smart irrigation</li>
              <li>✔️ Early disease detection</li>
              <li>✔️ Automated farming insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
