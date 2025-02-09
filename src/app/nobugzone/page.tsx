"use client"

import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import { motion } from 'framer-motion';
import bg11 from './backgrounds/bg11.jpg';
import bg21 from './backgrounds/bg21.jpg';
import Link from 'next/link';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

const Page = () => {
    const keyframes = useMemo(() => [], []); // Wrap keyframes in useMemo

    useEffect(() => {
        // Your useEffect logic here (if any)
    }, [keyframes]); // Added 'keyframes' to dependency array

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative flex flex-col lg:flex-row min-h-screen p-4 lg:p-8 pt-6 lg:pt-10 text-gray-200 bg-black bg-opacity-40'
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
            <div className='flex-1 lg:ml-8 lg:mr-4 mb-8 lg:mb-0 overflow-y-auto'>
                {/* First Box */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='bg-black bg-opacity-50 p-4 lg:p-6 rounded-lg mb-8'
                >
                    <h1 className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 lg:mb-6 ${orbitron.className}`}>
                        NO BUG ZONE
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 space-y-4'>
                        <p>The Code Debugging Challenge is a thrilling on-the-spot coding competition where participants form teams and work together to solve problems, only to have their code &quot;bugged&quot; by event organizers.</p>
                        <ul className='list-disc list-inside'>
                            <li>Teams receive pre-written buggy code and must debug it under a time constraint.</li>
                            <li>Participants simulate real-world debugging scenarios by diagnosing and fixing issues in unfamiliar codebases.</li>
                            <li>Challenges test problem-solving skills, attention to detail, and coding efficiency.</li>
                            <li>Encourages collaboration and teamwork to troubleshoot and optimize code.</li>
                            <li>Participants refine their debugging techniques and logical thinking.</li>
                            <li>Develops critical skills needed for real-world software development.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Second Box */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='bg-black bg-opacity-50 p-4 lg:p-6 rounded-lg'
                >
                    <h1 className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 lg:mb-6 ${orbitron.className}`}>
                        ADVANTAGES OF PARTICIPATING
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Sharpen debugging and troubleshooting skills.</li>
                            <li>Improve problem-solving abilities under pressure.</li>
                            <li>Gain hands-on experience with real-world coding errors.</li>
                            <li>Enhance teamwork and collaboration in coding scenarios.</li>
                            <li>Opportunity to test and refine debugging strategies.</li>
                            <li>Win exciting prizes and earn recognition.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Right Section */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='w-full lg:w-[35%] bg-black bg-opacity-50 p-4 lg:p-8 rounded-lg lg:mr-8 h-auto lg:h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'
            >
                <div className='h-48 lg:h-[35%] relative mb-6'>
                    <Image
                        src={bg21 || "/placeholder.svg"}
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
                Rs 36,000
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Venue
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-4 lg:mb-5 ${orbitron.className}`}>
                    VIPS-TC Rooms 408, 410 
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Date and Time
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 ${orbitron.className}`}>
                    28th Feb 2025
                </h3>
                <h3 className={`text-lg font-bold text-yellow-400 mb-6 lg:mb-10 ${orbitron.className}`}>
                    10:00 AM to 5:00 PM
                </h3>

                <motion.div className='flex flex-col lg:flex-row justify-center gap-4' variants={itemVariants}>
                    <Link href='https://unstop.com/p/no-bug-zone-vivekananda-institute-of-professional-studies-vips-delhi-1392464 ' passHref>
                        <button className='bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all'>
                            Registration Form
                        </button>
                    </Link>
                    <Link href='https://docs.google.com/document/d/1H-rGvJzrUp6aercfntxOKI8yt0JtE5Ag/edit?usp=sharing&ouid=105713651815631722856&rtpof=true&sd=true' passHref>
                        <button className='bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all'>
                            Event Details
                        </button>
                    </Link>
                </motion.div>
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