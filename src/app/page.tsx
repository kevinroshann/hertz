"use client";
import Image from "next/image";
import { EvervaultCard } from "@/components/ui/card";
import AboutSection from "@/components/about";
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  
  const fonts = [
    "font-['Pricedown']",
    "font-['Crackman']",
    "font-['GameOfThrones']",
    "font-['KnightWarrior']",
    "font-['MP16']"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll text-white scroll-smooth">
      {/* Landing Section */}
      <section className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-blue-900">
        <h1 
          className={`${fonts[currentFontIndex]} text-6xl sm:text-8xl lg:text-[15vw] font-bold mb-6 text-center leading-tight
          transition-all duration-500 text-white animate-morph`}
        >
          HERTZ 2025
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-center max-w-3xl text-gray-300">
          Welcome to the most innovative tech festival of the year
        </p>
      </section>

      {/* Cards Section */}
      <section className="min-h-screen w-full snap-start snap-always flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-blue-900 to-gray-900">
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

      {/* FAQ Section */}
      <section className="min-h-screen w-full snap-start snap-always flex flex-col items-start justify-start p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-blue-900">
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
      {/* About Section */}
      <section className="min-h-screen w-full snap-start snap-always flex flex-col items-start justify-start bg-gradient-to-b from-gray-900 to-blue-900">
        <AboutSection />
      </section>
      {/* Contact Section */}
      <section className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-blue-900 to-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Contact Us</h2>
        <div className="max-w-md w-full">
          <form className="space-y-3 sm:space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2.5 sm:p-3 rounded-lg bg-blue-900/30 border border-blue-500/30 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2.5 sm:p-3 rounded-lg bg-blue-900/30 border border-blue-500/30 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-2.5 sm:p-3 rounded-lg bg-blue-900/30 border border-blue-500/30 focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
