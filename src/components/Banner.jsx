import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative hero min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 hero-content text-center text-white">
        <div className="max-w-2xl">
          <h1 className="mb-5 md:text-7xl text-5xl text-[#ffffff] font-bold drop-shadow-lg">
            AMCHEM
          </h1>
          <div className="flex justify-center">
            <p className="mb-5 md:text-lg text-base text-gray-200 drop-shadow-md">
              AMCHEM is one of the leading pharmaceutical manufacturers specializing in veterinary feed additives and medicated premixes for global livestock production. AMCHEM delivers science-based nutritional and therapeutic solutions to poultry, cattle, swine, aquaculture, and other animal industries around the world that optimize animal health, production efficiency, and antimicrobial stewardship while maintaining environmental sustainability and food safety standards.
            </p>
          </div>
          <Link to="/products">
            <button className="btn btn-primary shadow-lg">
              See Our Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
