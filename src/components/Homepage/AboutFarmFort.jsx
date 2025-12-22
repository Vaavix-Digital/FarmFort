// import { useEffect, useRef, useState } from 'react';
// import './AboutFarmFort.css';

// const AboutFarmFort = () => {
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const founderNameRef = useRef(null);
//   const founderTitleRef = useRef(null);
//   const [bgSize, setBgSize] = useState('cover');
//   const [bgPosition, setBgPosition] = useState('center');

//   useEffect(() => {
//     const updateBgStyles = () => {
//       if (window.innerWidth < 768) {
//         setBgSize('120% auto');
//         setBgPosition('center 60%');
//       } else {
//         setBgSize('cover');
//         setBgPosition('center');
//       }
//     };

//     updateBgStyles();
//     window.addEventListener('resize', updateBgStyles);
//     return () => window.removeEventListener('resize', updateBgStyles);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const animationClass = entry.target.getAttribute('data-animation');
//             if (animationClass) {
//               const classes = animationClass.split(' ');
//               entry.target.classList.remove(...classes);
//               void entry.target.offsetWidth;
//               entry.target.classList.add(...classes);
//             }
//           }
//         });
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//       }
//     );

//     const elements = [
//       { ref: headingRef, animation: 'animate-slide-up' },
//       { ref: paragraphRef, animation: 'animate-slide-in-right' },
//       { ref: founderNameRef, animation: 'animate-slide-in-right animate-delay-100' },
//       { ref: founderTitleRef, animation: 'animate-slide-in-right animate-delay-200' }
//     ];

//     const elementRefs = [];

//     elements.forEach(({ ref, animation }) => {
//       if (ref.current) {
//         ref.current.setAttribute('data-animation', animation);
//         observer.observe(ref.current);
//         elementRefs.push(ref.current);
//       }
//     });

//     return () => {
//       elementRefs.forEach(element => {
//         observer.unobserve(element);
//       });
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="w-full px-3 py-12">

//       {/* Background Image - FIXED */}
//       <div
//         className="relative w-full bg-cover bg-no-repeat mx-auto h-[140vh] min-h-[700px] md:h-[85vh] md:min-h-[700px] lg:h-[80vh] lg:min-h-[900px] px-0.5 md:px-0 overflow-hidden"
//         style={{
//           backgroundImage: "url('/Room1.jpeg')",
//           backgroundSize: bgSize,
//           backgroundPosition: bgPosition,
//           backgroundAttachment: 'fixed',
//           WebkitBackgroundAttachment: 'fixed',
//           transform: 'translate3d(0,0,0)',
//           backfaceVisibility: 'hidden',
//           willChange: 'transform',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >

//         {/* TOP LEFT BOX */}
//         <div className="absolute top-0 left-0 w-full md:w-1/2 bg-white p-3 sm:p-4 z-10">
//           <div className="flex flex-col items-start gap-2 mb-4 p-0">
//             <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white">
//               <img 
//                 src="/logo icon.png" 
//                 alt="FarmFort Logo"
//                 className="w-7 h-7 object-contain"
//               />
//             </div>
//             <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
//               About FarmFort
//             </p>
//           </div>

//           <h1 
//             ref={headingRef}
//             className="font-gilda text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-6 opacity-0 leading-tight"
//           >
//             <span className="block">MEET THE VISIONERY</span>
//             <span className="block">BEHIND FARMFORT</span>
//           </h1>

//           <p className="text-gray-800 text-base sm:text-base leading-relaxed m-0" style={{ fontFamily: '"Roboto", sans-serif' }}>
//            A veteran journalist with a long career spanning nearly half a century,  Mr M Baburaj is one of the pioneers of Development Journalism in Kerala. He served at Malayala Manorama in various capacities including Reporter, Editor, and Unit Head, before retiring as Senior Coordinating Editor and Unit Head at Kannur.
//            In recognition of his excellence in development-oriented journalism, he has received several prestigious honours, including awards from the State Government and the Indian Medical Association.

