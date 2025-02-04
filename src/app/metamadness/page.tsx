'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Orbitron, Audiowide } from 'next/font/google';
import bg11 from './backgrounds/bg11.jpg';
import bg20 from './backgrounds/bg20.jpg';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Page = () => {
    return (
        <motion.div 
            initial="hidden" 
            animate="visible" 
            className='relative flex h-screen p-8 pt-10 text-gray-200 bg-black bg-opacity-40'
        >
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={bg11}
                    alt='Background'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                />
            </div>

            {/* Left Section */}
            <motion.div className='flex-1 ml-16 mr-8 overflow-y-auto' variants={fadeIn}>
                {/* First Box */}
                <motion.div className='bg-black bg-opacity-50 p-6 rounded-lg mb-8' variants={fadeIn}>
                    <h1 className={`text-4xl font-bold text-cyan-400 mb-6 ${orbitron.className}`}>
                        META MADNESS
                    </h1>
                    <div className='text-lg text-gray-300 mb-6 space-y-4'>
                        <p>Get ready to unleash your inner gamer! This exciting online gaming competition invites all students to compete in a series of thrilling matches across a diverse range of popular titles.</p>
                        <ul className='list-disc list-inside'>
                            <li>Compete in games like Call of Duty, Clash Royale, and Stumble Guys.</li>
                            <li>Experience fast-paced action, strategic depth, and chaotic fun.</li>
                            <li>Participate in multiple rounds leading up to an exciting final showdown.</li>
                            <li>Engage in additional activities like casual tournaments, a cosplay contest, and live commentary.</li>
                            <li>Foster a sense of community and sportsmanship among gamers.</li>
                            <li>Connect with fellow students over a shared passion for gaming.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Second Box */}
                <motion.div className='bg-black bg-opacity-50 p-6 rounded-lg' variants={fadeIn}>
                    <h1 className={`text-4xl font-bold text-cyan-400 mb-6 ${orbitron.className}`}>
                        ADVANTAGES OF PARTICIPATING
                    </h1>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Showcase your gaming skills in a competitive environment.</li>
                            <li>Compete for prizes and recognition within the college gaming community.</li>
                            <li>Meet and network with like-minded gamers.</li>
                            <li>Experience the thrill of live competitions and esports-style events.</li>
                            <li>Enjoy additional activities like cosplay contests and casual gaming rounds.</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div 
                className='w-[35%] bg-black bg-opacity-50 p-8 rounded-lg mr-16 h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'
                variants={fadeIn}
            >
                {/* Top 20% with bg12 Image */}
                <div className='h-[35%] relative mb-6'>
                    <Image
                        src={bg20}
                        alt='Top Background'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-lg'
                    />
                </div>

                {/* Content */}
                <h1 className={`text-4xl font-bold text-red-500 mb-6 text-center ${audiowide.className}`}>
                    EVENT DETAILS
                </h1>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Total Prize Pool
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-5 ${orbitron.className}`}>
                    50000 Rs
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Venue
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-5 ${orbitron.className}`}>
                    Vivekananda Institute of Technology 
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Time
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-10 ${orbitron.className}`}>
                    10:00am
                </h3>

                {/* Registration Button */}
                <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className={`block w-64 bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all ${orbitron.className}`}
                >
                    Registration Form
                </motion.button>
            </motion.div>
            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #00ffff;
          border-radius: 10px;
          border: 3px solid #1a1a1a;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #00cccc;
        }
      `}
            </style>
        </motion.div>
    );
};

export default Page;