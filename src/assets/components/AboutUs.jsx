import React from 'react';
import { FaUsers, FaLightbulb, FaHeart, FaBullseye } from 'react-icons/fa';

const aboutData = [
  {
    title: 'Who We Are',
    icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
    content:
      'We are a passionate community of listeners, developers, and mental health advocates who believe that every emotion deserves to be heard, understood, and respected — without judgment.',
  },
  {
    title: 'What We Do',
    icon: <FaLightbulb className="text-yellow-400 text-4xl mb-4" />,
    content:
      'We connect users with trained buddies who listen empathetically. Whether you’re feeling low or just need someone to talk to — we’re here, without the clinical pressure.',
  },
  {
    title: 'Our Vision',
    icon: <FaHeart className="text-pink-500 text-4xl mb-4" />,
    content:
      'To normalize conversations around emotions and build a culture where vulnerability is seen as strength, not weakness.',
  },
  {
    title: 'Our Mission',
    icon: <FaBullseye className="text-green-500 text-4xl mb-4" />,
    content:
      'To create emotionally safe spaces, empower peer listeners, and make emotional support accessible and stigma-free for all.',
  },
];

function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-16">
          About Us <span className="text-blue-500">PANHA</span>
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 
                         hover:bg-blue-100 hover:shadow-xl 
                         transition duration-300 text-left"
            >
              <div className="flex flex-col items-start">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
