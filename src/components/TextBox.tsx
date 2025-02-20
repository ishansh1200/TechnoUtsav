"use client";

import React from "react";
import { motion } from "framer-motion";
import { Orbitron, Yatra_One } from "next/font/google"; // Changed font for INNO
import GlitchText from "./GlitchText";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500"] }); // New tech-style font
const yatra = Yatra_One({ subsets: ["devanagari"], weight: "400" });

const TextBox = () => {
    return (
        <div className="flex h-screen relative w-full overflow-hidden items-center justify-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                {/* "Welcome to" Text */}
                <motion.div 
                    className={`${orbitron.className} text-center text-white text-opacity-90 mb-4 md:mb-8`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-3xl md:text-5xl lg:text-6xl tracking-widest uppercase 
                    drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                        Welcome to
                    </span>
                </motion.div>

                {/* Main Title */}
                <div className="relative flex justify-center items-center">
                    <motion.div 
                        className="text-center flex flex-wrap justify-center 
                        items-baseline gap-x-6 md:gap-x-10" // Increased gap
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {/* Glitch Effect Container */}
                        <div className="relative inline-block">
                            {/* Solid Text Base */}
                            <div className={`${orbitron.className} text-8xl md:text-[10rem] lg:text-[12rem]
                            font-bold text-white text-opacity-95 tracking-tighter 
                            drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
                                INNO
                            </div>
                            
                            {/* Glitch Overlay */}
                            <GlitchText
                                className={`${orbitron.className} absolute top-0 left-0 w-full h-full 
                                text-8xl md:text-[10rem] lg:text-[12rem] font-bold text-transparent 
                                bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 opacity-70`}
                                text="INNO"
                            />
                        </div>

                        {/* Devanagari Text - Larger */}
                        <motion.span
                            className={`${yatra.className} text-8xl md:text-[10rem] lg:text-[12rem]
                            text-white text-opacity-90 font-semibold 
                            drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "backOut" }}
                            style={{ lineHeight: 0.8 }} // Adjusted line height
                        >
                            वृत्ति
                        </motion.span>
                    </motion.div>

                    {/* Animated Background Shine */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                        opacity-40 -rotate-12"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </div>

                {/* Subtle Subtitle */}
                <motion.div 
                    className={`${yatra.className} text-center mt-10 text-white/70 
                    text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    Where Innovation Meets Tradition
                </motion.div>
            </div>
        </div>
    );
};

export default TextBox;