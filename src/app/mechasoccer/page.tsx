'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import bg11 from './backgrounds/bg11.jpg';
import bg23 from './backgrounds/bg23.jpg';

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
                        ROBO SOCCER
                    </h1>
                    <div className='text-lg text-gray-300 mb-6 space-y-4'>
                        <p>Robo Soccer is a captivating competition that blends the thrill of sports with the ingenuity of robotics. Teams of students are challenged to design, build, and program autonomous robots to compete in exciting soccer matches on a miniature field. This requires a deep understanding of various disciplines, including mechanics, electronics, programming, and artificial intelligence.</p>
                        <ul className='list-disc list-inside'>
                            <li>Participants must develop sophisticated algorithms to enable their robots to navigate the field, locate and intercept the ball, and make strategic decisions to outmaneuver their opponents.</li>
                            <li>Beyond the technical challenges, Robo Soccer fosters crucial skills such as teamwork, collaboration, and problem-solving.</li>
                            <li>It provides a unique platform for students to apply their theoretical knowledge to a real-world challenge, pushing the boundaries of robotic innovation.</li>
                            <li>The competition attracts a diverse range of participants, fostering a vibrant and collaborative environment that encourages creativity and inspires the next generation of robotics engineers.</li>
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
                            <li>Gain hands-on experience in robotics, programming, and artificial intelligence.</li>
                            <li>Develop teamwork and collaboration skills by working in a team environment.</li>
                            <li>Enhance problem-solving and strategic thinking abilities.</li>
                            <li>Showcase your creativity and technical expertise in a competitive setting.</li>
                            <li>Network with like-minded individuals and industry professionals.</li>
                        </ul>
                    </div>
                    <h2 className={`text-2xl font-bold text-cyan-400 mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Basic understanding of robotics, electronics, and programming.</li>
                            <li>Familiarity with artificial intelligence and algorithm design is a plus.</li>
                            <li>Open to teams of students (up to 4 members).</li>
                            <li>Enthusiasm to learn and innovate in the field of robotics.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-[35%] bg-black bg-opacity-50 p-8 rounded-lg mr-16 h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'>
                {/* Top 20% with bg12 Image */}
                <div className='h-[35%] relative mb-6'>
                    <Image
                        src={bg23}
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
        </div>
    );
};

export default Page;