"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { Orbitron } from "next/font/google";  // Importing futuristic font

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const eventImages = {
  1: "/images/1.jpeg",
  2: "/images/2.jpeg",
  3: "/images/3.jpeg",
  4: "/images/4.jpeg",
};

const EventCard = ({ event }) => {
  const eventImage = eventImages[event.img];
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(format(new Date(event.date), 'MMMM do, yyyy'));
  }, [event.date]);

  return (
    <motion.div
      className="relative flex w-80 lg:w-[50vh] h-[72vh] flex-col rounded-3xl bg-gray-500 opacity-100
      text-white transition-all duration-300 ml-[-40px] mb-[-70px] items-center justify-between p-6"
      whileHover={{
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        scale: 1.05,
      }}
    >
      {/* Image Section */}
      <motion.div
        className="relative w-full h-48 flex justify-center items-center rounded-3xl shadow-lg overflow-hidden"
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

      {/* Text Content */}
      <motion.div className="flex flex-col items-center justify-center text-center flex-grow px-4">
        <motion.h5 
          className={`${orbitron.className} text-2xl md:text-3xl font-bold text-white tracking-wide mb-3`}
        >
          {event.title}
        </motion.h5>
        <p className="text-lg font-light">{event.shortDescription}</p>
      </motion.div>

      {/* Action Section */}
      <div className="mt-auto flex flex-col items-center space-y-4 pb-6">
        <Link 
          key={event.id} 
          href={event.link}
          className="px-6 py-3 text-md font-bold uppercase 
                    text-white bg-black rounded-lg cursor-pointer transition-colors 
                    duration-300 hover:bg-gray-800 text-center w-fit border-2 border-black"
        >
          Read More
        </Link>

        <span className="text-md px-6 py-3 border-2 border-black rounded-lg text-black bg-white text-center w-fit">
          {formattedDate}
        </span>
      </div>
    </motion.div>
  );
};

export default EventCard;
