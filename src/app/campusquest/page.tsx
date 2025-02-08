'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import { motion } from 'framer-motion';
import bg11 from './backgrounds/bg11.jpg';
import bg13 from './backgrounds/bg13.jpg';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Page = () => {
    return (
        <motion.div
            className='relative flex flex-col lg:flex-row min-h-screen p-4 lg:p-8 pt-6 lg:pt-10 text-gray-200 bg-black bg-opacity-40'
            initial='hidden'
            animate='visible'
            variants={containerVariants}
        >
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={bg11 || "/placeholder.svg"}
                    alt='Background'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                />
            </div>

            {/* Left Section */}
            <motion.div className='flex-1 lg:ml-8 lg:mr-4 mb-8 lg:mb-0 overflow-y-auto' variants={itemVariants}>
                {/* First Box */}
                <motion.div className='bg-black bg-opacity-50 p-4 lg:p-6 rounded-lg mb-8' variants={itemVariants}>
                    <h1 className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 lg:mb-6 ${orbitron.className}`}>
                        CAMPUS QUEST
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 space-y-4'>
                        <p>Campus Quest is an exhilarating, campus-wide treasure hunt designed to ignite your curiosity and challenge your problem-solving skills. This event combines adventure, teamwork, and intellectual challenges, creating an unforgettable experience for participants.</p>
                        <ul className='list-disc list-inside'>
                            <li>Clues are hidden all over the campus, waiting for you to find them.</li>
                            <li>Each clue comes with a question—solve it correctly to find the next location.</li>
                            <li>Continue solving clues until you uncover the final treasure!</li>
                            <li>Designed for puzzle pros and challenge lovers alike.</li>
                            <li>Test your brains and teamwork in a fun, engaging environment.</li>
                            <li>Put on your thinking caps, grab your friends, and explore the campus.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Second Box */}
                <motion.div className='bg-black bg-opacity-50 p-4 lg:p-6 rounded-lg' variants={itemVariants}>
                    <h1 className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 lg:mb-6 ${orbitron.className}`}>
                        ADVANTAGES OF PARTICIPATING
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Sharpen your problem-solving and critical thinking skills.</li>
                            <li>Enhance teamwork and collaboration with friends and peers.</li>
                            <li>Experience an adventurous and intellectually stimulating event.</li>
                            <li>Discover hidden parts of your campus in a fun, engaging way.</li>
                            <li>Compete for exciting prizes and campus-wide recognition.</li>
                        </ul>
                    </div>
                    <h2 className={`text-xl lg:text-2xl font-bold text-cyan-400 mb-2 lg:mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Open to all students, no prior experience needed.</li>
                            <li>Teams of up to 4 members are encouraged.</li>
                            <li>Bring enthusiasm, curiosity, and a love for challenges!</li>
                            <li>Comfortable attire and a campus map may be helpful.</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div className='w-full lg:w-[35%] bg-black bg-opacity-50 p-4 lg:p-8 rounded-lg lg:mr-8 h-auto lg:h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto' variants={itemVariants}>
                {/* Top 20% with bg13 Image */}
                <motion.div className='h-48 lg:h-[35%] relative mb-6' variants={itemVariants}>
                    <Image
                        src={bg13 || "/placeholder.svg"}
                        alt='Top Background'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-lg'
                    />
                </motion.div>

                {/* Content */}
                <h1 className={`text-3xl lg:text-4xl font-bold text-red-500 mb-4 lg:mb-6 text-center ${audiowide.className}`}>
                    EVENT DETAILS
                </h1>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Total Prize Pool
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-4 lg:mb-5 ${orbitron.className}`}>
                    xxxx Rs
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Venue
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-4 lg:mb-5 ${orbitron.className}`}>
                    Vivekananda Institute of Technology
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Time
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-6 lg:mb-10 ${orbitron.className}`}>
                    10:00am
                </h3>

                {/* Registration Button */}
                <div className='space-y-4'>
                    <motion.button 
                        className={`block w-full lg:w-64 mx-auto bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all ${orbitron.className}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Registration Form
                    </motion.button>
                </div>
            </motion.div>

            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
                ::-webkit-scrollbar {
                    width: 8px;
                }

                ::-webkit-scrollbar-track {
                    background: #1a1a1a;
                    border-radius: 10px;
                }

                ::-webkit-scrollbar-thumb {
                    background: #00ffff;
                    border-radius: 10px;
                    border: 2px solid #1a1a1a;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #00cccc;
                }

                @media (max-width: 768px) {
                    ::-webkit-scrollbar {
                        width: 4px;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Page;