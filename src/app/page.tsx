'use client';

import Navbar from "@/components/Navbar";
import TextBox from "@/components/TextBox";
import { motion, useAnimation } from "framer-motion";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsers";
import { useEffect, useRef } from "react";
import Waves from "./Waves"; 

export default function Home() {
  const colors = [
    // Blue Shades
    "#2E3A59", "#30467F", "#3B528B", "#41567D", "#223366", "#33415C",
    // Red Shades
    "#8B2F5F", "#D72638", "#F49D6E", "#BC4B51", "#DB3069",
    // Pink Shades
    "#FF577F", "#FF85A1", "#FFA3C2",
    // Purple Shades
    "#A663CC", "#822FAF", "#B65FCF", "#9933FF",
  ];

  const combinedAnimation = useAnimation();
  const colorIndex = useRef(0);
  const gradientSize = 60; // Covers 60% of the screen
  const keyframes = [
    { x: 50, y: 50 }, // Center
    { x: 100, y: 0 }, // Top-right
    { x: 0, y: 0 }, // Top-left
    { x: 100, y: 100 }, // Bottom-right
    { x: 0, y: 100 }, // Bottom-left
    { x: 50, y: 50 }, // Back to center
  ];

  useEffect(() => {
    const animateGradient = async () => {
      while (true) {
        for (const position of keyframes) {
          // Cycle through colors
          colorIndex.current = (colorIndex.current + 1) % colors.length;
          const color1 = colors[colorIndex.current] + "FF";
          const color2 = colors[(colorIndex.current + 1) % colors.length] + "FF";
          const color3 = colors[(colorIndex.current + 2) % colors.length] + "FF";

          // Animate gradient to the next position
          await combinedAnimation.start({
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, 
              ${color1}, 
              ${color2}, 
              ${color3}, 
              transparent ${gradientSize}%)`,
            transition: {
              duration: 2, // Smooth movement
              ease: "easeInOut", // Smoother easing
            },
          });
        }
      }
    };

    animateGradient();

    return () => combinedAnimation.stop();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Gradient Background */}
      <motion.div
        animate={combinedAnimation}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Waves Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
      >
        <Waves
          lineColor="#fff"
          backgroundColor="#0000"
          waveSpeedX={0.008}
          waveSpeedY={0.09}
          waveAmpX={50}
          waveAmpY={30}
          friction={0.5}
          tension={0.002}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
          className="opacity-25"
        />
      </motion.div>

      {/* Navbar */}
        <Navbar />

      {/* Home Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen"
      >
        <TextBox />
      </motion.div>

      {/* Events Section (No Animation) */}
      <div className="relative z-10">
        <Events />
      </div>

      {/* Sponsors Section (No Animation) */}
      <div className="relative z-10">
        <Sponsors />
      </div>
    </div>
  );
}