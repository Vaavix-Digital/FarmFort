import React, { useState } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const heroImages = [
    '/Toppic.jpeg',
    '/home2.jpeg',
    '/home3.jpeg'
  ];

  // Rotate images every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundPosition: 'center 30%',
          '@media (min-width: 1024px)': {
            backgroundPosition: 'center 40%'
          }
        }}
      >
        {/* Solid dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/10"></div>
      </div>

      {/* Navigation Bar with semi-transparent background for better readability */}
      <nav className="absolute top-0 left-0 right-0 z-20 pt-6 md:pt-8 lg:pt-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center p-2 rounded-lg bg-white">
                <img 
                  src="/Logo.png" 
                  alt="AQUILA Luxury Hotel & Resort" 
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#home" className="text-white text-sm xl:text-base font-semibold hover:text-white/90 transition-colors drop-shadow-md">
                Home
              </a>
              <a href="#about" className="text-white text-sm xl:text-base font-semibold hover:text-white/90 transition-colors drop-shadow-md">
                About
              </a>
              <a href="#rooms" className="text-white text-sm xl:text-base font-semibold hover:text-white/90 transition-colors flex items-center gap-1 drop-shadow-md">
                Rooms
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#pages" className="text-white text-sm xl:text-base font-semibold hover:text-white/90 transition-colors flex items-center gap-1 drop-shadow-md">
                Pages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#blog" className="text-white text-sm xl:text-base font-semibold hover:text-white/90 transition-colors flex items-center gap-1 drop-shadow-md">
                Blog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#contact" className="text-white text-sm xl:text-base font-semibold hover:text-white/90 transition-colors drop-shadow-md">
                Contact
              </a>
            </div>

            {/* View Rooms and Mobile Menu Button */}
            <div className="flex-shrink-0 flex items-center gap-2">
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
              
              {/* View Rooms Button */}
              <button className="bg-transparent border-2 border-white/40 text-white px-4 py-2 md:px-6 md:py-2.5 rounded text-sm xl:text-base font-semibold hover:bg-white/15 hover:border-white/60 transition-all backdrop-blur-sm shadow-lg">
                View Rooms
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-md z-10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#home" className="text-white text-lg py-2 hover:text-amber-400 transition-colors">Home</a>
          <a href="#about" className="text-white text-lg py-2 hover:text-amber-400 transition-colors">About</a>
          <a href="#rooms" className="text-white text-lg py-2 hover:text-amber-400 transition-colors flex items-center justify-between">
            Rooms
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#pages" className="text-white text-lg py-2 hover:text-amber-400 transition-colors flex items-center justify-between">
            Pages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#blog" className="text-white text-lg py-2 hover:text-amber-400 transition-colors flex items-center justify-between">
            Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="text-white text-lg py-2 hover:text-amber-400 transition-colors">Contact</a>
        </div>
      </div>

      {/* Text Overlay - Positioned in lower-left */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full pb-16 md:pb-20 pl-6 md:pl-12 lg:pl-16 xl:pl-24">
          {/* Main Title - Large elegant serif */}
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
          
          {/* Subtitle - Slightly smaller elegant serif */}
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
          
          {/* Body Text - Smaller sans-serif */}
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

