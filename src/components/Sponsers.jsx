"use client";
import React from "react";
import { motion } from "framer-motion";
import { Audiowide, Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4, delayChildren: 0.3 }, // Slightly increased delays
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 100, rotate: -10, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

function Sponsors() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="pt-32 pb-20 mt-24 h-auto w-full text-white flex flex-col items-center justify-center z-[999]"
        >
            {/* Main Heading */}
            <motion.h1
                id = "sponsors"
                variants={{
                    hidden: { opacity: 0, y: -50, scale: 0.8, rotate: -5 },
                    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                }}
                transition={{ type: "spring", stiffness: 120, damping: 8 }}
                className={`${audiowide.className} text-[6vh] sm:text-[12vh] mb-8 sm:mb-14 text-center leading-tight`}
                
            >
                SPONSORS
            </motion.h1>

            {/* Sponsorship Tiers with Increased Spacing */}
            <motion.div
                className={`${orbitron.className} flex flex-col items-center gap-y-16 sm:gap-y-20 w-full max-w-[90%] sm:max-w-[70%]`}
                variants={containerVariants}
            >
                {["COMING SOON..."].map((tier, index) => (
                    <motion.h2
                        key={tier}
                        variants={itemVariants}
                        className="text-3xl sm:text-[6vh] text-gray-300 opacity-75 text-center mb-10 pb-10"
                    >
                        {tier}
                    </motion.h2>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Sponsors;
