import React from 'react';
import { FaHandHoldingHeart, FaBrain, FaUserShield } from 'react-icons/fa';
import panhaImage from '../../assets/images/pANHA.png';

const Manifesto = () => {
  return (
    <section className="bg-blue-50 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between group">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-5xl font-extrabold mb-8 group-hover:text-blue-700 transition-colors duration-500">
            MANIFESTO
          </h2>
          <p className="text-3xl mb-8 group-hover:text-blue-600 leading-relaxed transition-colors duration-500">
            PANHA is a safe and supportive platform offering a comprehensive
            solution for individuals dealing with:
          </p>
          <ul className="space-y-6">
            <li className="flex items-center text-2xl font-medium group-hover:text-blue-500 transition-colors duration-500">
              <FaHandHoldingHeart className="text-blue-600 mr-4" />
              <span>Trauma</span>
            </li>
            <li className="flex items-center text-2xl font-medium group-hover:text-blue-500 transition-colors duration-500">
              <FaBrain className="text-blue-600 mr-4" />
              <span>Mental health issues</span>
            </li>
            <li className="flex items-center text-2xl font-medium group-hover:text-blue-500 transition-colors duration-500">
              <FaUserShield className="text-blue-600 mr-4" />
              <span>Personal challenges</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={panhaImage}
            alt="Peaceful meditation illustration"
            className="w-80 md:w-[30rem] rounded-3xl shadow-2xl transform transition-transform duration-500 ease-in-out
              group-hover:scale-105 group-hover:shadow-blue-500/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
