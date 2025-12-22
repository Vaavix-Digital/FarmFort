import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = '/Logo.png'; // Fallback to logo if image fails to load
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "Designation",
      text: "Nascetur habitasse ridiculus facilisis netus ultrices lacinia iaculis lectus. Facilisis lacus sagittis conubia, montes laoreet libero. Arcu netus commodo varius, consequat sapien penatibus. Netus auctor quisque quis nascetur purus eget ornare. Varius eget hac, at facilisi et class. Phasellus tortor magnis diam bibendum, hendrerit dictum fermentum.",
      image: "/Room1.jpeg"
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Guest",
      text: "Exceptional service and beautiful accommodations. The attention to detail and warm hospitality made our stay unforgettable. Highly recommend this luxury resort for anyone seeking a perfect getaway.",
      image: "/Room2.jpeg"
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "Traveler",
      text: "A truly remarkable experience from start to finish. The rooms are elegant, the staff is attentive, and the overall ambiance is simply perfect. We will definitely be returning.",
      image: "/Hero.jpeg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  
  // Animation variants for the testimonial content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3  // Slight delay to ensure heading appears first
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section 
      className="w-full py-10 md:py-12 lg:py-16 relative min-h-[400px] flex items-center mt-16"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/Room2.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        transform: 'translate3d(0,0,0)',
        WebkitTransform: 'translate3d(0,0,0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        willChange: 'transform',
        WebkitPerspective: 1000,
        WebkitTransformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="w-full px-0 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo Icon */}
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto overflow-hidden bg-white p-1">
            <img 
              src="/logo icon.png" 
              alt="Resort Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

          {/* Testimonials Label */}
        <p className="text-white text-base font-semibold mb-4" style={{ fontFamily: '"Roboto", sans-serif' }}>
          Testimonials
        </p>

          {/* Main Title */}
          <motion.h2 
            className="font-gilda text-3xl sm:text-4xl font-semibold text-white mb-8 sm:mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
              }
            }}
            viewport={{ once: true }}
          >
            Experience Our World In Pictures
          </motion.h2>

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              {/* Profile Section */}
              <motion.div 
                className="flex items-center justify-center gap-4 mb-6"
                variants={itemVariants}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/40 flex-shrink-0 bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
                <motion.div 
                  className="text-left"
                  variants={itemVariants}
                >
                  <h3 className="text-white font-gilda text-lg md:text-xl">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm "style={{ fontFamily: '"Roboto", sans-serif' }}>
                    {currentTestimonial.designation}
                  </p>
                </motion.div>
              </motion.div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-white w-full mb-8 leading-relaxed px-4 sm:px-0"
                style={{ 
                  fontFamily: '"Roboto", sans-serif',
                  fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                  fontWeight: 300
                }}
                variants={itemVariants}
              >
                {currentTestimonial.text}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center transition-colors duration-300 hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-[#056839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center transition-colors duration-300 hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-[#056839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

