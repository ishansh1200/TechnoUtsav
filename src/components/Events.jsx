'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import EventCard from './EventCard';
import { events } from './data/events';
import { Orbitron, Audiowide } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

function Events() {
  const uniqueEvents = events.filter((event, index, self) =>
    index === self.findIndex((e) => e.id === event.id)
  );

  const totalEvents = uniqueEvents.length;
  const cardsPerRow = 4;
  const rows = Math.ceil(totalEvents / cardsPerRow);
  
  const eventRows = [...Array(rows)].map((_, index) => {
    const start = index * cardsPerRow;
    const end = start + cardsPerRow;
    return uniqueEvents.slice(start, end);
  });

  return (
    <div className="min-h-screen w-full text-white">
      <div className="container mx-auto px-8 py-20">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-24"
        >
          <div className="w-full flex justify-center">
            <h1 className={`text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#758BFD] to-white/90 mb-8 ${orbitron.className}`}>
              Tech Events
            </h1>
          </div>
          <p className={`text-gray-200 text-xl md:text-3xl mb-8 opacity-75 ${audiowide.className}`}>
            Discover the Future of Technology
          </p>
        </motion.div>

        {/* Event Rows */}
        <div className="flex flex-col space-y-32">
          {eventRows.map((rowEvents, rowIndex) => (
            <div 
              key={`row-${rowIndex}`}
              className={`
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -translate-x-10
                gap-x-12 gap-y-16 sm:gap-x-16 sm:gap-y-20 lg:gap-x-24 lg:gap-y-24
                ${rowEvents.length < 4 ? 'lg:flex lg:justify-center' : ''}
              `}
              style={{
                width: rowEvents.length < 4 ? 'fit-content' : '100%',
                margin: '0 auto'
              }}
            >
              {rowEvents.map((event, index) => (
                <ScrollAnimationWrapper 
                  key={event.id} 
                  index={rowIndex * cardsPerRow + index}
                  className={`
                    ${rowEvents.length < 4 ? 'lg:w-[300px]' : ''}
                    px-4 mb-8 sm:mb-12 lg:mb-16
                  `}
                >
                  <EventCard event={event} />
                </ScrollAnimationWrapper>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Component for wrapping the scroll animation logic
function ScrollAnimationWrapper({ children, index, className = '' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      className={className}
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
        delay: index * 0.1,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

export default Events;