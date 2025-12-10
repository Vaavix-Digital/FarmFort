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
    <div ref={ref} className="p-4 transform transition-all duration-500 ease-out" 
         style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
      <div className="flex items-baseline justify-center gap-2 mb-3">
        <span className="text-4xl md:text-5xl font-extrabold text-[#056839] font-['Roboto']">
          <CountUp
            end={inView ? numericValue : 0}
            duration={2.5}
            decimals={number.includes('.') ? 1 : 0}
            className="font-black"
          />
          <span className="font-black">{suffix}</span>
        </span>
      </div>
      <p className="text-gray-700 text-base md:text-lg font-normal font-['Roboto']">{label}</p>
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
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        {/* Star Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 rounded-full border-2 border-green-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
        </div>

        <p className="text-[#056839] font-normal tracking-wide mb-3 text-base md:text-lg font-['Roboto']">
          Special Packages
        </p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          className="font-gilda text-4xl font-semibold text-black mb-6"
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
      <div className="grid grid-cols-1 gap-6 mb-16">
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
                  <p className="text-white text-sm font-medium tracking-wider mb-1 font-['Roboto']">Up To</p>
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

