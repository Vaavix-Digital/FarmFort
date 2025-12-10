
import { useEffect, useRef } from 'react';
import './AboutFarmFort.css';

const AboutFarmFort = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const founderNameRef = useRef(null);
  const founderTitleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animation');
            if (animationClass) {
              // Remove any existing animation classes first
              const classes = animationClass.split(' ');
              entry.target.classList.remove(...classes);
              // Force reflow to restart animation if needed
              void entry.target.offsetWidth;
              // Add the animation classes
              entry.target.classList.add(...classes);
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is in view
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
      {/* Background Image */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat mx-auto h-[600px]"
        style={{ backgroundImage: "url('/Room1.jpeg')" }}
      >
        {/* Top Left Content - Full width on mobile, half on md+ */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 bg-white p-4 sm:p-6 z-10">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#D2A07F] flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-[#D2A07F]" 
                fill="none" 
                stroke="currentColor" 
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
            <p className="text-[#D2A07F] font-semibold  tracking-wide text-base md:text-lg font-['Roboto']">
              About FarmFort
            </p>
          </div>

          <h1 
            ref={headingRef}
            className="font-gilda text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-2 sm:mb-4 opacity-0"
          >
            Where Luxury Meets <br className="hidden sm:block" />
            <span className="sm:inline">Personalized Hospitality</span>
          </h1>

          <div className="text-gray-700 text-[11px] xs:text-xs sm:text-[13px] leading-snug">
            <p>
              Quam auctor vulputate rutrum sapien euismod et veluipat curabitur sit. Ultrices velit sagittis, laboris
              dapibus venenatis convallis. Nulla platae pulvinar justo plateu tempus at elementum.
              Libero netus hac litora curabitur vulputate euismod. Sollicitudin hendrerit nibh auctor himenaeos curabitur ridiculus torquent. Elit aptent netus mi orci tristique pharetra accumsan. 
            </p>
          </div>
        </div>

        {/* Bottom Right Content - Full width on mobile, half on md+ */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 h-1/3 bg-white p-4 sm:p-6 z-10">
          <div className="pt-1">
            <p 
              ref={paragraphRef}
              className="text-gray-600 text-[11px] xs:text-xs sm:text-[13px] leading-snug mb-2 sm:mb-3 Roboto opacity-0"
            >
              FarmFort is a haven of refined luxury, where timeless elegance meets modern sophistication. Nestled in a prime location, our hotel offers breathtaking views, unparalleled comfort, and an ambiance of serenity.
            </p>
            <p 
              ref={founderNameRef}
              className="text-[#056839] text-base sm:text-lg font-medium opacity-0"
            >
              Baburaj Melethara
            </p>
            <p 
              ref={founderTitleRef}
              className="text-xs sm:text-sm text-gray-500 opacity-0"
              style={{ fontFamily: 'Roboto' }}
            >
              Founder of FarmFort
            </p>
          </div>
        </div>
      </div>

      {/* White Overlay with Text */}

    </div>
  );
};

export default AboutFarmFort;

