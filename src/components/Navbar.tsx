"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "../../lib/data";

const Navbar = () => {
  return (
    <motion.header
      className="z-[9999] fixed top-0 left-0 w-full bg-gray-800 py-4 bg-opacity-0"
      initial={{ y: -100 }} // Start off-screen (above the viewport)
      animate={{ y: 0 }} // Animate to its natural position
      transition={{
        type: "spring", // Spring effect for the bounce
        stiffness: 120, // Controls the "bounciness"
        damping: 15, // Controls the spring settling
      }}
    >
      <nav className="flex justify-center gap-8 translate-y-5">
        {links.map((link) => (
          <motion.div
            key={link.href}
            className="rounded-full bg-gray-600 bg-opacity-50
            shadow-xl text-center transition-all duration-300 ease-in-out"
            style={{
              width: "9rem",
              height: "3.5rem",
              transformOrigin: "center",
            }}
            whileHover={{
              scale: 1.1,
              background: "rgba(50, 50, 50, 0.5)", // Slightly darker on hover
              boxShadow: `
                0px 15px 40px rgba(0, 0, 0, 0.3),  /* Darker shadow */
                0px 0px 15px rgba(255, 255, 255, 0.4) /* Light white shadow */
              `, // Add white shadow
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${link.href}`}
              className="flex items-center justify-center h-full w-full text-gray-100 font-semibold text-[0.95rem] 
            hover:text-white"
            >
              <span>{link.name}</span>
            </a>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
