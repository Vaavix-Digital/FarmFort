import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Homepage/Footer';
import { Wifi, BedSingle, Utensils, Users, Droplets, Waves, Bath, Grid3x3, Pencil, Mail, Calendar, User as UserIcon, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeRoomVariant, setActiveRoomVariant] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(null);
  const [children, setChildren] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return format(date, 'MMM d, yyyy');
  };

  // Room variants data
  const roomVariants = [
    {
      id: 'deluxe',
      title: 'Deluxe Room',
      description: 'Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      price: 299,
      size: '45 m²',
      capacity: '2 Adults, 1 Child',
      bedType: 'King Size',
      services: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Minibar', 'Safe', 'Hair Dryer'],
      images: [
        '/room.jpeg',
        '/Room1.jpeg',
        '/Room2.jpeg',
        '/room3.jpeg',
        '/roomss.jpeg',
      ],
    },
    {
      id: 'suite',
      title: 'Superior Room',
      description: 'Spacious suite with premium amenities and stunning views.',
      price: 499,
      size: '75 m²',
      capacity: '3 Adults, 2 Children',
      bedType: 'King Size + Sofa Bed',
      services: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Minibar', 'Safe', 'Hair Dryer', 'Jacuzzi'],
      images: [
        '/Room1.jpeg',
        '/room.jpeg',
        '/room3.jpeg',
        '/roomss.jpeg',
        '/Room2.jpeg',
      ],
    },
    {
      id: 'family',
      title: 'Garden View Room',
      description: 'Perfect for families with extra space and amenities.',
      price: 399,
      size: '60 m²',
      capacity: '4 Adults, 2 Children',
      bedType: '1 King + 2 Single Beds',
      services: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Minibar', 'Safe', 'Hair Dryer', 'Extra Bed'],
      images: [
        '/room3.jpeg',
        '/roomss.jpeg',
        '/room.jpeg',
        '/Room1.jpeg',
        '/Room2.jpeg',
      ],
    },
  ];

  // Set active room based on URL or default to first variant
  useEffect(() => {
    const roomId = id || 'deluxe';
    const selectedRoom = roomVariants.find(room => room.id === roomId) || roomVariants[0];
    setRoom(selectedRoom);
    setActiveRoomVariant(roomVariants.findIndex(r => r.id === roomId) || 0);
  }, [id]);

  // Handle room variant change
  const handleRoomVariantChange = (index) => {
    setActiveRoomVariant(index);
    setRoom(roomVariants[index]);
    setActiveImage(0); // Reset to first image when changing room type
  };

  if (!room) {
    return <div className="min-h-screen bg-gray-50">Loading...</div>;
  }

  const handleBookNow = () => {
    // In a real app, this would redirect to booking page or open a booking modal
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url("/Hero.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(70vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{room.title}</h1>
                <div className="flex items-center text-sm md:text-base font-normal">
                  <Link to="/" className="hover:text-amber-400 transition-colors" style={{ fontFamily: '"Roboto", sans-serif' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    <br/> mattis, pulvinar dapibus leo.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Details Section */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Panel - Information */}
          <div className="w-full lg:w-[380px] bg-[#0F4D2F] text-white p-6 flex-shrink-0 lg:h-[530px]">
            {/* Price */}
            <div className="mb-5">
              <div className="flex items-baseline">
                <h1 className="text-5xl font-semibold">${room.price}</h1>
                <span className="ml-2 text-base text-white "style={{ fontFamily: '"Roboto", sans-serif' }}>/ Night</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white my-4" />

            {/* Information Section */}
            <div className="mb-3">
              <h2 className="text-2xl font-medium mb-3">Information</h2>
              <p className="text-[16.5px] text-white leading-relaxed mb-4" style={{ fontFamily: '"Roboto", sans-serif' }}>
                {room.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              {/* Left Column - Main Amenities */}
              <div className="space-y-4 flex-1">
                <div className="flex items-center">
                  <Wifi className="w-5 h-5 text-[#b8876b] mr-3" />
                  <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>Free Wifi</span>
                </div>

              {/* Row 2 */}
              <div className="flex items-center">
                <Utensils className="w-5 h-5 text-[#b8876b] mr-3" />
                <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>Free Breakfast</span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center">
                <Utensils className="w-5 h-5 text-[#b8876b] mr-3" />
                <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>Room Service</span>
              </div>

              {/* Row 4 */}
              <div className="flex items-center">
                <Droplets className="w-5 h-5 text-[#b8876b] mr-3" />
                <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>Spa & Wellness</span>
              </div>

              {/* Row 5 */}
              <div className="flex items-center">
                <Waves className="w-5 h-5 text-[#b8876b] mr-3" />
                <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>Swimming Pool</span>
              </div>

                {/* Row 6 */}
                <div className="flex items-center">
                  <Bath className="w-5 h-5 text-[#b8876b] mr-3" />
                  <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>Bathtub</span>
                </div>
              </div>
              
              {/* Right Column - Key Metrics */}
              <div className="space-y-4 lg:pl-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#b8876b] bg-opacity-20 flex items-center justify-center mr-3">
                    <BedSingle className="w-4 h-4 text-[#b8876b]" />
                  </div>
                  <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>1 Beds</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#b8876b] bg-opacity-20 flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-[#b8876b]" />
                  </div>
                  <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>1-2 People</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#b8876b] bg-opacity-20 flex items-center justify-center mr-3">
                    <Grid3x3 className="w-4 h-4 text-[#b8876b]" />
                  </div>
                  <span className="text-[15px]" style={{ fontFamily: '"Roboto", sans-serif' }}>500 sq ft</span>
                </div>
              </div>
            </div>

           
          </div>

          {/* Right Panel - Content */}
          <div className="flex-1">
            {/* Image */}
            <div className="relative h-[350px] lg:h-[500px] mb-8">
                <img 
                  src={room.images[activeImage]} 
                  alt={room.title}
                  className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {room.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-3 h-3 rounded-full ${idx === activeImage ? 'bg-white' : 'bg-white/50'}`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
            </div>

            {/* Room Overview Section */}
            <div className="max-w-5xl mx-auto pl-2 pr-6">
              <h1 className="font-gilda text-3xl lg:text-4xl font-semibold mb-4">Room Overview</h1>
              <div className="space-y-5 mb-6">
                <p className="text-base leading-relaxed font-roboto">
                  Himenaeos augue fringilla curabitur tempus natoque quisque odio malesuada. Hendrerit in dapibus pulvinar nec
                  amet faucibus. Dolor lacinia penatibus dapibus montes porttitor ex? Gravida gravida suscipit magnis nulla
                  dolor. Est placerat velit quis interdum mauris facilisi aptent integer euismod. Lectus urna nibh dis consequat
                  potenti aliquam.
                </p>
                <p className="text-base leading-relaxed font-roboto">
                  Cursus bibendum vel conubia est platea in dignissim litora? Nostra vestibulum orci aliquam eros senectus urna.
                  Cras leo torquent semper faucibus phasellus metus. Mus ultrices inceptos taciti platea risus ac primis. Ornare
                  tincidunt laoreet penatibus et eleifend nostra quis finibus. Maximus cursus finibus nibh mauris nisl. Id ac at
                  sed dui convallis. Nascetur magna velit eleifend litora aliquam.
                </p>
              </div>

              {/* Hotel Rules Section */}
              <h2 className="font-gilda text-2xl md:text-xl lg:text-2xl mb-4">Hotel Rules</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#b8876b] mt-2" />
                    <p className="text-base leading-relaxed font-roboto">Check-in is from 3:00 PM onwards. Check-out is by 12:00 PM</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#b8876b] mt-2" />
                    <p className="text-base leading-relaxed font-roboto">
                      Cancellations must be made 48 hours prior to arrival to avoid charges
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#b8876b] mt-2" />
                    <p className="text-base leading-relaxed font-roboto">
                      Our hotel is a non-smoking property. Smoking is permitted only in designated outdoor areas
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#b8876b] mt-2" />
                    <p className="text-base leading-relaxed font-roboto">Pets are welcome in designated rooms</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#b8876b] mt-2" />
                    <p className="text-base leading-relaxed font-roboto">Visitors are welcome during the day but must leave by 10:00 PM</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#b8876b] mt-2" />
                    <p className="text-base leading-relaxed font-roboto">
                      Guests will be responsible for any damages caused to the property during their stay
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#b8876b] mt-2" />
                    <p className="text-base leading-relaxed font-roboto">
                      Room occupancy is limited to the number of guests confirmed in your reservation
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellation Section */}
            
              <h2 className="font-gilda text-xl md:text-lg lg:text-xl mb-4">Cancellation</h2>
               <div className="space-y-5 mb-6">
                <p className="text-base leading-relaxed font-roboto">
                 Sem facilisis non duis ornare felis; tortor cubilia. Morbi imperdiet vulputate; urna vitae laoreet hac ex. Urna rhoncus mi ultricies, aptent suscipit diam habitant! Aconubia mus dignissim duis rhoncus cubilia; urna senectus maximus.
                </p>
                </div>

                {/* Gallery Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 mt-10">
                  {room.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`group relative overflow-hidden rounded-lg aspect-square cursor-pointer ${activeImage === index ? 'ring-2 ring-[#b8876b]' : ''}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${room.title} view ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Room Variants */}
                <div className="flex space-x-4 mb-10">
                  {roomVariants.map((variant, index) => (
                    <button
                      key={variant.id}
                      onClick={() => handleRoomVariantChange(index)}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        activeRoomVariant === index 
                          ? 'bg-[#0F4D2F] text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>

                <h2 className="font-gilda text-2xl md:text-xl lg:text-2xl mb-4">Location</h2>
              <div className="w-full overflow-hidden shadow-lg mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d251453.21142616193!2d76.32977919999999!3d10.020454399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba65bf066dad763%3A0x958110a52b252d8d!2sFarook%20College%20Road%2C%20Chungam%2C%20Ramanattukara%2C%20Via%2C%20Feroke%2C%20Kozhikode%2C%20Kerala%20673632!3m2!1d11.184770499999999!2d75.8468286!5e0!3m2!1sen!2sin!4v1765867308627!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Resort Location Map"
                  className="w-full h-48 md:h-64 lg:h-80"
                >
                </iframe>
              </div>
              <hr className="my-8 border-t border-black" />

            </div>
                         <h2 className="font-gilda text-2xl md:text-xl lg:text-2xl mb-4">Reservation</h2>
             <div className="w-full bg-[#0F4D2F] rounded-none p-6 mb-10">
              <form className="space-y-7 py-2">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 border-b border-white pb-4">
                    <Pencil className="w-4 h-4 text-gray-300" />
                    <input
                      type="text"
                      placeholder="Name"
                      className="flex-1 bg-transparent text-gray-300 placeholder:text-gray-400 text-base outline-none font-roboto"
                    />
                  </div>
                  <div className="flex items-center gap-3 border-b border-white pb-4">
                    <Mail className="w-4 h-4 text-gray-300" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 bg-transparent text-gray-300 placeholder:text-gray-400 text-base outline-none font-roboto"
                    />
                  </div>
                </div>

                {/* Check In and Check Out Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 border-b border-white pb-4">
                    <Calendar className="w-4 h-4 text-gray-300" />
                    <input
                      type="text"
                      placeholder="Check In"
                      value={checkInDate ? formatDate(checkInDate) : ''}
                      readOnly
                      onFocus={() => {
                        const dateInput = document.getElementById('checkin');
                        dateInput.showPicker();
                      }}
                      className="flex-1 bg-transparent text-gray-300 placeholder:text-gray-400 text-base outline-none cursor-pointer font-roboto"
                    />
                    <input
                      type="date"
                      id="checkin"
                      className="hidden"
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-3 border-b border-white pb-4">
                    <Calendar className="w-4 h-4 text-gray-300" />
                    <input
                      type="text"
                      placeholder="Check Out"
                      value={checkOutDate ? formatDate(checkOutDate) : ''}
                      readOnly
                      onFocus={() => {
                        const dateInput = document.getElementById('checkout');
                        dateInput.showPicker();
                      }}
                      className="flex-1 bg-transparent text-gray-300 placeholder:text-gray-400 text-base outline-none cursor-pointer font-roboto"
                    />
                    <input
                      type="date"
                      id="checkout"
                      className="hidden"
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      min={checkInDate}
                    />
                  </div>
                </div>
                {/* Adults and Children Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative flex items-center gap-3 border-b border-white pb-3">
                    <UserIcon className="w-4 h-4 text-gray-300" />
                    <select
                      value={adults !== null ? adults : ''}
                      onChange={(e) => setAdults(e.target.value ? Number(e.target.value) : null)}
                      className="appearance-none flex-1 bg-transparent text-gray-300 text-base outline-none cursor-pointer pr-8 font-roboto"
                    >
                      <option value="" disabled hidden className="font-roboto text-base">Adults</option>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={`adult-${num}`} value={num} className="bg-[#0F4D2F] text-white">
                          {num} {num === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-300 absolute right-0 pointer-events-none" />
                  </div>
                  <div className="relative flex items-center gap-3 border-b border-white pb-3">
                    <Users className="w-4 h-4 text-gray-300" />
                    <select
                      value={children !== null ? children : ''}
                      onChange={(e) => setChildren(e.target.value ? Number(e.target.value) : null)}
                      className="appearance-none flex-1 bg-transparent text-gray-300 text-base outline-none cursor-pointer pr-8 font-roboto"
                    >
                      <option value="" disabled hidden className="font-roboto text-base">Children</option>
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={`child-${num}`} value={num} className="bg-[#0F4D2F] text-white">
                          {num} {num === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-300 absolute right-0 pointer-events-none" />
                  </div>
                </div>

                {/* Choose Room */}
                <div className="flex items-center gap-3 border-b border-white pb-3">
                  <BedSingle className="w-4 h-4 text-gray-300" />
                  <select
                    className="appearance-none flex-1 bg-transparent text-gray-300 text-base outline-none cursor-pointer pr-8 font-roboto"
                  >
                    <option value="" disabled selected className="font-roboto text-base">Choose Room</option>
                    <option value="deluxe" className="bg-[#0F4D2F] text-white">Deluxe Room</option>
                    <option value="suite" className="bg-[#0F4D2F] text-white">Suite</option>
                    <option value="family" className="bg-[#0F4D2F] text-white">Family Room</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-gray-300 absolute right-0 pointer-events-none" />
                </div>

                {/* Reserve Now Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-transparent border border-white text-white text-base font-medium rounded-none hover:bg-white hover:text-black transition-colors duration-300 font-roboto mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                    setIsBookingModalOpen(true);
                  }}
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoomDetails;
