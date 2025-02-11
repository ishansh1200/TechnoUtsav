"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mukta, Lobster } from "next/font/google";

const mukta = Mukta({
    subsets: ["latin", "devanagari"],
    weight: ["400", "700"],
});

const lobster = Lobster({
    subsets: ["latin"],
    weight: ["400"],
});

const text = ["I", "n", "n", "o", "वृत्ति"];

const TextBox = () => {
    return (
        <div className="flex h-screen relative w-full overflow-visible items-center justify-center flex-col">
            <div className="py-[2vh] overflow-visible">
                <div className="text-center w-[100%] flex bg-black bg-opacity-0 relative bg-cover overflow-visible flex-col items-center sm:mt-[15vh] md:mt-[10vh]">
                    
                    {/* "Welcome to" Text */}
                    <motion.div 
                        className={`${lobster.className} bg-clip-text text-5xl md:text-4xl lg:text-[10vh] font-normal tracking-wide mb-[-10px] md:mb-[-30px] sm:mt-[0] text-transparent bg-gradient-to-r from-purple-300 to-purple-200 leading-[0.9]`}
                        style={{ transform: 'translateY(5px)', lineHeight: 1.1 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Welcome to
                    </motion.div>

                    {/* "Innoवृत्ति" Animated Text */}
                    <motion.div 
                        className={`${mukta.className} flex items-center justify-center w-full text-white text-[10vh] md:text-9xl lg:text-[15rem] font-bold tracking-widest relative leading-tight sm:mt-[10px] md:mt-[-45px]`}
                    >
                        {text.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, rotateX: -90, y: -50 }}
                                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-200 leading-relaxed"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                    
                </div>
            </div>
        </div>
    );
};

export default TextBox;
