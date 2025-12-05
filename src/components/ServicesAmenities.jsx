

import React from "react";

const ServicesAmenities = () => {
  const amenities = [
    { name: 'Free WiFi', icon: 'wifi' },
    { name: 'Free Breakfast', icon: 'food' },
    { name: 'Event Venues', icon: 'event' },
    { name: 'Swimming Pool', icon: 'pool' },
    { name: "Kids' Park", icon: 'park' },
    { name: 'Fishing', icon: 'fishing' },
    { name: 'Indoor Games', icon: 'games' },
    { name: 'Garden', icon: 'garden' }
  ];

  const renderIcon = (iconType, className = "w-8 h-8 text-amber-400") => {
    const iconClass = className;

    switch (iconType) {
      case 'wifi':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        );
      case 'food':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
          </svg>
        );
      case 'bed':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7h-2v-7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2z" />
          </svg>
        );
      case 'spa':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            <circle cx="9" cy="9" r="1.5" />
            <circle cx="15" cy="9" r="1.5" />
          </svg>
        );
      case 'pool':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 12c0-1.1-.9-2-2-2h-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2v-4h-2zm-4-2v2h-2v-2h2zm-4 0v2H6v-2h6zm0 4v2H6v-2h6zm4 0v2h-2v-2h2zm0-8V6h-2v2h2z" />
          </svg>
        );
      case 'event':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
          </svg>
        );
      case 'park':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6z" />
          </svg>
        );
      case 'fishing':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 9.5a1 1 0 01-1-1c0-.28.11-.53.29-.71l7.08-7.06c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.09 7.06a.96.96 0 01-.69.3z" />
            <path d="M16 5.5c0 1.1-.9 2-2 2-.28 0-.53.11-.71.29l-9.8 9.8c-.39.39-1.02.39-1.41 0a.996.996 0 010-1.41l9.81-9.8c.18-.18.43-.29.71-.29 1.1 0 2 .9 2 2z" />
            <path d="M4.5 14.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
          </svg>
        );
      case 'games':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z" />
          </svg>
        );
      case 'garden':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5.5L6 10v9h12v-9l-6-4.5zM12 3l8 6v12H4V9l8-6zm-1 7h2v2h2v2h-2v2h-2v-2H9v-2h2v-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#0F4D2F' }}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Star Icon */}
        <div className="mb-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto" style={{ border: '2px solid #D2A07F' }}>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="#D2A07F" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-white mb-6 font-semibold leading-tight text-4xl font-gilda">
          Services & Amenities
        </h2>

        {/* Descriptive Paragraph */}
        <p 
          className="text-white max-w-4xl mx-auto mb-8 leading-relaxed"
          style={{ 
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '0.95rem',
            lineHeight: '1.6'
          }}
        >
          Suspendisse senectus platea quam mauris, etiam molestie quis. Porttitor mollis cubilia, imperdiet lacinia praesent hac. Ligula nibh ullamcorper pellentesque facilisis adipiscing.
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-6xl" style={{
          '@media (min-width: 640px) and (max-width: 767px)': {
            'gridTemplateColumns': 'repeat(2, 1fr)'
          },
          '@media (min-width: 768px) and (max-width: 1023px)': {
            'gridTemplateColumns': 'repeat(3, 1fr)'
          },
          '@media (min-width: 1024px)': {
            'gridTemplateColumns': 'repeat(4, 1fr)'
          }
        }}>
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 w-full flex flex-col items-center justify-center shadow-md border border-gray-200 hover:bg-[#D2A07F] hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-2">
                {renderIcon(item.icon, "w-8 h-8 text-[#D2A07F] group-hover:text-white transition-colors duration-300")}
              </div>
              {/* Label */}
              <p className="text-gray-800 text-sm font-medium group-hover:text-white text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAmenities;
