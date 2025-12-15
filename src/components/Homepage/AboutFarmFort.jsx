import { useEffect, useRef, useState } from 'react';
import './AboutFarmFort.css';

const AboutFarmFort = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const founderNameRef = useRef(null);
  const founderTitleRef = useRef(null);
  const [bgPosition, setBgPosition] = useState('center');

  useEffect(() => {
    const updateBgPosition = () => {
      if (window.innerWidth < 768) {
        setBgPosition('center 75%');
      } else {
        setBgPosition('center');
      }
    };

    updateBgPosition();
    window.addEventListener('resize', updateBgPosition);
    return () => window.removeEventListener('resize', updateBgPosition);
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
    <div className="w-full">

      {/* Background Image - FIXED */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat mx-auto h-[90vh] min-h-[800px] md:h-[85vh] md:min-h-[700px] lg:h-[80vh] lg:min-h-[900px]"
        style={{
          backgroundImage: "url('/Room1.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: bgPosition,
          backgroundAttachment: 'fixed',
          WebkitBackgroundAttachment: 'fixed',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      >

        {/* TOP LEFT BOX */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 bg-white p-4 sm:p-6 z-10">
          <div className="flex flex-col items-start gap-2 mb-4">
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
            <span className="block">Where Luxury Meets</span>
            <span className="block">Personalized Hospitality</span>
          </h1>

          <p className="text-gray-800 text-base sm:text-base leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif' }}>
            Quam auctor vulputate rutrum sapien euismod et veluipat curabitur sit. Ultrices velit sagittis, 
            laboris dapibus venenatis convallis. Nulla platea pulvinar justo plateu tempus at elementum.
            Libero netus hac litora curabitur vulputate euismod. Sollicitudin hendrerit nibh auctor himenaeos curabitur ridiculus torquent. Elit aptent netus mi orci tristique pharetra accumsan. 
          </p>
        </div>

        {/* BOTTOM RIGHT BOX */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-white p-4 sm:p-6 z-10">
          <p 
            ref={paragraphRef}
            className="text-gray-800 text-base sm:text-base leading-relaxed mb-4 opacity-0 italic" style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            FarmFort is a haven of refined luxury, where timeless elegance meets modern sophistication.
            Nestled in a prime location, our hotel offers breathtaking views, unparalleled comfort, and
            an ambiance of serenity.
          </p>

          <p 
            ref={founderNameRef}
            className="text-[#056839] text-2xl md:text-xl lg:text-xl font-medium opacity-0"
          >
            Baburaj Melethara
          </p>

          <p 
            ref={founderTitleRef}
            className="text-base md:text-sm lg:text-sm text-gray-500 opacity-0"
          >
            Founder of FarmFort
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutFarmFort;
