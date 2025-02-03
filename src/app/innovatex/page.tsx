'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import bg11 from './backgrounds/bg11.jpg';
import bg17 from './backgrounds/bg17.jpg'

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const Page = () => {
    return (
        <div className='relative flex h-screen p-8 pt-10 text-gray-200 bg-black bg-opacity-40'>
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
                        INNOVATE X 2025
                    </h1>
                    <div className='text-lg text-gray-300 mb-6 space-y-4'>
                        <p>InnovateX: The College Ideathon 2025 is an electrifying platform designed to cultivate innovation, critical thinking, and entrepreneurial skills among college students. This melting pot of talent brings together diverse disciplines to tackle real-world challenges through creative collaboration and industry mentorship.</p>
                        <ul className='list-disc list-inside'>
                            <li>Cross-disciplinary teams solving pressing real-world problems</li>
                            <li>Mentorship from industry leaders and entrepreneurship experts</li>
                            <li>Prototype development with cutting-edge technologies</li>
                            <li>Pitch sessions to industry panels and potential investors</li>
                            <li>Focus on sustainable and implementable solutions</li>
                            <li>Workshops on design thinking and business modeling</li>
                            <li>Networking opportunities with academia and industry</li>
                            <li>Incubation support for promising startup ideas</li>
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
                            <li>Develop end-to-end innovation capabilities</li>
                            <li>Hands-on experience with industry mentorship</li>
                            <li>Enhance teamwork and cross-functional collaboration</li>
                            <li>Opportunity to transform ideas into viable ventures</li>
                            <li>Build connections with potential employers/investors</li>
                            <li>Certificate of participation and winner accolades</li>
                        </ul>
                    </div>
                    <h2 className={`text-2xl font-bold text-cyan-400 mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Open to all undergraduate/postgraduate students</li>
                            <li>Teams of 3-5 members from multiple disciplines</li>
                            <li>Passion for problem-solving and innovation</li>
                            <li>Basic understanding of project presentation skills</li>
                            <li>Willingness to learn entrepreneurial fundamentals</li>
                            <li>No prior coding/business experience required</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-[35%] bg-black bg-opacity-50 p-8 rounded-lg mr-16 h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'>
                <div className='h-[35%] relative mb-6'>
                    <Image
                        src={bg17}
                        alt='Top Background'
                        layout='fill'
                        objectFit='cover'
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
            `}</style>
        </div>
    );
};

export default Page;