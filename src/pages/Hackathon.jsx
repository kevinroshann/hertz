import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Button } from '@mui/base/Button';

export default function Hackathon() {
  const eventDate = useMemo(() => new Date("2025-03-02T09:00:00").getTime(), []);
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
    <div className="flex flex-col items-center w-screen text-white bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/img/bg1.jpg')" }}>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/triad 1,2,3.png')" }}
      >
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold relative"
            style={{ textShadow: "3px 3px 8px rgba(0, 0, 0, 0.8)" }}
          >
            Buildathon 2025
          </motion.h1>
          <p className="text-xl mt-3 font-semibold relative" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)" }}>
            March 2, 2025 | CITTIC, CUSAT
          </p>
          <div className="flex justify-center gap-6 mt-6 text-3xl font-bold relative">
            <div>{timeRemaining.days}d</div>
            <div>{timeRemaining.hours}h</div>
            <div>{timeRemaining.minutes}m</div>
            <div>{timeRemaining.seconds}s</div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 bg-gray-900 px-6 py-4 text-4xl font-bold rounded-lg shadow-lg"
          >
            Total Teams Registered: <span className="text-yellow-400">43</span>
          </motion.div>
          <Button 
            className="mt-6 px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 focus:ring-4 focus:ring-blue-500"
            component="a" 
            href="https://lu.ma/xyjej4si" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Register for Buildathon 2025"
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* Poster, Content, and Timeline Layout */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 p-8 bg-cover bg-center">
        {/* Poster Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/img/two.jpeg" alt="Hackathon Poster" className="w-full max-w-md rounded-lg shadow-lg" loading="lazy" />
        </div>
        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold">🚀 About ECSA Buildathon</h2>
            <p className="text-lg mt-4">
              ECSA Buildathon 2025 is an intense, high-energy hackathon where participants collaborate, innovate, and develop cutting-edge hardware solutions.
              This is your chance to test your creativity, problem-solving skills, and technical expertise!
            </p>
          </div>
          {/* Who Can Participate */}
          <div>
            <h2 className="text-3xl font-bold">👥 Who Can Participate?</h2>
            <p className="text-lg mt-4">
              Open to engineering students, developers, designers, and tech enthusiasts. Whether you're a beginner or an experienced innovator,
              this hackathon is for you!
            </p>
          </div>
          {/* Prize Pool */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-400">💰 Prize Pool: ₹25,000</h2>
            <p className="text-xl mt-2">Exclusive cash prizes, high-value goodies, and participation certificates for all!</p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full max-w-5xl p-8 text-center bg-cover bg-center">
        <h2 className="text-3xl font-bold">📅 Event Timeline</h2>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Feb 20 - Poster Release & Promotions</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Feb 22 - Registration Opens</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Feb 27 - Registration Closes</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Feb 28 - Confirmation Emails Sent</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="error" />
            </TimelineSeparator>
            <TimelineContent>March 2 - Hackathon Day!</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <Button 
        className="mt-8 px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
        component="a" 
        href="https://lu.ma/xyjej4si" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Register Now
      </Button>
 
    </div>
  );
}
