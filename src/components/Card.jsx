import React from "react";

const Card = () => {
  return (
    <>
      <div className="text-white flex flex-col md:flex-row gap-6 mt-4 w-[80%] p-4">
        <div className="flex-1  h-auto w-full md:max-w-[400px]  flex justify-center">
          <img
            src="/deployment.png"
            alt=""
            className="w-full h-[300px] object-cover "
          />
        </div>
        <div className="flex-1 text-lg flex flex-col  p-6  text-white justify-center rounded-lg shadow-lg">
            <p className="text-red-500 font-semibold text-sm">Published- <span className="text-gray-300">23-4-2025</span></p>
          <h1 className="text-3xl font-bold text-green-400 mb-3">
            This is the way forward
          </h1>

          <p className="text-gray-300 leading-relaxed text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            soluta aliquam sunt pariatur dicta eius quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Beatae, quaerat, perferendis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            quam est. Beatae eveniet repellat magni laudantium laboriosam, non
            blanditiis pariatur. 
            <span className="text-bold text-green-500 text-xl">...</span>
          </p>

          <button className="mt-4 px-6 py-2 text-sm max-w-fit bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl transition-all">
            Read More
          </button>
        </div>
      </div>
      <div className="border border-gray-400 w-[80%]" />
    </>
  );
};

export default Card;
