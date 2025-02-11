"use client";
import Navbar from "@/components/Navbar";
import TextBox from "@/components/TextBox";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsers";
import { usePathname } from "next/navigation"; 
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import bg30 from "./bg30.jpg";

export default function Home() { 

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg30.src})`, backgroundSize: "cover", backgroundPosition: "center center" }}
    >
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full px-4 z-50 shadow-md">
        <Navbar />
      </div>

      {/* Main Content with TextBox */}
      <div
        id="home"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-15 w-full overflow-hidden"
      >
        <TextBox />
      </div>

      {/* Events Section */}
      <div className="relative z-10 w-full px-4 sm:px-8 flex items-center text-center bg-black bg-opacity-15" id="eventdetails">
        <Events />
      </div>

      {/* Sponsors Section */}
      <div className="relative z-10 w-full px-4 sm:px-8 flex flex-col bg-black bg-opacity-15" id="sponsors">
        <Sponsors />
      </div>
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
