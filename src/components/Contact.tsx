'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div 
            className="flex flex-col md:flex-row justify-between items-center text-white opacity-75 pt-10 px-10 w-full 
            mx-auto bg-black bg-opacity-20"
            id = "Contact"
        >
            {/* College Address Section - Left Side */}
            <div className="text-center md:text-left ml-[10rem] mb-16">
                <h2 className="text-3xl font-semibold mb-4">College Address</h2>
                <p className="text-lg">Vivekananda Institute of Professional Studies</p>
                <p className="text-lg">AU Block, Pitampura, New Delhi, 110034</p>
            </div>
            
            {/* Contact Information Section - Right Side */}
            <div className="text-center md:text-right mt-10 md:mt-0 mr-[10rem]">
                <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
                <p className="text-lg">Email: innovriti@vips.edu | technoutsav@vips.edu</p>
                <p className="text-lg">Phone: +91 98765 43210</p>
                
                {/* Social Media Icons */}
                <div className="flex justify-center md:justify-end items-center gap-6 mt-4 text-2xl mb-7">
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="hover:text-blue-500 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com/innovriti.vips/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-pink-500 transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/company/inno%E0%A4%B5%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%BF/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-700 transition duration-300" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact  