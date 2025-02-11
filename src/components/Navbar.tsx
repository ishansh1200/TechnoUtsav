"use client";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "../../lib/data";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaDiscord, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [_ , setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };



    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-blue-950 bg-opacity-80 backdrop-blur-md shadow-md z-[9999] transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {/* Animated Container - Controls Navbar Height */}
      <motion.div
        className="overflow-hidden"
        animate={{ height: menuOpen ? "auto" : "4rem" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center px-6 md:px-10 lg:px-12 py-4">
          <div className="text-gray-100 font-bold text-3xl">Innoवृत्ति</div>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-100 text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </motion.div>

          {/* Desktop Links */}
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

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="https://www.linkedin.com/company/inno%E0%A4%B5%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%BF/" target="_blank" rel="noopener noreferrer"
              className="text-gray-100 hover:text-white text-lg transform hover:scale-125 hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
              <FaLinkedin size={24} />
            </a>
            <a href="https://discord.gg/Pxfak7sF" target="_blank" rel="noopener noreferrer"
              className="text-gray-100 hover:text-white text-lg transform hover:scale-125 hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
              <FaDiscord size={24} />
            </a>
            <a href="https://www.instagram.com/innovriti.vips/" target="_blank" rel="noopener noreferrer"
              className="text-gray-100 hover:text-white text-lg transform hover:scale-125 hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Menu - Smooth Drop Down */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-blue-950 bg-opacity-90 py-4 flex flex-col items-center gap-4"
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
              <div className="flex gap-6 mt-3">
                <a href="https://www.linkedin.com/company/inno%E0%A4%B5%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%BF/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-100 hover:text-white text-lg transform hover:scale-110">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://discord.gg/Pxfak7sF" target="_blank" rel="noopener noreferrer"
                  className="text-gray-100 hover:text-white text-lg transform hover:scale-110">
                  <FaDiscord size={24} />
                </a>
                <a href="https://www.instagram.com/innovriti.vips/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-100 hover:text-white text-lg transform hover:scale-110">
                  <FaInstagram size={24} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
