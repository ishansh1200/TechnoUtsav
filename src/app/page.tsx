'use client';

import Navbar from "@/components/Navbar";
import Waves from './Waves';
import TextBox from "@/components/TextBox";

export default function Home() {
  return (
    <div className="relative">
      <div className="inset-0 -z-10 origin-center">
        <Waves
          lineColor="#FFF"
          backgroundColor="transparent" // Make the wave background transparent
          waveSpeedX={0.1}
          waveSpeedY={0.1}
          waveAmpX={32}
          waveAmpY={16}
          friction={0.925}
          tension={0.0005}
          maxCursorMove={120}
          xGap={25}
          yGap={32}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <TextBox />
      </div>

      <Navbar className="relative z-20" />
    </div>
  );
}
