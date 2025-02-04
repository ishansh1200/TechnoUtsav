'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Orbitron, Audiowide } from 'next/font/google';
import bg11 from './backgrounds/bg11.jpg';
import bg15 from './backgrounds/bg15.jpg';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const Page = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
            <div className='flex-1 ml-16 mr-8 overflow-y-auto'>
                {/* First Box */}
                <div className='bg-black bg-opacity-50 p-6 rounded-lg mb-8'>
                    <h1 className={`text-4xl font-bold text-cyan-400 mb-6 ${orbitron.className}`}>
                        ROBO LINE-UP COMPETITION 2025
                    </h1>
                    <div className='text-lg text-gray-300 mb-6 space-y-4'>
                        <p>The Robo Line-Up Competition 2025 is an exhilarating showcase of robotic engineering and precision programming, centered on the challenge of line following. Participants design and build robots capable of detecting and navigating a predefined path with unmatched accuracy and speed.</p>
                        <ul className='list-disc list-inside'>
                            <li>Navigate the path to victory with our Fast Line Follower Robot challenge!</li>
                            <li>Program your robot to follow the twists and turns of the track with precision and speed.</li>
                            <li>Robots must autonomously follow a marked line, handling sharp turns, curves, and obstacles as they race against time.</li>
                            <li>The event emphasizes innovation, control algorithms, and fine-tuned hardware design to achieve optimal performance.</li>
                            <li>Participants will showcase their skills in robotic engineering, programming, and problem-solving.</li>
                            <li>This competition is a platform to demonstrate creativity, technical expertise, and teamwork.</li>
                            <li>Engage with fellow robotics enthusiasts, exchange ideas, and learn from industry experts.</li>
                            <li>The competition promises an exciting and challenging experience for all participants.</li>
                        </ul>
                    </div>
                </div>

                {/* Second Box */}
                <div className='bg-black bg-opacity-50 p-6 rounded-lg'>
                    <h1 className={`text-4xl font-bold text-cyan-400 mb-6 ${orbitron.className}`}>
                        ADVANTAGES OF PARTICIPATING
                    </h1>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Enhance your skills in robotics, programming, and hardware design.</li>
                            <li>Gain hands-on experience in building and programming autonomous robots.</li>
                            <li>Network with robotics enthusiasts and industry professionals.</li>
                            <li>Opportunity to win exciting prizes and gain recognition.</li>
                            <li>Improve your resume with a prestigious robotics competition experience.</li>
                        </ul>
                    </div>
                    <h2 className={`text-2xl font-bold text-cyan-400 mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Basic understanding of robotics and programming (e.g., Arduino, Raspberry Pi, Python).</li>
                            <li>Familiarity with sensors, motors, and control algorithms.</li>
                            <li>Enthusiasm to learn and solve real-world robotics challenges.</li>
                            <li>Open to individuals and teams (up to 4 members).</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-[35%] bg-black bg-opacity-50 p-8 rounded-lg mr-16 h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'>
                {/* Top 20% with bg12 Image */}
                <div className='h-[35%] relative mb-6'>
                    <Image
                        src={bg15}
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
                <div className='space-y-4'>
                    <button className={`block w-64 bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all ${orbitron.className}`}>
                        Registration Form
                    </button>
                </div>
            </div>
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