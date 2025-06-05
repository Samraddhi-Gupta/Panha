import React from 'react';
import panhaImage from '../../assets/images/pANHA.png';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center px-6 md:px-12 pt-0">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 group">

        {/* Image Section - LEFT */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start" style={{ marginRight: '1.5rem' }}>
          <img
            src={panhaImage}
            alt="Peaceful meditation illustration"
            className="w-72 md:w-96 lg:w-[28rem] rounded-3xl shadow-2xl transform transition-transform duration-500 ease-in-out
              group-hover:scale-105 group-hover:shadow-blue-500/50"
          />
        </div>

        {/* Text Section - RIGHT */}
        <div
          className="w-full md:w-1/2 text-center md:text-left space-y-6 cursor-pointer
            transition-colors duration-300 ease-in-out
            group-hover:text-blue-700"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-md mt-[-2rem]">
            “Kaash koi hota, jo bina judge kiye meri baat samajh pata...”
          </h1>
          <p className="text-gray-800 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Meet <span className="font-bold text-blue-600 group-hover:text-blue-800 transition-colors duration-300 ease-in-out">CHILL PANHA</span> — your empathetic buddy, always ready to listen and support.
          </p>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Connect with your buddy
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