//           </p>
//         </div>

//         {/* BOTTOM RIGHT BOX */}
//         <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-white p-3 sm:p-4 z-10">
//           <p 
//             ref={paragraphRef}
//             className="text-gray-800 text-base sm:text-base leading-relaxed mb-4 opacity-0 italic m-0" style={{ fontFamily: '"Roboto", sans-serif' }}
//           >
//            He has also served as a member of the Board of Studies in Journalism at Calicut University and Kannur University, as a member of the Zonal Railway Users’ Consultative Committee, and as the Founding President of Sahitham Residence Association.

// After retirement, he established the enterprises Farmrock Garden and Farm Fort on Farook College Road, where he currently serves as Chief Executive Officer.
//           </p>

//           <div className="opacity-0" ref={founderNameRef}>
//             <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
//               <img 
//                 src="/manager.jpeg" 
//                 alt="Manager"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <p className="text-[#056839] text-xl font-medium">
//                 Baburaj Melethara
//               </p>
//               <p 
//                 ref={founderTitleRef}
//                 className="text-sm text-gray-500"
//               >
//                 Founder of FarmFort
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AboutFarmFort;




// import { useEffect, useRef, useState } from 'react';
// import './AboutFarmFort.css';

// const AboutFarmFort = () => {
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const founderNameRef = useRef(null);
//   const founderTitleRef = useRef(null);

//   const [bgSize, setBgSize] = useState('cover');
//   const [bgPosition, setBgPosition] = useState('center');

//   /* ---------- RESPONSIVE BACKGROUND HANDLER ---------- */
//   useEffect(() => {
//     const updateBgStyles = () => {
//       if (window.innerWidth < 768) {
//         setBgSize('none');
//         setBgPosition('center');
//       } else {
//         setBgSize('cover');
//         setBgPosition('center');
//       }
//     };

//     updateBgStyles();
//     window.addEventListener('resize', updateBgStyles);
//     return () => window.removeEventListener('resize', updateBgStyles);
//   }, []);

//   /* ---------- INTERSECTION ANIMATIONS ---------- */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const animationClass = entry.target.getAttribute('data-animation');
//             if (animationClass) {
//               const classes = animationClass.split(' ');
//               entry.target.classList.remove(...classes);
//               void entry.target.offsetWidth;
//               entry.target.classList.add(...classes);
//             }
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     );

//     const elements = [
//       { ref: headingRef, animation: 'animate-slide-up' },
//       { ref: paragraphRef, animation: 'animate-slide-in-right' },
//       { ref: founderNameRef, animation: 'animate-slide-in-right animate-delay-100' },
//       { ref: founderTitleRef, animation: 'animate-slide-in-right animate-delay-200' }
//     ];

//     const observed = [];

//     elements.forEach(({ ref, animation }) => {
//       if (ref.current) {
//         ref.current.setAttribute('data-animation', animation);
//         observer.observe(ref.current);
//         observed.push(ref.current);
//       }
//     });

//     return () => {
//       observed.forEach(el => observer.unobserve(el));
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="w-full px-3 py-12">

//       {/* MAIN CONTAINER */}
//       <div
//         className="relative w-full mx-auto
//                    h-auto md:h-[85vh] lg:h-[80vh]
//                    min-h-[700px] lg:min-h-[900px]
//                    overflow-hidden"
//         style={{
//           backgroundImage: window.innerWidth >= 768 ? "url('/Room1.jpeg')" : "none",
//           backgroundSize: bgSize,
//           backgroundPosition: bgPosition,
//           backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >

//         {/* ================= MOBILE ONLY IMAGE ================= */}
//         <div className="flex justify-center mt-6 md:hidden z-10">
//           <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
//             <img
//               src="/manager.jpeg"
//               alt="Founder"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* ================= TOP LEFT CONTENT ================= */}
//         <div className="relative md:absolute md:top-0 md:left-0 
//                         w-full md:w-1/2 bg-white p-4 z-10">

