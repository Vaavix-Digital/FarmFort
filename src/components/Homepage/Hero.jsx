

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/Hero.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-8">
        <div className="w-full max-w-3xl mx-auto text-center px-4 sm:px-6">
          {/* Main Heading */}
          <motion.h1 
            className="text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)',
              fontWeight: '400',
              letterSpacing: '0.02em'
            }}
          >
            <motion.span 
              className="block sm:inline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Treat Yourself To Luxury And Exclusive Discounts
            </motion.span>
            <motion.span 
              className="block sm:inline sm:ml-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Up To 40%
            </motion.span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            className="text-white leading-relaxed w-full max-w-2xl mx-auto mb-8 opacity-90 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              lineHeight: '1.6'
            }}
          >
            Velit rutrum interdum potenti lacinia gravida enim. Aptent aliquet sapien duis tortor proin odio sapien egestas. Nullam metus eros sapien feugiat felis, commodo tempor diam.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="border border-white text-white px-8 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.9rem',
              letterSpacing: '0.05em'
            }}
          >
            Book A Reservation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;