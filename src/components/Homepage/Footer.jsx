

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
   
    "About Us",
    "Special Offers ",
    "Rooms",
    "Our Staff",
    "Contact Us",
   
  ];

  const socialMedia = [
    { 
      name: 'WhatsApp',
      icon: 'M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.674.149-.197.295-.771.963-.944 1.16-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.06-.173-.3-.019-.465.13-.615.136-.135.3-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.01-.573-.01-.2 0-.523.074-.797.358-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.104 3.195 5.1 4.485.714.3 1.27.489 1.704.624.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.83 11.83 0 01-1.819-6.272c0-6.54 5.34-11.88 11.88-11.88 3.18 0 6.166 1.26 8.415 3.534 2.25 2.27 3.495 5.28 3.495 8.481 0 6.27-5.15 11.38-11.48 11.38M20.52 3.45C18.24 1.19 15.24 0 12.045 0 5.465 0 .105 5.37.1 11.94c0 2.115.55 4.17 1.595 5.985L0 24l6.33-1.65a11.94 11.94 0 005.715 1.45h.005c6.585 0 11.96-5.365 11.96-11.96 0-3.18-1.245-6.165-3.495-8.415',
      url: 'https://wa.me/1234567890' // Replace with your WhatsApp number
    },
    { 
      name: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
      url: 'https://instagram.com/yourprofile' // Replace with your Instagram profile
    },
    { 
      name: 'Facebook',
      icon: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z',
      url: 'https://facebook.com/yourpage' // Replace with your Facebook page
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed →", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#0F4D2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-12">

          {/* LEFT */}
          <div className="flex flex-col md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center">
                <img src="/Logo1.png" alt="Resort Logo" className="h-16 w-auto" />
              </div>
            </div>

            <p className="text-white mb-6 leading-relaxed text-[0.95rem]" style={{ fontFamily: '"Roboto", sans-serif' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white text-white pl-10 pb-2 placeholder-white focus:outline-none"
                />
              </div>
              <button className="bg-white text-black  px-6 py-2 hover:bg-gray-100 "style={{ fontFamily: '"Roboto", sans-serif' }}>
                Subscribe
              </button>
            </form>
          </div>

          {/* MIDDLE */}
          <div className="md:row-start-2 lg:row-start-auto">
            <h4 className="text-white mb-4 font-gilda text-xl">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-white hover:text-white text-[0.95rem]" style={{ fontFamily: '"Roboto", sans-serif' }} href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="md:row-start-2 lg:row-start-auto">
            <h4 className="text-white mb-6 font-gilda text-xl">Information</h4>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white text-[0.95rem] leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  Fly Me to The Moon St, 001, Somewhere,<br/>
                  Earth
                </p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-white text-[0.95rem]" style={{ fontFamily: '"Roboto", sans-serif' }}>+123 123 123</p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-white text-[0.95rem]" style={{ fontFamily: '"Roboto", sans-serif' }} >aquila@mail.com</p>
              </div>
            </div>

            <h4 className="text-white mb-4 font-gilda text-xl">Follow Us</h4>
            <div className="flex items-center justify-start gap-4 w-full">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                  title={social.name}
                >
                  <svg 
                    className="w-5 h-5 text-white" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white text-sm" style={{ fontFamily: '"Roboto", sans-serif' }} >
              Aquila 2024 All Rights Reserved by FoxCreation
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white text-sm hover:text-gray-300" style={{ fontFamily: '"Roboto", sans-serif' }}>Terms & Service</a>
              <a href="#" className="text-white text-sm hover:text-gray-300"  style={{ fontFamily: '"Roboto", sans-serif' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

