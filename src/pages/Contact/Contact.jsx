import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Pencil, Calendar, User as UserIcon, Users, BedSingle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Homepage/Footer';

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Contact = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
 
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url("/Hero2.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(70vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
                <div className="flex items-center text-sm md:text-base font-normal">
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="bg-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo Icon */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white mb-3">
              <img 
                src="/logo icon.png" 
                alt="FarmFort Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            
            {/* Contact Label */}
            <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
              Get In Touch
            </p>
          </div>

        
          {/* Main Title and Description */}
          <div className="w-full flex flex-col items-center">
            <motion.h2 
              className="font-gilda text-3xl md:text-4xl font-semibold text-black mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  ease: [0.16, 0.77, 0.47, 0.97]
                }
              }}
              viewport={{ once: true }}
            >
              Connect With Us For Personalized Assistance
            </motion.h2>

            {/* Description */}
          <p className="max-w-4xl mx-auto text-gray-800 font-roboto text-sm md:text-base text-center mb-12">
            Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor mollis cubilia, imperdiet lacinia
            praesent hac. Ligula nibh ullamcorper pellentesque facilisis adipiscing.
          </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Phone Number */}
            <div className="flex flex-col items-center text-center">
              <Phone className="w-12 h-12 text-[#c47b54] mb-4" strokeWidth={1.5} />
              <h4 className="text-base font-medium mb-1 font-roboto">Phone Number</h4>
              <p className="text-gray-700 font-gilda text-xl">+123 123 123</p>
            </div>

            {/* Mail Address */}
            <div className="flex flex-col items-center text-center">
              <Mail className="w-12 h-12 text-[#c47b54] mb-4" strokeWidth={1.5} />
              <h4 className="text-base font-medium mb-1 font-roboto">Mail Address</h4>
              <p className="text-gray-700 font-gilda text-xl">aquila@mail.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 text-[#c47b54] mb-4" strokeWidth={1.5} />
              <h4 className="text-base font-medium mb-1 font-roboto">Location</h4>
              <p className="text-gray-700 font-gilda text-xl">
                Fly Me to The Moon St, 001,
                <br />
                Somewhere, Earth
              </p>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-[#c47b54] mb-4" strokeWidth={1.5} />
              <h4 className="text-base font-medium mb-1 font-roboto">Business Hours</h4>
            <p className="text-gray-700 font-gilda text-xl">
                Monday - Sunday 06:00 A.M. -
                <br />
                10:00 P.M.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Contact Section */}
      <div className="bg-white pt-0 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              
              <div className="w-full overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d251453.21142616193!2d76.32977919999999!3d10.020454399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba65bf066dad763%3A0x958110a52b252d8d!2sFarook%20College%20Road%2C%20Chungam%2C%20Ramanattukara%2C%20Via%2C%20Feroke%2C%20Kozhikode%2C%20Kerala%20673632!3m2!1d11.184770499999999!2d75.8468286!5e0!3m2!1sen!2sin!4v1765867308627!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Resort Location Map"
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
             
              <div className="w-full bg-[#0F4D2F] p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 border-b border-white pb-3">
                      <Pencil className="w-4 h-4 text-gray-300" />
                      <input
                        type="text"
                        placeholder="Name"
                        className="flex-1 bg-transparent text-white placeholder:text-gray-300 text-base outline-none font-roboto"
                      />
                    </div>
                    <div className="flex items-center gap-3 border-b border-white pb-3">
                      <Mail className="w-4 h-4 text-gray-300" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 bg-transparent text-white placeholder:text-gray-300 text-base outline-none font-roboto"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-b border-white pb-3">
                    <BedSingle className="w-4 h-4 text-gray-300" />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="flex-1 bg-transparent text-white placeholder:text-gray-300 text-base outline-none font-roboto"
                    />
                  </div>

                  <div className="flex gap-3 mb-2">
                    <svg className="w-4 h-4 text-gray-300 mt-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <textarea
                      placeholder="Message"
                      rows="5"
                      className="flex-1 bg-transparent text-white placeholder:text-gray-300 text-base outline-none font-roboto resize-none py-2"
                      style={{ minHeight: '120px' }}
                    />
                  </div>
                  
                  <div className="border-t border-white my-4"></div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-transparent border border-white text-white text-base font-medium rounded-md hover:bg-white hover:text-[#0F4D2F] transition-colors duration-300 font-roboto mt-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsBookingModalOpen(true);
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-gilda font-semibold mb-4">Booking Confirmation</h3>
            <p className="mb-6">Thank you for your reservation request. We'll contact you shortly to confirm your booking.</p>
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="w-full py-2 bg-[#0F4D2F] text-white rounded-md hover:bg-[#0d4428] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Contact;
