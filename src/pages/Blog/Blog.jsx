import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Homepage/Footer';
import { Calendar, Clock, User as UserIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  

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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Archive</h1>
                <div className="flex items-center text-sm md:text-base font-normal">
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span>Blog Archive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-1 sm:px-3 md:px-4">
          {/* Article Previews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-3 sm:px-0">
            {[
              {
                id: 1,
                title: 'Top 10 Luxury Resorts for Your Next Vacation',
                date: 'June 15, 2024',
                image: '/Hero2.jpeg',
                buttonText: 'Read More'
              },
              {
                id: 2,
                title: 'Sustainable Travel: Eco-Friendly Stays Around the World',
                date: 'June 10, 2024',
                image: '/Hero.jpeg',
                buttonText: 'Read More'
              },
              {
                id: 3,
                title: 'The Ultimate Guide to Beachfront Villas',
                date: 'June 5, 2024',
                image: '/Hero2.jpeg',
                buttonText: 'Read More'
              },
              {
                id: 4,
                title: 'Mountain Retreats: Finding Peace in Nature',
                date: 'May 28, 2024',
                image: '/Hero.jpeg',
                buttonText: 'Read More'
              },
              {
                id: 5,
                title: 'Culinary Experiences at Luxury Resorts',
                date: 'May 20, 2024',
                image: '/Hero2.jpeg',
                buttonText: 'Read More'
              },
              {
                id: 6,
                title: 'Wellness Retreats for Mind and Body',
                date: 'May 15, 2024',
                image: '/Hero.jpeg',
                buttonText: 'Read More'
              }
            ].map((article, index) => (
              <motion.div 
                key={article.id} 
                className="group"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  transition: { 
                    duration: 1.2,
                    delay: index * 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
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

      <Footer />
    </div>
  );
};

export default Blog;