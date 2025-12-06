

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false  // Changed to false to trigger on every view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1  // Reduced from 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },  // Reduced y from 20
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }  // Reduced from 0.6
    }
  };

  const firstImage = {
    hidden: { opacity: 0, x: -50 },  // Reduced x from -100
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }  // Reduced from 0.8
    }
  };

  const thirdImage = {
    hidden: { opacity: 0, x: 50 },  // Reduced x from 100
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }  // Reduced from 0.8
    }
  };
  const galleryImages = [
    { id: 1, src: '/Hero.jpeg', alt: 'Resort Swimming Pool', size: 'tall' },
    { id: 2, src: '/Room1.jpeg', alt: 'Luxury Hotel Lobby', size: 'xsmall' },
    { id: 3, src: '/Room2.jpeg', alt: 'Romantic Setting', size: 'xsmall' },
    { id: 4, src: '/Hero2.jpeg', alt: 'Champagne Toast', size: 'small' },
    { id: 5, src: '/out1.jpeg', alt: 'Modern Hotel Bedroom', size: 'wide' },
    { id: 6, src: '/out2.jpeg', alt: 'Family Dining', size: 'tall' },
    { id: 7, src: '/Room1.jpeg', alt: 'Hotel Room Beds', size: 'wide' },
    { id: 8, src: '/Hero.jpeg', alt: 'Luxury Resort View', size: 'wide' },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Star Icon */}
          <div className="mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-green-600 flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                />
              </svg>
            </div>
          </div>

          {/* Gallery Label */}
          <p className="text-[#056839] font-normal tracking-wide mb-3 text-base md:text-lg font-['Roboto']">
            Gallery
          </p>

          {/* Main Title */}
          <h2 className="font-gilda text-4xl font-semibold text-black mb-6">
            Experience Our World In Pictures
          </h2>

          {/* Descriptive Paragraph */}
          <p className="max-w-4xl mx-auto text-gray-800 font-roboto md:text-lg mb-12 md:mb-16">
            Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper pellentesque facilisis adipiscing.
          </p>

          {/* Image Grid - 3 Columns Masonry Layout */}
          <motion.div 
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {/* Column 1 - Tall image spanning 2 rows */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer md:row-span-2"
              variants={firstImage}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>

            {/* Column 2 Row 1 - Regular */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
              variants={item}
            >
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>

            {/* Column 3 Row 1 - Regular */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
              variants={thirdImage}
            >
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>

            {/* Column 2 Row 2 - Regular */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
              variants={item}
            >
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>

            {/* Column 3 Row 2 - Regular */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
              variants={item}
            >
              <img
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>

            {/* Column 1 Row 3 - Regular */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
              variants={item}
            >
              <img
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>

            {/* Column 2 Row 3 - Regular */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
              variants={item}
            >
              <img
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>

            {/* Column 3 Row 3 - Regular */}
            <motion.div 
              className="relative overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
              variants={item}
            >
              <img
                src={galleryImages[7].src}
                alt={galleryImages[7].alt}
                className="w-full h-full object-cover transition-all duration-300 hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
