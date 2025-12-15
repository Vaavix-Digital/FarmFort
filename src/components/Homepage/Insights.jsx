import React from 'react';
import { motion } from 'framer-motion';

const Insights = () => {
  const articles = [
    {
      id: 1,
      title: "Luxury Travel Trends: What to Expect in 2024",
      date: "October 5, 2024",
      image: "/Room1.jpeg",
      buttonText: "Read More"
    },
    {
      id: 2,
      title: "Insider Tips for an Unforgettable Stay at Aquila",
      date: "October 5, 2024",
      image: "/Room2.jpeg",
      buttonText: "Read More"
    },
    {
      id: 3,
      title: "5 Unforgettable Dining Experiences at Aquila",
      date: "October 3, 2024",
      image: "/Hero.jpeg",
      buttonText: "Read More"
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-1 sm:px-3 md:px-4">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white mb-3">
              <img 
                src="/logo icon.png" 
                alt="FarmFort Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
          
          

          {/* Insight Label */}
        <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
            Insight
          </p>
          </div>

          {/* Main Title */}
          <motion.h2 
            className="font-gilda text-3xl md:text-4xl font-semibold text-black mb-6"
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
            Explore Our Archive Of Luxury Travel Ideas And Tips
          </motion.h2>

          {/* Descriptive Paragraph */}
          <p 
            className="text-gray-800 max-w-4xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
              lineHeight: '1.8'
            }}
          >
            Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper pellentesque facilisis adipiscing.
          </p>
        </div>

        {/* Article Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {articles.map((article, index) => (
            <motion.div 
              key={article.id} 
              className="group"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1, 
                transition: { 
                  duration: 1.2,  // Slower fade duration
                  delay: index * 0.2,  // Increased delay between items
                  ease: [0.25, 0.1, 0.25, 1]  // Smoother easing curve
                }
              }}
              viewport={{ once: true, margin: "-20px" }}
            >
              {/* Article Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="pt-4">
                {/* Title */}
                <h3 className="font-gilda text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-900 mb-3 hover:text-[#056839] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Date */}
                <div className="flex items-center text-gray-400 text-sm mb-4 font-['Roboto']">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {article.date}
                </div>

                {/* Read More Button */}
                <button className="bg-[#056839] text-white hover:bg-[#04502f] px-4 py-3 font-normal text-sm tracking-wider transition-colors" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  {article.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;

