import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Pages', path: '/pages' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // No scroll effect needed
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="relative w-full z-50 transition-all duration-300 bg-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                <div className="bg-transparent">
                  <img 
                    src="/Logo.png" 
                    alt="AQUILA Luxury Hotel & Resort" 
                    className="h-10 w-auto mix-blend-multiply"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-white hover:text-amber-400 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* View Rooms Button - Right Aligned */}
            <div className="hidden lg:block">
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-1.5 rounded-md transition-colors duration-300">
                View Rooms
              </button>
            </div>

            {/* Mobile menu button - pushed to the right */}
            <div className="lg:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Slide-in Panel */}
        <div className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="bg-[#8B5A2B] text-white w-10 h-10 flex items-center justify-center focus:outline-none"
                aria-label="Close menu"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-4 overflow-y-auto">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      className="text-gray-800 text-lg hover:text-amber-500 transition-colors duration-200 block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <button 
                className="mt-8 w-full border-2 border-gray-800 text-gray-800 font-medium py-3 px-6 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  setIsOpen(false);
                  // Add navigation to rooms page if needed
                }}
              >
                View Rooms
              </button>
            </nav>
          </div>
        </div>
        
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
