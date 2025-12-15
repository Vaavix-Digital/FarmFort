import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ number, suffix, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Extract the numeric part and the suffix (like 'K' or '+')
  const numericValue = parseFloat(number);
  
  return (
    <div 
      ref={ref} 
      className="w-full transform transition-all duration-500 ease-out text-center" 
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
    >
      <div className="mb-2">
        <div className="flex justify-center items-baseline">
          <span className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#056839] font-['Roboto']">
            <CountUp
              end={inView ? numericValue : 0}
              duration={2.5}
              decimals={number.includes('.') ? 1 : 0}
              style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 600 }}
            />
            <span className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#056839]">{suffix}</span>
          </span>
        </div>
      </div>
      <p className="text-gray-900 text-base md:text-lg font-normal font-gilda">{label}</p>
    </div>
  );
};

const SpecialPackages = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const packages = [
    {
      id: 1,
      title: "Romantic Getaway Package",
      discount: "20% Off",
      image: "/Room1.jpeg",
    },
    {
      id: 2,
      title: "Family Fun Package",
      discount: "24% Off",
      image: "/Room2.jpeg",
    },
    {
      id: 3,
      title: "Ultimate Luxury Package",
      discount: "17% Off",
      image: "/Hero.jpeg",
    },
  ];

  const stats = [
    { number: "23", suffix: "+", label: "Years Of Experience" },
    { number: "2.7", suffix: "K+", label: "Satisfied Clients" },
    { number: "108", suffix: "+", label: "Experience Staff" },
    { number: "72", suffix: "+", label: "Available Rooms" },
  ];

  return (
    <div className="w-full bg-white py-16 px-2 md:px-3 lg:px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white mb-3">
            <img 
              src="/logo icon.png" 
              alt="FarmFort Logo"
              className="w-7 h-7 object-contain"
            />
          </div>
          <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
            Special Packages
          </p>
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          className="font-gilda text-3xl md:text-4xl font-semibold text-black mb-6"
        >
          Enhance Your Stay With Our Signature Packages
        </motion.h2>
       <p className="max-w-4xl mx-auto text-gray-800 font-roboto md:text-lg">
          Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor
          mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper
          pellentesque facilisis adipiscing.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 gap-6 mb-16 px-2 sm:px-0">
        {packages.map((pkg, index) => (
          <motion.div 
            key={pkg.id} 
            className="relative h-64 overflow-hidden group"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 0.77, 0.47, 0.97]
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 p-6">
              <h3 className="text-white text-xl font-normal">{pkg.title}</h3>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-md font-medium tracking-wider mb-1"  style={{ fontFamily: '"Roboto", sans-serif' }}>Up To</p>
                  <p className="text-white text-5xl font-bold">{pkg.discount}</p>
                </div>
              </div>
              {/* Learn More Button */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-sm">
                  Learn More
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <AnimatedCounter 
            key={idx}
            number={stat.number}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialPackages;

