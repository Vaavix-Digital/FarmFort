import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '850px' }}>
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[850px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/out1.jpeg')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto text-center px-6">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white mb-8"
            style={{
              fontFamily: '"Gilda Display", serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: '600',
              lineHeight: '1.2',
              letterSpacing: '0.02em',
            }}
          >
            <span className="hidden md:block">
              Treat Yourself To Luxury And Exclusive
            </span>
            <span className="block">
              <span className="md:hidden">Treat Yourself To Luxury</span>
              <span className="md:hidden block mt-2">And Exclusive Discounts Up To 40%</span>
              <span className="hidden md:block">Discounts Up To 40%</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/90 max-w-3xl mx-auto mb-12"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              lineHeight: '1.7',
            }}
          >
            Velit rutrum interdum potenti lacinia gravida enim. Aptent aliquet
            sapien duis tortor proin odio sapien egestas. Nullam metus eros
            sapien feugiat felis, commodo tempor diam.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-white text-white px-8 py-3.5 tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.9rem',
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