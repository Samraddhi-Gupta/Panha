import React, { useState } from "react";
import { FaUserFriends, FaCommentDots, FaBrain } from "react-icons/fa";

const services = [
  {
    title: "Buddy Support",
    description:
      "Non-judgmental and confidential peer support to share every problem you have.",
    icon: <FaUserFriends className="text-blue-500 text-6xl mb-6" />,
  },
  {
    title: "Anonymous Chat",
    description:
      "A community space where you can share your problems anonymously, and we'll connect you with the right experts.",
    icon: <FaCommentDots className="text-indigo-500 text-6xl mb-6" />,
  },
  {
    title: "Counseling Services",
    description:
      "Connect with professional counselors, therapists, and psychiatrists to resolve your concerns.",
    icon: <FaBrain className="text-pink-500 text-6xl mb-6" />,
  },
];

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-12 drop-shadow-sm">
          Our <span className="text-blue-500">Services</span>
        </h2>

        {/* Card with animated transition */}
        <div className="relative max-w-3xl mx-auto">
          <div
            className="p-10 bg-white rounded-3xl shadow-2xl transition-all duration-700 ease-in-out transform hover:scale-105"
            key={currentIndex}
          >
            <div className="flex flex-col items-center text-center">
              {services[currentIndex].icon}
              <h3 className="text-3xl font-semibold text-blue-700 mb-3">
                {services[currentIndex].title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {services[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 md:left-[-60px] transform -translate-y-1/2 bg-blue-500 text-white text-xl p-4 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 md:right-[-60px] transform -translate-y-1/2 bg-blue-500 text-white text-xl p-4 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            &gt;
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="mt-6 flex justify-center space-x-3">
          {services.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition
                ${idx === currentIndex ? "bg-blue-600 scale-110" : "bg-blue-300"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
