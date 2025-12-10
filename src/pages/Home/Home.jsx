import React from 'react';
import HeroSection from '../../components/Homepage/HeroSection';
import AboutFarmFort from '../../components/Homepage/AboutFarmFort';
import ServicesAmenities from '../../components/Homepage/ServicesAmenities';
import Hero from '../../components/Homepage/Hero';
import Rooms from '../../components/Homepage/Rooms';
import SpecialPackages from '../../components/Homepage/SpecialPackages';
import Testimonials from '../../components/Homepage/Testimonials';
import Gallery from '../../components/Homepage/Gallery';
import FAQContact from '../../components/Homepage/FAQContact';
import Footer from '../../components/Homepage/Footer';
import BookingForm from '../../components/Homepage/BookingForm';
import insights from '../../components/Homepage/Insights';
import Insights from '../../components/Homepage/Insights';


const Home = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <ServicesAmenities />
      <AboutFarmFort />
      <Rooms />
       <Hero />
      <SpecialPackages />
      <BookingForm/>
      <Gallery />
      <FAQContact />
      <Testimonials />
      <Insights/>
      <Footer />
    </div>
  );
};

export default Home;