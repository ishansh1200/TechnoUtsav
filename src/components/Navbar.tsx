"use client";

import { motion, AnimatePresence } from "framer-motion";
import { links } from "../../lib/data";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaDiscord, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false); 

    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector("nav")?.clientHeight || 0;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }, 400);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md shadow-md z-[9999] transition-all duration-300 ${
        scrolling ? "shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      <motion.div
        className="overflow-hidden"
        animate={{ height: menuOpen ? "auto" : "4rem" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center px-6 md:px-10 lg:px-12 py-4 w-full max-w-7xl mx-auto">
          <div className="text-gray-100 font-bold text-3xl">
            Innoवृत्ति
          </div>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleScrollClick(e, link.href)}
                className="text-gray-100 font-semibold hover:text-white text-lg transition-all duration-200 transform hover:scale-110 hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-6 text-gray-100 text-xl">
            <a href="https://www.linkedin.com/company/inno%E0%A4%B5%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%BF/" className="hover:text-white transition-all duration-200"><FaLinkedin /></a>
            <a href="https://discord.gg/Pxfak7sF" className="hover:text-white transition-all duration-200"><FaDiscord /></a>
            <a href="https://www.instagram.com/innovriti.vips/" className="hover:text-white transition-all duration-200"><FaInstagram /></a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-100 text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-black bg-opacity-90 py-4 flex flex-col items-center gap-4 z-999"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleScrollClick(e, link.href)}
                  className="text-gray-100 font-semibold hover:text-white text-lg transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 text-gray-100 text-xl">
                <a href="https://www.linkedin.com/company/inno%E0%A4%B5%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%BF/" className="hover:text-white transition-all duration-200"><FaLinkedin /></a>
                <a href="https://discord.gg/Pxfak7sF" className="hover:text-white transition-all duration-200"><FaDiscord /></a>
                <a href="https://www.instagram.com/innovriti.vips/" className="hover:text-white transition-all duration-200"><FaInstagram /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;