import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import BookingForm from '../../components/Homepage/BookingForm';
import Rooms from '../../components/Homepage/Rooms';
import Hero from '../../components/Homepage/Hero';
import SpecialPackages from '../../components/Homepage/SpecialPackages';
import FAQContact from '../../components/Homepage/FAQContact';
import Footer from '../../components/Homepage/Footer';

const Room = () => {
  const { id } = useParams();
  
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Rooms</h1>
                <div className="flex items-center text-sm md:text-base font-normal">
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span>Rooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <BookingForm/>
     <Rooms/>
     <Hero/>
     <SpecialPackages/>
     <div className="mb-16">
       <FAQContact/>
     </div>
     <Footer/>
    </div>
    
  );
};

export default Room;