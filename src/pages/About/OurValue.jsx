import { Gem, AlertCircle, Handshake } from "lucide-react"
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ number, suffix, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Extract the numeric part and the suffix (like 'K' or '+')
  const numericValue = parseFloat(number);
  
  return (
    <div 
      ref={ref} 
      className="w-full transform transition-all duration-500 ease-out text-center" 
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}
    >
      <div className="mb-2">
        <div className="flex justify-center items-baseline">
          <span className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#056839] font-['Roboto']">
            <CountUp
              end={inView ? numericValue : 0}
              duration={2.5}
              decimals={number.includes('.') ? 1 : 0}
              style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 600 }}
            />
            <span className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#056839]">{suffix}</span>
          </span>
        </div>
      </div>
      <p className="text-gray-900 text-base md:text-lg font-normal font-gilda">{label}</p>
    </div>
  );
};

export default function OurValue() {
  const values = [
    {
      icon: Gem,
      title: "Exceptional Service",
      description:
        "We pride ourselves on delivering outstanding service that exceeds expectations, ensuring every guest feels valued and well-cared for during their stay.",
    },
    {
      icon: AlertCircle,
      title: "Uncompromising Quality",
      description:
        "From our luxurious accommodations to our world-class amenities, we maintain the highest standards of quality in every aspect of our resort.",
    },
    {
      icon: Handshake,
      title: "Integrity and Trust",
      description:
        "We build lasting relationships with our guests through transparency, honesty, and a genuine commitment to their satisfaction.",
    },
  ]

  const stats = [
    { number: "23", suffix: "+", label: "Years Of Experience" },
    { number: "2.7", suffix: "K+", label: "Satisfied Clients" },
    { number: "108", suffix: "+", label: "Experience Staff" },
    { number: "72", suffix: "+", label: "Available Rooms" },
  ];

  return (
    <>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 -ml-2 lg:-ml-4">
            <div className="space-y-4 pb-4">
              <h1 className="text-2xl md:text-2xl font-gilda font-light text-gray-900">Our Value</h1>
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Value Items */}
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index}>
                    <div className="space-y-3 pb-3">
                      <div className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-[#C38154] mt-1 flex-shrink-0" strokeWidth={1.5} />
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">{value.title}</h3>
                          <p className="text-base text-gray-700 mt-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < values.length - 1 && (
                      <div className="border-t border-gray-700 mt-3"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="h-96 lg:h-[500px] w-full px-4">
            <img
              src="/Hero.jpeg"
              alt="Luxury resort with modern interior design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <AnimatedCounter 
              key={idx}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
