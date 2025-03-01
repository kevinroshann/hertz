import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  // Countdown logic
  const initialTime = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const handleVideoLoad = () => setLoading(false);
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", handleVideoLoad);
    }
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", handleVideoLoad);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Format countdown time
  const formatTime = (ms) => {
    const hours = String(Math.floor(ms / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((ms % (1000 * 60)) / 1000)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // GSAP animations
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <video ref={videoRef} src="videos/heropage.mp4" autoPlay loop muted className="absolute left-0 top-0 size-full object-cover object-center" />

        <div className="absolute-center absolute z-50 flex flex-col items-center justify-center text-white">
        <h1 className="special-font hero-heading text-white text-center bg-black bg-opacity-50 p-4 rounded-lg text-7xl md:text-9xl lg:text-[12rem]">
  {formatTime(timeLeft)}
</h1>

          
          {/* Play, Pause, Reset Buttons */}
          <div className="mt-4 flex gap-4">
            <button onClick={() => setIsRunning(true)} className="px-4 py-2 bg-green-500 text-white rounded">Play</button>
            <button onClick={() => setIsRunning(false)} className="px-4 py-2 bg-yellow-500 text-white rounded">Pause</button>
            <button onClick={() => { setTimeLeft(initialTime); setIsRunning(false); }} className="px-4 py-2 bg-red-500 text-white rounded">Reset</button>
          </div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 lg:text-[7rem]">Bui<b>lda</b>ton</h1>
      </div>
    </div>
  );
};

export default Hero;
