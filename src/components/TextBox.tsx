'use client';

import React from 'react';
import Title from './Title';


const TextBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen relative w-full">
            {/* White "shadow" box */}
            <div className="bg-white rounded-3xl h-[85vh] w-[90%] 
                md:w-[85%] lg:w-[80%] absolute -z-10 translate-x-6 translate-y-6">
            </div>
            
            {/* Blue box */}
            <div className="bg-blue-950 rounded-3xl p-20 text-center h-[85vh] w-[90%] 
                md:w-[85%] lg:w-[80%] flex items-center justify-center">
                <Title text="TECHNOUTSAV" />
            </div>
        </div>
    );
};

export default TextBox;
