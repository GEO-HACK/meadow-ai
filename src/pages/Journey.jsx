import React from "react";

const Journey = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-50 mt-10">
        The development journey
      </h1>
      <p className="text-center text-lg text-gray-50 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo
        minima eligendi iusto ullam doloremque sequi accusamus nemo hic libero
        debitis nulla possimus, tempore delectus natus pariatur voluptatem est?
        Iure.
      </p>

      <section className="flex flex-raw justify-center mt-10 text-gray-50  gap-5 px-8">
        <div className="flex-1">
          <img src="/about.jpg" alt="" className="w-[600px] h-[400px]" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-green-400 mb-3">Problem Discovery & Industry Research</h1>
          <h2 className="text-xl font-semibold">Understanding the challenge</h2>
          <p className="text-md mb-2">
            Agriculture is the backbone of many economies, yet farmers and
            agribusinesses face significant challenges, including unpredictable
            weather patterns, inefficient resource allocation, and limited
            access to real-time data. Existing solutions often lack
            accessibility, adaptability, and scalability, making it difficult
            for small-scale farmers to leverage technology for decision-making.
          </p>

          <h2 className="text-xl font-semibold">Market Research & Validation</h2>
          <p>
            To better understand the gaps in the market, our team:
            <ol className="ml-5 py-2 text-sm"> 
              <li>
                ✅ Conducted field research by visiting multiple farms and
                agribusinesses
                <li>
                  ✅ Held interviews and surveys with farmers to identify pain
                  points
                </li>
                <li>
                  ✅ Analyzed existing solutions to determine areas for
                  improvement This
                </li>
              </li>
            </ol>
            research confirmed a strong demand for a user-friendly AI-driven
            platform that provides real-time insights to optimize farming
            operations.
          </p>
        </div>
      </section>
      <section  className="mt-10">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl text-gray-50 font-bold">Customer Engagement & validation</h1>
        </div>

      </section>
    </div>
  );
};

export default Journey;
