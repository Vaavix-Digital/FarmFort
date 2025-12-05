

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
    "Home",
    "Rooms",
    "About Us",
    "Gallery",
    "Contact",
    "Blog",
  ];

  const socialMedia = [
    { icon: "M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 001.82-2.31 8.36 8.36 0 01-2.64 1 4.14 4.14 0 00-7.15 3.77A11.73 11.73 0 013 4.79a4.14 4.14 0 001.28 5.52 4.06 4.06 0 01-1.87-.52v.05a4.15 4.15 0 003.32 4.06 4.11 4.11 0 01-1.86.07 4.15 4.15 0 003.87 2.88A8.32 8.32 0 012 18.57a11.74 11.74 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.69 0-.18 0-.35-.01-.53A8.18 8.18 0 0022.46 6z" }, // Twitter
    { icon: "M18.896 2H5.104A3.104 3.104 0 002 5.104v13.792A3.104 3.104 0 005.104 22h13.792A3.104 3.104 0 0022 18.896V5.104A3.104 3.104 0 0018.896 2zM12 18.182A6.186 6.186 0 1112 5.81a6.186 6.186 0 010 12.372zm6.406-11.54a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" }, // Instagram
    { icon: "M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.47 1.48-3.84 3.74-3.84 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85H18l-.45 2.88h-2.95v6.99A10 10 0 0022 12z" }, // Facebook
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
              <div className="inline-flex items-center justify-center p-2 rounded-lg bg-white">
                <img src="/Logo.png" alt="Resort Logo" className="h-16 w-auto" />
              </div>
            </div>

            <p className="text-white mb-6 leading-relaxed text-[0.95rem]">
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
                  className="w-full bg-transparent border-b-2 border-white text-white pl-10 pb-2 placeholder-white focus:outline-none"
                />
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>

          {/* MIDDLE */}
          <div className="md:row-start-2 lg:row-start-auto">
            <h4 className="text-white mb-4 font-gilda text-2xl">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-white hover:text-white text-[0.95rem]" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="md:row-start-2 lg:row-start-auto">
            <h4 className="text-white mb-6 font-gilda text-2xl">Information</h4>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white text-[0.95rem] leading-relaxed">
                  Fly Me to The Moon St, 001, Somewhere, Earth
                </p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-white text-[0.95rem]">+123 123 123</p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-white text-[0.95rem]">aquila@mail.com</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 w-full">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 flex-shrink-0"
                >
                  <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 24 24">
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
            <p className="text-white text-sm">
              Aquila 2024 All Rights Reserved by FoxCreation
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white text-sm hover:text-gray-300">Terms & Service</a>
              <a href="#" className="text-white text-sm hover:text-gray-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