//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-11 h-11 rounded-full border-2 border-[#056839]
//                             flex items-center justify-center bg-white">
//               <img
//                 src="/logo icon.png"
//                 alt="FarmFort Logo"
//                 className="w-7 h-7 object-contain"
//               />
//             </div>
//             <p className="text-[#056839] font-semibold text-base">
//               About FarmFort
//             </p>
//           </div>

//           <h1
//             ref={headingRef}
//             className="font-gilda text-2xl sm:text-3xl md:text-4xl
//                        font-semibold text-black mb-4 opacity-0"
//           >
//             <span className="block">MEET THE VISIONERY</span>
//             <span className="block">BEHIND FARMFORT</span>
//           </h1>

//           <p className="text-gray-800 leading-relaxed text-base">
//             A veteran journalist with a long career spanning nearly half a
//             century, Mr M Baburaj is one of the pioneers of Development
//             Journalism in Kerala. He served at Malayala Manorama in various
//             capacities including Reporter, Editor, and Unit Head, before
//             retiring as Senior Coordinating Editor and Unit Head at Kannur.
//           </p>
//         </div>

//         {/* ================= BOTTOM RIGHT CONTENT (DESKTOP ONLY IMAGE) ================= */}
//         <div className="relative md:absolute md:bottom-0 md:right-0
//                         w-full md:w-1/2 lg:w-2/5 bg-white p-4 z-10 mt-6 md:mt-0">

//           <p
//             ref={paragraphRef}
//             className="text-gray-800 leading-relaxed italic mb-4 opacity-0"
//           >
//             He has also served as a member of the Board of Studies in Journalism
//             at Calicut University and Kannur University, as a member of the Zonal
//             Railway Users’ Consultative Committee, and as the Founding President
//             of Sahitham Residence Association.
//           </p>

//           <div ref={founderNameRef} className="hidden md:block opacity-0">
//             <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
//               <img
//                 src="/manager.jpeg"
//                 alt="Founder"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <p className="text-[#056839] text-xl font-medium">
//               Baburaj Melethara
//             </p>
//             <p
//               ref={founderTitleRef}
//               className="text-sm text-gray-500"
//             >
//               Founder of FarmFort
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AboutFarmFort;





import { useEffect, useRef, useState } from 'react';
import './AboutFarmFort.css';

