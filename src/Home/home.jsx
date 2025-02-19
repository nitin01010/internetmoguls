import { ArrowLeft, ArrowRight, BedDouble, CalendarDays, MapPin, Triangle, Users } from 'lucide-react'
import React from 'react'
import { useState } from "react";
import { useRef } from "react";

const HeroSection = () => {
  return (
    <>
      <div className='bg-gray-50 w-full p-4 pb-20 relative z-50'>
        <div className='flex flex-wrap w-[95%] md:w-[80%] items-center justify-center md:justify-between shadow-md -mt-10 bg-white m-auto h-auto md:h-[100px] rounded-lg p-4 gap-4'>
          <div className='flex items-center gap-3 p-3 w-full sm:w-auto'>
            <MapPin color='gray' size={24} />
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-base'>Location</p>
              <p className='text-gray-400 text-sm'>Choose the destination</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 w-full sm:w-auto'>
            <CalendarDays color='gray' size={24} />
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-base'>Check in</p>
              <p className='text-gray-400 text-sm'>Add date</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 shadow-md border border-gray-200 rounded-lg w-full sm:w-[170px] h-[70px]'>
            <CalendarDays color='gray' size={24} />
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-base'>Check out</p>
              <p className='text-gray-400 text-sm'>Add date</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 w-full sm:w-auto'>
            <BedDouble color='gray' size={24} />
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-base'>Rooms</p>
              <p className='text-gray-400 text-sm'>Add number of rooms</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 w-full sm:w-auto'>
            <Users color='gray' size={24} />
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-base'>Visitors</p>
              <p className='text-gray-400 text-sm'>Add Guests</p>
            </div>
          </div>
          
          <button className='shadow-md p-3 w-full sm:w-[120px] rounded-lg bg-blue-600 text-white font-semibold text-base'>Book Now</button>
        </div>

        <div className='p-4 w-[95%] md:w-[70%] m-auto mt-16 text-center'>
          <p data-aos='fade-down' className='text-xl md:text-3xl font-light text-gray-900 mb-12 md:mb-16'>
            60+ Locations &nbsp; | &nbsp; 100+ Hotels &nbsp; | &nbsp; 5100+ Keys & Counting
          </p>
          <p data-aos='fade-down' className='text-gray-900 font-light text-2xl md:text-4xl leading-snug'>
            Elegant Stay. Luxurious Accommodations. Affordable Price.
          </p>
          <p data-aos='fade-down' className='text-gray-600 font-light text-sm md:text-lg mt-6 md:mt-8 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas. Lorem ipsum dolor sit amet consectetur.
          </p>
          <p data-aos='fade-down' className='text-gray-600 font-light text-sm md:text-lg mt-4 md:mt-6 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
    </>
  )
}

