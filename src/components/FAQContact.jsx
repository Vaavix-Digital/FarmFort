import React, { useState } from 'react';

const FAQContact = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What time is check-in and check-out?",
      answer: "Parturient ac nullam porta tincidunt mattis. Libero netus hac litora curabitur vulputate euismod. Nunc mauris, litora curabitur vulputate euismod. Nunc mauris, litora curabitur vulputate euismod."
    },
    {
      question: "Do you offer airport transfers?",
      answer: "Yes, we offer airport transfer services. Please contact our concierge to arrange transportation."
    },
    {
      question: "Is Wi-Fi available at the hotel?",
      answer: "Yes, complimentary Wi-Fi is available throughout the hotel premises."
    },
    {
      question: "Are pets allowed?",
      answer: "We welcome pets in designated pet-friendly rooms. Please inform us in advance."
    },
    {
      question: "Do you have family-friendly amenities?",
      answer: "Yes, we offer various family-friendly amenities including kids' activities and family rooms."
    },
    {
      question: "What dining options are available?",
      answer: "We have multiple dining options including fine dining, casual restaurants, and room service."
    },
    {
      question: "Do you offer room upgrades?",
      answer: "Room upgrades are subject to availability. Please inquire at check-in or contact us in advance."
    },
    {
      question: "Is parking available at the hotel?",
      answer: "Yes, we offer complimentary parking for all our guests."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - FAQ Section */}
          <div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex items-center justify-between p-3 md:p-4 text-left transition-colors ${
                      openIndex === index 
                        ? 'bg-black text-white' 
                        : 'bg-[#ECECEC] text-gray-800 hover:bg-[#ECECEC]'
                    }`}
                  >
                    <span 
                      className="font-medium font-sans"
                      style={{ 
                        fontSize: '0.95rem'
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
                    <div className="p-3 md:p-4 bg-white">
                      <p
                        className="text-gray-600 leading-relaxed font-sans"
                        style={{
                          fontSize: '0.9rem',
                          lineHeight: '1.6'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Introduction and Contact */}
          <div className="flex flex-col">
            {/* Star Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-green-600 flex items-center justify-center inline-flex">
                <svg 
                  className="w-6 h-6 text-green-600" 
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
            </div>

            {/* Subtitle */}
            <p 
              className="text-[#056839] font-normal tracking-wide mb-3 text-base md:text-lg"
              style={{ 
                fontFamily: 'Arial, Helvetica, sans-serif'
              }}
            >
              Frequently Asked Questions
            </p>

            {/* Main Title */}
            <h2 
              className="text-black font-semibold mb-6 leading-tight"
              style={{ 
                fontFamily: 'Gilda Display, serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'
              }}
            >
              Quick Answers For A Seamless Experience
            </h2>

            {/* Description */}
            <p 
              className="text-gray-600 mb-8 leading-relaxed"
              style={{ 
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.7'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Contact Us Section */}
            <div className="mt-8">
              <h3 
                className="text-gray-900 mb-6 font-semibold font-['Gilda_Display']"
                style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '500'
                }}
              >
                Contact Us
              </h3>

              <div className="flex flex-col sm:flex-row gap-6">
                {/* Mail Address */}
                <div className="flex-1 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#056839] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-gray-900 font-medium mb-1 font-['Gilda_Display']"
                      style={{ 
                        fontSize: '1rem'
                      }}
                    >
                      Mail Address
                    </p>
                    <p 
                      className="text-gray-600 text-base font-['Gilda_Display']"
                    >
                      aquila@mail.com
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex-1 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#056839] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-gray-900 font-medium mb-1 font-['Gilda_Display']"
                      style={{ 
                        fontSize: '1rem'
                      }}
                    >
                      Phone Number
                    </p>
                    <p 
                      className="text-gray-600 text-base font-['Gilda_Display']"
                    >
                      +123 123 123
                    </p>
                  </div>
                </div>
              </div>

              {/* View More Button */}
              <button
                className="mt-12 bg-[#056839] hover:bg-[#04522d] text-white px-6 py-3 rounded transition-colors duration-300 font-medium"
                style={{ 
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '1rem'
                }}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContact;

