import React from "react";
import NavBar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Workshops = () => {
  const slides = [
    { src: "/img/about.webp", text: "Workshop 1: Introduction to AI" },
    { src: "/image2.jpg", text: "Workshop 2: Web Development Basics" },
    { src: "/image3.jpg", text: "Workshop 3: Advanced Python" },
    { src: "/image4.jpg", text: "Workshop 4: Data Science Essentials" },
  ];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-gray-900 text-white">
      <NavBar />
      <div className="w-full flex justify-center py-10">
        <h1 className="text-4xl font-bold">Workshops</h1>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col items-center justify-center mt-10 relative w-full">
        {/* Left Arrow */}
        <button className="absolute left-6 z-10 bg-white p-2 rounded-full shadow-md swiper-button-prev">
          <FaArrowLeft className="text-gray-900 text-xl" />
        </button>

        <Swiper
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-[90%] sm:w-[60%] h-auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img
                src={slide.src}
                alt={`Slide ${index}`}
                className={`w-72 h-72 object-cover transition-opacity duration-500 ${
                  index === 1 ? "opacity-100" : "opacity-50"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button className="absolute right-6 z-10 bg-white p-2 rounded-full shadow-md swiper-button-next">
          <FaArrowRight className="text-gray-900 text-xl" />
        </button>
      </div>

      {/* Text Section Below Carousel */}
      <div className="flex justify-center mt-6">
        <p className="text-xl font-semibold">{slides[1].text}</p>
      </div>
    </main>
  );
};

export default Workshops;