const OfferSection = () => {
  const offers = [...Array(3)]; // Dummy array with 3 items
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <div className="w-[90%] md:w-[80%] m-auto mt-10">
      <div className="flex flex-col md:flex-row items-center gap-3 " data-aos="fade-down">
        <p className="text-3xl md:text-4xl uppercase font-extralight">Offers</p>
        <p className="font-extralight text-xl md:text-2xl uppercase mt-2">as Per your Needs</p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {offers.map((_, index) => (
            <div key={index} className="min-w-full md:min-w-[70%] flex flex-col md:flex-row gap-5">
              <img
                data-aos="fade-down"
                className="h-[250px] md:h-[300px] w-full object-cover"
                src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Offer"
              />
              <div className="flex flex-col gap-2 p-4">
                <h2 className="text-lg md:text-xl text-gray-900 mb-3 md:mb-5">Last Minute Offer - 10% Off</h2>
                <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nemo.</p>
                <button className="flex gap-6 font-light text-gray-900 items-center w-[120px] md:w-[150px] text-base md:text-lg mt-3 cursor-pointer">
                  Book Now <ArrowRight size={20} md:size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between md:justify-end gap-5 md:gap-8 text-base md:text-lg font-light text-gray-900 py-3 p-1 mt-5">
        <ArrowLeft color="gray" className="cursor-pointer" onClick={handlePrev} />
        {`${currentIndex + 1}/${offers.length}`}
        <ArrowRight color="gray" className="cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
};

const LocationSection = () => {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto mt-10">
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <p data-aos="fade-down" className="text-3xl sm:text-4xl uppercase font-extralight">Explore</p>
        <p data-aos="fade-down" className="font-extralight text-xl sm:text-2xl uppercase mt-2 sm:mt-0">Locations</p>
      </div>

      <div className="mt-10 relative flex justify-center">
        <img
          data-aos="fade-down"
          className="object-cover h-[300px] sm:h-[400px] md:h-[500px] w-full sm:w-[70%]"
          src="https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Explore Locations"
        />

        <div className="absolute top-10 sm:top-22 right-2 sm:right-0">
          <img 
            data-aos="flip-left" 
            src="https://www.subahotels.com/images/70_locations_img.png?v=1.1" 
            className="grechen-fuemen-regular font-light text-[#f2f2f2] text-[50px] sm:text-[70px] md:text-[90px]" 
            alt="" 
          />
        </div>

        <div className="w-[90%] sm:w-[65%] md:w-[55%] h-auto sm:h-[220px] bg-gray-50 shadow-md p-4 sm:p-6 font-light absolute right-1 -bottom-[60px] sm:-bottom-[100px]">
          <p className="text-lg sm:text-2xl text-gray-800 leading-[1.8rem] sm:leading-[2.5rem]">Explore hotels according to your needs - We will make sure to deliver you memorable moments</p>
          <button className="cursor-pointer mt-3 sm:mt-5 text-lg sm:text-xl text-gray-600 flex gap-3 sm:gap-5 items-center">
            Explore <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const BrandSection = () => {
  const logos = [
    "https://www.logodesign.net/logo/buildings-with-house-roof-and-sun-778ld.png?nwm=1&nws=1&industry=hotel&sf=&txt_keyword=All",
    "https://www.logodesign.net/logo/buildings-with-house-roof-and-sun-778ld.png?nwm=1&nws=1&industry=hotel&sf=&txt_keyword=All",
    "https://www.logodesign.net/logo/letter-i-inside-the-square-with-lines-5011ld.png?nwm=1&nws=1&industry=hotel&sf=&txt_keyword=All",
  ];

  return (
    <div
      className="mt-30 md:mt-50 h-[700px] bg-cover bg-center mb-30"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div
        data-aos="fade-down"
        className="bg-black rounded-tr-[70%] py-16 h-full w-full md:w-[70%] flex items-center"
      >
        <div className="w-[80%] mx-auto text-white text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-4">
            <p className="font-extralight mt-2 text-3xl uppercase">OUR</p>
            <p className="font-semibold text-3xl uppercase">Brands</p>
          </div>
          <div className="mt-12 flex flex-col gap-2">
            <p className="text-3xl">SUBA HOTELS</p>
            <p className="text-3xl">OUR LUXURY HOTELS</p>
            <p className="text-sm font-light mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              sint.
            </p>
            <p className="text-sm font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm font-light">Lorem, ipsum dolor sit.</p>
            <button className="flex font-light gap-4 text-lg mt-10 items-center w-[200px]">
              Explore <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between flex-wrap gap-4 md:gap-8 p-4 md:w-[80%] mx-auto -mt-16">
        {logos.slice(0, window.innerWidth < 768 ? 4 : logos.length).map((src, index) => (
          <img
            key={index}
            data-aos="flip-up"
            src={src}
            className="object-contain w-[80px] md:w-[100px] bg-white h-[60px] md:h-[70px] rounded-md"
            alt="Brand Logo"
          />
        ))}
      </div>
    </div>
  );
};

const DiningSection = () => {
  const slides = [
    {
      title: "CINNAMON",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque provident dolor quasi repellendus tenetur! Non eius eligendi iure.",
      img: "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
      title: "VANILLA",
      text: "Another description here, making this slide distinct and informative for the user.",
      img: "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
      title: "COCOA",
      text: "Final slide with more information about the cocoa and its uses in daily life.",
      img: "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-16 flex flex-col md:flex-row items-center md:items-start gap-6">
     
      <div className="relative flex flex-col items-center md:items-start w-full md:w-[50%] text-center md:text-left p-4">
        <p className="text-3xl md:text-4xl font-extralight text-gray-600">{slides[currentIndex].title}</p>
        <p className="font-light text-black mt-3 md:mt-5 leading-7 md:leading-8">{slides[currentIndex].text}</p>
        <button className="flex items-center gap-2 mt-6 text-lg font-extralight text-black border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100">
          Explore <ArrowRight color="gray" size={20} />
        </button>
        <div className="flex justify-center md:justify-start gap-6 text-lg font-light text-gray-900 py-2  mt-12 md:mt-52  lg:mt-30 2xl:mt-54">
          <ArrowLeft color="gray" className="cursor-pointer" onClick={prevSlide} />
          <span>
            0{currentIndex + 1}/0{slides.length}
          </span>
          <ArrowRight color="gray" className="cursor-pointer" onClick={nextSlide} />
        </div>
      </div>
        <img
        data-aos="zoom-in-left"
        src={slides[currentIndex].img}
        alt="Dining"
        className="w-full min-h-[200px] md:min-h-[400px] md:w-[50%] rounded-lg transition-all duration-500 object-cover"
      />
    </div>
  );
};

const EventsSection = () => {
  return (
    <div className='w-full bg-gray-50 py-10 mt-20'>
      <div className='w-[90%] lg:w-[80%] mx-auto'>
        <div className='flex flex-col sm:flex-row items-center gap-3 py-10 text-center sm:text-left'>
          <p className='text-3xl sm:text-4xl uppercase font-extralight'>EVENTS</p>
          <p className='font-extralight text-xl sm:text-2xl uppercase mt-2'>AT SUBA</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          {[ 
            { title: 'CELEBRATIONS', src: 'https://images.unsplash.com/photo-1609421141185-8a4f37a5d063?q=80&w=1620&auto=format&fit=crop' },
            { title: 'WEDDINGS', src: 'https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop' },
            { title: 'EVENTS', src: 'https://images.unsplash.com/photo-1576085898274-069be5a26c58?q=80&w=1887&auto=format&fit=crop' }
          ].map((item, index) => (
            <div key={index} className='relative w-full'>
              <img
                data-aos='zoom-in'
                className='h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover'
                src={item.src}
                alt={item.title}
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black/40'>
                <p className='text-white text-xl sm:text-2xl font-extralight uppercase'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-10 font-extralight text-lg text-gray-900 text-center leading-relaxed px-4 md:px-10'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati dolores laborum nemo dolor rem, sunt harum iusto ipsum architecto labore natus deleniti adipisci, voluptate similique velit, fugit aut sapiente minus.</p>
          <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='flex items-center text-lg sm:text-xl mx-auto mt-7 gap-4 border-b border-gray-700 pb-1 hover:text-gray-600'>
            Explore <ArrowRight color='gray' />
          </button>
        </div>
      </div>
    </div>
  );
};

const NewLaunchSection = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Array.from({ length: 10 }); // Array of 10 items
  const itemsPerPage = 3;
  const cardWidth = 320 + 40; // Card width + gap

  const handleScroll = (direction) => {
    if (!containerRef.current) return;
    let newIndex = currentIndex;

    if (direction === "right") {
      newIndex = Math.min(currentIndex + 1, items.length - itemsPerPage);
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(newIndex);
    containerRef.current.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="w-[80%] mx-auto overflow-hidden">
      <div className="flex items-center gap-3 py-10">
        <p className="text-4xl uppercase font-extralight">NEWEST</p>
        <p className="font-extralight text-2xl uppercase mt-2">LAUNCHES</p>
      </div>
      <div className="relative flex items-center justify-between">
        {/* Left Button */}
        <button
          className="absolute left-0 z-10 w-[40px] py-1 rounded-md bg-black disabled:opacity-50"
          onClick={() => handleScroll("left")}
          disabled={currentIndex === 0}
        >
          <Triangle fill="white" className="-rotate-90 m-auto" />
        </button>

        {/* Card Container */}
        <div
          ref={containerRef}
          className="flex m-auto gap-x-10  p-16 overflow-hidden "
          style={{ maxWidth: `${itemsPerPage * cardWidth}px` }} // Restrict to 3 items
        >
          {items.map((_, index) => (
            <div data-aos="fade-down" key={index} className="w-[300px] pb-4 shadow-md flex-shrink-0">
              <img
                className="h-48 w-full object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Launch Image"
              />
              <h2 className="text-center text-xl mt-5 text-gray-900">
                Click Sagar, <br /> Pune
              </h2>
              <hr className="w-[100px] mx-auto mt-2" />
              <p className="text-base py-4 text-center text-gray-900 leading-8 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="absolute right-0 z-10 w-[40px] py-1 rounded-md bg-black disabled:opacity-50"
          onClick={() => handleScroll("right")}
          disabled={currentIndex + itemsPerPage >= items.length}
        >
          <Triangle fill="white" className="rotate-90 m-auto" />
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OfferSection />
      <LocationSection />
      <BrandSection />
      <DiningSection />
      <EventsSection />
      <NewLaunchSection />
    </div>
  )
} 

export default Home