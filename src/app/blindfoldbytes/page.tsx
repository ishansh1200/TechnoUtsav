'use client'

import React from 'react';
import Image from 'next/image';
import { Orbitron, Audiowide } from 'next/font/google';
import bg11 from './backgrounds/bg11.jpg';
import bg18 from './backgrounds/bg18.jpg';

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
                        BLINDFOLD BYTES
                    </h1>
                    <div className='text-lg text-gray-300 mb-6 space-y-4'>
                        <p>Invisible Logic is a challenging blind coding event where participants are asked to solve programming problems without the aid of a code editor. This unique competition requires participants to rely solely on their problem-solving and logical thinking skills, as they won't have access to syntax highlighting, code completion, or error feedback.</p>
                        <ul className='list-disc list-inside'>
                            <li>Participants will need to visualize algorithms and code structures in their minds, simulating real-world scenarios without typical coding tools.</li>
                            <li>The event tests both coding expertise and cognitive ability, pushing participants to their mental limits.</li>
                            <li>It challenges coders to structure algorithms, debug errors, and think through logical flows without an IDE.</li>
                            <li>Invisible Logic is the ultimate test of logic and problem-solving in its purest form.</li>
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
                            <li>Sharpen your logical thinking and problem-solving abilities.</li>
                            <li>Experience coding in a challenging, tool-free environment.</li>
                            <li>Enhance your ability to visualize and debug algorithms mentally.</li>
                            <li>Opportunity to demonstrate cognitive flexibility and coding expertise.</li>
                            <li>Network with like-minded individuals and gain recognition for your skills.</li>
                        </ul>
                    </div>
                    <h2 className={`text-2xl font-bold text-cyan-400 mb-4 ${orbitron.className}`}>
                        PARTICIPATION CRITERIA
                    </h2>
                    <div className='text-lg text-gray-300 mb-6'>
                        <ul className='list-disc list-inside'>
                            <li>Strong understanding of programming logic and algorithms.</li>
                            <li>Ability to code without relying on syntax highlighting or error feedback.</li>
                            <li>Experience in structuring and debugging code mentally.</li>
                            <li>Open to individuals and teams (up to 2 members).</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-[35%] bg-black bg-opacity-50 p-8 rounded-lg mr-16 h-[85vh] border-2 border-cyan-400 mt-5 overflow-y-auto'>
                {/* Top 20% with bg18 Image */}
                <div className='h-[35%] relative mb-6'>
                    <Image
                        src={bg18}
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