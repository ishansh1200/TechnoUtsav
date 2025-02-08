import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const eventImages = {
  1: "/images/1.jpg",
  2: "/images/2.jpg",
  3: "/images/3.jpg",
  4: "/images/4.jpg",
  5: "/images/5.jpg",
  6: "/images/6.jpg",
  7: "/images/7.jpg",
  8: "/images/8.jpg",
  9: "/images/9.jpg",
};

const EventCard = ({ event, isLast }) => {
  const eventImage = eventImages[event.img];
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Save animation state before navigating
    window.sessionStorage.setItem("eventAnimating", JSON.stringify({ event: event.id, animating: true }));

    // Reset animation state slightly after click
    setTimeout(() => setIsAnimating(false), 500);

    // Navigate to the event link
    window.location.href = event.link;
  };

  useEffect(() => {
    // Clear any stored animation state when the component mounts
    window.sessionStorage.removeItem("eventAnimating");
    setIsAnimating(false);
  }, []);

  return (
    <motion.div
      className={`relative flex w-72 sm:w-80 md:w-[40vh] lg:w-[50vh] 
      h-[50vh] sm:h-[55vh] md:h-[68vh] lg:h-[72vh] 
      flex-col rounded-3xl bg-black bg-opacity-75 text-white transition-all duration-300 
      items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden 
      -ml-10 sm:-ml-6 md:-ml-8 ${isLast ? "mb-10 sm:mb-16 md:mb-20 lg:mb-24" : ""}`}
      initial={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="w-full h-full flex flex-col">
        <motion.div
          className="relative w-full h-36 sm:h-40 md:h-48 flex justify-center items-center rounded-3xl shadow-lg overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={eventImage}
            alt={event.title}
            className="w-full h-full object-cover rounded-3xl"
            width={360}
            height={192}
          />
        </motion.div>

        <motion.div className="flex flex-col text-center flex-grow px-2 sm:px-4 mt-6 sm:mt-10 md:mt-14">
          <motion.h5 
            className={`${orbitron.className} text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide mb-2 sm:mb-3`}
          >
            {event.title}
          </motion.h5>
          <p className="text-sm sm:text-base md:text-xl font-light">{event.shortDescription}</p>
        </motion.div>

        {/* Read More Button - Ensuring it's on top */}
        <div className="mt-auto w-full relative z-50">
          <div className="relative group">
            <motion.button 
              onClick={handleAnimation}
              className={`relative z-50 inline-block p-px font-semibold leading-6 text-white
              bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-all 
              duration-500 ease-in-out hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full`}
              disabled={isAnimating} // Disable button when animating
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"></span>
              <span className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-500"></span>
              <span className="relative z-50 block px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gray-950">
                <div className="relative z-50 flex items-center justify-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    {"Read More"}
                  </span>
                  <svg
                    className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
