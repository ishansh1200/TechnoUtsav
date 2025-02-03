'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import bg11 from './backgrounds/bg11.jpg';
import bg22 from './backgrounds/bg22.jpg';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const Page = () => {
    return (
        <div className='relative flex h-screen p-8 pt-10 text-gray-200 bg-black bg-opacity-40'>
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={bg11}
                    alt='Background'
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                />
            </div>

            {/* Left Section */}
            <div className='flex-1 ml-16 mr-8 overflow-y-auto'>
                {/* First Box */}
                <div className='bg-black bg-opacity-50 p-6 rounded-lg mb-8'>
                    <h1 className={`text-4xl font-bold text-cyan-400 mb-6 ${orbitron.className}`}>
                        DRONE RACING
                    </h1>
                    <div className='text-lg text-gray-300 mb-6 space-y-4'>
                        <p>Drone racing is an exhilarating sport that combines speed, technology, and precision. Pilots navigate high-speed drones through intricate obstacle courses, requiring exceptional control and quick reflexes.</p>
                        <ul className='list-disc list-inside'>
                            <li>Participants pilot high-speed drones through challenging courses.</li>
                            <li>Courses feature sharp turns, obstacles, and varying elevations.</li>
                            <li>Success requires both technical skills and strategic decision-making.</li>
                            <li>Events are held in large, open spaces with clearly marked checkpoints.</li>
                            <li>Competitors must master split-second decision-making and reflexive control.</li>
                            <li>Races test both mental acuity and physical precision.</li>
                            <li>Spectators enjoy a dynamic and visually thrilling competition.</li>
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
                            <li>Enhance hand-eye coordination and reflexes.</li>
                            <li>Develop problem-solving and strategic thinking skills.</li>
                            <li>Gain hands-on experience with drone technology.</li>
                            <li>Compete in a high-adrenaline, technology-driven environment.</li>
                            <li>Network with fellow enthusiasts and professionals in the field.</li>
                        </ul>
                    </div>
                    <h2 className={`text-2xl font-bold text-cyan-400 mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Basic knowledge of drone operation and controls.</li>
                            <li>Understanding of racing mechanics and obstacle navigation.</li>
                            <li>Ability to make quick decisions under pressure.</li>
                            <li>Open to individuals and teams (up to 3 members).</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-[35%] bg-black bg-opacity-50 p-8 rounded-lg mr-16 h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'>
                <div className='h-[35%] relative mb-6'>
                    <Image
                        src={bg22}
                        alt='Top Background'
                        fill
                        style={{ objectFit: 'cover' }}
                        className='rounded-lg'
                    />
                </div>

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

                <div className='space-y-4'>
                    <button className={`block w-64 bg-cyan-600 text-white py-2 px-4 rounded-lg text-lg font-semibold text-center hover:bg-cyan-700 transition-all ${orbitron.className}`}>
                        Registration Form
                    </button>
                </div>
            </div>

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
        </div>
    );
};

export default Page;