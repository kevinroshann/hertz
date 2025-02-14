"use client";
import Image from "next/image";
import { EvervaultCard } from "@/components/ui/card";
import AboutSection from "@/components/about";
export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll text-white scroll-smooth">
      {/* Landing Section */}
      <section className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-blue-900">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">Tech Fest 2024</h1>
        <p className="text-lg sm:text-xl text-center max-w-2xl">
          Welcome to the most innovative tech festival of the year
        </p>
      </section>

      {/* Cards Section */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto w-full px-2 sm:px-4">
          {["Event 1", "Event 2", "Event 3"].map((text) => (
            <div 
              key={text} 
              className="min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] w-full border border-white/20 rounded-xl hover:scale-105 sm:hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <EvervaultCard text={text} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen w-full snap-start snap-always flex flex-col items-start justify-start p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="w-full max-w-7xl mx-auto py-12 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
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
