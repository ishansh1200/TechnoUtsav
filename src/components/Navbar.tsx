"use client";
import { motion, useAnimation } from "framer-motion";
import { links } from "../../lib/data";
import { Poppins } from "next/font/google";
import React, { useState, useEffect } from "react";

const playFairDisplay = Poppins({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = async (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      className={`z-[9999] fixed top-0 left-0 w-full ${
        scrolling ? "py-2" : "py-4 max-md:py-3"
      } transition-all duration-300 ${
        scrolling ? "bg-black bg-opacity-50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
      }}
    >
      <nav className={`flex justify-center gap-8 max-md:gap-4 ${
        scrolling ? "" : "translate-y-5 max-md:translate-y-3"
      } px-2`}>
        {links.map((link) => (
          <motion.div
            key={link.href}
            className="rounded-full bg-black bg-opacity-65 shadow-xl text-center transition-all duration-300 ease-in-out
              w-[9rem] h-[3.5rem] max-md:w-[7rem] max-md:h-[2.75rem]"
            style={{ transformOrigin: "center" }}
            whileHover={{
              scale: 1.1,
              background: "rgba(50, 50, 50, 0.5)",
              boxShadow: `
                0px 15px 40px rgba(0, 0, 0, 0.3),  
                0px 0px 15px rgba(255, 255, 255, 0.4)
              `,
            }}
            whileTap={{ scale: 0.85 }}
          >
            <a
              href={`#${link.href}`}
              onClick={(e) => handleScrollClick(e, link.href)}
              className={`flex items-center justify-center h-full w-full text-gray-100 font-semibold hover:text-white
                text-[1.05rem] max-md:text-sm`}
            >
              <span className={`${playFairDisplay.className}`}>
                {link.name}
              </span>
            </a>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
