"use client";
import Navbar from "@/components/Navbar";
import TextBox from "@/components/TextBox";
import { motion, useAnimation } from "framer-motion";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsers";
import { useEffect, useRef, useState } from "react";
import Waves from "./Waves";
import { usePathname } from "next/navigation"; 
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  const colors = [
    "#2E3A59", "#30467F", "#3B528B", "#41567D", "#223366", "#33415C",
    "#8B2F5F", "#D72638", "#F49D6E", "#BC4B51", "#DB3069",
    "#FF577F", "#FF85A1", "#FFA3C2",
    "#A663CC", "#822FAF", "#B65FCF", "#9933FF",
  ];

  const combinedAnimation = useAnimation();
  const colorIndex = useRef(0);
  const gradientSize = 60;
  const keyframes = [
    { x: 50, y: 50 },
    { x: 100, y: 0 },
    { x: 0, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
    { x: 50, y: 50 },
  ];

  const pathname = usePathname(); 
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let isActive = true;

    const animateGradient = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));

      while (isActive) {
        for (const position of keyframes) {
          if (!isActive) break;

          colorIndex.current = (colorIndex.current + 1) % colors.length;
          const color1 = colors[colorIndex.current] + "FF";
          const color2 = colors[(colorIndex.current + 1) % colors.length] + "FF";

          await combinedAnimation.start({
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, 
              ${color1}, 
              ${color2}, 
              transparent ${gradientSize}%)`,
            transition: {
              duration: 2,
              ease: "easeInOut",
            },
          });
        }
      }
    };

    if (isMounted) {
      animateGradient();
    }

    return () => {
      isActive = false;
      combinedAnimation.stop();
    };
  }, [combinedAnimation, colors, pathname, isMounted]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden w-full">
      {/* Background Gradient Animation */}
      <motion.div
        animate={combinedAnimation}
        className="fixed top-0 left-0 w-full h-full z-1 overflow-hidden max-w-full"
      />

      {/* Waves Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-full z-2 overflow-hidden"
      >
        <Waves
          lineColor="#fff"
          backgroundColor="transparent"
          waveSpeedX={0.008}
          waveSpeedY={0.09}
          waveAmpX={50}
          waveAmpY={30}
          friction={0.925}
          tension={0.002}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
          className="opacity-25"
        />
      </motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content with TextBox */}
      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
      >
        <TextBox />
      </motion.div>

      {/* Events Section */}
      <div className="relative z-10 w-full px-4 sm:px-8 flex items-center text-center" id="eventdetails">
        <Events />
      </div>

      {/* Sponsors Section */}
      <motion.div  className="relative z-10 w-full px-4 sm:px-8 flex flex-col" id="eventdetails">
        <Sponsors />
      </motion.div>
      <Contact />
      <Footer />
      {/* Footer */}

    </div>
  );
}