const AboutFarmFort = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const founderNameRef = useRef(null);
  const founderTitleRef = useRef(null);

  const [bgSize, setBgSize] = useState('cover');
  const [bgPosition, setBgPosition] = useState('center');

  /* ---------- RESPONSIVE BACKGROUND ---------- */
  useEffect(() => {
    const updateBgStyles = () => {
      if (window.innerWidth < 768) {
        setBgSize('none');
        setBgPosition('center');
      } else {
        setBgSize('cover');
        setBgPosition('center');
      }
    };

    updateBgStyles();
    window.addEventListener('resize', updateBgStyles);
    return () => window.removeEventListener('resize', updateBgStyles);
  }, []);

  /* ---------- INTERSECTION ANIMATIONS ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animation');
            if (animationClass) {
              const classes = animationClass.split(' ');
              entry.target.classList.remove(...classes);
              void entry.target.offsetWidth;
              entry.target.classList.add(...classes);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [
      { ref: headingRef, animation: 'animate-slide-up' },
      { ref: paragraphRef, animation: 'animate-slide-in-right' },
      { ref: founderNameRef, animation: 'animate-slide-in-right animate-delay-100' },
      { ref: founderTitleRef, animation: 'animate-slide-in-right animate-delay-200' }
    ];

    const observed = [];

    elements.forEach(({ ref, animation }) => {
      if (ref.current) {
        ref.current.setAttribute('data-animation', animation);
        observer.observe(ref.current);
        observed.push(ref.current);
      }
    });

    return () => {
      observed.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full px-3 py-12">
      <div
        className="relative w-full mx-auto
                   h-auto md:h-[85vh] lg:h-[80vh]
                   min-h-[700px] lg:min-h-[900px]
                   overflow-hidden"
        style={{
          backgroundImage: window.innerWidth >= 768 ? "url('/Room1.jpeg')" : 'none',
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
          backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll',
          backgroundRepeat: 'no-repeat',
        }}
      >

        {/* ================= TOP LEFT CONTENT ================= */}
        <div className="relative md:absolute md:top-0 md:left-0 
                        w-full md:w-1/2 bg-white p-4 z-10">

          {/* Logo and Label */}
          <div className="flex flex-col items-start gap-2 mb-4 p-0">
            <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white">
              <img 
                src="/logo icon.png" 
                alt="FarmFort Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '\'Roboto\', sans-serif' }}>
              About FarmFort
            </p>
          </div>

          <h1
            ref={headingRef}
            className="font-gilda text-2xl sm:text-3xl md:text-4xl
                       font-semibold text-black mb-4 opacity-0"
          >
            <span className="block">MEET THE VISIONERY</span>
            <span className="block">BEHIND FARMFORT</span>
          </h1>

          {/* Paragraph 1 — ROBOTO */}
          <p
            className="text-gray-800 text-base leading-relaxed mb-4"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            A veteran journalist with a long career spanning nearly half a
            century, Mr M Baburaj is one of the pioneers of Development Journalism
            in Kerala. He served at Malayala Manorama in various capacities
            including Reporter, Editor, and Unit Head, before retiring as Senior
            Coordinating Editor and Unit Head at Kannur.
          </p>

          {/* Paragraph 2 — ROBOTO */}
          <p
            className="text-gray-800 text-base leading-relaxed mb-4"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            In recognition of his excellence in development-oriented journalism,
            he has received several prestigious honours, including awards from
            the State Government and the Indian Medical Association.
          </p>
        </div>

        {/* ================= BOTTOM RIGHT CONTENT ================= */}
        <div className="relative md:absolute md:bottom-0 md:right-0
                        w-full md:w-1/2 lg:w-2/5 bg-white p-4 z-10 mt-6 md:mt-0">

          {/* Paragraph 3 */}
          <p
            ref={paragraphRef}
            className="text-gray-800 text-base leading-relaxed italic mb-6 opacity-0"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            He has also served as a member of the Board of Studies in Journalism
            at Calicut University and Kannur University, as a member of the Zonal
            Railway Users’ Consultative Committee, and as the Founding President
            of Sahitham Residence Association.
          </p>

          {/* ✅ MOBILE ONLY — IMAGE + NAME */}
          <div className="md:hidden flex flex-col items-center my-6">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src="/manager.jpeg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#056839] text-lg font-medium mt-2">
              Baburaj Melethara
            </p>
            <p className="text-sm text-gray-500">
              Founder of FarmFort
            </p>
          </div>

          {/* Paragraph 4 */}
          <p 
            className="text-gray-800 text-base leading-relaxed italic mb-4"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            After retirement, he established the enterprises Farmrock Garden and
            Farm Fort on Farook College Road, where he currently serves as Chief
            Executive Officer.
          </p>

          {/* Read More */}
          <button 
            className="text-[#056839] font-medium underline mb-6"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Read More
          </button>

          {/* DESKTOP FOUNDER — UNCHANGED */}
          <div ref={founderNameRef} className="hidden md:block opacity-0">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
              <img
                src="/manager.jpeg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#056839] text-xl font-medium">
              Baburaj Melethara
            </p>
            <p
              ref={founderTitleRef}
              className="text-sm text-gray-500"
            >
              Founder of FarmFort
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutFarmFort;
