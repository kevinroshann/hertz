import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/base/Button";

export default function AIQuiz() {
  return (
    <div className="flex flex-col items-center w-screen text-white bg-cover bg-center" style={{ backgroundImage: "url('/img/bg.jpg')" }}>
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
            Hert7 AI & ML Quiz
          </motion.h1>
        </div>
        <Button 
            className="mt-6 px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
            component="a" 
            href="https://quiz.everestwebdeals.co/?form=bd33cdc432963ececeafb03ea64dba58" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Start Quiz
          </Button>
      </div>
      
      {/* Content Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 p-8 bg-cover bg-center">
        {/* Poster Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <a  href="https://konfhub.com/e5170bd5-cfc3-4d26-9ee8-297704f11921" ><img src="/img/ai.jpeg" alt="Quiz Poster" className="w-full max-w-md rounded-lg shadow-lg" /></a>
        </div>
        {/* About Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <p className="text-xl">Think you know AI & ML? Put your knowledge to the test in this fun and engaging quiz!</p>
          <p>💡 <strong>How It Works:</strong></p>
          <ul className="list-disc pl-5">
            <li>🔹 Answer exciting questions on AI, ML, and recent tech breakthroughs.</li>
            <li>🔹 No need to be an expert—just bring your curiosity!</li>
            <li>🔹 Quiz Timing: Participate anytime before noon 28 Feb.</li>
          </ul>
          <p className="mt-4">🎁 <strong>Prizes & Perks:</strong></p>
          <ul className="list-disc pl-5">
            <li>🏆 Top scorers win exclusive Hert7 swags, stickers, and surprises!</li>
            <li>🎓 The quiz leader gets a 40% discount on our upcoming AI & ML workshop!</li>
          </ul>
          <p className="mt-4">🔍 <strong>Want to explore AI & ML beyond the quiz?</strong></p>
          <p>This is just a glimpse into the fascinating world of artificial intelligence! Stay tuned for more learning opportunities to take your skills to the next level.</p>
          <Button 
            className="mt-6 px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
            component="a" 
            href="https://quiz.everestwebdeals.co/?form=bd33cdc432963ececeafb03ea64dba58" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Start Quiz
          </Button>

          <Button 
            className="mt-6 px-6 py-3 text-xl font-bold text-white bg-black-600 rounded-lg shadow-lg hover:bg-black-700"
            component="a" 
            href="https://konfhub.com/e5170bd5-cfc3-4d26-9ee8-297704f11921" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Join Workshop
          </Button>
        </div>
      </div>
    </div>
  );
}
