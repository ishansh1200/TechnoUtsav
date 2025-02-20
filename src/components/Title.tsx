'use client';

import React from "react";


interface TitleProps {
    text: string;
}
const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1 className={` text-white text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-tracking-tight drop-shadow-lg flex`}>
            {text}
        </h1>
    );
};

export default Title;