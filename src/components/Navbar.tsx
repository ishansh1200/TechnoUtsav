"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { links } from "../../lib/data";

const Navbar = () => {
  const [clicked, setClicked] = useState<string | null>(null);

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
              zIndex: clicked === link.href ? 10000 : "auto",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.6)",
              background: "linear-gradient(to right, #1e3a8a, #1d4ed8)", // Darker hover effect
            }}
            whileTap={{ scale: 0.95 }}
            animate={
              clicked === link.href
                ? {
                    scale: 50,
                    borderRadius: "0%",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                    width: "100vw",
                    height: "100vh",
                    background: "linear-gradient(to right, #1e3a8a, #1d4ed8)",
                  }
                : {}
            }
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => setClicked(link.href)}
          >
            <Link
              href={link.href}
              className="flex items-center justify-start pl-4 h-full w-full text-white font-semibold text-[0.95rem] 
            hover:text-gray-100"
              onClick={(e) => {
                e.preventDefault();
                setClicked(link.href);
                setTimeout(() => {
                  window.location.href = link.href;
                }, 800); // Delay redirection until animation completes
              }}
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
