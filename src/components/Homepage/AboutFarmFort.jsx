import { useEffect, useRef, useState } from 'react';
import './AboutFarmFort.css';

const AboutFarmFort = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const founderNameRef = useRef(null);
  const founderTitleRef = useRef(null);
  const [bgSize, setBgSize] = useState('cover');
  const [bgPosition, setBgPosition] = useState('center');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateBgStyles = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 768) {
        setBgSize('120% auto');
        setBgPosition('center 60%');
      } else {
        setBgSize('cover');
        setBgPosition('center');
      }
    };

    updateBgStyles();
    window.addEventListener('resize', updateBgStyles);
    return () => window.removeEventListener('resize', updateBgStyles);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = [
      { ref: headingRef, animation: 'animate-slide-up' },
      { ref: paragraphRef, animation: 'animate-slide-in-right' },
      { ref: founderNameRef, animation: 'animate-slide-in-right animate-delay-100' },
      { ref: founderTitleRef, animation: 'animate-slide-in-right animate-delay-200' }
    ];

    const elementRefs = [];

    elements.forEach(({ ref, animation }) => {
      if (ref.current) {
        ref.current.setAttribute('data-animation', animation);
        observer.observe(ref.current);
        elementRefs.push(ref.current);
      }
    });

    return () => {
      elementRefs.forEach(element => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full px-3 py-12">

      {/* Container with Background Image (Desktop) or Manager Image (Mobile) */}
      <div
        className={`relative w-full mx-auto h-[140vh] min-h-[700px] md:h-[85vh] md:min-h-[700px] lg:h-[80vh] lg:min-h-[900px] px-0.5 md:px-0 overflow-hidden ${!isMobile ? 'bg-cover bg-no-repeat' : ''}`}
        style={!isMobile ? {
          backgroundImage: "url('/Room1.jpeg')",
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
          backgroundAttachment: 'fixed',
          WebkitBackgroundAttachment: 'fixed',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
          backgroundRepeat: 'no-repeat',
        } : {}}
      >
        {/* Manager Image - Mobile Only (Round Shape) - Centered in White Space */}
        <div className="md:hidden absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center z-20">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
            <img 
              src="/manager.jpeg" 
              alt="Manager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mb-2">
            <p className="text-[#056839] text-xl font-medium">
              Baburaj Melethara
            </p>
            <p className="text-sm text-gray-500">
              Founder of FarmFort
            </p>
          </div>
        </div>

        {/* TOP LEFT BOX */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 bg-white p-3 sm:p-4 z-10">
          <div className="flex flex-col items-start gap-2 mb-4 p-0">
            <div className="w-11 h-11 rounded-full border-2 border-[#056839] flex items-center justify-center p-1.5 bg-white">
              <img 
                src="/logo icon.png" 
                alt="FarmFort Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <p className="text-[#056839] text-base font-semibold" style={{ fontFamily: '"Roboto", sans-serif' }}>
              About FarmFort
            </p>
          </div>

          <h1 
            ref={headingRef}
            className="font-gilda text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            <span className="block">MEET THE VISIONERY</span>
            <span className="block">BEHIND FARMFORT</span>
          </h1>

          <p className="text-gray-800 text-base sm:text-base leading-relaxed m-0" style={{ fontFamily: '"Roboto", sans-serif' }}>
           A veteran journalist with a long career spanning nearly half a century,  Mr M Baburaj is one of the pioneers of Development Journalism in Kerala. He served at Malayala Manorama in various capacities including Reporter, Editor, and Unit Head, before retiring as Senior Coordinating Editor and Unit Head at Kannur.
           In recognition of his excellence in development-oriented journalism, he has received several prestigious honours, including awards from the State Government and the Indian Medical Association.

          </p>
        </div>

        {/* BOTTOM RIGHT BOX */}
        <div className="absolute bottom-8 md:bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-white p-3 sm:p-4 z-10">
          <p 
            ref={paragraphRef}
            className="text-gray-800 text-base sm:text-base leading-relaxed mb-4 opacity-0 italic m-0 md:mt-0 -mt-2" style={{ fontFamily: '"Roboto", sans-serif' }}
          >
           He has also served as a member of the Board of Studies in Journalism at Calicut University and Kannur University, as a member of the Zonal Railway Users' Consultative Committee, and as the Founding President of Sahitham Residence Association.

After retirement, he established the enterprises Farmrock Garden and Farm Fort on Farook College Road, where he currently serves as Chief Executive Officer.
          </p>
          
          <a 
            href="#" 
            className="text-[#056839] font-semibold text-base hover:underline inline-block mt-2"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Read More
          </a>

          <div className="opacity-0 hidden md:block" ref={founderNameRef}>
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
              <img 
                src="/manager.jpeg" 
                alt="Manager"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
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
    </div>
  );
};

export default AboutFarmFort;
