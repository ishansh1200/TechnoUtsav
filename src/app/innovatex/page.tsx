'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import { motion } from 'framer-motion';
import bg11 from './backgrounds/bg11.jpg';
import bg17 from './backgrounds/bg17.jpg';
import Link from 'next/link';

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
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                />
            </div>

            {/* Left Section */}
            <motion.div className='flex-1 lg:ml-8 lg:mr-4 mb-8 lg:mb-0 overflow-y-auto' variants={itemVariants}>
                {/* First Box */}
                <motion.div className='bg-black bg-opacity-50 p-4 lg:p-6 rounded-lg mb-8' variants={itemVariants}>
                    <h1 className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 lg:mb-6 ${orbitron.className}`}>
                        INNOVATE X 2025
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 space-y-4'>
                        <p>InnovateX: The College Ideathon 2025 is an electrifying platform designed to cultivate innovation, critical thinking, and entrepreneurial skills among college students.</p>
                        <ul className='list-disc list-inside'>
                            <li>Cross-disciplinary teams solving pressing real-world problems</li>
                            <li>Mentorship from industry leaders and entrepreneurship experts</li>
                            <li>Prototype development with cutting-edge technologies</li>
                            <li>Pitch sessions to industry panels and potential investors</li>
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
                            <li>Develop end-to-end innovation capabilities</li>
                            <li>Hands-on experience with industry mentorship</li>
                            <li>Enhance teamwork and cross-functional collaboration</li>
                            <li>Opportunity to transform ideas into viable ventures</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div className='w-full lg:w-[35%] bg-black bg-opacity-50 p-4 lg:p-8 rounded-lg lg:mr-8 h-auto lg:h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto' variants={itemVariants}>
                <div className='h-48 lg:h-[35%] relative mb-6'>
                    <Image
                        src={bg17 || "/placeholder.svg"}
                        alt='Top Background'
                        fill
                        style={{ objectFit: 'cover' }}
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
                Rs 30,000
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Venue
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-4 lg:mb-5 ${orbitron.className}`}>
                    Seminar Hall
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Date and Time
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 ${orbitron.className}`}>
                    27th Feb 2025
                </h3>
                <h3 className={`text-lg font-bold text-yellow-400 mb-6 lg:mb-10 ${orbitron.className}`}>
                    11:00 AM to 5:00 PM
                </h3>

                <motion.div className='flex flex-col lg:flex-row justify-center gap-4' variants={itemVariants}>
                    <Link href='https://unstop.com/p/innovatex-vivekananda-institute-of-professional-studies-vips-delhi-1392460' passHref>
                        <button className='bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all'>
                            Registration Form
                        </button>
                    </Link>
                    <Link href='https://docs.google.com/document/d/1EU1Fa1_0sNkW2g5OIf1v0N3fPjEm2LPD/edit?usp=sharing&ouid=105713651815631722856&rtpof=true&sd=true' passHref>
                        <button className='bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all'>
                            Event Details
                        </button>
                    </Link>
                </motion.div>
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