import React from 'react';
import Navbar from '../../components/Navbar';
import { FiStar } from 'react-icons/fi';
import AboutSection from './AboutSection';
import OurValue from './OurValue';
import TeamSection from './TeamSection';
import Footer from '../../components/Homepage/Footer';
import FAQContact from '../../components/Homepage/FAQContact';
import Hero from '../../components/Homepage/Hero';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url("/Room1.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(70vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Farm Fort</h1>
                <div className="flex items-center text-sm md:text-base font-normal font-['Roboto']">
                  <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
                  <span className="mx-2">/</span>
                  <span>About Farm Fort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <AboutSection />
      
      {/* Our Values Section */}
      <div className="-mt-8">
        <OurValue />
      </div>
      
    
      
      {/* Additional Sections */}
      <Hero />
        <TeamSection />
      <FAQContact />
      <Footer />
    </div>
  );
};

export default About;