import React from "react";
import { Link } from "react-router";
import bgWallpaper from "../assets/images/bg7.png"; 
import portrait from "../assets/images/port.jpg"; 
import "animate.css";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center "
      style={{
        backgroundImage: `url(${bgWallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-25">
        
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFAA98] mb-4 animate__animated animate__fadeInDown">
            Hello,
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFD59C] mb-6 animate__animated animate__fadeInDown">
            I'm Nkunim
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-8 max-w-xl animate__animated animate__bounceInDown">
            I'm a software developer with a passion for building scalable and efficient solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 text-white bg-gradient-to-r from-[#FDA5D5]/50 to-[#FFD59C]/70 hover:bg-[#FFAA98] hover:text-black rounded text-lg font-semibold transition duration-300 animate__animated animate__bounceInUp"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="text-white rounded border border-[#FFAA98] px-4 py-2.5 text-lg font-medium hover:bg-gradient-to-r from-[#FDA5D5]/50 to-[#FFD59C]/70 animate__animated animate__bounceInUp"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Portrait Image */}
        <div className="flex justify-center lg:justify-end ">
          <img
            src={portrait}
            alt="Nkunim"
            className="w-72 sm:w-96 lg:w-[28rem] rounded-xl object-cover shadow-lg animate__animated animate__fadeInRight"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
