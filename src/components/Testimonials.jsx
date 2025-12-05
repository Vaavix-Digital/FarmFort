import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = '/Logo.png'; // Fallback to logo if image fails to load
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "Designation",
      text: "Nascetur habitasse ridiculus facilisis netus ultrices lacinia iaculis lectus. Facilisis lacus sagittis conubia, montes laoreet libero. Arcu netus commodo varius, consequat sapien penatibus. Netus auctor quisque quis nascetur purus eget ornare. Varius eget hac, at facilisi et class. Phasellus tortor magnis diam bibendum, hendrerit dictum fermentum.",
      image: "/Room1.jpeg"
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Guest",
      text: "Exceptional service and beautiful accommodations. The attention to detail and warm hospitality made our stay unforgettable. Highly recommend this luxury resort for anyone seeking a perfect getaway.",
      image: "/Room2.jpeg"
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "Traveler",
      text: "A truly remarkable experience from start to finish. The rooms are elegant, the staff is attentive, and the overall ambiance is simply perfect. We will definitely be returning.",
      image: "/Hero.jpeg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="w-full py-10 md:py-12 lg:py-16 relative min-h-[400px] flex items-center"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/Room2.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Star Icon */}
        <div className="mb-4">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mx-auto">
            <svg 
              className="w-6 h-6 text-white" 
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

          {/* Testimonials Label */}
          {/* Testimonials Label */}
          <p className="text-white font-normal tracking-wide mb-3 text-base md:text-lg font-['Roboto']">
            Testimonials
          </p>

          {/* Main Title */}
          {/* Main Title */}
          <h2 className="font-gilda text-4xl font-semibold text-white mb-12 md:mb-20">
            Experience Our World In Pictures
          </h2>

          {/* Profile Section */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/40 flex-shrink-0 bg-gray-100">
              <img 
                src={process.env.PUBLIC_URL + currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <h3 className="text-white font-gilda text-lg md:text-xl">
                {currentTestimonial.name}
              </h3>
              <p className="text-white/80 text-xs md:text-sm font-['Roboto']">
                {currentTestimonial.designation}
              </p>
            </div>
          </div>

          {/* Testimonial Text */}
          <p 
            className="text-white max-w-5xl mx-auto mb-8 leading-relaxed"
            style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              lineHeight: '1.8',
              fontStyle: 'italic'
            }}
          >
            {currentTestimonial.text}
          </p>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center transition-colors duration-300 hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-[#056839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center transition-colors duration-300 hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-[#056839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

