'use client';

import Navbar from "@/components/Navbar";
import Waves from "./Waves";
import TextBox from "@/components/TextBox";
import { motion } from "framer-motion";
import Events from "@/components/Events"

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-black"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0 -z-9"
        >
          <Waves
            lineColor="#FFF"
            backgroundColor="transparent"
            waveSpeedX={0.1}
            waveSpeedY={0.1}
            waveAmpX={32}
            waveAmpY={16}
            friction={0.925}
            tension={0.0005}
            maxCursorMove={120}
            xGap={15}
            yGap={32}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen"
        >
          <TextBox />
          <Navbar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >

        </motion.div>
      </motion.div>
      <Events />
    </div>
  );
}
