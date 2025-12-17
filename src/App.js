import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Room from './pages/Rooms/Rooms';
import RoomDetails from './pages/Rooms/RoomDetails';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/Blog/BlogDetails';
import SpecialOffers from './pages/Pages/SpecialOffers';
import Staff from './pages/Pages/Staff';
import Faq from './pages/Pages/Faq';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/Pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Navigate to="/rooms/all" replace />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/rooms/details/:id?" element={<RoomDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/our-team" element={<Staff />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

