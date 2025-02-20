// EventCard.jsx
'use client'

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
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
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleInteraction = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        window.sessionStorage.setItem("eventAnimating", JSON.stringify({ event: event.id, animating: true }));
        setTimeout(() => {
            window.location.href = event.link;
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        window.sessionStorage.removeItem("eventAnimating");
        setIsAnimating(false);
    }, []);

    return (
        <motion.div
            className="relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer mx-auto"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => {
                setIsHovered(false);
                x.set(0);
                y.set(0);
            }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
            }}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 18
            }}
        >
            {/* Card Background */}
            <motion.div
                className="absolute inset-0 rounded-[1.5rem] bg-black/35 backdrop-blur-2xl border border-gray-800/60"
                animate={{
                    scale: isHovered ? 1.05 : 1,
                }}
            />

            {/* Main Content */}
            <div className="relative w-full h-full p-6 flex flex-col items-center justify-between">
                {/* Image Container */}
                <motion.div
                    className="relative w-full h-48 overflow-hidden rounded-2xl"
                    style={{
                        x: useTransform(x, [-150, 150], [-15, 15]),
                        y: useTransform(y, [-150, 150], [-15, 15])
                    }}
                    animate={{
                        filter: isHovered ? "blur(8px)" : "blur(0px)",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={eventImage}
                        alt={event.title}
                        fill
                        className="object-cover brightness-90 contrast-110"
                    />
                </motion.div>

                {/* Title */}
                <motion.h3
                    className={`${spaceGrotesk.className} text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent`}
                    animate={{
                        letterSpacing: isHovered ? "0.05em" : "0.02em",
                        filter: isHovered ? "blur(4px)" : "blur(0px)",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {event.title}
                </motion.h3>

                {/* Hover Content */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-gray-300/85 text-sm leading-relaxed">
                        {event.shortDescription1}
                    </p>

                    {/* Enhanced Button */}
                    <motion.div
                        className="w-full relative group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                        <motion.button
                            onClick={handleInteraction}
                            disabled={isAnimating}
                            className="w-full py-2 px-4 bg-gray-900 text-white font-semibold rounded-xl relative overflow-hidden transition-all duration-300"
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Join Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export const EventShowcase = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black/97 p-8 backdrop-blur-3xl">
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