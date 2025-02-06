"use client";
import { motion, useAnimation } from "framer-motion";
import { links } from "../../lib/data";
import { Poppins } from "next/font/google";
import React from "react";

const playFairDisplay = Poppins({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  const controls = useAnimation(); // Controls for smooth scrolling

  // Add explicit type annotations for TypeScript
  const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      await controls.start({
        y: offsetTop * -1, // Scroll to the negative Y position
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Ensures smooth scrolling even without animation
      });
    }
  };

  return (
    <motion.header
      className="z-[9999] fixed top-0 left-0 w-full py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
      }}
    >
      <nav className="flex justify-center gap-8 translate-y-5">
        {links.map((link) => (
          <motion.div
            key={link.href}
            className="rounded-full bg-black bg-opacity-65 shadow-xl text-center transition-all duration-300 ease-in-out"
            style={{
              width: "9rem",
              height: "3.5rem",
              transformOrigin: "center",
            }}
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
              onClick={(e) => handleScroll(e, link.href)} // Add click handler
              className={`flex items-center justify-center h-full w-full text-gray-100 font-semibold text-[1.05rem] hover:text-white`}
            >
              <span className={`${playFairDisplay.className}`}>{link.name}</span>
            </a>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
