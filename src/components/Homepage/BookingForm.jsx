import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    rooms: '',
    adults: '',
    children: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full py-12 md:py-16 flex items-center justify-center" style={{ backgroundColor: '#0F4D2F' }}>
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Star Icon */}
          <div className="mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-white mb-6 font-semibold leading-tight text-4xl font-gilda">
            Discover Your Stay
          </h2>

          {/* Descriptive Paragraph */}
          <p 
            className="text-white max-w-4xl mx-auto mb-8 leading-relaxed"
            style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '0.95rem',
              lineHeight: '1.6'
            }}
          >
            Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper pellentesque facilisis adipiscing.
          </p>

          {/* Booking Form */}
          <motion.div 
            className="w-full p-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.9,
                ease: [0.16, 0.77, 0.47, 0.97],
                delay: 0.1
              }
            }}
            viewport={{ once: true, margin: "-30px" }}
          >
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Check In */}
              <div className="relative">
                <label className="flex items-center gap-2 text-white mb-1 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '0.875rem' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Check In
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white py-1 h-8"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Check Out */}
              <div className="relative">
                <label className="flex items-center gap-2 text-white mb-1 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '0.875rem' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Check Out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white py-1 h-8"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Choose Rooms */}
              <div className="relative">
                <label className="flex items-center gap-2 text-white mb-1 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '0.875rem' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Choose Rooms
                </label>
                <div className="relative">
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/30 text-white focus:outline-none focus:border-white py-1 h-8 appearance-none pr-8"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    <option value="" className="bg-gray-800 text-white">Select Rooms</option>
                    <option value="1" className="bg-gray-800 text-white">1 Room</option>
                    <option value="2" className="bg-gray-800 text-white">2 Rooms</option>
                    <option value="3" className="bg-gray-800 text-white">3 Rooms</option>
                    <option value="4" className="bg-gray-800 text-white">4+ Rooms</option>
                  </select>
                  <svg className="absolute right-0 top-0 w-5 h-5 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
              {/* Adults */}
              <div className="relative">
                <label className="flex items-center gap-2 text-white mb-1 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '0.875rem' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Adults
                </label>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  placeholder="0"
                  min="1"
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white py-1 h-8"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Children */}
              <div className="relative">
                <label className="flex items-center gap-2 text-white mb-1 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '0.875rem' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Children
                </label>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white py-1 h-8"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                />
              </div>

              {/* Check Availability Button */}
              <div className="flex items-end h-full">
                <button
                  type="button"
                  className="w-full bg-[#056839] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300 font-medium h-10 text-sm flex items-center justify-center border-2 border-white/40 hover:border-white/60"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Check Availability
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

