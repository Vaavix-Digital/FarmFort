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
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;

