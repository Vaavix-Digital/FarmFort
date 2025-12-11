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
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          WebkitBackgroundAttachment: 'fixed',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      >

        {/* TOP LEFT BOX */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 bg-white p-4 sm:p-6 z-10">
          <div className="flex items-center gap-3 mb-4">
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

            <p className="text-[#D2A07F] font-semibold text-xl sm:text-xl tracking-wide font-['Roboto']">
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

          <p className="text-gray-700 text-base sm:text-base leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif' }}>
            Quam auctor vulputate rutrum sapien euismod et veluipat curabitur sit. Ultrices velit sagittis, 
            laboris dapibus venenatis convallis. Nulla platea pulvinar justo plateu tempus at elementum.
            Libero netus hac litora curabitur vulputate euismod. Sollicitudin hendrerit nibh auctor himenaeos curabitur ridiculus torquent. Elit aptent netus mi orci tristique pharetra accumsan. 
          </p>
        </div>

        {/* BOTTOM RIGHT BOX */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-white p-4 sm:p-6 z-10">
          <p 
            ref={paragraphRef}
            className="text-gray-600 text-base sm:text-base leading-relaxed mb-4 opacity-0 italic" style={{ fontFamily: '"Roboto", sans-serif' }}
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
