"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mukta } from "next/font/google";

const mukta = Mukta({
    subsets: ["latin", "devanagari"],
    weight: ["400", "700"],
});

const text = ["I", "n", "n", "o", "वृत्ति"]; // Updated Hindi text

const TextBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen relative w-full overflow-visible">
            <div className="rounded-3xl p-20 text-center w-[70%] md:w-[85%] lg:w-[75%] flex items-center 
            justify-center bg-opacity-0 relative bg-cover bg-center overflow-visible">
                
                {/* Animated Text */}
                <motion.div className={`${mukta.className} flex items-center justify-center w-full text-white 
                        text-[10vh] md:text-9xl lg:text-[14rem] font-bold tracking-widest relative leading-tight`}
                >
                    {text.map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, rotateX: -90, y: -50 }}
                            animate={{ opacity: 1, rotateX: 0, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-[#6874E8] via-[#F7D6E0] to-[#F7ACCF] leading-relaxed"
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