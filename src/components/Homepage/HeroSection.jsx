import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/Toppic.jpeg',
    '/home2.jpeg',
    '/home3.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundPosition: 'center 30%',
        }}
      >
        {/* Solid dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/10"></div>
      </div>


      {/* Text Overlay - Positioned in lower-left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pt-16">
        <div className="w-full pb-16 md:pb-20 pl-6 md:pl-12 lg:pl-16 xl:pl-24">
          <h1 
            className="text-white mb-3 md:mb-4 font-normal leading-tight"
            style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '0.02em'
            }}
          >
            Discover FarmFort
          </h1>
          <h2 
            className="text-white mb-4 md:mb-6 font-normal leading-tight"
            style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              letterSpacing: '0.02em'
            }}
          >
            A Paradise Of Tranquility
          </h2>
          <p 
            className="text-white max-w-xl md:max-w-2xl leading-relaxed opacity-95"
            style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
              lineHeight: '1.6'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      {/* Scroll Down Icon - Bottom right */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 right-6 md:right-8 lg:right-12 z-20">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300 group">
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
