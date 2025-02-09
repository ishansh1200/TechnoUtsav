'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import { motion } from 'framer-motion';
import bg11 from './backgrounds/bg11.jpg';
import bg23 from './backgrounds/bg23.jpg';
import Link from 'next/link';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Page = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
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
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='bg-black bg-opacity-50 p-4 lg:p-6 rounded-lg mb-8'
                >
                    <h1 className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 lg:mb-6 ${orbitron.className}`}>
                        ROBO SOCCER
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 space-y-4'>
                        <p>Robo Soccer is a captivating competition that blends the thrill of sports with the ingenuity of robotics. Teams of students are challenged to design, build, and program autonomous robots to compete in exciting soccer matches on a miniature field. This requires a deep understanding of various disciplines, including mechanics, electronics, programming, and artificial intelligence.</p>
                        <ul className='list-disc list-inside'>
                            <li>Participants must develop sophisticated algorithms to enable their robots to navigate the field, locate and intercept the ball, and make strategic decisions to outmaneuver their opponents.</li>
                            <li>Beyond the technical challenges, Robo Soccer fosters crucial skills such as teamwork, collaboration, and problem-solving.</li>
                            <li>It provides a unique platform for students to apply their theoretical knowledge to a real-world challenge, pushing the boundaries of robotic innovation.</li>
                            <li>The competition attracts a diverse range of participants, fostering a vibrant and collaborative environment that encourages creativity and inspires the next generation of robotics engineers.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Second Box */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className='bg-black bg-opacity-50 p-4 lg:p-6 rounded-lg'
                >
                    <h1 className={`text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 lg:mb-6 ${orbitron.className}`}>
                        ADVANTAGES OF PARTICIPATING
                    </h1>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Gain hands-on experience in robotics, programming, and artificial intelligence.</li>
                            <li>Develop teamwork and collaboration skills by working in a team environment.</li>
                            <li>Enhance problem-solving and strategic thinking abilities.</li>
                            <li>Showcase your creativity and technical expertise in a competitive setting.</li>
                            <li>Network with like-minded individuals and industry professionals.</li>
                        </ul>
                    </div>
                    <h2 className={`text-xl lg:text-2xl font-bold text-cyan-400 mb-2 lg:mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-base lg:text-lg text-gray-300 mb-4 lg:mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Basic understanding of robotics, electronics, and programming.</li>
                            <li>Familiarity with artificial intelligence and algorithm design is a plus.</li>
                            <li>Open to teams of students (up to 4 members).</li>
                            <li>Enthusiasm to learn and innovate in the field of robotics.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Right Section */}
            <motion.div 
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className='w-full lg:w-[35%] bg-black bg-opacity-50 p-4 lg:p-8 rounded-lg lg:mr-8 h-auto lg:h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'
            >
                <div className='h-48 lg:h-[35%] relative mb-6'>
                    <Image
                        src={bg23 || "/placeholder.svg"}
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
                    Rs 60,000
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Venue
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 mb-4 lg:mb-5 ${orbitron.className}`}>
                    VIPS-TC Room 108 
                </h3>
                <h2 className={`text-xl font-bold text-cyan-400 mb-2 ${orbitron.className}`}>
                    Date and Time
                </h2>
                <h3 className={`text-lg font-bold text-yellow-400 ${orbitron.className}`}>
                    28th Feb 2025
                </h3>
                <h3 className={`text-lg font-bold text-yellow-400 mb-6 lg:mb-10 ${orbitron.className}`}>
                    12:00 Pm to 5:00 PM
                </h3>

                <motion.div className='flex flex-col lg:flex-row justify-center gap-4' variants={itemVariants}>
                    <Link href='https://unstop.com/p/mechasoccer-robo-soccer-vivekananda-institute-of-professional-studies-vips-delhi-1394411' passHref>
                        <button className='bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all'>
                            Registration Form
                        </button>
                    </Link>
                    <Link href='https://docs.google.com/document/d/1hcn9x137QIU3TVjkJ5GQ_sAGQciWU2TU/edit?usp=sharing&ouid=105713651815631722856&rtpof=true&sd=true' passHref>
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