
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaWifi, FaCoffee, FaConciergeBell, FaSpa, FaSwimmingPool, FaBath } from "react-icons/fa";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState("deluxe");

  const roomTypes = [
    { id: "deluxe", name: "Deluxe Room" },
    { id: "superior", name: "Superior Room" },
    { id: "garden", name: "Garden View Room" },
  ];

  const roomDetails = {
    deluxe: {
      image: "/Room2.jpeg",
      overview:
        "Dignissim ullamcorper arcu quam orci ullamcorper ipsum. Felis praesent ante sagittis porta, ridiculus vehicula feugiat varius? Metus mus suspendisse, condimentum suscipit suspendisse dignissim litora curae. Sapien porttitor malesuada ullamcorper scelerisque est varius sed sagittis nisi.",
      beds: 2,
      sqft: "500 sq ft",
      capacity: "1 - 4 People",
      price: 199,
    },
    superior: {
      image: "/room3.jpeg",
      overview:
        "Dignissim ullamcorper arcu quam orci ullamcorper ipsum. Felis praesent ante sagittis porta, ridiculus vehicula feugiat varius? Metus mus suspendisse, condimentum suscipit suspendisse dignissim litora curae. Sapien porttitor malesuada ullamcorper scelerisque est varius sed sagittis nisi.",
      beds: 2,
      sqft: "600 sq ft",
      capacity: "2 - 4 People",
      price: 399,
    },
    garden: {
      image: "/room3.jpeg",
      overview:
        "Dignissim ullamcorper arcu quam orci ullamcorper ipsum. Felis praesent ante sagittis porta, ridiculus vehicula feugiat varius? Metus mus suspendisse, condimentum suscipit suspendisse dignissim litora curae. Sapien porttitor malesuada ullamcorper scelerisque est varius sed sagittis nisi.",
      beds: 2,
      sqft: "550 sq ft",
      capacity: "2 People",
      price: 349,
    },
  };

  const details = roomDetails[selectedRoom] || roomDetails.deluxe;
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    
    <div className="min-h-screen bg-white font-['Roboto']">
      <div className="pt-16 pb-10 text-center px-4">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-10 h-10 rounded-full border-2 border-[#D2A07F] flex items-center justify-center mb-3">
            <svg 
              className="w-6 h-6 text-[#D2A07F]" 
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
          <p className="text-[#D2A07F] font-semibold tracking-wide text-base md:text-lg font-['Roboto']">
            Rooms
          </p>
        </div>
        <motion.h2 
          className="font-gilda text-4xl font-semibold text-black mb-6"
          ref={ref}
          variants={slideUp}
          initial="hidden"
          animate={controls}
        >
          Where Every Room Is A Masterpiece Of Luxury
        </motion.h2>
        <p className="max-w-4xl mx-auto text-gray-800 font-roboto md:text-lg">
          Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor
          mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper
          pellentesque facilisis adipiscing.
        </p>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10"
        ref={ref}
        variants={slideUp}
        initial="hidden"
        animate={controls}
      >
        <div className="md:col-span-1 space-y-3">
          {roomTypes.map((room) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room.id)}
              className={`group flex items-center py-4 w-full transition-all text-left pl-8 relative ${
                selectedRoom === room.id || room.id === "deluxe"
                  ? "text-[#056839] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#056839] after:transition-all"
                  : "text-gray-700 hover:text-[#056839]"
              }`}
            >
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <svg 
                  className={`w-5 h-5 ${
                    selectedRoom === room.id || room.id === "deluxe" ? "text-[#056839]" : "text-gray-300"
                  }`}
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <span className="text-base md:text-lg font-medium">
                {room.name}
              </span>
            </button>
          ))}
        </div>

        <div className="md:col-span-3 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[550px] overflow-hidden">
            <img
              src={details.image}
              alt="room"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6 pt-8">
            <div className="space-y-3 w-full pr-0 lg:pr-6">
              <h2 className="text-2xl font-normal text-gray-900 font-gilda mb-4 ">Room Overview</h2>
              <p className="text-gray-600 text-base " style={{ fontFamily: '"Roboto", sans-serif' }}>
                {details.overview}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2 min-w-[120px]">
                <span className="bg-[#D2A07F] p-2 rounded-full flex items-center justify-center h-9 w-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9"></path>
                    <path d="M21 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"></path>
                    <path d="M3 9h18"></path>
                    <path d="M7 5v4"></path>
                    <path d="M17 5v4"></path>
                  </svg>
                </span>
                <span style={{ fontFamily: '"Roboto", sans-serif' }} className="text-gray-900">{details.beds} Beds</span>
              </div>
              <div className="flex items-center space-x-2 min-w-[120px]">
                <span className="bg-[#D2A07F] p-2 rounded-full flex items-center justify-center h-9 w-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="21" y2="3"></line>
                    <line x1="9" y1="21" x2="9" y2="3"></line>
                  </svg>
                </span>
                <span style={{ fontFamily: '"Roboto", sans-serif' }} className="text-gray-900">{details.sqft}</span>
              </div>
              <div className="flex items-center space-x-2 min-w-[120px]">
                <span className="bg-[#D2A07F] p-2 rounded-full flex items-center justify-center h-9 w-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <span style={{ fontFamily: '"Roboto", sans-serif' }} className="text-gray-900">{details.capacity}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 font-gilda mb-3">Facilities</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-700 text-base">
                <li className="flex items-center space-x-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  <FaWifi className="text-[#D2A07F] text-lg " />
                  <span>Free Wifi</span>
                </li>
                <li className="flex items-center space-x-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  <FaCoffee className="text-[#D2A07F] text-lg" />
                  <span>Free Breakfast</span>
                </li>
                <li className="flex items-center space-x-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  <FaConciergeBell className="text-[#D2A07F] text-lg" />
                  <span>Room Service</span>
                </li>
                <li className="flex items-center space-x-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  <FaSpa className="text-[#D2A07F] text-lg" />
                  <span>Spa & Wellness</span>
                </li>
                <li className="flex items-center space-x-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  <FaSwimmingPool className="text-[#D2A07F] text-lg" />
                  <span>Swimming Pool</span>
                </li>
                <li className="flex items-center space-x-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  <FaBath className="text-[#D2A07F] text-lg" />
                  <span>Shower Bathtub</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3">
              <span className="text-5xl font-black text-black font-gilda">${details.price} <span className="text-sm font-normal text-gray-900" style={{ fontFamily: '"Roboto", sans-serif' }}>/ Night</span></span>
              <button className="bg-[#056839] hover:bg-[#04502d] text-white  font-normal py-3 px-6 transition duration-200 "style={{ fontFamily: '"Roboto", sans-serif' }}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Rooms;
