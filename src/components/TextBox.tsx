"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mukta } from "next/font/google";

const mukta = Mukta({
    subsets: ["latin", "devanagari"],
    weight: ["400", "700"],
});

const text = ["I", "n", "n", "o", "वृति"]; // Keeping "वृति" together

const TextBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen relative w-full translate-y-2">
            <div className="rounded-3xl p-20 text-center h-[75vh] w-[70%] 
                md:w-[85%] lg:w-[75%] flex items-center justify-center bg-opacity-0 relative bg-cover bg-center">
                
                {/* Animated Text */}
                <motion.div className={`${mukta.className} flex items-center justify-center w-full text-white 
                        text-8xl md:text-9xl lg:text-[14rem] font-bold tracking-widest`}
                >
                    {text.map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, rotateX: -90, y: -50 }}
                            animate={{ opacity: 1, rotateX: 0, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default TextBox;
