import React from 'react';
import AboutHero from '../../components/AboutHero/AboutHero';

const Blog = () => {
  return (
    <div className="bg-gray-50">
      <AboutHero />
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest news, travel tips, and stories from FarmFort Resort.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post cards will be mapped here */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Latest Resort Updates</h2>
                <p className="text-gray-600 text-sm mb-4">December 8, 2025</p>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news and events at FarmFort Resort.
                </p>
                <button className="text-amber-600 font-medium hover:text-amber-700">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
