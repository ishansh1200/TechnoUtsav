'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import { motion } from 'framer-motion';
import bg11 from './backgrounds/bg11.jpg';
import bg14 from './backgrounds/bg14.jpg';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Page = () => {
    return (
        <motion.div 
            className='relative flex flex-col lg:flex-row min-h-screen p-4 lg:p-8 pt-6 lg:pt-10 text-gray-200 bg-black bg-opacity-40'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
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
                        CRACK THE CODE
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 space-y-4'>
                        <p>CRACK THE CODE is a premier, high-stakes, fast-paced coding competition designed to bring together the brightest coding minds from around the world. In this event, participants will be challenged to solve complex and intricate programming problems that test their algorithmic thinking, problem-solving skills, and coding efficiency.</p>
                        <ul className='list-disc list-inside'>
                            <li>Premier global coding competition for top programmers</li>
                            <li>High-pressure environment with tight time constraints</li>
                            <li>Multiple rounds featuring increasingly complex challenges</li>
                            <li>Problems requiring advanced algorithm design and optimization</li>
                            <li>Real-time leaderboard tracking competitor progress</li>
                            <li>Team collaboration allowed (up to 3 members)</li>
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
                            <li>Test skills against world-class programmers</li>
                            <li>Enhance technical interview capabilities</li>
                            <li>Improve rapid prototyping and debugging skills</li>
                            <li>Exposure to cutting-edge problem-solving techniques</li>
                            <li>Opportunity to showcase talent to tech industry leaders</li>
                            <li>Develop competition strategy and time management</li>
                            <li>Potential to win significant prizes and recognition</li>
                        </ul>
                    </div>
                    <h2 className={`text-xl lg:text-2xl font-bold text-cyan-400 mb-2 lg:mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Proficiency in competitive programming languages (Python/Java/C++)</li>
                            <li>Experience with algorithm optimization techniques</li>
                            <li>Ability to write bug-free code under time pressure</li>
                            <li>Familiarity with standard competition formats/rules</li>
                            <li>Strong mathematical and logical reasoning skills</li>
                            <li>Teams must register all members beforehand</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div className='w-full lg:w-[35%] bg-black bg-opacity-50 p-4 lg:p-8 rounded-lg lg:mr-8 h-auto lg:h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto' variants={itemVariants}>
                <div className='h-48 lg:h-[35%] relative mb-6'>
                    <Image
                        src={bg14 || "/placeholder.svg"}
                        alt='Top Background'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-lg'
                    />
                </div>

                <h1 className={`text-3xl lg:text-4xl font-bold text-red-500 mb-4 lg:mb-6 text-center ${audiowide.className}`}>
                    EVENT DETAILS
                </h1>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Total Prize Pool
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-4 lg:mb-5 ${orbitron.className}`}>
                    50000 Rs
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

                <div className='space-y-4'>
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }} 
                        className={`block w-full lg:w-64 mx-auto bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all ${orbitron.className}`}
                    >
                        Registration Form
                    </motion.button>
                </div>
            </motion.div>

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