// import gsap from "gsap";
// import { useRef } from "react";

// import Button from "./Button";
// import AnimatedTitle from "./AnimatedTitle";

// const FloatingImage = () => {
//   const frameRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const element = frameRef.current;

//     if (!element) return;

//     const rect = element.getBoundingClientRect();
//     const xPos = clientX - rect.left;
//     const yPos = clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((yPos - centerY) / centerY) * -10;
//     const rotateY = ((xPos - centerX) / centerX) * 10;

//     gsap.to(element, {
//       duration: 0.3,
//       rotateX,
//       rotateY,
//       transformPerspective: 500,
//       ease: "power1.inOut",
//     });
//   };

//   const handleMouseLeave = () => {
//     const element = frameRef.current;

//     if (element) {
//       gsap.to(element, {
//         duration: 0.3,
//         rotateX: 0,
//         rotateY: 0,
//         ease: "power1.inOut",
//       });
//     }
//   };

//   return (
//     <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
//       <div className="flex size-full flex-col items-center py-10 pb-24">
//         <p className="font-general text-sm uppercase md:text-[10px]">
//           the ECSA world
//         </p>

//         <div className="relative size-full">
//           <AnimatedTitle
//             title="ECSA"
//             containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
//           />

//           <div className="story-img-container">
//             <div className="story-img-mask">
//               <div className="story-img-content">
//                 <img
//                   ref={frameRef}
//                   onMouseMove={handleMouseMove}
//                   onMouseLeave={handleMouseLeave}
//                   onMouseUp={handleMouseLeave}
//                   onMouseEnter={handleMouseLeave}
//                   src="/img/contact2"
//                   alt="entrance.webp"
//                   className="object-contain"
//                 />
//               </div>
//             </div>

//             {/* for the rounded corner */}
//             <svg
//               className="invisible absolute size-0"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <defs>
//                 <filter id="flt_tag">
//                   <feGaussianBlur
//                     in="SourceGraphic"
//                     stdDeviation="8"
//                     result="blur"
//                   />
//                   <feColorMatrix
//                     in="blur"
//                     mode="matrix"
//                     values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
//                     result="flt_tag"
//                   />
//                   <feComposite
//                     in="SourceGraphic"
//                     in2="flt_tag"
//                     operator="atop"
//                   />
//                 </filter>
//               </defs>
//             </svg>
//           </div>
//         </div>

//         <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
//           <div className="flex h-full w-fit flex-col items-center md:items-start">
//             <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
//               Where realms converge, lies Zentry and the boundless pillar.
//               Discover its secrets and shape your fate amidst infinite
//               opportunities.
//             </p>

//             <Button
//               id="realm-btn"
//               title="discover prologue"
//               containerClass="mt-5"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FloatingImage;

import React, { useRef } from "react";
import gsap from "gsap";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the ECSA world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="VENUE"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container p-4 md:p-8" ref={frameRef}>
            <div className="h-[60vh] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.688035351144!2d76.32595787478486!3d10.04258117230108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c37738769d3%3A0x5ef54323a29bcbfb!2sCUSAT%20Student%20Amenity%20Centre!5e0!3m2!1sen!2sin!4v1740245524096!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
             Having Trouble Finding Us
             Join Us for HERTZ at AMENITY CENTRE CUSAT
            </p>

            {/* <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;