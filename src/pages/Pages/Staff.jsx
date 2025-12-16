import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Homepage/Footer';
import Hero from '../../components/Homepage/Hero';
import FAQContact from '../../components/Homepage/FAQContact';

const Staff = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, {
      threshold: 0.1
    });

    const staffMembers = document.querySelectorAll('.staff-item');
    staffMembers.forEach(staff => observer.observe(staff));

    return () => {
      staffMembers.forEach(staff => observer.unobserve(staff));
    };
  }, []);

  const staffData = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Head Chef',
     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=faces&facepad=2'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&crop=faces&facepad=2'
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=faces&facepad=2'
    },
    {
      id: 4,
      name: 'Emily Davis',
      position: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=600&fit=crop&crop=faces&facepad=2'
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'Head Bartender',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=faces&facepad=2'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      position: 'Guest Relations',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&crop=faces&facepad=2'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      position: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=faces&facepad=2'
    },
    {
      id: 8,
      name: 'Jessica Lee',
      position: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop&crop=faces&facepad=2'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Page Title */}
      <div className="relative">
        <div className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url("/Hero.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(70vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Staff</h1>
                <div className="flex items-center text-sm md:text-base font-normal">
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span>Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white mb-3">
                <img 
                  src="/logo icon.png" 
                  alt="FarmFort Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
                Our Team
              </p>
            </div>
            <h2 className="font-gilda text-3xl md:text-4xl font-semibold text-black mb-6">
              Passionate Experts, Exceptional Service
            </h2>
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {staffData.map((member) => (
              <div key={member.id} className="flex flex-col overflow-hidden">
                {/* Image Container with Social Icons */}
                <div className="relative w-full overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/4.5] w-full object-cover"
                  />

                  {/* Social Media Icons */}
                  <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D2A07F] text-white transition-transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D2A07F] text-white transition-transform hover:scale-110"
                      aria-label="Twitter"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.39.106-.8.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.254-7.1 13.254-13.254 0-.2-.005-.402-.014-.602.91-.66 1.7-1.48 2.323-2.42z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D2A07F] text-white transition-transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Name and Title Section */}
                <div className="bg-[#0F4D2F] px-6 py-4 text-center text-white">
                  <h3 className="font-serif text-xl font-normal">{member.name}</h3>
                  <p className="mt-2 text-sm font-light text-gray-300 font-roboto">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    

      <Footer />
    </div>
  );
};

export default Staff;
