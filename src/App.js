import React from 'react';
import HeroSection from './components/HeroSection';
import SpecialPackages from './components/SpecialPackages';
import Gallery from './components/Gallery';
import FAQContact from './components/FAQContact';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import ServicesAmenities from './components/ServicesAmenities';
import BookingForm from './components/BookingForm';
import AboutAquila from './components/AboutAquila';
import Rooms from './components/Rooms';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesAmenities />
      <AboutAquila />
      <Rooms />
      <Hero />
      <SpecialPackages />
      <BookingForm />
      <Gallery />
      <FAQContact />
      <Testimonials />
      <Insights />
      <Footer/>

       
     
     
    
        
    </div>
  );
}

export default App;

