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
                {isOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md w-full absolute left-0 px-4 pt-2 pb-6">
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-amber-400 px-3 py-2 text-lg transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md w-full transition-colors duration-300">
                View Rooms
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
