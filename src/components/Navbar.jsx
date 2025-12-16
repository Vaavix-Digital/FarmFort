import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Rooms', 
      path: '/rooms',
      dropdown: [
        { name: 'Rooms', path: '/rooms' },
        { name: 'Room Details', path: '/rooms/details' }
      ]
    },
    { 
      name: 'Pages', 
      path: '/pages',
      dropdown: [
        { name: 'Special Offers', path: '/special-offers' },
        { name: 'Staff', path: '/our-team' },
        { name: 'FAQs', path: '/faqs' },
        { name: '404 Page', path: '/404' }
      ]
    },
    { 
      name: 'Blog', 
      path: '/blog',
      dropdown: [
        { name: 'Blog Grid', path: '/blog/grid' },
        { name: 'Blog List', path: '/blog/list' },
        { name: 'Blog Single', path: '/blog/single' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                <div className="flex items-center justify-center w-32 h-12">
                  <img 
                    src="/Logo1.png" 
                    alt="Resort Logo"
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      console.error('Failed to load logo:', e.target.src);
                      e.target.src = '/Logo.png';
                    }}
                  />
                </div>
              </a>
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1" style={{ fontFamily: '"Roboto", sans-serif' }}>
              <div className="flex space-x-8 relative" ref={dropdownRef}>
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={() => item.dropdown ? toggleDropdown(item.name) : window.location.href = item.path}
                      className="text-white hover:text-[#0F4D2F] transition-colors duration-300 font-medium flex items-center"
                    >
                      {item.name}
                      {item.dropdown && (
                        <span className="ml-1">
                          {openDropdown === item.name ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                        </span>
                      )}
                    </button>
                    {item.dropdown && (
                      <div 
                        className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300 ${openDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      >
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                            onClick={closeAllDropdowns}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* View Rooms Button - Right Aligned */}
            <div className="hidden lg:block">
              <button className="bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded-none transition-colors duration-300 text-base" style={{ fontFamily: '"Roboto", sans-serif' }}>
                View Rooms
              </button>
            </div>

            {/* Mobile menu button - pushed to the right */}
            <div className="lg:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <div className="space-y-1">
                  <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
                  <span className="block w-5 h-[1.5px] bg-white transition-all duration-300 ml-auto"></span>
                  <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
                  <span className="block w-4 h-[1.5px] bg-white transition-all duration-300 ml-auto"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Slide-in Panel */}
        <div className={`lg:hidden fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="bg-[#0F4D2F] text-white w-10 h-10 flex items-center justify-center focus:outline-none"
                aria-label="Close menu"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-4 overflow-y-auto">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.dropdown ? (
                      <div className="group">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex justify-between items-center text-gray-700 text-base font-semibold hover:text-[#0F4D2F] transition-colors duration-200 py-2.5 px-1"
                        >
                          <span>{item.name}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {openDropdown === item.name ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                          </span>
                        </button>
                        {openDropdown === item.name && (
                          <div className={`pl-3 overflow-hidden transition-all duration-300 ${openDropdown === item.name ? 'max-h-96' : 'max-h-0'}`}>
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.path}
                                className={`block py-2.5 px-1 ${currentPath === item.path ? 'text-[#0F4D2F]' : 'text-gray-700 hover:text-[#0F4D2F]'} transition-colors duration-200 font-semibold text-base`}
                                onClick={() => {
                                  setIsOpen(false);
                                  closeAllDropdowns();
                                }}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.path}
                        className={`block py-2.5 px-1 ${currentPath === item.path ? 'text-[#0F4D2F]' : 'text-gray-700 hover:text-[#0F4D2F]'} transition-colors duration-200 font-semibold text-base`}
                        onClick={() => {
                          setIsOpen(false);
                          closeAllDropdowns();
                        }}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
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
