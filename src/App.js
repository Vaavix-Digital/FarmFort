import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Room from './pages/Rooms/Rooms';
import RoomDetails from './pages/Rooms/RoomDetails';
import SpecialOffers from './pages/Pages/SpecialOffers';
import Staff from './pages/Pages/Staff';
import Faq from './pages/Pages/Faq';
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
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/our-team" element={<Staff />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

