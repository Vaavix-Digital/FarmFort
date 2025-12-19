


import React, { useRef, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { motion, useAnimation, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <main className="min-h-screen bg-white">
      {/* Top Icon + Label - Centered - Matching SpecialPackages */}
      <div className="pt-16 pb-4 pl-2 pr-4">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white mb-3">
            <img 
              src="/logo icon.png" 
              alt="FarmFort Logo"
              className="w-7 h-7 object-contain"
            />
          </div>
          <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
            About Farm Fort
          </p>
        </div>
      </div>

      {/* Main Heading */}
      <div className="pb-0 px-4">
        <motion.h2 
          className="font-gilda text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-6"
          ref={ref}
          variants={slideUp}
          initial="hidden"
          animate={controls}
        >
         MEET THE VISIONERY BEHIND FARM FORT
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 lg:pl-12 lg:pr-8 pb-8 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Hotel Image */}
          <div className="flex items-center justify-center -ml-2 lg:-ml-4 xl:-ml-8">
            <div className="relative overflow-hidden shadow-lg w-full max-w-4xl" style={{ height: '480px' }}>
              <img
                src="/Room1.jpeg"
                alt="Luxury hotel room"
                className="w-full h-full object-cover object-center"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col space-y-4" style={{ minHeight: '380px' }}>
            {/* First paragraph */}
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
              A veteran journalist with a long career spanning nearly half a century,  Mr M Baburaj is one of the pioneers of Development Journalism in Kerala. He served at Malayala Manorama in various capacities including Reporter, Editor, and Unit Head, before retiring as Senior Coordinating Editor and Unit Head at Kannur.


            </p>

            {/* Second paragraph */}
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
              In recognition of his excellence in development-oriented journalism, he has received several prestigious honours, including awards from the State Government and the Indian Medical Association.
            </p>

            {/* Testimonial with border and signature */}
            <div className="flex -mt-2">
              <div className="w-px bg-[#C38154] flex-shrink-0"></div>
              <div className="pl-6">
                <p className="text-base italic text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  
He has also served as a member of the Board of Studies in Journalism at Calicut University and Kannur University, as a member of the Zonal Railway Users’ Consultative Committee, and as the Founding President of Sahitham Residence Association.

After retirement, he established the enterprises Farmrock Garden and Farm Fort on Farook College Road, where he currently serves as Chief Executive Officer.
                </p>

                {/* Signature and attribution */}
                <div className="mt-6 flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/manager.jpeg" 
                      alt="Baburaj Melethara"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#0F4D2F] kapakana-script">Baburaj Melethara</p>
                    <p className="text-xl font-normal text-black mt-1">Baburaj Melethara</p>
                    <p className="text-md text-[#056839]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      Founder of Farm Fort
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;

