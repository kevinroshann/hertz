import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const [countdown, setCountdown] = useState("00:00:00:00");

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
    const targetDate = new Date("March 2, 2025 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft < 0) {
        clearInterval(interval);
        setCountdown("00:00:00:00");
      } else {
        const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, "0");
        setCountdown(`${days}:${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
          {/* <h2 className="text-4xl sm:text-6xl font-bold special-font">Event Starts In</h2> */}
          {/* <h1 className="special-font text-3xl sm:text-5xl  text-white">{countdown}</h1> */}
          <h1 className="special-font hero-heading text-white text-center bg-black bg-opacity-50 p-4 rounded-lg text-6xl md:text-8xl lg:text-9xl">
        {countdown}
      </h1>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">2<b>0</b>25</h1>
        <div className="absolute left-0 top-0 z-40 size-full">
  {/* Mobile View: Centered Text */}
  <div className="sm:hidden flex flex-col items-center px-5 mt-20"> {/* Adjusted from mt-40 to mt-20 */}
  <div className="sm:hidden flex flex-col items-center  mt-10 mb-0"> 
  <img 
    src="/img/curiefy.png" 
    // alt="Event Logo" 
    className="max-w-11 h-auto mb-1 sm:mb-3" 
  />
   <p className="mb-5 max-w-64 font-robert-regular text-blue-100 text-xs xs:text-sm sm:text-xs mx-auto sm:mx-0">
  Presents
</p></div>

    <p className="mt-0 max-w-64 font-robert-regular text-blue-100 text-sm xs:text-base text-center">
       MARCH 2nd 3rd
    </p>
    
    <h1 className="special-font hero-heading text-blue-100" style={{ fontSize: '4rem' }}>
      HER<b>T</b>Z 07
    </h1>

    <p className="max-w-64 font-robert-regular text-blue-100 text-sm xs:text-base text-center">
      ECSA FLAGSHIP TECH EVENT
    </p>

</div>



  {/* Desktop View: Original Layout */}
  <div className="hidden sm:block mt-24 px-5 sm:px-10 text-center sm:text-left mx-auto sm:mx-0">
  <img 
    src="/img/curiefy.png" 
    // alt="Event Logo" 
    className="max-w-auto h-11 mb-2 sm:mb-2" 
  />
      <p className="mb-5 max-w-64 font-robert-regular text-blue-100 text-lg xs:text-xl sm:text-base mx-auto sm:mx-0"style={{ fontSize: '1.4rem' }}>
      Presents
    </p>
    <h1 className="special-font hero-heading text-blue-100 " style={{ fontSize: '8rem' }}>
      HER<b>T</b>Z 07
    </h1>
    <p className="mb-5 max-w-64 font-robert-regular text-blue-100 text-lg xs:text-xl sm:text-base mx-auto sm:mx-0">
      ECSA FLAGSHIP TECH EVENT 
    </p>

    <p className="mb-5 max-w-64 font-robert-regular text-blue-100 text-lg xs:text-xl sm:text-base mx-auto sm:mx-0">
   MARCH 2nd 3rd
    </p>
  </div>
</div>



      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">2<b>0</b>25</h1>
    </div>
  );
};

export default Hero;
