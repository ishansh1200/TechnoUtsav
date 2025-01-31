'use client';

import React from 'react';
import TextPressure from './TextPressure';


const TextBox = () => {
    return (
        <div className="flex items-center justify-center min-h-screen relative w-full translate-y-2">

            <div className="rounded-3xl p-20 text-center h-[75vh] w-[70%] 
                md:w-[85%] lg:w-[75%] flex items-center justify-center bg-opacity-0 relative bg-cover bg-center">
                
                <div className="flex items-center justify-center w-full ">
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
