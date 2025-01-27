'use client';

import React from 'react';
import { motion } from 'framer-motion';
import bg7 from '../../lib/bg7.png';
import TextPressure from './TextPressure';
import { Staatliches } from "next/font/google";


const TextBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen relative w-full translate-y-10">
            {/* Background Card */}
            <div
                className="bg-gray-700 rounded-3xl h-[75vh] w-[80%] opacity-35
                md:w-[85%] lg:w-[75%] absolute -z-10 translate-x-6 translate-y-6"
            ></div>

            {/* Content Container */}
            <div
                className="rounded-3xl p-20 text-center h-[75vh] w-[70%] 
                md:w-[85%] lg:w-[75%] flex items-center justify-center bg-opacity-75 relative bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg7.src})`,
                }}
            >
                {/* Centered TextPressure as Title */}
                <div className="flex items-center justify-center w-full">
                    <TextPressure
                        text="TECHNOUTSAV"
                        flex={true}
                        alpha={false}
                        stroke={true}
                        width={true}
                        weight={true}
                        italic={false}
                        textColor="#ffffff"
                        strokeColor="#fffff"
                        minFontSize={36}
                    />
                </div>
            </div>
        </div>
    );
};

export default TextBox;
