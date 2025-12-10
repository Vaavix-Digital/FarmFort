


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
      {/* Top Icon + Label - Centered */}
      <div className="pt-16 pb-4 pl-2 pr-4 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-[#C38154] flex items-center justify-center mb-4">
          <FiStar className="text-[#C38154] text-lg stroke-1" />
        </div>
        <p className="text-base text-[#C38154] tracking-wider font-normal mb-3">
          <span className="font-bold">About Farm Fort</span>
        </p>
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
          Where Luxury Meets Personalized Hospitality
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 lg:px-8 pb-8 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Hotel Image */}
          <div className="flex items-center justify-center -ml-2 lg:-ml-4">
            <div className="relative overflow-hidden shadow-lg" style={{ width: '624px', height: '380px' }}>
              <img
                src="/Room1.jpeg"
                alt="Luxury hotel room"
                className="w-full h-full object-cover"
                width="624"
                height="390"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col space-y-4" style={{ minHeight: '380px' }}>
            {/* First paragraph */}
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Quam auctor vulputate rutrum sapien euismod et volutpat curabitur sit. Ultrices velit sagittis; lobortis
              dapibus venenatis convallis. Nulla platea pulvinar justo platea tempus in elementum.
            </p>

            {/* Second paragraph */}
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Libero netus hac litora curabitur vulputate euismod. Sollicitudin hendrerit nibh auctor himenaeos
              curabitur ridiculus torquent. Elit aptent netus mi orci tristique pharetra accumsan.
            </p>

            {/* Testimonial with border and signature */}
            <div className="flex -mt-2">
              <div className="w-px bg-[#C38154] flex-shrink-0"></div>
              <div className="pl-6">
                <p className="text-base italic text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Farm Fort is a haven of refined luxury, where timeless elegance meets modern sophistication. Nestled in a
                  prime location, our resort offers breathtaking views, unparalleled comfort, and an ambiance of serenity.
                </p>

                {/* Signature and attribution */}
            <div className="mt-6 space-y-2">
              <p className="text-sm text-[#0F4D2F] kapakana-script">Baburaj Melethara</p>
              <p className="text-xl font-normal text-black mt-2">Baburaj Melethara</p>
              <p className="text-md text-[#C38154] mt-1" style={{ fontFamily: "'Roboto', sans-serif" }}>Founder of Farm Fort</p>
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

