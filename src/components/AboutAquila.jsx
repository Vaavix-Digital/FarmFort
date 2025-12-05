
const AboutAquila = () => {
  return (
    <div className="w-full h-auto">
      {/* Background Image */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat mx-auto h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px]"
        style={{ backgroundImage: "url('/Room1.jpeg')" }}
      >
        {/* Top Left Content - Full width on mobile, half on md+ */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-auto md:h-1/2 bg-white p-6 md:p-8 lg:p-12 z-10">
          <div className="flex items-center gap-3 mb-6">
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
              About Farmfort
            </p>
          </div>

          <h1 className="font-gilda text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6">
            Where Luxury Meets <br className="hidden sm:block" />
            <span className="sm:inline">Personalized Hospitality</span>
          </h1>

          <div className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Quam auctor vulputate rutrum sapien euismod et veluipat curabitur sit. Ultrices velit sagittis, laboris
              dapibus venenatis convallis. Nulla platae pulvinar justo plateu tempus at elementum.
              Libero netus hac litora curabitur vulputate euismod. Sollicitudin hendrerit nibh auctor himenaeos curabitur ridiculus torquent. Elit aptent netus mi orci tristique pharetra accumsan. 
            </p>
          </div>
        </div>

        {/* Bottom Right Content - Full width on mobile, half on md+ */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 h-auto md:h-1/3 bg-white p-6 md:p-8 z-10">
          <div className=" border-gray-100 pt-4 sm:pt-6">
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 Roboto">
              Aquila is a haven of refined luxury, where timeless elegance meets modern sophistication. Nestled in a prime location, our hotel offers breathtaking views, unparalleled comfort, and an ambiance of serenity.
            </p>
            <p className="text-[#056839] text-base sm:text-lg font-medium">Baburaj Melethara</p>
            <p className="text-xs sm:text-sm text-gray-500 text['Roboto']">Founder of Farmfort</p>
          </div>
        </div>
      </div>

      {/* White Overlay with Text */}

    </div>
  );
};

export default AboutAquila;

