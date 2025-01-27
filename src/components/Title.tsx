'use client';

import React from "react";
import { Staatliches } from "next/font/google";

interface TitleProps {
    text: string;
}

const staatliches = Staatliches({ subsets: ['latin'], weight: ['400'] });

const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1 className={`${staatliches.className} text-white text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font- tracking-tight drop-shadow-lg flex`}>
            {text}
        </h1>
    );
};

export default Title;