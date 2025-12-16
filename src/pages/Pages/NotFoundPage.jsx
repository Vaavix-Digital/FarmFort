import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Homepage/Footer';

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: 'url("/Hero2.jpeg")' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h1 className="text-[150px] leading-none font-serif font-normal mb-2">404</h1>
          <h2 className="text-4xl font-serif font-normal mb-8">Page Not Found!</h2>
          <p className="text-md font-sans mb-10 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link 
            to="/" 
            className="inline-block border border-white  hover:bg-white hover:text-black text-white font-medium py-3 px-10 rounded-none transition-all duration-300 font-roboto"
          >
            Back To Home
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NotFoundPage;