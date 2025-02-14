"use client";

import { EvervaultCard } from "@/components/ui/card";
import AboutSection from "@/components/about";
import { useState, useEffect } from 'react';
import { FloatingDock } from "@/components/ui/floatingdock";
import { Instagram, Youtube } from "lucide-react";
import SnowfallEffect from "@/components/ui/snowfall";
import Link from "next/link";

export default function Home() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  
  const fonts = [
    "font-['Pricedown']",
    "font-['Hindi']",
    // "font-['Crackman']",
    // "font-['GameOfThrones']",
    "font-['KnightWarrior']",
    "font-['Ming']",
   "font-['Japan']"
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const dockItems = [
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-400" />,
      href: "https://instagram.com/your-handle",
    },
    {
      title: "YouTube",
      icon: <Youtube className="h-full w-full text-neutral-500 dark:text-neutral-400" />,
      href: "https://youtube.com/@your-channel",
    },
  ];

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll text-white scroll-smooth">
      <SnowfallEffect />
      <FloatingDock 
        items={dockItems}
        desktopClassName="fixed top-24 right-8 z-50"
        mobileClassName="fixed top-24 right-8 z-50"
      />
      
      {/* Landing Section */}
      <section id="home" className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center p-4 sm:p-8 
        bg-gradient-to-b from-black to-gray-900 
        bg-grid-small bg-grid-small-white/[0.2] relative">
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div> */}
        
        {/* Content */}
        <div className="relative z-10">  {/* Added z-10 to keep content above overlay */}
          <div className="h-[20vh] sm:h-[25vh] lg:h-[30vh] flex items-center justify-center">
            <h1 
              className={`${fonts[currentFontIndex]} text-7xl sm:text-9xl lg:text-[12vw] font-bold text-center leading-none
              transition-all duration-500 text-white animate-morph whitespace-nowrap text-outline`}
            >
              HERTZ 2025
            </h1>
          </div>
          
          {/* Image Container */}
          

          {/* <p className="text-xl sm:text-2xl lg:text-3xl text-center max-w-3xl text-gray-300 mt-8">
            Welcome to the most innovative tech festival of the year
          </p> */}
        </div>
      </section>

      {/* Cards Section */}
      <section id="hackathon" className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-900">
        {/* Top Text */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="font-['Pricedown'] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] font-bold mb-6 text-center leading-tight">
            Our Events
          </h2>
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto w-full px-2 sm:px-4">
          {/* Workshops Card */}
          <div className="min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] w-full border border-white/20 rounded-xl hover:scale-105 sm:hover:scale-110 transition-transform duration-300 ease-in-out">
            <EvervaultCard text="WORKSHOPS" />
          </div>

          {/* Competitions Card */}
          <div className="min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] w-full border border-white/20 rounded-xl hover:scale-105 sm:hover:scale-110 transition-transform duration-300 ease-in-out">
            <EvervaultCard text="HACKATHON" />
          </div>

          {/* Lectures Card */}
          <div className="min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] w-full border border-white/20 rounded-xl hover:scale-105 sm:hover:scale-110 transition-transform duration-300 ease-in-out">
            <EvervaultCard text="COMPETITIONS" />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-4 sm:mt-8">
          <h3 className="font-['Pricedown'] text-2xl sm:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            Join Us Today
          </h3>
          {/* <p className="text-base sm:text-lg lg:text-2xl mt-2 text-gray-300">
            Be part of something extraordinary
          </p> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen w-full snap-start snap-always flex flex-col items-start justify-start bg-gradient-to-b from-gray-900 to-blue-900">
        <AboutSection />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen w-full snap-start snap-always flex flex-col items-start justify-start p-4 sm:p-8 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="w-full max-w-7xl mx-auto py-12 sm:py-24">
        <h2 className="font-['Pricedown'] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] font-bold mb-6 text-center leading-tight">
        FAQ</h2>
          <div className="max-w-3xl w-full mx-auto space-y-3 sm:space-y-4">
            {[1, 2, 3, 4].map((faq) => (
              <div
                key={faq}
                className="bg-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-blue-500/30"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">Question {faq}?</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Answer to question {faq}. This is a sample answer that you can replace with actual content.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Multimeter Section */}
      <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center p-4 sm:p-8 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="font-['Pricedown'] text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] font-bold mb-6 text-center leading-tight">
          QUICK LINKS
        </h2>
        
        <div className="w-full max-w-[500px] aspect-[4/5] bg-orange-500 rounded-lg p-4 shadow-2xl border-4 border-orange-600 relative transform hover:rotate-1 transition-transform mb-8">
          {/* Handle */}
          <div className="absolute -left-4 top-1/3 w-6 h-24 bg-orange-600 rounded-l-lg shadow-lg flex items-center justify-center">
            <div className="w-2 h-16 bg-orange-800 rounded-full"></div>
          </div>

          {/* Multimeter Body */}
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded flex flex-col gap-4 p-4 relative">
            {/* Brand Name */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-orange-700 font-bold text-lg">HERTZ-2025™</div>
            
            {/* Screen with Bezel */}
            <div className="w-full h-[40%] bg-[#1a1a1a] rounded-lg p-3 shadow-inner mt-8 relative">
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <div className="w-full h-full bg-[#152028] rounded border-2 border-gray-700 p-2 flex flex-col justify-around relative">
                {/* Screen Glare */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                {/* Quick Links displayed as digital readings */}
                <Link 
                  href="#home" 
                  className="text-digital text-green-400 hover:text-green-300 transition-colors pl-4"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="font-['LCD'] text-xl sm:text-2xl md:text-3xl">01:HOME</span>
                </Link>
                <Link 
                  href="#hackathon" 
                  className="text-digital text-green-400 hover:text-green-300 transition-colors pl-4"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('hackathon')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="font-['LCD'] text-xl sm:text-2xl md:text-3xl">02:HACK</span>
                </Link>
                <Link 
                  href="#faq" 
                  className="text-digital text-green-400 hover:text-green-300 transition-colors pl-4"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="font-['LCD'] text-xl sm:text-2xl md:text-3xl">03:FAQ</span>
                </Link>
              </div>
            </div>

            {/* Dial and Buttons */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* Left Side - Rotary Dial */}
              <div className="relative">
                <div className="absolute inset-0 bg-gray-800 rounded-full shadow-inner border-4 border-orange-600">
                  {/* Dial Markings */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-4 bg-white/50"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 45}deg) translateY(-150%)`,
                        transformOrigin: 'bottom center',
                      }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-10 bg-orange-600 -rotate-45"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {['HOLD', 'REL', 'RANGE', 'MIN'].map((label) => (
                  <button
                    key={label}
                    className="bg-gray-800 rounded-lg h-12 sm:h-16 flex items-center justify-center
                      shadow-lg active:shadow-inner active:translate-y-0.5 transition-all
                      border-2 border-orange-600 hover:bg-gray-700"
                  >
                    <span className="text-orange-400 text-xs font-bold">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Ports */}
            <div className="flex justify-around items-center">
              {['COM', 'VΩmA', '10A'].map((label) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-700 shadow-inner mb-1" />
                  <span className="text-xs text-orange-700 font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Texture and Wear Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-black/20 pointer-events-none rounded-lg" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none rounded-lg" />
        </div>
      </section>
    </div>
  );
}
