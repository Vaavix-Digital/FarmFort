

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
        staggerChildren: 0.2  // Increased from 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },  // Increased y from 10
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }  // Increased from 0.3 and added easeOut
    }
  };

  const firstImage = {
    hidden: { opacity: 0, x: -100 },  // Increased x from -50
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 0.77, 0.47, 0.97] }  // Increased from 0.4 and added custom easing
    }
  };

  const thirdImage = {
    hidden: { opacity: 0, x: 100 },  // Increased x from 50
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 0.77, 0.47, 0.97] }  // Increased from 0.4 and added custom easing
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
    <section className="w-full pt-16 pb-2 md:pt-20 md:pb-6 lg:pt-24 lg:pb-8 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-1 md:px-3 lg:px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white mb-3">
              <img 
                src="/logo icon.png" 
                alt="FarmFort Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
              Gallery
            </p>
          </div>

          {/* Main Title */}
          <h2 className="font-gilda text-3xl md:text-4xl font-semibold text-black mb-6">
            Experience Our World In Pictures
          </h2>

          {/* Descriptive Paragraph */}
          <p className="max-w-4xl mx-auto text-gray-800 font-roboto md:text-lg mb-12 md:mb-16">
            Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper pellentesque facilisis adipiscing.
          </p>

          {/* Image Grid - 3 Columns Masonry Layout */}
          <motion.div 
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
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
