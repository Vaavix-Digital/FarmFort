import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    rooms: '',
    adults: '',
    children: ''
  });
  
  const [activeCalendar, setActiveCalendar] = useState(null); // 'checkIn' or 'checkOut'
  const calendarRef = useRef(null);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  
  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target) &&
          checkInRef.current && !checkInRef.current.contains(event.target) &&
          checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setActiveCalendar(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleDateSelect = (date, field) => {
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    setFormData({
      ...formData,
      [field]: formattedDate
    });
    setActiveCalendar(null);
  };
  
  const renderCalendar = (field) => {
    if (activeCalendar !== field) return null;
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today.getDate() && currentMonth === today.getMonth();
      days.push(
        <div 
          key={day}
          className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-full ${
            isToday ? 'bg-gray-200 text-gray-800' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleDateSelect(new Date(currentYear, currentMonth, day), field)}
        >
          {day}
        </div>
      );
    }
    
    return (
      <div 
        ref={calendarRef}
        className="absolute z-10 mt-1 bg-white text-gray-800 rounded shadow-lg p-4 w-64"
        style={{
          top: '100%',
          left: 0,
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <button className="p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="font-medium">
            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
          </div>
          <button className="p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="font-medium">{day}</div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full py-12 md:py-16 flex items-center justify-center" style={{ backgroundColor: '#0F4D2F' }}>
      <div className="w-full max-w-7xl px-1 md:px-2 lg:px-3">
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

        {/* Main Title */}
        <h2 className="text-white mb-6 font-semibold leading-tight text-3xl md:text-4xl font-gilda">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Check In */}
              <div className="relative">
                <div 
                  ref={checkInRef}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none focus:border-white hover:border-green-300 transition-colors duration-200 py-1.5 h-10 appearance-none pl-8 text-sm cursor-pointer"
                  onClick={() => setActiveCalendar(activeCalendar === 'checkIn' ? null : 'checkIn')}
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: formData.checkIn ? 'white' : 'transparent'
                  }}
                >
                  {formData.checkIn}
                </div>
                <div className="absolute left-0 bottom-2.5 text-white/50 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 mr-2 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {!formData.checkIn && (
                    <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Check In</span>
                  )}
                </div>
                {renderCalendar('checkIn')}
              </div>

              {/* Check Out */}
              <div className="relative">
                <div 
                  ref={checkOutRef}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none focus:border-white hover:border-green-300 transition-colors duration-200 py-1.5 h-10 appearance-none pl-8 text-sm cursor-pointer"
                  onClick={() => setActiveCalendar(activeCalendar === 'checkOut' ? null : 'checkOut')}
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: formData.checkOut ? 'white' : 'transparent'
                  }}
                >
                  {formData.checkOut}
                </div>
                <div className="absolute left-0 bottom-2.5 text-white/50 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 mr-2 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {!formData.checkOut && (
                    <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Check Out</span>
                  )}
                </div>
                {renderCalendar('checkOut')}
              </div>

              {/* Choose Rooms */}
              <div className="relative">
                <select
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none focus:border-white hover:border-green-300 transition-colors duration-200 py-2 h-12 appearance-none pr-8 pl-8"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: formData.rooms ? 'white' : 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <option value="" className="bg-gray-800 text-white">Choose Rooms</option>
                  <option value="1" className="bg-gray-800 text-white">1 Room</option>
                  <option value="2" className="bg-gray-800 text-white">2 Rooms</option>
                  <option value="3" className="bg-gray-800 text-white">3 Rooms</option>
                </select>
                <svg className="absolute left-0 bottom-2.5 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 20v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 20h18M5 12h14a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2z" />
                </svg>
                <svg className="absolute right-0 bottom-2.5 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
              {/* Adults */}
              <div className="relative">
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none focus:border-white hover:border-green-300 transition-colors duration-200 py-2 h-12 appearance-none pr-8 pl-8"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: formData.adults ? 'white' : 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <option value="" className="bg-gray-800 text-white">Adults</option>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={`adult-${num}`} value={num} className="bg-gray-800 text-white">
                      {num} {num === 1 ? 'Adult' : 'Adults'}
                    </option>
                  ))}
                </select>
                <svg className="absolute left-0 bottom-2.5 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <svg className="absolute right-0 bottom-2.5 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Children */}
              <div className="relative">
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none focus:border-white hover:border-green-300 transition-colors duration-200 py-2 h-12 appearance-none pr-8 pl-8"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: formData.children ? 'white' : 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <option value="" className="bg-gray-800 text-white">Children</option>
                  {[0, 1, 2, 3, 4, 5, 6].map(num => (
                    <option key={`child-${num}`} value={num} className="bg-gray-800 text-white">
                      {num === 0 ? 'No' : num} {num === 1 ? 'Child' : num > 0 ? 'Children' : 'Children'}
                    </option>
                  ))}
                </select>
                <svg className="absolute left-0 bottom-2.5 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg className="absolute right-0 bottom-2.5 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Check Availability Button */}
              <div className="flex items-end h-full">
                <button
                  type="button"
                  className="w-full bg-transparent text-white px-4 py-2  font-medium text-sm flex items-center justify-center border border-white hover:bg-white hover:text-black transition-colors duration-300 h-12"
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

