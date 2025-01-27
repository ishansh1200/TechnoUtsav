'use client';

import React from "react";
import { motion } from "framer-motion";
import { Staatliches } from "next/font/google";

interface TitleProps {
    text: string;
}

const staatliches = Staatliches({ subsets: ['latin'], weight: ['400'] });

const Title: React.FC<TitleProps> = ({ text }) => {
    const letters = Array.from(text);

    const letterVariants = {
        hidden: { y: -100, opacity: 0, filter: "blur(10px)" },
        visible: (i: number) => ({
            y: [0, -10, 0],
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.h1
            className={`${staatliches.className} text-white text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font- tracking-tight drop-shadow-lg flex`}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default Title;
