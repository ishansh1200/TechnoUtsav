'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import EventCard from './EventCard';
import { events } from './data/events';
import { Orbitron, Audiowide } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });



function Events() {
  return (
    <div className="min-h-screen w-[100%] text-white">
      <div className="container px-20 py-25">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-12 pb-10"
        >
          <h1 className= {`text-7xl font-bold text-transparent opacity-75 bg-clip-text bg-gradient-to-r text-white mb-5 ${orbitron.className}`}>
            Tech Events
          </h1>
          <p className={`text-white text-3xl mb-7 opacity-75 ${audiowide.className}`}>
            Discover the Future of Technology
          </p>
        </motion.div>

        {/* Event Cards with Scroll Animation */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
          lg:gap-x-36 lg:gap-y-36 gap-y-20 gap-x-5 sm:gap-x-1 px-15 sm:px-4 md:px-5 lg:px-20 -translate-x-13"
        >
          {events.map((event, index) => (
            <ScrollAnimationWrapper key={event.id} index={index}>
              <EventCard event={event} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

// Component for wrapping the scroll animation logic
function ScrollAnimationWrapper({ children, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: direction,
        filter: 'blur(10px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: 0.01,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

export default Events;