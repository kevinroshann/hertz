import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";



// function Home() {
//   return (
//     <main className="relative min-h-screen w-screen overflow-x-hidden">


//       <Features />
//       <Story />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

// export default Home;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const images = [
  "../img/about.webp",
  "quiz.jpg",
  "chess.jpg",
  "vakyayudha.jpeg",
  "pigmenta.jpeg",
  "bestengineer.jpeg",
  "spotphotography.jpeg",
  "crimescene.jpeg",
  "poster.jpeg",
];

const Preevents= () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar/>
    <div className="w-full flex justify-center">

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container w-full max-w-3xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              className="cursor-pointer w-64 h-64 object-cover rounded-lg"
              src={`./GENERAL/${image}`}
              alt={image.split(".")[0]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </main>
  );
};

export default Preevents;
