"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ scale: 1.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <h1 className="text-4xl font-bold text-blue-700">
        Welcome to the About Page (Events)!
      </h1>
    </motion.div>
  );
};

export default AboutPage;
