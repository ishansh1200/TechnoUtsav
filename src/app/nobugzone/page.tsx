'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import bg11 from './backgrounds/bg11.jpg';
import bg21 from './backgrounds/bg21.jpg';

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
                        NO BUG ZONE
                    </h1>
                    <div className='text-lg text-gray-300 mb-6 space-y-4'>
                        <p>The Code Debugging Challenge is a thrilling on-the-spot coding competition where participants form teams and work together to solve problems, only to have their code “bugged” by event organizers.</p>
                        <ul className='list-disc list-inside'>
                            <li>Teams receive pre-written buggy code and must debug it under a time constraint.</li>
                            <li>Participants simulate real-world debugging scenarios by diagnosing and fixing issues in unfamiliar codebases.</li>
                            <li>Challenges test problem-solving skills, attention to detail, and coding efficiency.</li>
                            <li>Encourages collaboration and teamwork to troubleshoot and optimize code.</li>
                            <li>Participants refine their debugging techniques and logical thinking.</li>
                            <li>Develops critical skills needed for real-world software development.</li>
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
                            <li>Sharpen debugging and troubleshooting skills.</li>
                            <li>Improve problem-solving abilities under pressure.</li>
                            <li>Gain hands-on experience with real-world coding errors.</li>
                            <li>Enhance teamwork and collaboration in coding scenarios.</li>
                            <li>Opportunity to test and refine debugging strategies.</li>
                            <li>Win exciting prizes and earn recognition.</li>
                        </ul>
                    </div>
                    <h2 className={`text-2xl font-bold text-cyan-400 mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Basic knowledge of programming (Python, Java, C++, etc.).</li>
                            <li>Understanding of debugging techniques and logical problem-solving.</li>
                            <li>Ability to work efficiently under time constraints.</li>
                            <li>Open to individuals and teams (up to 3 members).</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-[35%] bg-black bg-opacity-50 p-8 rounded-lg mr-16 h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'>
                {/* Top 20% with bg12 Image */}
                <div className='h-[35%] relative mb-6'>
                    <Image
                        src={bg21}
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