'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

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

const EventCard = ({ event }) => {
    const eventImage = eventImages[event.img];

    return (
        <motion.div
            className="w-80 border-4 border-black bg-black/35 backdrop-blur-md p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]  
            font-sans transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] 
            hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center gap-4 mb-4 border-b-2 border-black pb-4">
                <div className="flex items-center justify-center bg-black p-2">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                    </svg>
                </div>
                <div className="font-black text-white text-xl uppercase">{event.title}</div>
            </div>
            <div className={`${spaceGrotesk.className} relative w-full h-48 overflow-hidden border-2 border-black`}>
                <Image src={eventImage} alt={event.title} fill className="object-cover brightness-90 contrast-110" />
            </div>
            <div className="mt-4 text-white text-lg leading-6 border-b-2 border-black pb-4 font-extrabold">
                {event.shortDescription1}
            </div>
            <div className="mt-4">
                <a href={event.link} className="block w-full text-center text-lg font-bold uppercase border-4 border-black bg-white/75 text-black relative transition-all duration-200 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-4 p-3 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-700/50 hover:border-blue-700 hover:text-white">
                    Join Now
                </a>
            </div>
        </motion.div>
    );
};

export const EventShowcase = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black/90 p-8">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default EventCard;
