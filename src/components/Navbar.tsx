"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { links } from '../../lib/data';

const Navbar = () => {
  return (
    <header className="z-[9999]">
      <nav className="fixed top-[1.5rem] left-1/2 -translate-x-1/2 flex gap-8 mt-16 z-[9999]">
        {links.map((link) => (
          <motion.div
            key={link.href}
            className="rounded-full border-[2px] border-gray-300 bg-gradient-to-r from-blue-900 to-blue-800 
            shadow-lg shadow-black hover:shadow-lg text-center transition-all duration-300 ease-in-out"
            style={{
              width: "9rem",
              height: "3.5rem",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.6)",
              background: "linear-gradient(to right, #1e3a8a, #1d4ed8)", // Darker hover effect
            }}
          >
            <Link
              href={link.href}
              className="flex items-center justify-start pl-4 h-full w-full text-white font-semibold text-[0.95rem] 
            hover:text-gray-100"
            >
              <span>{link.name}</span>
              <motion.div
                className="ml-auto pr-4"
                whileHover={{
                  x: 5, 
                }}
                transition={{ duration: 0.3 }}
              >
                <LuArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
