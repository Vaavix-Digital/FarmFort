import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Calendar, User as UserIcon, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../../components/Homepage/Footer';

const BlogDetails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Total number of slides
  const [mainImage, setMainImage] = useState("/room1.jpeg");
  
  // Define 5 slides with 3 unique images each
  const slides = [
    // Slide 1
    [
      "/room1.jpeg",
      "/home2.jpeg",
      "/room3.jpeg"
    ],
    // Slide 2
    [
      "/room.jpeg",
      "/roomss.jpeg",
      "/out1.jpeg"
    ],
    // Slide 3
    [
      "/out2.jpeg",
      "/blog.jpeg",
      "/blog1.jpeg"
    ],
    // Slide 4
    [
      "/home3.jpeg",
      "/WhatsApp Image 2025-12-03 at 9.48.49 AM.jpeg",
      "/WhatsApp Image 2025-12-03 at 9.49.08 AM.jpeg"
    ],
    // Slide 5
    [
      "/WhatsApp Image 2025-12-03 at 9.49.30 AM.jpeg",
      "/WhatsApp Image 2025-12-03 at 9.49.57 AM.jpeg",
      "/WhatsApp Image 2025-12-03 at 9.50.03 AM (2).jpeg"
    ]
  ];

  // Get current slide's images
  const getCurrentImages = () => {
    return slides[currentSlide % 5] || [];
  };

  // Set main image only once on component mount
  useEffect(() => {
    setMainImage("/room1.jpeg");
  }, []);

  const [post] = useState({
    title: 'Insider Tips For An Unforgettable Stay\nAt Farm Fort',
    date: '2024-10-05',
    author: 'John Doe',
    authorImage: '/author1.jpg'
  });

  const articles = [
    {
      id: 1,
      title: "Luxury Travel Trends: What to Expect in 2024",
      date: "October 5, 2024",
      image: "/room1.jpeg",
      buttonText: "Read More"
    },
    {
      id: 2,
      title: "Insider Tips for an Unforgettable Stay",
      date: "October 5, 2024",
      image: "/room2.jpeg",
      buttonText: "Read More"
    },
    {
      id: 3,
      title: "5 Unforgettable Dining Experiences at Fram Fort",
      date: "October 3, 2024",
      image: "/blog1.jpeg",
      buttonText: "Read More"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="bg-cover bg-center h-[80vh]" style={{ backgroundImage: 'url("/Hero.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(80vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <div className="mb-6">
                 
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2]">
                  {post.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < post.title.split('\n').length - 1 && <div className="h-2"></div>}
                    </React.Fragment>
                  ))}
                </h1>
                
                {/* Author and Date */}
                <div className="flex items-center space-x-4 mb-8 font-['Roboto']">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-white mr-2" />
                    <span className="text-white font-roboto">{post.author}</span>
                  </div>
                  <div className="h-4 w-px bg-white/50"></div>
                  <div className="flex items-center text-white/80">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-roboto">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Carousel Image */}
      <div className="relative w-full h-[400px] overflow-hidden px-4 pt-6 pb-4">
        <img 
          src={mainImage} 
          alt="Blog content" 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      
      {/* Blog Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 pb-12 lg:pt-10 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-gilda text-3xl lg:text-4xl font-semibold mb-4">Description</h1>
          <div className="space-y-5 mb-6">
            <p className="text-base leading-relaxed font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-base leading-relaxed font-roboto">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <h2 className="font-gilda text-2xl md:text-xl lg:text-2xl mb-4">Designing Exceptional and Lasting Guest Journeys</h2>
          <div className="space-y-5 mb-6">
            <p className="text-base leading-relaxed font-roboto">
              Himenaeos augue fringilla curabitur tempus natoque quisque odio malesuada. Hendrerit in dapibus pulvinar nec amet faucibus. Dolor lacinia penatibus dapibus montes porttitor ex? Gravida gravida suscipit magnis nulla dolor. Est placerat velit quis interdum mauris facilisi aptent integer euismod. Lectus urna nibh dis consequat potenti aliquam.
            </p>
           
            
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-base leading-relaxed font-roboto">Nascetur tristique vel donec; nisi facilisis euismod conubia conubia</li>
              <li className="text-base leading-relaxed font-roboto">Pulvinar massa diam integer condimentum; aliquet dis varius ac</li>
              <li className="text-base leading-relaxed font-roboto">Turpis adipiscing tempor condimentum posuere pharetra rutrum</li>
              <li className="text-base leading-relaxed font-roboto">Ultrices nulla molestie aliquet venenatis posuere; hac elementum</li>
              <li className="text-base leading-relaxed font-roboto">Sapien sem sagittis justo vulputate proin</li>
              <li className="text-base leading-relaxed font-roboto">Vestibulum rhoncus scelerisque ipsum nulla orci ipsum</li>
            </ul>
            
            <p className="text-base leading-relaxed font-roboto">
              Nascetur tristique vel donec; nisi facilisis euismod conubia conubia. Pulvinar massa diam integer condimentum; aliquet dis varius ac. Turpis adipiscing tempor condimentum posuere pharetra rutrum. Ultrices nulla molestie aliquet venenatis posuere; hac elementum. Sapien sem sagittis justo vulputate proin. Vestibulum rhoncus scelerisque ipsum nulla orci ipsum.
            </p>

          </div>

          {/* Testimonial and Image Gallery Section */}
          <div className="border-l-2 border-gray-300 pl-4 md:pl-8 my-12">
            <p className="text-lg md:text-base italic text-gray-800 leading-relaxed mb-6 font-roboto">
              Phasellus imperdiet montes ad convallis sollicitudin taciti iaculis. Mus metus taciti aenean laoreet
              bibendum nostra nascetur. Pretium eleifend ut suspendisse dui tristique dolor viverra tempor sem. Dis
              sagittis luctus, lacinia eros convallis lobortis.
            </p>

            <h3 className="text-base md:text-lg font-gilda text-gray-900 mb-1">John Peterson</h3>
            <p className="text-base text-gray-800 font-roboto">CEO & Founder of Aquila</p>
          </div>

          {/* Image Carousel */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {getCurrentImages().map((src, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    // No longer update main image on click
                  }}
                >
                  <img 
                    src={src}
                    alt={`Gallery image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    // Only update current slide, not main image
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-[#A66A45] w-6" : "bg-gray-200 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-8" />

          {/* Social Share Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <p className="text-lg font-serif text-gray-900 mb-4 sm:mb-0">Share to :</p>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A66A45] text-white hover:bg-[#8A5A3A] transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A66A45] text-white hover:bg-[#8A5A3A] transition-colors"
                aria-label="Share on X"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A66A45] text-white hover:bg-[#8A5A3A] transition-colors"
                aria-label="Share on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          </div>
         </div>
            
         {/* Blog Archive Section */}
          <section className="w-full pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col items-center text-center mb-6 md:mb-8">
               
                {/* Main Title */}
                <motion.h2 
                  className="font-gilda text-3xl md:text-4xl font-semibold text-black mb-4"
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
                 Other Post
                </motion.h2>


              </div>

              {/* Article Previews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-3 sm:px-0">
                {articles.map((article, index) => (
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
<Footer/>
    </div>
  );
};

export default BlogDetails;