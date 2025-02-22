import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("March 2, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      setTimeLeft(targetDate - now);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (ms) => {
    if (ms <= 0) return "00d 00h 00m 00s";

    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h1>Countdown to March 2, 2025:</h1>
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default CountdownTimer;
