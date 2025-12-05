import React from 'react';

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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Star Icon */}
          <div className="mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-green-600 flex items-center justify-center">
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

          {/* Insight Label */}
          <p className="text-[#056839] font-normal tracking-wide mb-3 text-base md:text-lg font-['Roboto']">
            Insight
          </p>

          {/* Main Title */}
          <h2 className="font-gilda text-4xl font-semibold text-black mb-6">
            Explore Our Archive Of Luxury Travel Ideas And Tips
          </h2>

          {/* Descriptive Paragraph */}
          <p 
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group">
              {/* Article Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="pt-4">
                {/* Title */}
                <h3 className="font-gilda text-xl text-gray-900 mb-2 hover:text-[#056839] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {article.date}
                </div>

                {/* Read More Button */}
                <button className="bg-[#056839] text-white hover:bg-[#04502f] px-4 py-2 font-['Roboto'] font-normal text-sm tracking-wider transition-colors">
                  {article.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;

