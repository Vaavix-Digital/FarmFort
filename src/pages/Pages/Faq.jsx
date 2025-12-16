import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../../components/Homepage/Footer';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [roomsOpenIndex, setRoomsOpenIndex] = useState(0);
  const [paymentOpenIndex, setPaymentOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What time is check-in and check-out?",
      answer: "Parturient ac nullam porta tincidunt mattis. Libero netus hac litora curabitur vulputate euismod. Nunc mauris, litora curabitur vulputate euismod. Nunc mauris, litora curabitur vulputate euismod."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Yes, we offer airport transfer services. Please contact our concierge to arrange transportation."
    },
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, complimentary Wi-Fi is available throughout the hotel premises."
    },
    {
      question: "Is the hotel pet-friendly?",
      answer: "We welcome pets in designated pet-friendly rooms. Please inform us in advance."
    },
    {
      question: "Do you offer airport transfers?",
      answer: "Yes, we offer various family-friendly amenities including kids' activities and family rooms."
    }
  ];

  const roomsFaqs = [
    {
      question: "Do you offer room upgrades?",
      answer: "We offer a variety of rooms including Deluxe, Executive, and Presidential Suites, each designed to provide maximum comfort and luxury."
    },
    {
      question: "Are there accessible rooms?",
      answer: "Yes, all our rooms are equipped with a minibar stocked with a selection of beverages and snacks."
    },
    {
      question: "What in-room amenities are provided?",
      answer: "Yes, we offer 24/7 room service for your convenience."
    },
    {
      question: "Can i request extra beds or cribs?",
      answer: "Yes, we offer connecting rooms for families and groups traveling together."
    }
  ];

  const paymentFaqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, MasterCard, and American Express. We also accept bank transfers and cash payments."
    },
    {
      question: "Do you require a deposit ?",
      answer: "Yes, we require a security deposit upon check-in which is refundable upon check-out after room inspection."
    },
    {
      question: "Can I pay in foreign currency?",
      answer: "Yes, we offer special rates for extended stays, corporate clients, and seasonal promotions. Please contact our reservations team for more information."
    }
   
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleRoomsFAQ = (index) => {
    setRoomsOpenIndex(roomsOpenIndex === index ? null : index);
  };

  const togglePaymentFAQ = (index) => {
    setPaymentOpenIndex(paymentOpenIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Page Title */}
      <div className="relative">
        <div className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url("/Hero2.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(70vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                <div className="flex items-center text-sm md:text-base font-normal">
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span>Frequently Asked Questions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pt-16 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-[#0F4D2F] p-8 shadow-sm text-white">
                <h3 className="text-2xl font-gilda font-normal text-white mb-3 -mt-2">Still Have Questions? Feel Free to Contact Us</h3>
                <p className="text-gray-300 text-base font-roboto mb-8 leading-relaxed">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium text-white">Phone Number</h4>
                      <p className="text-md font-roboto font-normal text-white">+123 123 123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                     <h4 className="text-xl font-medium text-white">Mail Address</h4>
                    <p className="text-md font-roboto font-normal text-white">Farmfort@mail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - FAQ Accordion */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">General Questions</h2>
              <p className="text-gray-800 mb-8 font-roboto">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.8,
                    ease: [0.16, 0.77, 0.47, 0.97],
                    delay: 0.1
                  }
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-none overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full flex items-center justify-between p-2 md:p-3 text-left transition-colors rounded-none ${
                        openIndex === index 
                          ? 'bg-black text-white' 
                          : 'bg-[#ECECEC] text-gray-800 hover:bg-[#ECECEC]'
                      }`}
                    >
                      <span 
                        className="font-medium font-sans italic"
                        style={{ 
                          fontSize: '1rem',
                          fontStyle: 'italic'
                        }}
                      >
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <div className="p-2 md:p-3 bg-white text-sm">
                        <p
                          className="text-gray-800 leading-relaxed font-sans"
                          style={{
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            fontStyle: 'normal'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Rooms & Accommodations Section */}
              <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-4">Rooms & Accommodations</h2>
              <p className="text-gray-800 mb-8 font-roboto">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.8,
                    ease: [0.16, 0.77, 0.47, 0.97],
                    delay: 0.1
                  }
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                {roomsFaqs.map((faq, index) => (
                  <div key={`rooms-${index}`} className="rounded-none overflow-hidden">
                    <button
                      onClick={() => toggleRoomsFAQ(index)}
                      className={`w-full flex items-center justify-between p-2 md:p-3 text-left transition-colors rounded-none ${
                        roomsOpenIndex === index 
                          ? 'bg-black text-white' 
                          : 'bg-[#ECECEC] text-gray-800 hover:bg-[#ECECEC]'
                      }`}
                    >
                      <span 
                        className="font-medium font-sans italic"
                        style={{ 
                          fontSize: '1rem',
                          fontStyle: 'italic'
                        }}
                      >
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          roomsOpenIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {roomsOpenIndex === index && (
                      <div className="p-2 md:p-3 bg-white text-sm">
                        <p
                          className="text-gray-800 leading-relaxed font-sans"
                          style={{
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            fontStyle: 'normal'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Payment & Policies Section */}
              <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-4">Payment & Policies</h2>
              <p className="text-gray-800 mb-8 font-roboto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.8,
                    ease: [0.16, 0.77, 0.47, 0.97],
                    delay: 0.1
                  }
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                {paymentFaqs.map((faq, index) => (
                  <div key={`payment-${index}`} className="rounded-none overflow-hidden">
                    <button
                      onClick={() => togglePaymentFAQ(index)}
                      className={`w-full flex items-center justify-between p-2 md:p-3 text-left transition-colors rounded-none ${
                        paymentOpenIndex === index 
                          ? 'bg-black text-white' 
                          : 'bg-[#ECECEC] text-gray-800 hover:bg-[#ECECEC]'
                      }`}
                    >
                      <span 
                        className="font-medium font-sans italic"
                        style={{ 
                          fontSize: '1rem',
                          fontStyle: 'italic'
                        }}
                      >
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          paymentOpenIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {paymentOpenIndex === index && (
                      <div className="p-2 md:p-3 bg-white text-sm">
                        <p
                          className="text-gray-800 leading-relaxed font-sans"
                          style={{
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            fontStyle: 'normal'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
<Footer/>
    </div>
  );
};

export default Faq;
