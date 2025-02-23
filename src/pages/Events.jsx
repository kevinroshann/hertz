import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    id: 1,
    image: "/img/one.jpeg",
    link: "https://konfhub.com/hert7-analog-project",
  },
  {
    id: 2,
    image: "/img/two.jpeg",
    link: "https://lu.ma/xyjej4si",
  },
  {
    id: 3,
    image: "/img/mc.jpeg",
    link: "https://konfhub.com/hert7-mc-project",
  },

  {
    id: 5,
    image: "public/img/aztec.jpeg",
    link: "https://konfhub.com/aztec",
  },
  {
    id: 6,
    image: "public/img/expo.jpeg",
    link: "https://konfhub.com/196b5a04-32ef-4974-b17c-9d8558fcfeb1",
  },
  // {
  //   id: 7,
  //   image: "/img/about.webp", // Ensure this path is correct
  //   link: "https://example.com/7",
  // },
];

export default function Events() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const nextCard = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Get the current set of 3 cards to display
  const getVisibleCards = () => {
    const prevIndex = (index - 1 + cards.length) % cards.length;
    const nextIndex = (index + 1) % cards.length;
    return [
      { ...cards[prevIndex], position: "left" }, // Left card
      { ...cards[index], position: "center" }, // Middle card (focused)
      { ...cards[nextIndex], position: "right" }, // Right card
    ];
  };

  // Animation variants
  const cardVariants = {
    left: { x: "-80%", scale: 0.8, opacity: 0.7, zIndex: 1 },
    center: { x: "0%", scale: 1.2, opacity: 1, zIndex: 10 },
    right: { x: "80%", scale: 0.8, opacity: 0.7, zIndex: 1 },
    exitLeft: { x: "-100%", opacity: 0, scale: 0.8 },
    exitRight: { x: "100%", opacity: 0, scale: 0.8 },
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: `url('/img/about.webp')`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to make the background darker */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex items-center justify-center w-full max-w-4xl h-[400px] overflow-hidden z-10">
        <AnimatePresence initial={false} custom={direction}>
          {getVisibleCards().map((card) => (
            <motion.div
              key={card.id}
              custom={direction}
              variants={cardVariants}
              initial={card.position === "left" ? "left" : card.position === "right" ? "right" : "center"}
              animate={card.position === "left" ? "left" : card.position === "right" ? "right" : "center"}
              exit={direction === 1 ? "exitLeft" : "exitRight"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] flex items-center justify-center bg-white shadow-lg ${
                card.position === "center" ? "rounded-2xl" : "rounded-lg" // Curved edges for middle card
              }`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(event, info) => {
                if (info.offset.x > 100) {
                  prevCard();
                } else if (info.offset.x < -100) {
                  nextCard();
                }
              }}
            >
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover rounded-lg" // Ensure the image fits well
                />
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mt-6 z-10">
        <button
          onClick={prevCard}
          className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={nextCard}
          className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}