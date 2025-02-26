import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/base/Button";

export default function ProjectExpo() {
  const eventDate = new Date("2025-03-02T09:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = eventDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeRemaining(calculateTimeRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-screen text-white bg-cover bg-center" style={{ backgroundImage: "url('/img/common-bg.webp')" }}>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/wakk.png')" }}
      >
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            🚀 Hertz 7 Project Expo
          </motion.h1>
          <p className="text-xl mt-3">2 & 3 March 2025 | Students Amenity Centre, CUSAT</p>
          <div className="flex justify-center gap-6 mt-6 text-3xl font-bold">
            <div>{timeRemaining.days}d</div>
            <div>{timeRemaining.hours}h</div>
            <div>{timeRemaining.minutes}m</div>
            <div>{timeRemaining.seconds}s</div>
          </div>
          <Button 
            className="mt-6 px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
            component="a" 
            href="https://konfhub.com/196b5a04-32ef-4974-b17c-9d8558fcfeb1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* Poster and Content Layout */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 p-8 bg-cover bg-center" style={{ backgroundImage: "url('/img/section-bg.webp')" }}>
        {/* Poster Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/img/project-expo-poster.webp" alt="Project Expo Poster" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
        {/* About Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <h2 className="text-3xl font-bold">🔍 About the Event</h2>
          <p className="text-lg">
            Have an exciting project to showcase? Hertz 7 Project Expo is your chance to present your work, 
            gain visibility, and connect with like-minded innovators. Don’t miss this opportunity to share 
            your ideas with the world!
          </p>
        </div>
      </div>
      {/* Guidelines Section */}
      <div className="w-full max-w-6xl flex flex-col p-8 bg-cover bg-center" style={{ backgroundImage: "url('/img/section-bg.webp')" }}>
        <h2 className="text-3xl font-bold text-center">📜 Guidelines</h2>
        <ul className="text-lg mt-4 text-left">
          <li><strong>1. Eligibility and Registration:</strong> Open to all Cusatians. No registration fees.</li>
          <li><strong>2. Project Expo Specifications:</strong>
            <ul className="list-disc pl-5">
              <li>Projects must be on display for both days of the event.</li>
              <li>A maximum of two team members can be present at the stall at any time.</li>
            </ul>
          </li>
          <li><strong>3. Judging Process:</strong>
            <ul className="list-disc pl-5">
              <li>Judging will take place on the second day (March 3rd).</li>
              <li>Evaluations will be based on public voting and a designated judge panel.</li>
            </ul>
          </li>
          <li><strong>4. General Guidelines:</strong>
            <ul className="list-disc pl-5">
              <li>All teams must strictly adhere to event rules and regulations.</li>
              <li>Any form of misconduct or rule violation will lead to disqualification.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
