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
      if (window.innerWidth < 768) {
        setBgSize('120% auto');
        setBgPosition('center 60%');
        setIsMobile(true);
      } else {
        setBgSize('cover');
        setBgPosition('center');
        setIsMobile(false);
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
    <div className="w-full px-3 py-12 md:px-3" style={{ overflow: isMobile ? 'visible' : undefined, position: 'relative' }}>

      {/* Background Image - FIXED */}
      <div className="relative w-full mx-auto h-[160vh] min-h-[900px] md:h-[85vh] md:min-h-[700px] lg:h-[80vh] lg:min-h-[900px] md:px-0 md:overflow-hidden" style={{ 
        paddingLeft: isMobile ? '0.5rem' : '0.125rem', 
        paddingRight: isMobile ? '0.5rem' : '0.125rem',
        overflow: isMobile ? 'visible' : undefined 
      }}>
        {/* Desktop - Room Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat w-full h-full"
          style={{
            backgroundImage: "url('/Room1.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            WebkitBackgroundAttachment: 'fixed',
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
        />
        
        {/* Mobile - Manager Profile */}
        <div className="md:hidden absolute flex flex-col items-center justify-center bg-white z-[5]" style={{ 
          top: 'clamp(200px, 32vh, 240px)', 
          bottom: 'clamp(150px, 22vh, 220px)', 
          left: '0.5rem', 
          right: '0.5rem', 
          paddingTop: 'clamp(2.5rem, 6vh, 3rem)', 
          paddingBottom: 'clamp(1rem, 3vh, 2rem)', 
          paddingLeft: '1rem', 
          paddingRight: '1rem',
          minHeight: 'clamp(250px, 40vh, 350px)',
          width: 'calc(100% - 1rem)',
          boxSizing: 'border-box',
          marginTop: '0'
        }}>
          <div className="rounded-full overflow-hidden mx-auto border-2 border-[#056839]/20 flex-shrink-0 shadow-sm" style={{ 
            aspectRatio: '1/1', 
            width: 'clamp(128px, 20vw, 192px)',
            height: 'clamp(128px, 20vw, 192px)',
            marginTop: '0',
            marginBottom: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxSizing: 'border-box',
            display: 'block',
            position: 'relative',
            zIndex: 6
          }}>
            <img 
              src="/manager.jpeg" 
              alt="Manager"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%', display: 'block' }}
            />
          </div>
          <div className="text-center px-4 w-full max-w-xs" style={{ marginTop: 'clamp(1rem, 3vh, 1.5rem)' }}>
            <p className="text-[#056839] font-semibold" style={{ fontSize: 'clamp(1.125rem, 4vw, 1.5rem)' }}>
              Baburaj Meletara
            </p>
            <p className="text-[#056839]/80 mt-1" style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)' }}>
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
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-white p-3 sm:p-4 z-10">
          <p 
            ref={paragraphRef}
            className="text-gray-800 text-base sm:text-base leading-relaxed mb-4 opacity-0 italic m-0" style={{ fontFamily: '"Roboto", sans-serif' }}
          >
           He has also served as a member of the Board of Studies in Journalism at Calicut University and Kannur University, as a member of the Zonal Railway Users' Consultative Committee, and as the Founding President of Sahitham Residence Association.

After retirement, he established the enterprises Farmrock Garden and Farm Fort on Farook College Road, where he currently serves as Chief Executive Officer.
          </p>

          <div className="hidden md:block opacity-0" ref={founderNameRef}>
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
