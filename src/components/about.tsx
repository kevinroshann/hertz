"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center p-8 sm:p-12 lg:p-16 gap-6 lg:gap-12">
      {/* Left Section - Expo SVG and About */}
      <div className="w-full lg:w-[55%] h-full flex flex-col gap-6">
        {/* Expo SVG */}
        <div className="w-full h-1/3 relative p-4 sm:p-6">
          <Image
            src="/expo.svg"
            alt="Expo"
            width={1000}
            height={400}
            className="w-full h-full object-contain"
            priority
            onError={(e) => {
              console.error('Error loading image:', e);
              e.currentTarget.src = '/fallback-image.jpg';
            }}
          />
        </div>

        {/* About Section */}
        <div className="bg-[#ECECEC] relative w-full h-2/3 px-6 sm:px-8 lg:px-10 py-8 rounded-2xl lg:rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div className="text-black text-3xl sm:text-5xl lg:text-[5vw] font-bold leading-tight">05</div>
              <div className="text-black text-2xl sm:text-4xl lg:text-[3vw] font-bold">About</div>
            </div>
            <hr className="border-black my-4 sm:my-6" />
          </div>
          <div className="text-black text-sm sm:text-base lg:text-lg relative flex-grow">
            The Student Expo offers the emerging geniuses and bright young minds a platform. A platform to learn, create, connect, share, and grow. Join us at Tathva '24 for exciting competitions, engaging workshops, insightful lectures, and much more.
            <div className="text-black font-bold absolute bottom-2 right-3">◻◻◻</div>
          </div>
        </div>
      </div>
      
      {/* Right Section - Grid */}
      <div className="w-full lg:w-[35%] h-full">
        <div className="w-full h-full p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { href: "/drone-racing", text: "Drone Racing", img: "/grid/drone.webp" },
            { href: "/wheels", text: "Automotive Summit", img: "/grid/red_car.jpg" },
            { href: "/glitch", text: "Glitch", img: "/grid/arcade.jpg" },
            { href: "/proshow", text: "Proshow", img: "/grid/concert.webp" }
          ].map(({ href, text, img }, index) => (
            <Link 
              key={index} 
              href={href} 
              className="aspect-square border-2 sm:border-3 border-white rounded-xl sm:rounded-2xl overflow-hidden relative transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
            >
              <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center font-bold text-xs sm:text-sm">
                {text}
              </p>
              <Image 
                src={img} 
                alt={text} 
                width={500} 
                height={500} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
