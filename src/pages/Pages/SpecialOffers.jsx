import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Homepage/Footer';
import Hero from '../../components/Homepage/Hero';
import { FaQ } from 'react-icons/fa6';
import FAQContact from '../../components/Homepage/FAQContact';

const SpecialOffers = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, {
      threshold: 0.1
    });

    const packages = document.querySelectorAll('.package-item');
    packages.forEach(pkg => observer.observe(pkg));

    return () => {
      packages.forEach(pkg => observer.unobserve(pkg));
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url("/Hero.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(70vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
                <div className="flex items-center text-sm md:text-base font-normal">
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span>Special Offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Packages Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white mb-3">
                <img 
                  src="/logo icon.png" 
                  alt="FarmFort Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
                Special Packages
              </p>
            </div>
            <h2 className="font-gilda text-3xl md:text-4xl font-semibold text-black mb-6">
              Enhance Your Stay With Our Signature Packages
            </h2>
            <p className="max-w-4xl mx-auto text-gray-800 font-roboto md:text-lg">
              Suspendisse senectus platea quam mauris; etiam molestie quis. Porttitor
              mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper
              pellentesque facilisis adipiscing.
            </p>
          </div>
          
          <style jsx global>{`
            @keyframes slideInFromLeft {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes slideInFromRight {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .package-item {
              opacity: 0;
              transition: opacity 0.6s ease-out, transform 0.6s ease-out;
              border-radius: 0 !important;
              overflow: hidden;
            }
            .package-item.animate-slide-in {
              opacity: 1;
            }
            .package-item:nth-child(odd).animate-slide-in {
              animation: slideInFromLeft 0.6s ease-out forwards;
            }
            .package-item:nth-child(even).animate-slide-in {
              animation: slideInFromRight 0.6s ease-out forwards;
            }
            .package-item:hover {
              transform: translateY(-5px) scale(1.01);
              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .package-item img {
              border-radius: 0 !important;
            }
          `}</style>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {/* Package 1 */}
            <div className="package-item relative h-96 overflow-hidden group shadow-lg transition-all duration-300">
              <img
                src="/Hero2.jpeg"
                alt="Romantic Getaway Package"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-6">
                <h3 className="text-white text-2xl font-medium">Romantic Getaway Package</h3>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-md font-medium tracking-wider mb-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Up To</p>
                    <p className="text-white text-5xl font-bold">20% Off</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-sm">
                    Learn More
                  </span>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="package-item relative h-96 overflow-hidden group shadow-lg transition-all duration-300">
              <img
                src="/Hero.jpeg"
                alt="Family Fun Package"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-6">
                <h3 className="text-white text-2xl font-medium">Family Fun Package</h3>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-md font-medium tracking-wider mb-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Up To</p>
                    <p className="text-white text-5xl font-bold">15% Off</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-sm">
                    Learn More
                  </span>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="package-item relative h-96 overflow-hidden group shadow-lg transition-all duration-300">
              <img
                src="/Hero2.jpeg"
                alt="Ultimate Luxury Package"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-6">
                <h3 className="text-white text-2xl font-medium">Ultimate Luxury Package</h3>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-md font-medium tracking-wider mb-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Up To</p>
                    <p className="text-white text-5xl font-bold">25% Off</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-sm">
                    Learn More
                  </span>
                </div>
              </div>
            </div>

            {/* Package 4 */}
            <div className="package-item relative h-96 overflow-hidden group shadow-lg transition-all duration-300">
              <img
                src="/Hero.jpeg"
                alt="Seasonal Escape Package"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-6">
                <h3 className="text-white text-2xl font-medium">Seasonal Escape Package</h3>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-md font-medium tracking-wider mb-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Up To</p>
                    <p className="text-white text-5xl font-bold">30% Off</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-sm">
                    Learn More
                  </span>
                </div>
              </div>
            </div>

            {/* Package 5 */}
            <div className="package-item relative h-96 overflow-hidden group shadow-lg transition-all duration-300">
              <img
                src="/Hero2.jpeg"
                alt="Long Stay Package"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-6">
                <h3 className="text-white text-2xl font-medium">Long Stay Package</h3>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-md font-medium tracking-wider mb-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Up To</p>
                    <p className="text-white text-5xl font-bold">25% Off</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-sm">
                    Learn More
                  </span>
                </div>
              </div>
            </div>

            {/* Package 6 */}
            <div className="package-item relative h-96 overflow-hidden group shadow-lg transition-all duration-300">
              <img
                src="/Hero.jpeg"
                alt="Spa & Wellness Retreat"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-6">
                <h3 className="text-white text-2xl font-medium">Spa & Wellness Retreat</h3>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-md font-medium tracking-wider mb-1" style={{ fontFamily: '"Roboto", sans-serif' }}>Up To</p>
                    <p className="text-white text-5xl font-bold">20% Off</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-sm">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <Hero/>
      </div>
      <div className="mt-16 mb-24">
        <FAQContact/>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialOffers;